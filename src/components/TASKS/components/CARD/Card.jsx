import React, { useState } from "react";

const Card = (props) => {
  const { title, description, date, state, deleted } = props;

  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState(title);
  const [tempValue, setTempValue] = useState(title);
  const [completedState, setCompleted] = useState(state);

  const handleDivDoubleClick = () => {
    setIsEditing(true);
  };

  const handleInputKeyDown = (e) => {
    const key = e.keycode;

    if (key === 13) {
      setValue(tempValue);
      setIsEditing(false);
    } else if (key === 27) {
      setTempValue(value);
      setIsEditing(false);
    }
  };

  const handleInputChange = (e) => {
    setTempValue(e.target.value);
  };

  const handleButtonClick = () => {
    setCompleted("completed");
  };

  return (
    <div>
      {isEditing ? (
        <input
          onKeyDown={handleInputKeyDown}
          onChange={handleInputChange}
          autoFocus={true}
          value={tempValue}
        />
      ) : (
        <>
          <h3>{title}</h3>
          <h3>{description}</h3>
          <h3>{date}</h3>

          <div>
            <button onClick={handleButtonClick}>completar</button>

            <button>Eliminar</button>
          </div>
        </>
      )}
    </div>
  );
};

export { Card };
