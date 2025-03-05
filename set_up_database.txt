docker exec -it production_postgres_db psql -U my_user -d my_database => to enter Postgres contanier db

CREATE TABLE IF NOT EXISTS "todos" (
  "id" serial PRIMARY KEY NOT NULL,
  "description" varchar(255) NOT NULL,
  "completed" boolean DEFAULT false,
  "created_at" timestamp DEFAULT now()
);