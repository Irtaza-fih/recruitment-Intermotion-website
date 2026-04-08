
CREATE TABLE public.form_submissions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  form_type TEXT NOT NULL CHECK (form_type IN ('candidate', 'client', 'contact')),
  data JSONB NOT NULL,
  submitted_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.form_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow anonymous inserts" ON public.form_submissions
  FOR INSERT WITH CHECK (true);

CREATE POLICY "No public reads" ON public.form_submissions
  FOR SELECT USING (false);
