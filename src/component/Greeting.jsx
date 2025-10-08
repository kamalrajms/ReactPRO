import React from "react";

export default function Greeting({ name, age }) {
  return (
    <div>
      {/* <h3>
        hello everyone , i am {props.name} and age is{props.age}
      </h3> */}
      <h3>
        {name}
        {age}
      </h3>
      
    </div>
  );
}
