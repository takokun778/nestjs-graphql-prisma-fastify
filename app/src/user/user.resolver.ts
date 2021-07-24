import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UserService } from './user.service';
import { CRUD, MutationUsersInput, QueryUsersInput, UserOutput } from './user.graphql';
import { User } from '@prisma/client';

@Resolver('User')
export class UserResolver {
    constructor(private userService: UserService) {}

    @Query()
    async queryUsers(
        @Args('input')
        input: QueryUsersInput
    ) {
        const entities = await this.userService.read(input.ids);
        return this.toOutput(CRUD.READ, entities);
    }

    @Mutation()
    async mutationUsers(
        @Args('crud')
        crud: CRUD,
        @Args('inputs')
        inputs: MutationUsersInput[]
    ) {
        switch (crud) {
            case CRUD.CREATE:
                const created = await this.userService.create(inputs);
                return this.toOutput(crud, created);
            case CRUD.UPDATE:
                const updated = await this.userService.update(inputs);
                return this.toOutput(crud, updated);
            case CRUD.DELETE:
                const deleted = await this.userService.delete(inputs.map((input) => input.id));
                return this.toOutput(crud, deleted);
            default:
                throw new Error('Unsupported Mutation!');
        }
    }

    private toOutput(crud: CRUD, entities: User[]) {
        const users = entities.map((entity) => {
            return {
                id: entity.id,
                firstName: entity.firstName,
                lastName: entity.lastName,
                birthday: entity.birthday,
            } as User;
        });
        return {
            crud,
            users,
        } as UserOutput;
    }
}
