CREATE TABLE users (
  id bigserial primary key,
  username text NOT NULL UNIQUE,
  email text NOT NULL UNIQUE,
  passwordSalt text NOT NULL,
  passwordHash text NOT NULL,
  createdAt timestamp with time zone NOT NULL default now()
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
  userId bigint REFERENCES users (id),
  type text,
  name text,
  company text,
  address1 text,
  address2 text,
  city text,
  state text,
  postal integer,
  phone text,
  email text
);

CREATE TABLE works (
  id bigserial primary key,
  userId bigserial REFERENCES users (id) NOT NULL,
  title text,
  medium text,
  width numeric,
  height numeric,
  depth numeric,
  dimensionUnit text,
  dimensionText text,
  editioned boolean DEFAULT false,
  artistId bigint REFERENCES people (id),
  createdAt timestamp with time zone
);

CREATE TABLE editions (
  id bigserial primary key,
  editionNumber integer NOT NULL,
  editionType text NOT NULL,
  price numeric,
  currency text DEFAULT 'USD',
  status text,
  workId bigserial REFERENCES works (id),
  collectionId bigint REFERENCES people (id),
  locationId bigint REFERENCES people (id)
);

CREATE FUNCTION calculateEditionNumber()
RETURNS trigger AS '
BEGIN
  NEW.editionNumber := 1 + (SELECT COUNT(*) FROM editions WHERE workId = NEW.workId AND editionType = NEW.editionType);
  RETURN NEW;
END' LANGUAGE 'plpgsql';

CREATE TRIGGER editionNumber BEFORE INSERT ON editions FOR EACH ROW EXECUTE PROCEDURE calculateEditionNumber();


CREATE TABLE images (
  id bigserial primary key,
  url text,
  workId bigint REFERENCES works (id)
);
