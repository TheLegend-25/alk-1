import { useState, useEffect } from "react";

const multiplier = (arg) => arg * 2

export const Counter = (props) => {
    useEffect(() => {
        console.log('mounted')

        return () => {
            console.log('unmounted')
        }
    }, [])

    useEffect(() => {
       console.log('prop name has changed')
    },[props.name])

    const [count, setCount] = useState(0);
    const [step, setStep] = useState(1)

    const onCountClick = () => {
        const newCount = count + step
        setCount(newCount)
        props.onCountChange(newCount)
    }

    const onStepChange = (event) => {
        const newStep = Number(event.target.value)
        setStep(newStep)
    }

    return <div>
        Witam {props.name}, {multiplier(props.no)}
        <button onClick={onCountClick}>Count</button>
        <button onClick={() => {setCount(0)}}>Reset</button>
        <input value={step} onChange={onStepChange} />
        <div>Count: {count}</div>
    </div>
}