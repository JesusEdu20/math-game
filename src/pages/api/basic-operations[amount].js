import getSum from "../../utils/Math/sum"
import getSubtraction from "../../utils/Math/subtraction"
import getMultiplication from "../../utils/Math/multiply"



const OPERATIONS = [ /* getMultiplication, */ getSum/* , getSubtraction */ ]

export async function GET({ params }){
    const { amount } = params
    const collectionOfOperations = []
    const amountOfOperations = parseInt(amount.split(":").join(""))
   
    try {
        OPERATIONS.map(operation => {
            for(let i = 0; i < amountOfOperations; i++){
                const exercise = operation()
                collectionOfOperations.push(exercise)
            }
            return collectionOfOperations
        })
        return new Response(
            JSON.stringify(collectionOfOperations), 
            {
                status:200,
                headers: {"content-type":"application/json"}
            }
        )
    }
    catch(err){

        console.error(err)
        return new Response(null, {
            status:500,
            statusText: err,
        })
    }
}