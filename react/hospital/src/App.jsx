import { Container } from "@mui/material";
import "./App.css";
import { Cart } from "./component/Cart";
import Heading from "./component/Heading";
import Hero from "./component/Hero";
import Navbar from "./component/Navbar";
import { data } from "./data";
import "./app.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Container maxWidth>
        {data.map((item) => {
          return (
            <>
              <Heading
                head3={item.title}
                head5={item.heading}
                para={item.des}
              />
            </>
          );
        })}
        <Cart />
      </Container>

      <Container maxWidth className="container-2 bg-[#323232] text-white">
        <Heading
          head3={"HOW WE DO IT"}
          para={"Lorem ipsum dolor sit amet consectetur adipisicing elit."}
        />
      </Container>
    </>
  );
}

export default App;
