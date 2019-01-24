CREATE TABLE blogful_articles (
    id SERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    content TEXT,
    date_published TIMESTAMP DEFAULT now() NOT NULL
);
