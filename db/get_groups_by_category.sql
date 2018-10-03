SELECT * FROM group_categories
JOIN groups ON group_categories.group_id = groups.group_id
JOIN categories ON group_categories.category_id = categories.category_id;