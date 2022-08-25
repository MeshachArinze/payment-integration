import Bootstrap from "./icons/bootstrap.jpg";
import writing from "./icons/external-writing.jpg";
import figma from "./icons/figma--v1.jpg";
import html from "./icons/html-5--v1.jpg";
import javascript from "./icons/javascript--v1.jpg";
import nodejs from "./icons/nodejs.jpg";
import php from "./icons/php.jpg";
import wordpress from "./icons/wordpress.jpg";
import native from "./icons/react-native.jpg";

const sublinks = [
  {
    page: "Home",
    links: [{ label: "Home", url: "/" }],
  },
  {
    page: "About",
    links: [{ label: "about", url: "/about" }],
  },
  {
    page: "Service",
    links: [{ label: "service", url: "/service" }],
  },
  {
    page: "Contact",
    links: [{ label: "contact", url: "/contact" }],
  },
];

export const icons = [
  {
    id: 1,
    text: Bootstrap,
    title: "Ui Design",
  },
  {
    id: 2,
    text: writing,
    title: "content writng",
  },
  {
    id: 3,
    text: figma,
    title: "UI/UX",
  },
  {
    id: 4,
    text: html,
    title: "Markup language",
  },
  {
    id: 5,
    text: javascript,
    title: "Front end ",
  },
  {
    id: 6,
    text: nodejs,
    title: "Backend",
  },
  {
    id: 7,
    text: native,
    title: "Mobile App",
  },
  {
    id: 8,
    text: wordpress,
    title: "Content Management System",
  },
  { id: 9, text: php, title: "Backend" },
];

export default sublinks;
