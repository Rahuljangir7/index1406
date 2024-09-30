import { Box, Button } from "@mui/material";
import { Cart, Cart1, Radio1 } from "./component/Cart";
import Navbar, { Nav2 } from "./component/Navbar";
import { data, cart } from "./data.js";
import Heading from "./component/Heading";
import Hero from "./component/Hero";
import img from "./assets/hospital.png";
import Footer from "./component/Footer.jsx";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Box>
        {data.map((item, index) => {
          return (
            <Heading
              key={index} // Add the unique key prop here
              head3={item.title}
              head5={item.heading}
              para={item.des}
            />
          );
        })}

        <Cart />
      </Box>

      {/* black box */}
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
          head3={"HOW WE DO IT"}
          para={"Lorem ipsum dolor sit amet consectetur adipisicing elit."}
        />
        <div className="flex content-center facility">
          {cart[1].map((item, index) => {
            return (
              <Cart1
                key={index} // Add the unique key prop here
                icon={item.icon}
                heading={item.heading}
              />
            );
          })}
        </div>
      </Box>

      <Box className="container-3 pb-10">
        <Heading
          head3={"OUR FACILITIES"}
          head5={"OUR FACILITY'S GALLERY"}
          para={
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus, eaque voluptates. Delectus aspernatur ipsam dignissimos excepturi? Totam voluptatem exercitationem architecto officia? Numquam maiores, dolore corporis dolores tenetur perferendis fuga aspernatur facilis modi alias laudantium voluptatem maxime voluptates officiis temporibus ipsum sequi vero culpa doloremque."
          }
        />
        <Nav2 />
      </Box>

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
        <div className="flex content-center number-box1">
          {cart[2].map((item, index) => {
            return (
              <Cart1
                key={index} // Add the unique key prop here
                num={item.num}
                heading={item.heading}
              />
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
        <div className="grid grid-cols-2 ">
          {cart[3].map((item, index) => {
            return (
              <Cart1
                key={index} // Add the unique key prop here
                num={item.num}
                heading={item.heading}
                des={item.des}
              />
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
          background: "#f1f1f1",
        }}
        className="container-2"
      >
        <Heading
          head3={"THE TEAM"}
          para={
            "Contrary to popular belief, Lorem lpsum is not simply random text, It has roots in a piece"
          }
        />
        <div className="flex content-center the-team">
          {cart[4].map((item, index) => {
            return (
              <Cart1
                key={index} // Add the unique key prop here
                icon={item.icon}
                heading={item.heading}
                des={item.des}
              />
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

      {/* Contact container */}
      <Box className="container-3 pb-10">
        <Heading
          head3={"CONTACT US"}
          head5={"WHERE YOU CAN FIND US"}
          para={
            "Contrary to popular belief, Lorem lpsum is not simply random text, It has roots in a piece of classical Latin literature from 45 BC, marking it over 2000 years old."
          }
        />
        <div className="flex justify-center contact">
          {cart[5].map((item) => {
            return (
              <Cart1
                key={item.id} // Use item.id if it's unique
                icon={item.icon}
                heading={item.heading}
                des={item.des}
              />
            );
          })}
        </div>
      </Box>

      <Footer />
    </>
  );
}

export default App;
