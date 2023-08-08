create-project: # Create project
	mkdir client
	@make up
	docker compose exec node sh -c "npx create-next-app@latest ."
set-up: # Set up app after git clone
	cp ./client/.env.example ./client/.env.local
	@make up
	@make install
	@make run-dev


# Commands for container
up:
	docker compose up -d
down:
	docker compose down
start:
	@make up
	@make run-dev


# Commands for development
run-dev:
	docker compose exec node npm run dev
run-lint:
	docker compose exec node npm run lint
run-format:
	docker compose exec node npm run format
run-build:
	docker compose exec node npm run build
run-start:
	docker compose exec node npm run start
install:
	docker compose exec node npm install ${name}