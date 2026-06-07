import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const SUPABASE_URL = 'https://awqzztqijlmxygnsxknz.supabase.co'
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF3cXp6dHFpamxteHlnbnN4a256Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODAwOTEwNzIsImV4cCI6MjA5NTY2NzA3Mn0.2nxTAly2rM_2TEhNvEgnK9cy0-Wq1SD7PVs93H1grD0'

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY, {
  auth: {
    persistSession: true,
    storageKey: '21days-auth',
    storage: window.localStorage,
    autoRefreshToken: true,
    detectSessionInUrl: true
  }
})