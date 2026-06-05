-- ============================================================
-- Hindu Swad — Supabase Schema
-- Run this once in the Supabase SQL Editor
-- ============================================================

-- ── Contact Submissions ──────────────────────────────────────

CREATE TABLE IF NOT EXISTS contact_submissions (
  id          uuid        PRIMARY KEY DEFAULT gen_random_uuid(),
  name        text        NOT NULL,
  email       text        NOT NULL,
  phone       text,
  subject     text        NOT NULL,
  message     text        NOT NULL,
  status      text        NOT NULL DEFAULT 'new'
                          CHECK (status IN ('new', 'read', 'replied')),
  created_at  timestamptz NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Allow anyone (anon key) to INSERT (public contact form)
CREATE POLICY "allow_public_insert"
  ON contact_submissions
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Allow service role full access (admin dashboard reads via Server Actions)
CREATE POLICY "allow_service_role_all"
  ON contact_submissions
  FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);

-- ── Admin Users ──────────────────────────────────────────────
-- We manage our own admin auth (NOT Supabase Auth) so we can
-- keep the portal fully server-side with JWT cookies.

CREATE TABLE IF NOT EXISTS admin_users (
  id            uuid        PRIMARY KEY DEFAULT gen_random_uuid(),
  name          text        NOT NULL,
  email         text        UNIQUE NOT NULL,
  password_hash text        NOT NULL,
  created_at    timestamptz NOT NULL DEFAULT now()
);

-- RLS — only service role can touch this table
ALTER TABLE admin_users ENABLE ROW LEVEL SECURITY;

CREATE POLICY "service_role_only"
  ON admin_users
  FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);
