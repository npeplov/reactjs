import React, { useState } from "react";
import AddForm from "./AddForm";
import List from "./List";

let stepsList = [
  {
    date: new Date(2020, 1, 1),
    distance: 10,
  },
  {
    date: new Date(2019, 0, 1),
    distance: 10,
  },
];

export default function Main() {
  let [trains, setTrains] = useState(stepsList);
  return (
    <>
      <AddForm
        onAdd={(form) => {
          setTrains((prev) => {
            let result;
            const ind = prev.findIndex((item) => (form.date - item.date) === 0);

            if (ind !== -1) {
              prev[ind].distance += form.distance;
              result = [...prev]
            } else result = [...prev, form];

            return result.sort((a, b) => (b.date-a.date));
          })
        }}
      />

      <List list={trains} onDel={
        (index) => {
          setTrains((prev) => {
            prev.splice(index, 1)
            return [...prev];
          })
      }}/>
      
    </>
  );
}
