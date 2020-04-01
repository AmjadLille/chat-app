import React from "react";
import Contact from "./Contact";

const users = [
  {
    name: "Seth Mason",
    imageSrc: "https://randomuser.me/api/portraits/men/96.jpg",
    online: false
  },
  {
    name: "Jessica Jennings",
    imageSrc: "https://randomuser.me/api/portraits/women/23.jpg",
    online: true
  },
  {
    name: "Kristen May",
    imageSrc: "https://randomuser.me/api/portraits/women/25.jpg",
    online: true
  },
  {
    name: "Jared Olson",
    imageSrc: "https://randomuser.me/api/portraits/men/18.jpg",
    online: false
  },
  {
    name: "Allison Kelly",
    imageSrc: "https://randomuser.me/api/portraits/women/63.jpg",
    online: true
  }
];

const List = () =>
  users.map(props => (
    <Contact
      name={props.name}
      imageSrc={props.imageSrc}
      online={props.online}
    />
  ));

export default List;
