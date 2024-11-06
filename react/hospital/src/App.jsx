import { Box, Button, Link } from "@mui/material";
import { Cart, Cart1, Radio1, Icons } from "./component/Cart";
import Navbar, { Nav2 } from "./component/Navbar";
import { data, cart } from "./data.js";
import Heading from "./component/Heading";
import Hero from "./component/Hero";
import img from "./assets/hospital.png";
import Footer from "./component/Footer.jsx";
import { Element } from "react-scroll";
import "./App.css";
import CarouselComponent from "./utility/CarouselComponent.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Element name="section0">
        <Hero />
      </Element>

      <Element name="section1">
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
            para={
              "At our hospital, patient care is our top priority. With cutting-edge technology, skilled medical professionals, and round-the-clock services, we ensure that every patient receives personalized care tailored to their needs."
            }
          />
          <div className="flex items-center justify-center flex-wrap gap-6 facility md:flex-nowrap  px-2">
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
      </Element>

      {/* navbar 2 */}
      <Box className="container-3 pb-10">
        <Heading
          head3={"OUR FACILITIES"}
          head5={"OUR FACILITY'S GALLERY"}
          para={
            "Explore our modern and advanced facilities, from our spacious hospital rooms and high-tech medical equipment to our fully-equipped ambulances and stocked medical stores."
          }
        />
        <Nav2 />
      </Box>

      <Box>
        <img src={img} alt="hospital related image" width={"100%"} />
      </Box>

      {/* services container */}
      <Box className="container-2 text-center pb-12">
        <Heading
          head3={"DO YOU LIKE OUR SERVICES"}
          para={
            "We are dedicated to providing exceptional healthcare services tailored to meet your needs. If you have received care from us, we would love to hear your feedback. Your opinion helps us improve and continue offering the best care to our patients."
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
            "Our success is measured by the trust of our patients and the dedication of our staff. These numbers highlight our continuous commitment to providing quality healthcare across all services."
          }
        />
        <div className="grid md:grid-cols-4 grid-cols-2 max-[400px]:grid-cols-1 gap-y-3 number-box1 ">
          {cart[2].map((item, index) => {
            return (
              <Cart1
                key={index} // Add the unique key prop here
                num={item.num}
                heading={item.heading}
                useCounter={true} // Enable Counter animation
              />
            );
          })}
        </div>
      </Box>

      <Element name="section2">
        {/* about container */}
        <Box className="container-3 pb-10">
          <Heading
            head3={"WHO WE ARE"}
            head5={"ABOUT US"}
            para={
              "We are a dedicated team of healthcare professionals who prioritize the well-being of our patients. With years of experience and a patient-first approach, we aim to deliver the best medical care to all."
            }
          />
          <div className="grid md:grid-cols-2 grid-cols-1 gap-4 about">
            {cart[3].map((item, index) => {
              return (
                <div
                  className="grid grid-flow-col max-[400px]:grid-flow-dense"
                  key={index}
                >
                  <div className="flex items-center justify-center">
                    <Icons i={item.icon} />
                  </div>
                  <Cart1
                    key={index} // Add the unique key prop here
                    heading={item.heading}
                    des={item.des}
                  />
                </div>
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
            padding: "0px calc(1rem + 2vw) 20px !important",
            background: "#f1f1f1",
          }}
          className="container-2"
        >
          <Heading
            head3={"THE TEAM"}
            para={
              "Meet our team of dedicated doctors, specialists, and medical staff, all of whom are committed to delivering the best possible care to our patients."
            }
          />
          <div className="grid md:grid-cols-4 grid-cols-2 max-[400px]:grid-cols-1 gap-y-3 the-team">
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
      </Element>

      {/* <Box
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
            "Reach out to us for any inquiries, appointment bookings, or information about our services. Our team is always ready to assist you."
          }
          para={"Alex Montio"}
        />
        <Radio1 />
      </Box> */}

      <CarouselComponent/>

      <Element name="section3">
        {/* Contact container */}
        <Box className="container-3 pb-10">
          <Heading
            head3={"CONTACT US"}
            head5={"WHERE YOU CAN FIND US"}
            para={
              "Our hospital is located in the heart of the city, making it easily accessible for all. Whether you’re reaching out by phone, email, or visiting us directly, our team is ready to provide you with the care and support you need. We are here to serve you 24/7."
            }
          />
          <div className="flex justify-center sm:gap-20 gap-10  contact">
            {cart[5].map((item) => {
              return (
                <Link
                  key={item.id} // Use item.id if it's unique
                  href={item.href}
                  rel={item.id === 0 ? "noopener noreferrer" : undefined}
                  target={item.id === 0 ? "_blank" : "_self"}
                  sx={{
                    color: "black",
                    textDecoration: "none",
                  }}
                >
                  <Cart1
                    icon={item.icon}
                    heading={item.heading}
                    des={item.des}
                  />
                </Link>
              );
            })}
          </div>
        </Box>
      </Element>

      <Footer />
    </>
  );
}

export default App;
