import getMultiplication from "../../utils/Math/multiply.js"

export const prerender = false
export async function GET({ params }){

    try {
        const exercise = getMultiplication()
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

