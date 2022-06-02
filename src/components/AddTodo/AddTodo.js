import { useState } from "react";

function AddTodo(props) {
  const [value, setValue] = useState("");
  const changeHandler = (event) => {
    let v = event.target.value;
    setValue(v);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    props.addTodo(value);
    setValue("");
  };
  return (
    <div className="add-todo">
      <form className="add-todo__form" onSubmit={submitHandler}>
        <div className="input__control">
          <input
            type="text"
            className="add-todo__input input input--icon"
            value={value}
            onChange={changeHandler}
            placeholder="Create a new todo..."
          />
        </div>
      </form>
    </div>
  );
}

export default AddTodo;
