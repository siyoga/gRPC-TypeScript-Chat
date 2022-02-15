// package: 
// file: chat.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as chat_pb from "./chat_pb";

interface IChatService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    chatting: IChatService_IChatting;
}

interface IChatService_IChatting extends grpc.MethodDefinition<chat_pb.MessageReq, chat_pb.MessageRes> {
    path: "/Chat/Chatting";
    requestStream: true;
    responseStream: true;
    requestSerialize: grpc.serialize<chat_pb.MessageReq>;
    requestDeserialize: grpc.deserialize<chat_pb.MessageReq>;
    responseSerialize: grpc.serialize<chat_pb.MessageRes>;
    responseDeserialize: grpc.deserialize<chat_pb.MessageRes>;
}

export const ChatService: IChatService;

export interface IChatServer {
    chatting: grpc.handleBidiStreamingCall<chat_pb.MessageReq, chat_pb.MessageRes>;
}

export interface IChatClient {
    chatting(): grpc.ClientDuplexStream<chat_pb.MessageReq, chat_pb.MessageRes>;
    chatting(options: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<chat_pb.MessageReq, chat_pb.MessageRes>;
    chatting(metadata: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<chat_pb.MessageReq, chat_pb.MessageRes>;
}

export class ChatClient extends grpc.Client implements IChatClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public chatting(options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<chat_pb.MessageReq, chat_pb.MessageRes>;
    public chatting(metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<chat_pb.MessageReq, chat_pb.MessageRes>;
}
