// src/generate-typings.ts
import { GraphQLDefinitionsFactory } from '@nestjs/graphql';
import { join } from 'path';

const definitionsFactory = new GraphQLDefinitionsFactory();
definitionsFactory.generate({
    typePaths: ['./src/user/user.graphql'],
    path: join(process.cwd(), 'src/user/user.graphql.ts'),
    outputAs: 'class',
    // watch: true,  // watchモードを利用するのであればコメントアウト解除
});
