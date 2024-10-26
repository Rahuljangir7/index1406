import { ButtonBlack, ButtonPink, ButtonGreen, ButtonBlue, ButtonYellow } from "./Button";

const ButtonBox = ({btnClick}) => {
    
  return (
    <div className="grid gap-4 px-1 pb-3">
      <div className="flex justify-between">
        <ButtonPink btnClick={btnClick} btn="AC" />
        <ButtonBlue btnClick={btnClick} btn="%" />
        <ButtonBlue btnClick={btnClick} btn="&divide;" />
        <ButtonBlue btnClick={btnClick} btn="*" />
      </div>
      <div className="flex justify-between">
        <ButtonBlack btnClick={btnClick} btn="7" />
        <ButtonBlack btnClick={btnClick} btn="8" />
        <ButtonBlack btnClick={btnClick} btn="9" />
        <ButtonBlue btnClick={btnClick} btn="-" />
      </div>
      <div className="flex justify-between">
        <ButtonBlack btnClick={btnClick} btn="4" />
        <ButtonBlack btnClick={btnClick} btn="5" />
        <ButtonBlack btnClick={btnClick} btn="6" />
        <ButtonBlue btnClick={btnClick} btn="+" />
      </div>
      <div className="flex justify-between">
        <ButtonBlack btnClick={btnClick} btn="1" />
        <ButtonBlack btnClick={btnClick} btn="2" />
        <ButtonBlack btnClick={btnClick} btn="3" />
        <ButtonBlue btnClick={btnClick} btn="x&sup2;" />
      </div>
      <div className="flex justify-between">
        <ButtonBlack btnClick={btnClick} btn="." />
        <ButtonBlack btnClick={btnClick} btn="0" />
        <ButtonYellow btnClick={btnClick} btn="&#8592;" />
        <ButtonGreen btnClick={btnClick} btn="=" />
      </div>
    </div>
  );
};

export default ButtonBox;
