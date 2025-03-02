CREATE TABLE "todos" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "todos_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"description" varchar(255) NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"completed" boolean DEFAULT false NOT NULL
);
