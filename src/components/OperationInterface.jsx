import { useState, useEffect, useRef } from "react"
import "./OperationInterface.css"
function OperationInterface(){
    const [ useExercise, setExercise ] = useState(null);
    const [ useIsGenerate, setIsGenerate ] = useState(false);
    const [ useCurrentExercise, setCurrentExercise ] = useState(null);
    const [ useAnswer, setAnswer ] = useState(null);
    const [ useWrongFlag, setWrongFlag ] = useState(false);
    const offsetRef = useRef(0);
    useEffect(() => {
        console.log("effect")
        try {
           const getOperations = async () => {
            const response = await fetch("/api/basic-operations:1")
             if(!response.ok){
                throw new Error(`Error en la solicitud: ${response.status}`);
             }
            const data = await response.json(); // ✅ Convertir a JSON
            setExercise(data)
            setCurrentExercise(data[0]);
            offsetRef.current = 0;
            
            setIsGenerate(false)
           } 
           getOperations()
        }
        catch(err){

        }
    }, [useIsGenerate])

    const nextExerciseHandler = (e) => {
        const isVerify = verifyAnswer()
        clearAnswerInput(e);
        if (isVerify) {
            offsetRef.current += 1;
            setWrongFlag(false);
            if( offsetRef.current != useExercise.length){ 
                console.log(offsetRef.current, useExercise.length)
                setCurrentExercise({...useExercise[offsetRef.current]})
                return;
            }
            else if(offsetRef.current === useExercise.length){
                console.log(offsetRef.current, useExercise.length)
                setIsGenerate(true);
            }
        }
        else {
           //its is wrong
            setWrongFlag(true);
        }
        
    }

    const verifyAnswer = (e) => {
        const answer = parseInt(useAnswer)
       
        if(answer === useCurrentExercise.result){
            return true
        }
    }
    const clearAnswerInput = (e) => {
        const button = e.target;
        const input = button.closest(".operation-interface__answer-container").querySelector("input");
        input.value = "";
        console.log(input);        
    }
    const answerHandler = (e) => {
        
        const typing = e.target.value
        setAnswer(typing)
    }



    return(
        <>
            <div className="operation-interface">
                <div className="operation-interface__inputs-container" style={{border:`${useWrongFlag ? "1px solid white" : "none"}`}}>
                    {
                           
                        (!useCurrentExercise) ? <p> Loading... </p> : 
                        <>
                            <input type="number" disabled value = { useCurrentExercise?.numbers[0] }/>
                            <h2>{useCurrentExercise.type}</h2>
                            <input type="number" disabled value = { useCurrentExercise?.numbers[1] }/>
                        </>
                    }
                </div>
                <div className="operation-interface__answer-container">
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