import skitterphoto from "../assets/skitterphoto.jpg";
import CalculaterBox from "./CalculaterBox";

const Calculater = () => {
  return (
    <div
      className="bg-cover bg-center bg-no-repeat h-screen flex items-center justify-center"
      style={{
        backgroundImage: `url('${skitterphoto}')`,
      }}
    >
      <CalculaterBox />
    </div>
  );
};

export default Calculater;
