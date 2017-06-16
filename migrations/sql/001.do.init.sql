CREATE TABLE users (
  id bigserial primary key,
  username text NOT NULL UNIQUE,
  email text NOT NULL UNIQUE,
  password_salt text NOT NULL,
  password_hash text NOT NULL,
  created_at timestamp with time zone NOT NULL default now()
);

CREATE TABLE "session" (
  sid varchar NOT NULL COLLATE "default",
	sess json NOT NULL,
	expire timestamp(6) NOT NULL
)
WITH (OIDS=FALSE);
ALTER TABLE "session" ADD CONSTRAINT "session_pkey" PRIMARY KEY ("sid") NOT DEFERRABLE INITIALLY IMMEDIATE;

CREATE TABLE people (
  id bigserial primary key,
  user_id bigint REFERENCES users (id),
  type text,
  name text,
  company text,
  address_1 text,
  address_2 text,
  city text,
  state text,
  postal integer,
  phone text,
  email text
);

CREATE TABLE works (
  id bigserial primary key,
  user_id bigserial REFERENCES users (id),
  title text,
  medium text,
  width numeric,
  height numeric,
  depth numeric,
  dimension_unit text,
  dimension_text text,
  editioned boolean DEFAULT false,
  artist_id bigint REFERENCES people (id),
  created_at timestamp with time zone
);

CREATE TABLE editions (
  id bigserial primary key,
  edition_number integer NOT NULL,
  edition_type text NOT NULL,
  price numeric,
  currency text DEFAULT 'USD',
  status text,
  work_id bigserial REFERENCES works (id),
  collection_id bigint REFERENCES people (id),
  location_id bigint REFERENCES people (id)
);

CREATE FUNCTION calculate_edition_number()
RETURNS trigger AS '
BEGIN
  NEW.edition_number := 1 + (SELECT COUNT(*) FROM editions WHERE work_id = NEW.work_id AND edition_type = NEW.edition_type);
  RETURN NEW;
END' LANGUAGE 'plpgsql';

CREATE TRIGGER edition_number BEFORE INSERT ON editions FOR EACH ROW EXECUTE PROCEDURE calculate_edition_number();


CREATE TABLE images (
  id bigserial primary key,
  url text,
  work_id bigint REFERENCES works (id)
);