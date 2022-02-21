CREATE TABLE IF NOT EXISTS note (
    note_id bigserial PRIMARY KEY,

    author VARCHAR (128) NOT NULL,
    content VARCHAR (128) NOT NULL,
    created_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
);

CREATE TABLE IF NOT EXISTS email (
    email_id bigserial PRIMARY KEY,

    from VARCHAR (128) NOT NULL,
    to VARCHAR (128) NOT NULL,
    title VARCHAR (128) NOT NULL,
    note_id integer references note(note_id) NULL
);