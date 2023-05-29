// Original file: src/proto/insert.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { Customer as _insertPackage_Customer, Customer__Output as _insertPackage_Customer__Output } from '../insertPackage/Customer';

export interface InsertClient extends grpc.Client {
  Insert(argument: _insertPackage_Customer, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_insertPackage_Customer__Output>): grpc.ClientUnaryCall;
  Insert(argument: _insertPackage_Customer, metadata: grpc.Metadata, callback: grpc.requestCallback<_insertPackage_Customer__Output>): grpc.ClientUnaryCall;
  Insert(argument: _insertPackage_Customer, options: grpc.CallOptions, callback: grpc.requestCallback<_insertPackage_Customer__Output>): grpc.ClientUnaryCall;
  Insert(argument: _insertPackage_Customer, callback: grpc.requestCallback<_insertPackage_Customer__Output>): grpc.ClientUnaryCall;
  insert(argument: _insertPackage_Customer, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_insertPackage_Customer__Output>): grpc.ClientUnaryCall;
  insert(argument: _insertPackage_Customer, metadata: grpc.Metadata, callback: grpc.requestCallback<_insertPackage_Customer__Output>): grpc.ClientUnaryCall;
  insert(argument: _insertPackage_Customer, options: grpc.CallOptions, callback: grpc.requestCallback<_insertPackage_Customer__Output>): grpc.ClientUnaryCall;
  insert(argument: _insertPackage_Customer, callback: grpc.requestCallback<_insertPackage_Customer__Output>): grpc.ClientUnaryCall;
  
}

export interface InsertHandlers extends grpc.UntypedServiceImplementation {
  Insert: grpc.handleUnaryCall<_insertPackage_Customer__Output, _insertPackage_Customer>;
  
}

export interface InsertDefinition extends grpc.ServiceDefinition {
  Insert: MethodDefinition<_insertPackage_Customer, _insertPackage_Customer, _insertPackage_Customer__Output, _insertPackage_Customer__Output>
}
