import React, { useEffect, useState } from "react";
import { Button } from "@chakra-ui/react";
const Clock = () => {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  var timer;
  useEffect(() => {
    timer = setInterval(() => {
      setSeconds(seconds + 1);
      if (seconds === 59) {
        setMinutes(minutes + 1);
        setSeconds(0);
      }
    }, 1000);
  });

  const start = () => {
    setSeconds(0);
    setMinutes(0);
  };

  const stop = () => {
    clearInterval(timer);

    return () => clearInterval(timer);
  };
  return (
    <div>
      <p style={{ fontSize: "80px", margin: "100px" }}>
        {minutes < 10 ? "0" + minutes : minutes}:
        {seconds < 10 ? "0" + seconds : seconds}
      </p>

      <Button
        size="md"
        height="48px"
        width="200px"
        border="2px"
        borderColor="blue.500"
        onClick={start}
      >
        Start
      </Button>

      <Button
        marginLeft="16"
        size="md"
        height="48px"
        width="200px"
        border="2px"
        borderColor="blue.500"
        onClick={stop}
      >
        Reset
      </Button>
    </div>
  );
};

export default Clock;
