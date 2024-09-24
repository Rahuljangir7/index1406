import { Container } from "@mui/material";
import "./App.css";
import Cart from "./component/Cart";
import Heading from "./component/Heading";
import Hero from "./component/Hero";
import Navbar from "./component/Navbar";
import { data } from "./data";

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
    </>
  );
}

export default App;
