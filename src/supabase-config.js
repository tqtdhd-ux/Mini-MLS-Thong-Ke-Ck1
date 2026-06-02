const SUPABASE_URL = "https://jjojpbpfhhpfjydrtuee.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_2yFBtyuGZPFsXalcMzGoSA_pwkIJWjQ";
const AUTH_EMAIL_DOMAIN = "minimls.local";

const supabaseClient = supabase.createClient(
  SUPABASE_URL,
  SUPABASE_PUBLISHABLE_KEY,
);