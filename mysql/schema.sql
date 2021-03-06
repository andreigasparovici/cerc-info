CREATE TABLE `users` (
	`user_id` INT NOT NULL AUTO_INCREMENT,
	`privilege` INT NOT NULL,
	`email` varchar(50) NOT NULL,
	`password` varchar(200) NOT NULL,
	`name` varchar(20) NOT NULL,
	`active_group` INT NULL,
	PRIMARY KEY (`user_id`)
);

CREATE TABLE `lessons` (
	`lesson_id` INT NOT NULL AUTO_INCREMENT,
	`title` varchar(50) NOT NULL,
	`author_id` INT NOT NULL,
	`content` varchar(500) NOT NULL,
	`tags` varchar(50) NOT NULL,
	PRIMARY KEY (`lesson_id`)
);

CREATE TABLE `groups` (
	`group_id` INT NOT NULL AUTO_INCREMENT,
	`start_date` DATE NOT NULL,
	`end_date` DATE NOT NULL,
	`deleted` BINARY NOT NULL DEFAULT '0',
	`name` varchar(50) NOT NULL,
	`description` varchar(500) NOT NULL,
	PRIMARY KEY (`group_id`)
);

INSERT INTO groups (name, description, start_date, end_date) VALUES
  ("Clasa IX", "Grup de pregatire clasa a IX-a", "2018-01-01", "2019-01-01"),
  ("Clasa X", "Grup de pregatire clasa a X-a", "2018-01-01", "2019-01-01"),
  ("Clasele XI-XII", "Grup de pregatire clasele a XI-a si a XII-a", "2018-01-01", "2019-01-01");

CREATE TABLE `user_group` (
	`user_group_id` INT NOT NULL AUTO_INCREMENT,
	`user_id` INT NOT NULL,
	`group_id` INT NOT NULL,
	PRIMARY KEY (`user_group_id`)
);

INSERT INTO users (email, password, privilege, name, active_group) VALUES
  ("admin@cercinfo", "$2a$10$vge1apdqp6d9DxbllKm0VOnpmZJpDKgl4HGB/d7dItZoNCGY7DVsK", 2, "Administrator", NULL),
  ("teacher@cercinfo", "$2a$10$vge1apdqp6d9DxbllKm0VOnpmZJpDKgl4HGB/d7dItZoNCGY7DVsK", 1, "Teacher", 1),
  ("student@cercinfo", "$2a$10$vge1apdqp6d9DxbllKm0VOnpmZJpDKgl4HGB/d7dItZoNCGY7DVsK", 0, "Dee Heck", 1),
  ("student9@cercinfo", "$2a$10$vge1apdqp6d9DxbllKm0VOnpmZJpDKgl4HGB/d7dItZoNCGY7DVsK", 0, "Tiffani Casady", 1),
  ("student10@cercinfo", "$2a$10$vge1apdqp6d9DxbllKm0VOnpmZJpDKgl4HGB/d7dItZoNCGY7DVsK", 0, "Latoya Holladay", 1),
  ("student11@cercinfo", "$2a$10$vge1apdqp6d9DxbllKm0VOnpmZJpDKgl4HGB/d7dItZoNCGY7DVsK", 0, "Wade Moir", 1),
  ("student12@cercinfo", "$2a$10$vge1apdqp6d9DxbllKm0VOnpmZJpDKgl4HGB/d7dItZoNCGY7DVsK", 0, "Sheldon Randazzo", 1);

INSERT INTO user_group (user_id, group_id) VALUES
	(3, 1),
	(4, 1),
	(5, 3),
	(6, 1);

CREATE TABLE `attendance` (
	`attendance_id` INT NOT NULL AUTO_INCREMENT,
	`group_id` INT NOT NULL,
	`date` DATE NOT NULL,
	PRIMARY KEY (`attendance_id`)
);

CREATE TABLE `attendance_users` (
	`attendance_id` INT NOT NULL,
	`user_id` INT NOT NULL
);

CREATE TABLE `homework` (
	`homework_id` INT NOT NULL AUTO_INCREMENT,
	`group_id` INT NOT NULL,
	`title` varchar(50) NOT NULL,
	`description` varchar(500) NOT NULL,
	`tags` varchar(50) NOT NULL,
	PRIMARY KEY (`homework_id`)
);

CREATE TABLE `tasks` (
	`task_id` INT NOT NULL AUTO_INCREMENT,
	`homework_id` INT NOT NULL,
	`type` INT NOT NULL,
	`content` varchar(500) NOT NULL,
	PRIMARY KEY (`task_id`)
);

CREATE TABLE `submit` (
	`submit_id` INT NOT NULL AUTO_INCREMENT,
	`homework_id` INT NOT NULL,
	`user_id` INT NOT NULL,
	PRIMARY KEY (`submit_id`)
);

CREATE TABLE `submit_task` (
	`submit_id` INT NOT NULL,
	`task_id` INT NOT NULL,
	`link` TEXT,
  `upload_id` INT
);

CREATE TABLE `submit_uploads` (
	`submit_upload_id` INT NOT NULL AUTO_INCREMENT,
	`filename` varchar(200) NOT NULL,
  `original_filename` varchar(200) NOT NULL,
  `mime_type` varchar(200) NOT NULL,
  `file_hash` varchar(100) NOT NULL,
	PRIMARY KEY (`submit_upload_id`)
);

CREATE TABLE `invitation_codes` (
	`code_id` INT NOT NULL AUTO_INCREMENT,
	`code` varchar(200) NOT NULL,
	`group_id` INT NOT NULL,
	`privilege` INT NOT NULL,
	`email` varchar(50) NOT NULL,
	`used` BOOLEAN NOT NULL DEFAULT '0',
	PRIMARY KEY (`code_id`)
);

CREATE TABLE `recommended_lessons` (
	`group_id` INT NOT NULL,
	`lesson_id` INT NOT NULL
);

CREATE TABLE `lesson_uploads` (
	`lesson_upload_id` INT NOT NULL AUTO_INCREMENT,
	`lesson_id` INT NOT NULL,
	`filename` varchar(200) NOT NULL,
  `original_filename` varchar(200) NOT NULL,
  `mime_type` varchar(200) NOT NULL,
  `file_hash` varchar(100) NOT NULL,
	PRIMARY KEY (`lesson_upload_id`)
);

CREATE TABLE `lesson_comments` (
	`comment_id` INT NOT NULL AUTO_INCREMENT,
	`lesson_id` INT NOT NULL,
	`user_id` INT NOT NULL,
	`content` varchar(500) NOT NULL,
	`reply_to` INT,
  `date` DATETIME NOT NULL,
	PRIMARY KEY (`comment_id`)
);

CREATE TABLE `homework_comments` (
	`comment_id` INT NOT NULL AUTO_INCREMENT,
	`homework_id` INT NOT NULL,
	`user_id` INT NOT NULL,
	`content` varchar(500) NOT NULL,
	`reply_to` INT,
  `date` DATETIME NOT NULL,
	PRIMARY KEY (`comment_id`)
);

ALTER TABLE `lessons` ADD CONSTRAINT `lessons_fk0` FOREIGN KEY (`author_id`) REFERENCES `users`(`user_id`);

ALTER TABLE `user_group` ADD CONSTRAINT `user_group_fk0` FOREIGN KEY (`user_id`) REFERENCES `users`(`user_id`);

ALTER TABLE `user_group` ADD CONSTRAINT `user_group_fk1` FOREIGN KEY (`group_id`) REFERENCES `groups`(`group_id`);

ALTER TABLE `attendance` ADD CONSTRAINT `attendance_fk0` FOREIGN KEY (`group_id`) REFERENCES `groups`(`group_id`);

ALTER TABLE `attendance_users` ADD CONSTRAINT `attendance_users_fk0` FOREIGN KEY (`attendance_id`) REFERENCES `attendance`(`attendance_id`);

ALTER TABLE `attendance_users` ADD CONSTRAINT `attendance_users_fk1` FOREIGN KEY (`user_id`) REFERENCES `users`(`user_id`);

ALTER TABLE `homework` ADD CONSTRAINT `homework_fk0` FOREIGN KEY (`group_id`) REFERENCES `groups`(`group_id`);

ALTER TABLE `tasks` ADD CONSTRAINT `tasks_fk0` FOREIGN KEY (`homework_id`) REFERENCES `homework`(`homework_id`);

ALTER TABLE `submit` ADD CONSTRAINT `submit_fk0` FOREIGN KEY (`homework_id`) REFERENCES `homework`(`homework_id`);

ALTER TABLE `submit` ADD CONSTRAINT `submit_fk1` FOREIGN KEY (`user_id`) REFERENCES `users`(`user_id`);

ALTER TABLE `submit_task` ADD CONSTRAINT `submit_task_fk0` FOREIGN KEY (`submit_id`) REFERENCES `submit`(`submit_id`);

ALTER TABLE `submit_task` ADD CONSTRAINT `submit_task_fk1` FOREIGN KEY (`task_id`) REFERENCES `tasks`(`task_id`);

ALTER TABLE `invitation_codes` ADD CONSTRAINT `invitation_codes_fk0` FOREIGN KEY (`group_id`) REFERENCES `groups`(`group_id`);

ALTER TABLE `recommended_lessons` ADD CONSTRAINT `recommended_lessons_fk0` FOREIGN KEY (`group_id`) REFERENCES `groups`(`group_id`);

ALTER TABLE `recommended_lessons` ADD CONSTRAINT `recommended_lessons_fk1` FOREIGN KEY (`lesson_id`) REFERENCES `lessons`(`lesson_id`);

ALTER TABLE `lesson_uploads` ADD CONSTRAINT `lesson_uploads_fk0` FOREIGN KEY (`lesson_id`) REFERENCES `lessons`(`lesson_id`);

ALTER TABLE `lesson_comments` ADD CONSTRAINT `lesson_comments_fk0` FOREIGN KEY (`lesson_id`) REFERENCES `lessons`(`lesson_id`);

ALTER TABLE `lesson_comments` ADD CONSTRAINT `lesson_comments_fk1` FOREIGN KEY (`user_id`) REFERENCES `users`(`user_id`);

ALTER TABLE `lesson_comments` ADD CONSTRAINT `lesson_comments_fk2` FOREIGN KEY (`reply_to`) REFERENCES `lesson_comments`(`comment_id`);

ALTER TABLE `homework_comments` ADD CONSTRAINT `homework_comments_fk0` FOREIGN KEY (`homework_id`) REFERENCES `homework`(`homework_id`);

ALTER TABLE `homework_comments` ADD CONSTRAINT `homework_comments_fk1` FOREIGN KEY (`user_id`) REFERENCES `users`(`user_id`);

ALTER TABLE `homework_comments` ADD CONSTRAINT `homework_comments_fk2` FOREIGN KEY (`reply_to`) REFERENCES `homework_comments`(`comment_id`);

ALTER TABLE `submit_task` ADD CONSTRAINT `submit_task_fk2` FOREIGN KEY (`upload_id`) REFERENCES `submit_uploads`(`submit_upload_id`);
