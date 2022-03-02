import React, { useState } from 'react';


const Todo = ({title,completed,removeTodoItemProp,todo}) => {

  const [isEditing, setIsEditing] = useState(false)
  const [value, setValue] = useState(title)
  const [tempValue, setTempValue] = useState(title)
  const [completedState, setCompleted] = useState(completed)



  const handleDivDoubleClick = ()=> {
    setIsEditing (true);
  };

  const handleInputKeyDown = (e) => {

    const key = e.keycode;

    if (key === 13 ){ 
      setValue(tempValue);
      setIsEditing(false);
    }else if( key === 27) {
      setTempValue(value)
      setIsEditing(false);
    }
  };

  const handleInputChange = (e) => {
    setTempValue(e.target.value);
  };

  const handleButtonClick = () => {
    setCompleted((oldcompleted) => !oldcompleted)
  }

  return (
   <div >
    {
      isEditing ?
      <div >
        <div>
        
            <input 
              onKeyDown={handleInputKeyDown}
              onChange={handleInputChange}
              autoFocus={true}
              value={tempValue}
            />
          
        </div>
      </div>:
     
     <>
            <div onDoubleClick={handleDivDoubleClick} >
              <h2>{value}</h2>
            </div>
       
            <div>
              <button onClick={handleButtonClick}>completar</button>
            </div>
            <div>
              <button onClick={()=>removeTodoItemProp(todo.id)}>Eliminar</button>
            </div>
     </>
    }
   </div>
  )
}

export default Todo