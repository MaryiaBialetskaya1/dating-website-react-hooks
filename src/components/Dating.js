import { useState } from "react";
import { data } from "../data/data";
import s from "./Dating.module.css";

export function Dating() {
  const [person, setPerson] = useState(0);
  const { id, name, description, age, image } = data[person];
  console.log(data[person]);

  return (
    <div className={s.container}>
      <h1>{name}</h1>
    </div>
  );
}
