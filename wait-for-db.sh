#!/bin/sh

MAX_TRIES=30
COUNT=0

# Wait until PostgreSQL is ready
echo "Waiting for PostgreSQL to be ready..."
until pg_isready -h db -p 5432 -U my_user -d my_database
do
  COUNT=$((COUNT+1))
  echo "Attempt $COUNT/$MAX_TRIES: Waiting for PostgreSQL to be ready..."
  if [ $COUNT -ge $MAX_TRIES ]; then
    echo "PostgreSQL is not ready after $MAX_TRIES attempts, exiting..."
    exit 1
  fi
  sleep 10
done

echo "PostgreSQL is ready."

# Execute migrations
pnpm db:push