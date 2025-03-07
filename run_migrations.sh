#!/bin/sh
until pg_isready -h db -p 5432 -U ${DATABASE_USER} -d ${DATABASE_NAME}
do 
  echo "Waiting for Postgres to start"
  sleep 2
done

echo "Postgresql Started. Running migrations..."
pnpm db:generate
pnpm db:push
echo "Ran migrations..."
