-- prevents duplication of database
DROP DATABASE IF EXISTS limicons;

-- create limicons Database
CREATE DATABASE limicons;

-- Access limicons database
USE limicons;

-- Create an Information table
-- This table contains the information sent by the website visitor
CREATE TABLE Information (
    fullname VARCHAR(100),	# Name
    email VARCHAR(100),		# Email
    subj VARCHAR(100),		# Subject
    msg VARCHAR(200)		# Message
);