/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export enum CRUD {
    CREATE = 'CREATE',
    READ = 'READ',
    UPDATE = 'UPDATE',
    DELETE = 'DELETE',
}

export class QueryUsersInput {
    ids?: Nullable<Nullable<string>[]>;
}

export class MutationUsersInput {
    id?: Nullable<string>;
    firstName?: Nullable<string>;
    lastName?: Nullable<string>;
    birthday?: Nullable<Date>;
}

export interface Node {
    id: string;
}

export class User implements Node {
    id: string;
    firstName?: Nullable<string>;
    lastName?: Nullable<string>;
    birthday?: Nullable<Date>;
}

export class UserOutput {
    crud: CRUD;
    users?: Nullable<Nullable<User>[]>;
}

export abstract class IQuery {
    abstract queryUsers(input: QueryUsersInput): Nullable<UserOutput> | Promise<Nullable<UserOutput>>;
}

export abstract class IMutation {
    abstract mutationUsers(
        crud: CRUD,
        inputs: MutationUsersInput[]
    ): Nullable<UserOutput> | Promise<Nullable<UserOutput>>;
}

type Nullable<T> = T | null;
