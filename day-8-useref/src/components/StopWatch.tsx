import React, { useRef, useState } from 'react'

const StopWatch = () => {
    const [count, setCount] = useState(0);
    // const timerIdRef = useRef<Timer>();

    
    // const startHandler = () => { 
    //     if (timerIdRef.current) { return; }

    //     timerIdRef.current = setInterval(() => setCount(prev => {
    //         return prev + 1;
    //     }), 1000)
    // }
    // const stopHandler = () => { }




    return (
        <div>
            <div>Timer: {count}s</div>
            <div>
                {/* <button onClick={startHandler}>Start</button>
                <button onClick={stopHandler}>Stop</button> */}
            </div>
        </div>
    )
}

export default StopWatch