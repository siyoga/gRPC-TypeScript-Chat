// package: 
// file: chat.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class MessageReq extends jspb.Message { 
    getText(): string;
    setText(value: string): MessageReq;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MessageReq.AsObject;
    static toObject(includeInstance: boolean, msg: MessageReq): MessageReq.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MessageReq, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MessageReq;
    static deserializeBinaryFromReader(message: MessageReq, reader: jspb.BinaryReader): MessageReq;
}

export namespace MessageReq {
    export type AsObject = {
        text: string,
    }
}

export class MessageRes extends jspb.Message { 
    getAuthor(): string;
    setAuthor(value: string): MessageRes;
    getText(): string;
    setText(value: string): MessageRes;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MessageRes.AsObject;
    static toObject(includeInstance: boolean, msg: MessageRes): MessageRes.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MessageRes, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MessageRes;
    static deserializeBinaryFromReader(message: MessageRes, reader: jspb.BinaryReader): MessageRes;
}

export namespace MessageRes {
    export type AsObject = {
        author: string,
        text: string,
    }
}
