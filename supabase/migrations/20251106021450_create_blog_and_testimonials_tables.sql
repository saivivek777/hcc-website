/*
  # Create Blog Posts and Testimonials Tables
  
  ## Overview
  Creates tables to store blog posts and customer testimonials for the HCC website.
  
  ## New Tables
  
  ### `blog_posts`
  - `id` (uuid, primary key) - Unique identifier for each blog post
  - `title` (text) - Blog post title
  - `slug` (text, unique) - URL-friendly version of the title
  - `excerpt` (text) - Brief summary of the post
  - `content` (text) - Full blog post content
  - `category` (text) - Category (AI Trends, Automation, Case Studies, etc.)
  - `author` (text) - Author name
  - `image_url` (text) - Featured image URL
  - `published` (boolean) - Publication status
  - `published_at` (timestamptz) - Publication date
  - `created_at` (timestamptz) - Creation timestamp
  
  ### `testimonials`
  - `id` (uuid, primary key) - Unique identifier for each testimonial
  - `name` (text) - Customer name
  - `company` (text) - Customer company
  - `role` (text) - Customer role/position
  - `content` (text) - Testimonial text
  - `rating` (integer) - Star rating (1-5)
  - `image_url` (text) - Customer photo URL
  - `featured` (boolean) - Whether to feature prominently
  - `created_at` (timestamptz) - Creation timestamp
  
  ## Security
  - Enable RLS on both tables
  - Allow public read access for published content
  - Restrict write operations to authenticated users only
*/

CREATE TABLE IF NOT EXISTS blog_posts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  slug text UNIQUE NOT NULL,
  excerpt text NOT NULL,
  content text NOT NULL,
  category text NOT NULL DEFAULT 'General',
  author text NOT NULL DEFAULT 'HCC Team',
  image_url text,
  published boolean DEFAULT false,
  published_at timestamptz DEFAULT now(),
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS testimonials (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  company text NOT NULL,
  role text NOT NULL,
  content text NOT NULL,
  rating integer NOT NULL DEFAULT 5,
  image_url text,
  featured boolean DEFAULT false,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read published blog posts"
  ON blog_posts
  FOR SELECT
  USING (published = true);

CREATE POLICY "Anyone can read testimonials"
  ON testimonials
  FOR SELECT
  USING (true);

CREATE POLICY "Authenticated users can insert blog posts"
  ON blog_posts
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update blog posts"
  ON blog_posts
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can insert testimonials"
  ON testimonials
  FOR INSERT
  TO authenticated
  WITH CHECK (true);