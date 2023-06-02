import postgres from "https://deno.land/x/postgresjs/mod.js"
import { serve } from "https://deno.land/std/http/mod.ts"

const sql = postgres(Deno.env.get("DATABASE_URL"))

serve(async () => {
    const start = Date.now()
    await sql`select NOW()`
    const end = Date.now()
    return new Response("", {
        headers: {
            delta: (end - start).toLocaleString("id-ID")
        }
    })
})
