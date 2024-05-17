import React from "react";
import { useState, useEffect } from "react";

const Timer = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() =>{
        const timerID = setInterval(() => {
            setTime(new Date());
          }, 1000);
      
          // コンポーネントがアンマウントされたときにタイマーをクリアする
          return () => clearInterval(timerID);
    }, [])

    return(
        <>
            <span>time : </span>
            <span>{time.toLocaleTimeString()}</span>
        </>
    );
}

export default Timer;