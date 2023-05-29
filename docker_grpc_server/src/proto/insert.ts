import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { InsertClient as _insertPackage_InsertClient, InsertDefinition as _insertPackage_InsertDefinition } from './insertPackage/Insert';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  insertPackage: {
    Customer: MessageTypeDefinition
    Insert: SubtypeConstructor<typeof grpc.Client, _insertPackage_InsertClient> & { service: _insertPackage_InsertDefinition }
  }
}

