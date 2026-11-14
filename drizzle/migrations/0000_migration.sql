CREATE TABLE public.project_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz NOT NULL DEFAULT now(),
  full_name text NOT NULL CHECK (char_length(full_name) BETWEEN 1 AND 100),
  email text NOT NULL CHECK (char_length(email) BETWEEN 3 AND 255),
  business_name text CHECK (char_length(business_name) <= 150),
  phone text CHECK (char_length(phone) <= 40),
  need text NOT NULL CHECK (char_length(need) <= 80),
  budget text NOT NULL CHECK (char_length(budget) <= 80),
  timeline text NOT NULL CHECK (char_length(timeline) <= 80),
  message text NOT NULL CHECK (char_length(message) BETWEEN 1 AND 2000)
);
GRANT INSERT ON public.project_requests TO anon, authenticated;
GRANT ALL ON public.project_requests TO service_role;
ALTER TABLE public.project_requests ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can submit a request" ON public.project_requests FOR INSERT TO anon, authenticated WITH CHECK (true);