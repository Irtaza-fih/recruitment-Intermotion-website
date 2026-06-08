DROP POLICY IF EXISTS "Allow anonymous inserts" ON public.form_submissions;

CREATE POLICY "Anyone can submit valid forms"
ON public.form_submissions
FOR INSERT
TO anon, authenticated
WITH CHECK (
  form_type IN ('candidate', 'client', 'contact', 'feedback')
  AND data IS NOT NULL
  AND pg_column_size(data) < 100000
);