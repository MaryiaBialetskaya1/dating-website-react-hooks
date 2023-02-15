import { useState } from "react";
import { data } from "../data/data";
import s from "./Dating.module.css";

export function Dating() {
  const [person, setPerson] = useState(0);
  const { id, name, description, age, image } = data[person];

  const showPeviousPerson = () => {
    setPerson((person) => {
      person--;
      if (person < 0) {
        return data.length - 1;
      }
      return person;
    });
  };

  const showNextPerson = () => {
    setPerson((person) => {
      person++;
      if (person > data.length - 1) {
        person = 0;
      }
      return person;
    });
  };

  return (
    <div className={s.container}>
      <div>
        <img src={image} alt="person" width="300px" />
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
        <h2>{age} years old</h2>
      </div>
      <div className={`${s.btn}`}>
        <button onClick={showPeviousPerson}>Previous</button>
        <button onClick={showNextPerson}>Next</button>
      </div>
    </div>
  );
}
