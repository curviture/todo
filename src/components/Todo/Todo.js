import { Draggable } from "react-beautiful-dnd";

function Todo(props) {
  let { status, id, task } = props.todo;
  const todoClass = status === "completed" ? "todo todo--completed" : "todo";
  return (
    <div className="todo__wrapper">
      <Draggable draggableId={id.toString()} index={props.index}>
        {(provided) => (
          <div
            className={todoClass}
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            <span
              className="todo__customCheckbox"
              onClick={() => props.todoActions("toggle", { task, id, status })}
            ></span>

            <input
              type="checkbox"
              value={task}
              onChange={() => props.todoActions("toggle", { task, id, status })}
              className="todo__checkbox"
              id={id}
              name={id}
            />
            <label htmlFor={id} className="todo__title">
              {props.todo.task}
            </label>
            <button
              className="todo__dismiss"
              onClick={() => props.todoActions("delete", { task, id, status })}
            >
              <img
                className="todo__dismiss__img"
                src="../assets/icon-cross.svg"
                alt="action delete icon"
              />
            </button>
          </div>
        )}
      </Draggable>
    </div>
  );
}

export default Todo;
