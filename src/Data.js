import bootstrap from "./icons/bootstrap.jpg";
import css3 from "./icons/css3-logo.jpg";
import writing from "./icons/external-writing.jpg";
import figma from "./icons/figma--v1.jpg";
import html5 from "./icons/html-5--v1.jpg";
import javascript from "./icons/javascript--v1.jpg";
import nodejs from "./icons/nodejs.jpg";
import php from "./icons/php.jpg";
import wordpres from "./icons/wordpress.jpg";

const sublinks = [
  {
    page: "Home",
    links: [{ label: "Home", url: "/" }],
  },

  {
    page: "what we do",
    links: [
      { label: "company", url: "/company" },
      { label: "payment", url: "/payment" },
      { label: "pricing", url: "/pricing" },
    ],
  },
  {
    page: "who we are",
    links: [
      { label: "about", url: "/about" },
      { label: "service", url: "/service" },
    ],
  },
  {
    page: "contact",
    links: [
      { label: "contact", url: "/contact" },
      { label: "sign up", url: "/signup" },
      { label: "sign in", url: "/signin" },
    ],
  },
];

export const background = [
  {
    id: 1,
    text: "About us",
    title: "Welcome to our page"
  },
  {
    id: 2,
    text: "click here",
    title: "What can we offer you"
  },
  {
    id: 3,
    title: "Which service do you want",
    text: "read more",
  },
];

export const icons = [
  {
    id: 1,
    pics: bootstrap,
    text: "ui design",
  },
  {
    id: 2,
    pics: css3,
    text: "layout",
  },
  {
    id: 3,
    pics: writing,
    text: "content writing",
  },
  {
    id: 4,
    pics: figma,
    text: "ui / ux",
  },
  {
    id: 5,
    pics: html5,
    text: "markup language",
  },
  {
    id: 6,
    pics: javascript,
    text: "client side",
  },
  {
    id: 7,
    pics: nodejs,
    text: "javascript framework for backend",
  },
  {
    id: 8,
    pics: wordpres,
    text: "content management system",
  },
];

export const service = [
  {
    id: 1,
    title: "Payment integration",
    text: "online or offline business payment! We have a solution for all your payment requirement Provide your customers with the best payment",
  },
  {
    id: 2,
    title: "content marketing",
    text: "online or offline business payment! We have a solution for all your payment requirement Provide your customers with the best payment",
  },
  {
    id: 3,
    title: "Graphic design",
    text: "online or offline business payment! We have a solution for all your payment requirement Provide your customers with the best payment",
  },
  {
    id: 4,
    title: "web development",
    text: "online or offline business payment! We have a solution for all your payment requirement Provide your customers with the best payment",
  },
  {
    id: 5,
    title: "content management system",
    text: "online or offline business payment! We have a solution for all your payment requirement Provide your customers with the best payment",
  },
  {
    id: 6,
    title: "content writing",
    text: "online or offline business payment! We have a solution for all your payment requirement Provide your customers with the best payment",
  },
];

export const resources = [
  {
    id: 1,
    title: "Find me on Twitter",
    image: bootstrap
  },
  {
    id: 2,
    title: "Welcome to Ark Labs",
    image: php
  },
  {
    id: 3,
    title: "A personal site perhaps?",
    image: nodejs
  },
];

export const Title = [
  {
    id: 1,
    title: "Payment integration",
    details:
      "online or offline business payment! We have a solution for all your payment requirement Provide your customers with the best payment",
  },
  {
    id: 2,
    title: "web development",
    details:
      "online or offline business payment! We have a solution for all your payment requirement Provide your customers with the best payment",
  },
  {
    id: 3,
    title: "web design",
    details:
      "online or offline business payment! We have a solution for all your payment requirement Provide your customers with the best payment",
  },
  {
    id: 4,
    title: "Payment integration",
    details:
      "online or offline business payment! We have a solution for all your payment requirement Provide your customers with the best payment",
  },

  {
    id: 5,
    title: "Payment integration",
    details:
      "online or offline business payment! We have a solution for all your payment requirement Provide your customers with the best payment",
  },
  {
    id: 6,
    title: "Payment integration",
    details:
      "online or offline business payment! We have a solution for all your payment requirement Provide your customers with the best payment",
  },
];

export default sublinks;
