import * as grpc from 'grpc';
import { ChatService } from './protos/chat_grpc_pb';
import { MessageReq, MessageRes } from './protos/chat_pb';
import { PORT } from './vars';

const byUsername = new Map<
  string,
  grpc.ServerDuplexStream<MessageRes, MessageReq>
>();

function startServer() {
  const server = initServer();

  server.bindAsync(
    `0.0.0.0:${PORT}`,
    grpc.ServerCredentials.createInsecure(),
    (err, port) => {
      if (err) {
        console.error(err);
        throw err;
      }

      console.log(`Server started on ${port} port`);
      server.start();
    }
  );
}

function initServer() {
  const server = new grpc.Server();
  server.addService(ChatService, {
    chatting: (call: grpc.ServerDuplexStream<MessageReq, MessageRes>) => {
      call.on('data', (req: MessageReq) => {
        const author = call.metadata.get('author')[0] as string;
        const text = req.getText();
        console.log(author, req.getText());

        for (let [user, users] of byUsername) {
          if (author !== user) {
            users.write(new MessageRes().setAuthor(author).setText(text));
          }
        }
        if (byUsername.get(author) === undefined) {
          byUsername.set(author, call);
        }
      });

      call.on('end', () => {
        const author = call.metadata.get('username')[0] as string;
        byUsername.delete(author);

        for (let [user, users] of byUsername) {
          users.write(
            new MessageRes().setAuthor(author).setText('has left the chat...')
          );
        }

        console.log(`${author} is ending their chat session`);

        call.write(
          new MessageRes()
            .setAuthor('Server')
            .setText(`see you later ${author}`)
        );

        call.end();
      });
    },
  });

  return server;
}

startServer();
