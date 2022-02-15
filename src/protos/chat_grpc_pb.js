// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var chat_pb = require('./chat_pb.js');

function serialize_MessageReq(arg) {
  if (!(arg instanceof chat_pb.MessageReq)) {
    throw new Error('Expected argument of type MessageReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_MessageReq(buffer_arg) {
  return chat_pb.MessageReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_MessageRes(arg) {
  if (!(arg instanceof chat_pb.MessageRes)) {
    throw new Error('Expected argument of type MessageRes');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_MessageRes(buffer_arg) {
  return chat_pb.MessageRes.deserializeBinary(new Uint8Array(buffer_arg));
}


var ChatService = exports.ChatService = {
  chatting: {
    path: '/Chat/Chatting',
    requestStream: true,
    responseStream: true,
    requestType: chat_pb.MessageReq,
    responseType: chat_pb.MessageRes,
    requestSerialize: serialize_MessageReq,
    requestDeserialize: deserialize_MessageReq,
    responseSerialize: serialize_MessageRes,
    responseDeserialize: deserialize_MessageRes,
  },
};

exports.ChatClient = grpc.makeGenericClientConstructor(ChatService);
