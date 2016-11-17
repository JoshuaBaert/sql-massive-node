create table products (
id serial primary key,
name varchar(40) not null,
description text,
price float not null,
imageUrl text
);
