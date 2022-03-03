
import React,{ useState } from "react";


const Form = ({ addTodo }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (inputValue.trim() === "") return;

    addTodo({ title: inputValue, completed: false });
    setInputValue("");
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input
          value={inputValue}
          onChange={handleInputChange}
          type="text"
          placeholder="Añade una nueva tarea."
        />

        <button type="submit"></button>
      </form>
    </div>
  );
};

export default Form
