import { Box, Button, Container } from "@mui/material";
import { Cart, Cart1, Radio1 } from "./component/Cart";
import "./App.css";
import Heading from "./component/Heading";
import Hero from "./component/Hero";
import Navbar, { Nav2 } from "./component/Navbar";
import { data, cart1 } from "./data.js";
import img from "./assets/hospital.png";

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

      {/* black box */}
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

      <Container maxWidth className="container-3 pb-10">
        <Heading
          head3={"OUR FACILITIES"}
          head5={"OUR FACILITY'S GALLERY"}
          para={
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus, eaque voluptates. Delectus aspernatur ipsam dignissimos excepturi? Totam voluptatem exercitationem architecto officia? Numquam maiores, dolore corporis dolores tenetur perferendis fuga aspernatur facilis modi alias laudantium voluptatem maxime voluptates officiis temporibus ipsum sequi vero culpa doloremque."
          }
        />
        <Nav2 />
      </Container>

      <Box>
        <img src={img} alt="hospital related image" />
      </Box>

      <Box className="container-2 text-center pb-12">
        <Heading
          head3={"DO YOU LIKE OUR SERVICES"}
          para={
            "Contrary to popular belief, Lorem lpsum is not simpley random text"
          }
        />
        <Button
          variant="contained"
          sx={{
            fontWeight: "1000",
            bgcolor: "green",
            textTransform: "lowercase",
            fontSize: "calc(4px + 1vw)",
            padding: "0.5% 2%",
          }}
        >
          Contact us
        </Button>
      </Box>

      {/* black box2 */}
      <Box
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
          head3={"WE ARE PROUD OF THESE NUMBERS"}
          para={
            "Contrary to popular belief, Lorem lpsum is not simpley random text. It has roots in a piece of calassical Latin literature from"
          }
        />
        <div className="flex content-center number-box">
          {cart1[1].map((item) => {
            return (
              <>
                <Cart1 num={item.num} heading={item.heading} />
              </>
            );
          })}
        </div>
      </Box>

      <Box className="container-3 pb-10">
        <Heading
          head3={"ABOUT US"}
          head5={"WHO WE ARE"}
          para={
            "Contrary to popular belief, Lorem lpsum is not simply random text, It has roots in a piece of classical Latin literature from 45 BC"
          }
        />
        <div className="">
          {cart1[2].map((item) => {
            return (
              <>
                <Cart1 num={item.num} heading={item.heading} des={item.des} />
              </>
            );
          })}
        </div>
      </Box>

      {/* Doctors box */}
      <Box
        sx={{
          margin: "0 !important",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          padding: "0px calc(1rem + 2vw) 50px !important",
          background: "#a8a8a8",
        }}
        className="container-2"
      >
        <Heading
          head3={"THE TEAM"}
          para={
            "Contrary to popular belief, Lorem lpsum is not simply random text, It has roots in a piece"
          }
        />
        <div className="flex content-center number-box">
          {cart1[3].map((item) => {
            console.log(item.des);
            return (
              <>
                <Cart1 num={"i"} heading={item.heading} des={item.des} />
              </>
            );
          })}
        </div>
      </Box>

      <Box
        sx={{
          margin: "0 !important",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          padding: "0px calc(1rem + 2vw) 40px !important",
        }}
        className="bg-[#323232] text-white "
      >
        <Heading
          head5={
            "Contrary to popularbelief, Lorem lpsum is not simply random text, It has roots in a piece"
          }
          para={"Alex Montio"}
        />
        <Radio1 />
      </Box>
    </>
  );
}

export default App;
