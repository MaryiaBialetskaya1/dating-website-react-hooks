import { useState } from "react";
import { data } from "../data/data";
import s from "./Dating.module.css";

export function Dating() {
  const [person, setPerson] = useState(0);
  const { id, name, description, age, image } = data[person];
  console.log(data[person]);

  return (
    <div>
      <div>
        <img src={image} alt="person" width="400px" />
      </div>
      <div>
        <h1>
          {id} - {name}
        </h1>
      </div>
      <div>
        <h2>{description}</h2>
      </div>
      <div>
        <h2>{age}</h2>
      </div>
    </div>
  );
}
