import getDivision from "../../utils/Math/division.js"

export const prerender = false
export async function GET({ params }){

    try {
        const exercise = getDivision()
        return new Response(
            JSON.stringify(exercise),
            {
                status: 200,
                headers:{ "content-type":"application/json" }
            }
        )
    }
    catch(err){

        console.error(err)
    }
}

