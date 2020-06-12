SERVICES_DIR=./services
DATABASE=${SERVICES_DIR}/database

build:
	echo ">>> Building DATABASE in ${DATABASE} dir."
	make -C ${DATABASE} build

init:
	mkdir -p ./data/database

db-backup:
	mkdir -p backups && docker exec -t niknails-database pg_dumpall -c -U niknails > ./backups/dump_`date +%d-%m-%Y"_"%H_%M_%S`.sql

dev:
	COMPOSE_HTTP_TIMEOUT=200 docker-compose -f docker-compose.yml -f docker-compose.dev.yml up

prod: network
	COMPOSE_HTTP_TIMEOUT=200 docker-compose up -d

down:
	docker-compose down --remove-orphans

network:
	docker network create niknails-$(USER) 2> /dev/null || echo "network niknails-$(USER) already exists"