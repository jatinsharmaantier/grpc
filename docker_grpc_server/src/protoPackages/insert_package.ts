import path from 'path'
import * as grpc from '@grpc/grpc-js'
import * as protoLoader from '@grpc/proto-loader'

import { ProtoGrpcType as ProtoGrpcType_Insert } from '../proto/insert'
const PROTO_FILE_INSERT = '../proto/insert.proto'

const packageDef_Insert = protoLoader.loadSync(path.resolve(__dirname, PROTO_FILE_INSERT))
const grpcObj_insert = (grpc.loadPackageDefinition(packageDef_Insert) as unknown) as ProtoGrpcType_Insert
const insertPackage = grpcObj_insert.insertPackage

export default insertPackage