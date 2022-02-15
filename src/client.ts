import { ChatClient } from './protos/chat_grpc_pb';
import readline from 'readline';
import { MessageReq, MessageRes } from './protos/chat_pb';
import * as grpc from 'grpc';
import { PORT } from './vars';

const client = new ChatClient(
  `0.0.0.0:${PORT}`,
  grpc.credentials.createInsecure()
);

function onClient() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  const author = process.argv[2];

  if (!author) {
    console.error("Without username you can't join to chat.");
    process.exit();
  }

  const meta = new grpc.Metadata();
  meta.set('author', author);
  const call = client.chatting(meta);

  call.write(new MessageReq().setText('Register'));

  call.on('data', (chunk: MessageRes) => {
    console.log(`${chunk.getAuthor()} ==> ${chunk.getText()}`);
  });

  rl.on('line', (line) => {
    if (line === 'quit') {
      call.end();
    } else {
      call.write(new MessageReq().setText(line));
    }
  });
}

onClient();
