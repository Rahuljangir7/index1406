import img1 from "./assets/img1.avif";
import img5 from "./assets/img5.avif";
import img6 from "./assets/img6.avif";

export const cardJson = [
  {
    image: img1,
    date: "28 oct 2024",
    title: "This is my third & latest post",
    des: "Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution.",
    linkName: "/blog/thirdBlogDetail",
  },
  {
    image: img5,
    date: "24 oct 2024",
    title: "This is my second post",
    des: "Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.",
    linkName: "/blog/secondBlogDetail",
  },
  {
    image: img6,
    date: "20 oct 2024",
    title: "This is my first post",
    des: "Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps.",
    linkName: "/blog/firstBlogDetail",
  },
];

export const categoriesBlog = [
  {
    link: "/sandybeach",
    name: "Sandy Beaches",
    para: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    card: cardJson[2],
  },
  {
    link: "/foresttrails",
    name: "Forest Trails",
    para: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    card: cardJson[0],
  },
  {
    link: "/citystreets",
    name: "City Streets",
    para: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    card: cardJson[1],
  },
];

export const blogPageDeail = [
  {
    link: "thirdBlogDetail",
    blogPage: cardJson[0],
    para: "Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment. Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring. Section Header Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.",
  },
  {
    link: "secondBlogDetail",
    blogPage: cardJson[1],
    para: "Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment. Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.",
  },
  {
    link: "firstBlogDetail",
    blogPage: cardJson[2],
    para: "Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment. Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.",
  },
];
