import Todo from "../Todo/Todo.js";

// import { DragDropContext, Droppable } from "react-beautiful-dnd";

function TodoList(props) {
  const { filter, todoList } = props;
  return (
    <div>
      <div className="todoList">
        {todoList.map((todo, index) => {
          if (filter === "active" && todo.status != "active") return "";
          if (filter === "completed" && todo.status != "completed") return "";
          return (
            <Todo
              key={todo.id}
              todo={todo}
              todoActions={props.todoActions}
              index={index}
            />
          );
        })}
      </div>
    </div>
  );
}

export default TodoList;
