# nestjs-graphql-prisma-fastify

# [GraphQL](https://graphql.org/)
# [NestJS](https://nestjs.com/)
# [Prisma](https://www.prisma.io/)
# [Fastify](https://www.fastify.io/)

```bash
$ nest g resource
? What name would you like to use for this resource (plural, e.g., "users")? user
? What transport layer do you use? GraphQL (schema first)
? Would you like to generate CRUD entry points? Yes
CREATE src/user/user.graphql (396 bytes)
CREATE src/user/user.module.ts (217 bytes)
CREATE src/user/user.resolver.spec.ts (515 bytes)
CREATE src/user/user.resolver.ts (948 bytes)
CREATE src/user/user.service.spec.ts (446 bytes)
CREATE src/user/user.service.ts (623 bytes)
CREATE src/user/dto/create-user.input.ts (32 bytes)
CREATE src/user/dto/update-user.input.ts (192 bytes)
CREATE src/user/entities/user.entity.ts (21 bytes)
UPDATE src/app.module.ts (363 bytes)
```

## Reference
- [nest.js + prisma + fastify + postgresqlでREST APIのCRUDを作成する](https://zenn.dev/devgeeeen/articles/125a076f81b0df)
- [NestJSでPrismaのチュートリアルをやってみる（REST編）](https://zenn.dev/tossy_yukky/articles/0075f9f0054b39d4ef59)
- [prisma と express でつくる REST API](https://zenn.dev/yamo/articles/prisma-express-rest-api)