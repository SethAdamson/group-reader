CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    first_name VARCHAR(20),
    last_name VARCHAR(20),
    email VARCHAR(40),
    user_image TEXT,
    location TEXT,
    bio TEXT
);

CREATE TABLE group_users (
    user_id INT REFERENCES users(user_id),
    group_id INT REFERENCES groups(group_id),
    creator BOOLEAN,
    admin BOOLEAN
);

CREATE TABLE groups (
    group_id SERIAL PRIMARY KEY,
    group_name VARCHAR(40),
    group_desc TEXT,
    private BOOLEAN,
    chat BOOLEAN,
    notes BOOLEAN,
    messages BOOLEAN,
    current_doc INT REFERENCES documents(doc_id)
);

CREATE TABLE group_categories (
    group_id INT REFERENCES groups(group_id),
    category_id INT REFERENCES categories(category_id)
);

CREATE TABLE categories (
    category_id SERIAL PRIMARY KEY,
    category_name VARCHAR(30),
    category_desc VARCHAR(120)
);

CREATE TABLE messages (
    message_id SERIAL PRIMARY KEY,
    group_id INT REFERENCES groups(group_id),
    author_id INT REFERENCES users(user_id),
    message_content TEXT,
    title VARCHAR(30),
    time TIMESTAMP,
    read_by TEXT
);

CREATE TABLE notes (
    note_id SERIAL PRIMARY KEY,
    group_id INT REFERENCES groups(group_id),
    author_id INT REFERENCES users(user_id),
    note_content TEXT,
    time TIMESTAMP,
    location_in_text TEXT
);

CREATE TABLE documents (
    doc_id SERIAL PRIMARY KEY,
    doc_name VARCHAR(80),
    author_name VARCHAR(60),
    citation TEXT,
    doc_text TEXT,
    doc_desc TEXT
);