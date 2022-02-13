import grpc, { ServerCredentials, ServerWriteableStream } from 'grpc';
import { Message } from './protos/chat_pb';
import notify from './services/notify';
import { MessageServiceService } from './protos/chat_grpc_pb';

const server = new grpc.Server();

let users: ServerWriteableStream<Message>[] = [];

async function join(call: ServerWriteableStream<Message>): Promise<void> {
  users.push(call);
  notify(
    call.request.setAuthor('Server ').setText('new user was connected.'),
    users as any
  );
}

async function send(call: ServerWriteableStream<Message>) {
  notify(call.request, users as any);
}

server.addService(MessageServiceService, { join, send });
server.bindAsync(
  `localhost:7000`,
  ServerCredentials.createInsecure(),
  (err) => {
    if (err) {
      throw err;
    }

    console.log(`Listening on localhost:7000`);
    server.start();
  }
);
