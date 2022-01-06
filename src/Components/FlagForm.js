import React, { useState } from "react";

function FlagForm({ onSubmitAdd }) {
  const [formData, setFormData] = useState({
    name: "",
    flag: "",
  });

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    fetch("http://localhost:3000/data", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((newItem) => onSubmitAdd(newItem));
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          value={formData.name}
          type="text"
          name="name"
          placeholder="Country name"
        />
        <input
          onChange={handleChange}
          value={formData.flag}
          type="text"
          name="flag"
          placeholder="Image link"
        />
        <input type="submit" value="Add" />
      </form>
    </div>
  );
}

export default FlagForm;
