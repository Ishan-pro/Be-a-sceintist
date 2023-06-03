import { createClient } from '@supabase/supabase-js'

const supabase = createClient("https://ejcxhxlcdkmmesfcuxqh.supabase.co", import.meta.env.VITE_PROJECT_KEY)

export default supabase