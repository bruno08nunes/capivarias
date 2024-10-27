create database capivarias;
use capivarias;
drop database capivarias;

create table users(
    id int primary key auto_increment,
    username varchar(50) not null,
    capy_code varchar(30) not null unique,
    email varchar(255) not null unique,
    password varchar(255) not null,
    birthday date not null,
    bio varchar(220),
    profile_picture varchar(255),
    role enum("A", "U") default "U",
    is_private boolean default false,
    is_active boolean default true,
    created_at timestamp default current_timestamp,
    updated_at timestamp default current_timestamp on update current_timestamp,
    index (email, capy_code)
);

insert into users (username, capy_code, email, password, birthday, role)
value ("Bruno", "bruno08nunes", "bruno@email.com", "admin123", "2008-03-01", "A");

create table posts(
    id int primary key auto_increment,
    content varchar(220),
    user_id int not null,
    is_private boolean,
    created_at timestamp default current_timestamp,
    updated_at timestamp default current_timestamp on update current_timestamp,
    foreign key (user_id) references users(id) on delete cascade,
    index (user_id)
);

create table posts_medias(
    id int primary key auto_increment,
    post_id int not null,
    url varchar(255) not null,
    foreign key (post_id) references posts(id) on delete cascade,
    index (post_id)
);

create table amazings(
    user_id int,
    post_id int,
    foreign key (user_id) references users(id) on delete cascade,
    foreign key (post_id) references posts(id) on delete cascade,
    primary key (user_id, post_id),
    created_at timestamp default current_timestamp
);

create table comments(
    id int primary key auto_increment,
    user_id int,
    post_id int,
    content varchar(220) not null,
    foreign key (user_id) references users(id) on delete cascade,
    foreign key (post_id) references posts(id) on delete cascade,
    created_at timestamp default current_timestamp,
    updated_at timestamp default current_timestamp on update current_timestamp,
    index(post_id)
);

create table amazings_comments(
    user_id int,
    comment_id int,
    foreign key (user_id) references users(id) on delete cascade,
    foreign key (comment_id) references comments(id) on delete cascade,
    primary key (user_id, comment_id),
    created_at timestamp default current_timestamp
);

create table follows(
    follower int,
    following int,
    created_at timestamp default current_timestamp,
    foreign key (follower) references users(id) on delete cascade,
    foreign key (following) references users(id) on delete cascade,
    primary key (follower, following)
);