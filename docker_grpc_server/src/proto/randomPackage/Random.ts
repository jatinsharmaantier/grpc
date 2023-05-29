// Original file: src/proto/random.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { CustomerList as _randomPackage_CustomerList, CustomerList__Output as _randomPackage_CustomerList__Output } from '../randomPackage/CustomerList';
import type { Empty as _randomPackage_Empty, Empty__Output as _randomPackage_Empty__Output } from '../randomPackage/Empty';

export interface RandomClient extends grpc.Client {
  GetAll(argument: _randomPackage_Empty, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_randomPackage_CustomerList__Output>): grpc.ClientUnaryCall;
  GetAll(argument: _randomPackage_Empty, metadata: grpc.Metadata, callback: grpc.requestCallback<_randomPackage_CustomerList__Output>): grpc.ClientUnaryCall;
  GetAll(argument: _randomPackage_Empty, options: grpc.CallOptions, callback: grpc.requestCallback<_randomPackage_CustomerList__Output>): grpc.ClientUnaryCall;
  GetAll(argument: _randomPackage_Empty, callback: grpc.requestCallback<_randomPackage_CustomerList__Output>): grpc.ClientUnaryCall;
  getAll(argument: _randomPackage_Empty, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_randomPackage_CustomerList__Output>): grpc.ClientUnaryCall;
  getAll(argument: _randomPackage_Empty, metadata: grpc.Metadata, callback: grpc.requestCallback<_randomPackage_CustomerList__Output>): grpc.ClientUnaryCall;
  getAll(argument: _randomPackage_Empty, options: grpc.CallOptions, callback: grpc.requestCallback<_randomPackage_CustomerList__Output>): grpc.ClientUnaryCall;
  getAll(argument: _randomPackage_Empty, callback: grpc.requestCallback<_randomPackage_CustomerList__Output>): grpc.ClientUnaryCall;
  
}

export interface RandomHandlers extends grpc.UntypedServiceImplementation {
  GetAll: grpc.handleUnaryCall<_randomPackage_Empty__Output, _randomPackage_CustomerList>;
  
}

export interface RandomDefinition extends grpc.ServiceDefinition {
  GetAll: MethodDefinition<_randomPackage_Empty, _randomPackage_CustomerList, _randomPackage_Empty__Output, _randomPackage_CustomerList__Output>
}
