
export const ButtonPink = ({btn,btnClick}) => (
  <button onClick={btnClick} className="btn btn-circle font-bold text-lg btn-error">{btn}</button>
);

export const ButtonBlue = ({btn,btnClick}) => (
  <button onClick={btnClick} className="btn btn-circle font-bold text-lg btn-info">{btn}</button>
);

export const ButtonGreen = ({btn,btnClick}) => (
  <button onClick={btnClick} className="btn btn-circle font-bold text-lg btn-success">{btn}</button>
);

export const ButtonBlack = ({btn,btnClick}) => (
  <button onClick={btnClick} className="btn btn-circle font-bold text-lg btn-neutral">{btn}</button>
);
export const ButtonYellow = ({btn,btnClick}) => (
  <button onClick={btnClick} className="btn btn-circle font-bold text-lg btn-warning">{btn}</button>
);
