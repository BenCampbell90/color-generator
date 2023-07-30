import React, { useState } from "react";

const Form = ({ addColor }) => {
  const [color, setColor] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addColor(color);
  };

  return (
    <section className="container">
      <h2>Color Generator</h2>
      <form className="color-form" onSubmit={handleSubmit}>
        <input
          className=""
          type="color"
          value={color}
          onChange={(e) => {
            setColor(e.target.value);
          }}
        />
        <input
          className=""
          type="text"
          value={color}
          onChange={(e) => {
            setColor(e.target.value);
          }}
        />
        <button type="submit" className="btn">
          Submit
        </button>
      </form>
    </section>
  );
};

export default Form;
