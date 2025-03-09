import getSum from "../../utils/Math/sum"

export const prerender = false
export async function GET(){

    try {
        const exercise = getSum()
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

