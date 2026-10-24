import { useState } from "react"

export function Counter(){
    const [count, setCount] = useState<number>(0);
    return (
        <>
        <div>
            <p>Cups Counter : {count}</p>
            <button onClick={() => setCount((c) => c+1)}>
                order more...
            </button>
        </div>
        </>
    )
}