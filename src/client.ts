import { credentials } from 'grpc';
import { MessageServiceClient } from './protos/chat_grpc_pb';

export default new MessageServiceClient(
  `localhost:7000`,
  credentials.createInsecure()
);
