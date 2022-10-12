import { useEffect, useState } from "react"


const State = () => {


    const [counter, setCounter] = useState(0)
    const [show, setShow] = useState(false)
    const handlerCounterButton = () => {
        const nextC = counter + 1
        setCounter(nextC)
    }
    const handlerCounterButtonMin = () => {
        const prevC = counter - 1
        if (counter === 0) {
            setCounter(0)
        } else {
            setCounter(prevC)
        }
    }
    const handlerResetButton = () => {
        setCounter(0)
    }


    useEffect(() => {
        setTimeout(() => {
            setShow(true)
        }, 6000)
    })



    if (!show) {
        return (
            <div>
                <div className="mb-5">
                    <h1>Loading...</h1>
                    <progress className="progress w-56 bg-white"></progress>
                </div>
            </div>
        )
    }

    return (
        <>
            {/* <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                <span className="countdown font-mono text-5xl">
                    <span style={{ "--value": counter }}></span>
                </span>
            </div> */}
            <h1>{counter}</h1>
            <div className="flex flex-col py-5">
                <div className="flex flex-row p-5">
                    <button onClick={handlerCounterButtonMin} className='btn btn-primary' >-</button>
                    <button onClick={handlerResetButton} className='btn btn-error mx-2' >Reset</button>
                    <button onClick={handlerCounterButton} className='btn btn-primary' >+</button>
                </div>
            </div>
        </>
    )
}
export default State