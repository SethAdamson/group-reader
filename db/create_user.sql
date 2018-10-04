insert into users (first_name, last_name, user_image, username, email, auth_id)
values ($1, $2, $3, $4, $5, $6)
returning *;