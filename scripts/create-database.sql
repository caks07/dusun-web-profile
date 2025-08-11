-- Create database schema for village website
-- This script creates tables to store data that can be synced with Google Sheets

CREATE TABLE IF NOT EXISTS slider_data (
    id SERIAL PRIMARY KEY,
    image_url VARCHAR(500),
    title VARCHAR(200),
    subtitle TEXT,
    is_active BOOLEAN DEFAULT true,
    sort_order INTEGER DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS village_info (
    id SERIAL PRIMARY KEY,
    section VARCHAR(50),
    title VARCHAR(200),
    content TEXT,
    data_value VARCHAR(100),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS news (
    id SERIAL PRIMARY KEY,
    title VARCHAR(300),
    excerpt TEXT,
    content TEXT,
    author VARCHAR(100),
    category VARCHAR(50),
    image_url VARCHAR(500),
    views INTEGER DEFAULT 0,
    is_published BOOLEAN DEFAULT true,
    published_at TIMESTAMP,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(200),
    description TEXT,
    price DECIMAL(10,2),
    category VARCHAR(50),
    seller_name VARCHAR(100),
    seller_location VARCHAR(200),
    seller_phone VARCHAR(20),
    image_url VARCHAR(500),
    rating DECIMAL(2,1) DEFAULT 0,
    in_stock BOOLEAN DEFAULT true,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS regulations (
    id SERIAL PRIMARY KEY,
    title VARCHAR(300),
    description TEXT,
    category VARCHAR(50),
    file_url VARCHAR(500),
    views INTEGER DEFAULT 0,
    status VARCHAR(20) DEFAULT 'Aktif',
    published_at TIMESTAMP,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS achievements (
    id SERIAL PRIMARY KEY,
    title VARCHAR(200),
    year VARCHAR(4),
    category VARCHAR(50),
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS gallery (
    id SERIAL PRIMARY KEY,
    title VARCHAR(200),
    category VARCHAR(50),
    image_url VARCHAR(500),
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS facilities (
    id SERIAL PRIMARY KEY,
    name VARCHAR(200),
    category VARCHAR(50),
    description TEXT,
    location VARCHAR(200),
    contact VARCHAR(100),
    image_url VARCHAR(500),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
