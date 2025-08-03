import { createClient } from '@supabase/supabase-js'

//Inicialización del cliente de Supabase
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL // "https://cpxtnnyhylslptljkoai.supabase.co"
const supabaseKey = import.meta.env.VITE_SUPABASE_PUBLIC_KEY // "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNweHRubnloeWxzbHB0bGprb2FpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQxNzY2ODksImV4cCI6MjA2OTc1MjY4OX0.6Na5Yr2zBiiRb1jNCyGJYMwT6cf8CQ96tpWz9iQNMp4"
export const supabase = createClient(supabaseUrl, supabaseKey)

export async function insertData(table, data) {
  const { data: insertedData, error } = await supabase
    .from(table)
    .insert(data)

  if (error) {
    console.error('Error inserting data:', error)
    throw error
  }

  return insertedData
}