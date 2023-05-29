import path from 'path'
import * as grpc from '@grpc/grpc-js'
import * as protoLoader from '@grpc/proto-loader'

import { ProtoGrpcType } from '../proto/random'
const PROTO_FILE = '../proto/random.proto'

const packageDef = protoLoader.loadSync(path.resolve(__dirname, PROTO_FILE))
const grpcObj = (grpc.loadPackageDefinition(packageDef) as unknown) as ProtoGrpcType
const randomPackage = grpcObj.randomPackage

export default randomPackage