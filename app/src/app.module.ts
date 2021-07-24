import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { UserModule } from './user/user.module';

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            ignoreEnvFile: true,
        }),
        GraphQLModule.forRoot({
            debug: false,
            playground: true,
            typePaths: ['./**/*.graphql'],
        }),
        UserModule
    ],
})
export class AppModule {}
