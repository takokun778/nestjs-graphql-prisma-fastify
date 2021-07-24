import * as uuid from 'uuid';

import { Injectable } from '@nestjs/common';
import { Prisma, User } from '@prisma/client';

import { MutationUsersInput } from './user.graphql';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class UserService {
    constructor(private prisma: PrismaService) {}
    async create(inputs: MutationUsersInput[]) {
        const data = inputs.map((input) => {
            return {
                id: uuid.v4(),
                firstName: input.firstName,
                lastName: input.lastName,
                birthday: new Date(input.birthday),
            } as Prisma.UserCreateInput;
        });
        await this.prisma.user.createMany({ data });
        const ids = data.map((s) => {
            return s.id;
        });
        const result = await this.read(ids);
        return result;
    }

    async read(ids?: string[]) {
        if (ids) {
            const data = {
                where: {
                    id: { in: ids },
                },
            };
            return await this.prisma.user.findMany(data);
        } else {
            return await this.prisma.user.findMany();
        }
    }

    async update(inputs: MutationUsersInput[]) {
        const args = inputs.map((input) => {
            const data = {};
            if (input.firstName) {
                Object.assign(data, { firstName: input.firstName });
            }
            if (input.lastName) {
                Object.assign(data, { lastName: input.lastName });
            }
            if (input.birthday) {
                Object.assign(data, { birthday: input.birthday });
            }
            if (!Object.keys(data).length) {
                return;
            }
            return {
                where: {
                    id: input.id,
                },
                data: data,
            };
        });
        const results = [];
        args.map((arg) => {
            results.push(this.prisma.user.update(arg));
        });
        await Promise.all(results);
        const result = await this.read(inputs.map((input) => input.id));
        return result;
    }

    async delete(ids: string[]) {
        const result = await this.read(ids);
        const data = {
            where: {
                id: { in: ids },
            },
        };
        await this.prisma.user.deleteMany(data);
        return result;
    }
}
