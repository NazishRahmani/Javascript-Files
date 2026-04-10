import React, { useState } from "react";

const App = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    visible: false,
    radioBtn: "",
    optionSelector: "select",
    numberSelector: "",
  });

  function dataHandler(e) {
    // console.log(e);
    const { name, value, checked, type } = e.target;
    setFormData((prev) => {
      return {
        ...prev,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  let formArray = [];

  function submitHandler(e) {
    e.preventDefault();
    formArray.push(formData);
    console.log(formArray);
  }

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          name="firstName"
          placeholder="Enter your name here"
          onChange={dataHandler}
        />
        <br />
        <input
          type="text"
          name="lastName"
          placeholder="Enter your name here"
          onChange={dataHandler}
        />
        <br />
        <input
          type="email"
          name="email"
          placeholder="abc@gmail.com"
          onChange={dataHandler}
        />
        <br />
        <input type="checkbox" name="visible" onChange={dataHandler} />
        <br />
        <input
          type="radio"
          name="radioBtn"
          id="radioBtns"
          value={"first one is selected"}
          onChange={dataHandler}
        />
        <input
          type="radio"
          name="radioBtn"
          id="radioBtns"
          value={"second one is selected"}
          onChange={dataHandler}
        />
        <br />
        <select
          name="optionSelector"
          onChange={dataHandler}
          value={formData.optionSelector}
        >
          <option>select</option>
          <option>one</option>
          <option>two</option>
          <option>three</option>
        </select>
        <br />
        <input
          type="number"
          name="numberSelector"
          placeholder="pick some number"
          onChange={dataHandler}
          value={formData.numberSelector}
        />

        <button>Submit</button>
      </form>
    </div>
  );
};

export default App;
