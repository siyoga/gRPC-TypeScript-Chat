import { Message } from '../protos/chat_pb';
import { ServerWritableStream } from 'grpc';

export default function notify(
  message: Message,
  users: ServerWritableStream<Message>[]
) {
  users.forEach((user) => {
    user.write(message);
  });
}
