import React, { useEffect, useRef, useState } from "react";
import { Button } from "@chakra-ui/react";
const StopWatch = () => {
  // const [timerid,setTimerId]=useState(null);
  const timerid = useRef(null); //{current:null}
  const [watch, setWatch] = useState(0);
  const start = () => {
    if (!timerid.current) {
      let id = setInterval(() => {
        setWatch((prev) => prev + 1);
      }, 1000);
      timerid.current = id;
    }
  };
  const pause = () => {
    clearInterval(timerid.current);
    timerid.current = null;
  };
  const reset = () => {
    // clearInterval(timerid.current)
    setWatch(0);
    timerid.current = null;
  };
  useEffect(() => {
    return reset;
  }, []);
  return (
    <div className="App">
      <p style={{ fontSize: "80px", margin: "100px" }}>{watch}</p>
      <div>
        <Button
          size="md"
          height="48px"
          width="150px"
          border="2px"
          borderColor="blue.500"
          margin='5px'
          onClick={start}
        >
          Start
        </Button>

        <Button
          size="md"
          height="48px"
          width="150px"
          border="2px"
          borderColor="blue.500"
          onClick={pause}
          margin='5px'
        >
          Pause
        </Button>

        <Button
          margin='5px'
          size="md"
          height="48px"
          width="150px"
          border="2px"
          borderColor="blue.500"
          onClick={reset}
        >
          Reset
        </Button>

        {/* <button onClick={start}>Start</button>
             <button onClick={pause}>Pause</button>
             <button onClick={reset} >Reset</button> */}
      </div>
    </div>
  );
};

export default StopWatch;
