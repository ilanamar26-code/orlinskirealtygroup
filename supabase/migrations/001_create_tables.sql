-- Create qualification_submissions table
CREATE TABLE IF NOT EXISTS qualification_submissions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  company TEXT,
  role TEXT,
  phone TEXT,
  project_location TEXT,
  asset_type TEXT,
  gdv_range TEXT,
  timeline TEXT,
  message TEXT,
  user_type TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create index on email for faster lookups
CREATE INDEX IF NOT EXISTS idx_qualification_submissions_email ON qualification_submissions(email);

-- Create index on created_at for sorting
CREATE INDEX IF NOT EXISTS idx_qualification_submissions_created_at ON qualification_submissions(created_at);
