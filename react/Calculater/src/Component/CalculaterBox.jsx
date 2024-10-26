import InputBox from "./InputBox";
import ButtonBox from "./ButtonBox";
import { useState } from "react";
import calculation from "../Calculation.js";

const CalculaterBox = () => {
  let [inpVal, setInpVal] = useState("");

  const btnClick = (event) => {
    const value = event.target.innerText;

    const result = calculation(value, inpVal);
    setInpVal(result);
  };

  return (
    <div
      className="min-w-72 min-h-96 rounded-2xl backdrop-blur-lg backdrop-brightness-150 px-5 py-2 mx-5 flex flex-col gap-2"
      style={{
        background: "hsla(0,0%,98%,0.4)",
        boxShadow:
          "0 20px 25px -5px rgba(0, 0, 0, .1), 0 8px 10px -6px rgba(0, 0, 0, .1)",
      }}
    >
      <h1 className="font-semibold ">Calculator</h1>
      <InputBox inpVal={inpVal} />
      <ButtonBox btnClick={btnClick} />
    </div>
  );
};

export default CalculaterBox;
