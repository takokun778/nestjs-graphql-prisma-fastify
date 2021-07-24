docker-build:
	docker-compose build
docker-up:
	docker-compose up -d
psql:
	docker-compose exec db psql -U nestjs
dev:
	docker-compose exec dev /bin/sh
start:
	docker-compose exec dev npm start
format:
	docker-compose exec dev npm run format
prisma-migrate:
	docker-compose exec dev npx prisma migrate dev --name init
prisma-generate:
	docker-compose exec dev npx prisma generate
prisma-studio:
	docker-compose exec dev npx prisma studio