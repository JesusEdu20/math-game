import { useState, useEffect, useRef } from "react"
import "./OperationInterface.css"
function OperationInterface(){
    const [ useExercise, setExercise ] = useState(null)
    const [ useIsGenerate, setIsGenerate ] = useState(false)
    const [ useCurrentExercise, setCurrentExercise ] = useState(null)
    const [ useAnswer, setAnswer ] = useState(null)
    const offsetRef = useRef(0)
    useEffect(() => {
        try {
           const getOperations = async () => {
            const response = await fetch("/api/basic-operations:10")
             if(!response.ok){
                throw new Error(`Error en la solicitud: ${response.status}`);
             }
            const data = await response.json(); // ✅ Convertir a JSON
            setExercise(data)
            setCurrentExercise({...data[offsetRef.current]})
            setIsGenerate(false)
           } 
           getOperations()
        }
        catch(err){

        }
    }, [useIsGenerate])

    const nextExerciseHandler = (e) => {
        const isVerify = verifyAnswer()
        console.log(isVerify, "next function")
        if(isVerify && offsetRef != useExercise.length){
            offsetRef.current += 1 
            setCurrentExercise({...useExercise[offsetRef.current]})
            return
        }
        else if(isVerify && offsetRef === useExercise.length){
            setIsGenerate(true)
        }
    }

    const verifyAnswer = (e) => {
        const answer = parseInt(useAnswer)
        console.log(answer === useCurrentExercise.result, "verify function", useCurrentExercise.result, answer)
        if(answer === useCurrentExercise.result){
            return true
        }
    }
    console.log(useAnswer)
    const answerHandler = (e) => {
        
        const typing = e.target.value
        setAnswer(typing)
    }



    return(
        <>
            <div className="operation-interface">
                <div className="operation-interface__inputs-container">
                    {
                           
                        (!useCurrentExercise) ? <p> Loading... </p> : 
                        <>
                            <input type="number" disabled value = { useCurrentExercise.numbers[0] }/>
                            <h2>{useCurrentExercise.type}</h2>
                            <input type="number" disabled value = { useCurrentExercise.numbers[1] }/>
                        </>
                    }
                </div>
                <div>
                    <input type="number" onChange={answerHandler}></input>
                    <button className="operation-interface_button" onClick={ nextExerciseHandler }>
                        COMPROBAR
                    </button>
                </div>
            </div>
        </>
    )
}

export default OperationInterface