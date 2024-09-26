import { Container } from "@mui/material";
import "./App.css";
import { Cart, Cart1 } from "./component/Cart";
import Heading from "./component/Heading";
import Hero from "./component/Hero";
import Navbar from "./component/Navbar";
import { data, cart1 } from "./data.js";
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

      <Container
        maxWidth
        sx={{
          margin: "0 !important",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          padding: "0px calc(1rem + 2vw) 50px !important",
        }}
        className="container-2 bg-[#323232] text-white"
      >
        <Heading
          head3={"HOW WE DO IT"}
          para={"Lorem ipsum dolor sit amet consectetur adipisicing elit."}
        />
        <div className="flex content-center">
          {cart1[0].map((item) => {
            return (
              <>
                <Cart1 icon={item.icon} heading={item.heading} />
              </>
            );
          })}
        </div>
      </Container>

      <Container maxWidth>
        <Heading
          head3={"OUR FACILITIES"}
          head5={"OUR FACILITY'S GALLERY"}
          para={
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus, eaque voluptates. Delectus aspernatur ipsam dignissimos excepturi? Totam voluptatem exercitationem architecto officia? Numquam maiores, dolore corporis dolores tenetur perferendis fuga aspernatur facilis modi alias laudantium voluptatem maxime voluptates officiis temporibus ipsum sequi vero culpa doloremque."
          }
        />
      </Container>
    </>
  );
}

export default App;
