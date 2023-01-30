
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.PUBLIC_URL
const supabaseKey = import.meta.env.PUBLIC_KEY
const supabase = createClient(supabaseUrl, supabaseKey)
export default supabase