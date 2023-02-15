import { useState } from "react";
import { data } from "../data/data";
import s from "./Dating.module.css";

export function Dating() {
  const [person, setPerson] = useState(0);
  const { id, name, description, age, image } = data[person];
  console.log(data[person]);

  return (
    <div>
      <div className={s.container}>
        <img src={image} alt="person" width="300px" />
      </div>
      <div className={s.container}>
        <h1>
          {id} - {name}
        </h1>
      </div>
      <div className={s.container}>
        <h2>{description}</h2>
      </div>
      <div className={s.container}>
        <h2>{age} years old</h2>
      </div>
      <div className={`${s.btn} ${s.container}`}>
        <button>Previous</button>
        <button>Next</button>
      </div>
    </div>
  );
}
