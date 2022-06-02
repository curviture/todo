import { useState } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

import Header from "./components/Header/Header";
import AddTodo from "./components/AddTodo/AddTodo";
import TodoList from "./components/TodoList/TodoList";
import TodoFilter from "./components/TodoFilter/TodoFilter";

import "./Sass/App.scss";

const reorder = (list, startIndex, endIntex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIntex, 0, removed);
  console.log("reorder", list, result);
  return result;
};

function App() {
  const [todos, setTodos] = useState([
    {
      task: "add your first task",
      id: 1,
      status: "active",
    },
  ]);
  const [filter, setFilter] = useState("all");
  const [theme, setTheme] = useState("light");
  const themeToggleHandler = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  const addTodo = (todo) => {
    setTodos([...todos, { task: todo, status: "active", id: Date.now() }]);
  };
  const todoActions = (action, payload) => {
    let todoList = todos.map((todo) => todo);
    const todoIndex = todoList.findIndex((todo) => todo.id === payload.id);

    if (action === "toggle") {
      console.log(todos);
      console.log("toggle");
      todoList.splice(todoIndex, 1, {
        ...payload,
        status: payload.status === "completed" ? "active" : "completed",
      });
    }
    if (action === "delete") {
      todoList.splice(todoIndex, 1);
    }

    setTodos(todoList);
  };
  const changeFilter = (filter) => {
    setFilter(filter);
  };
  const onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }
    if (result.destination.index == result.source.index) {
      return;
    }

    const newTodoList = reorder(
      todos,
      result.source.index,
      result.destination.index
    );
    setTodos(newTodoList);
  };
  const clearCompletedHandler = () => {
    let newtodos = todos.filter((item) => item.status !== "completed");
    setTodos(newtodos);
  };
  return (
    <div className="app__wrapper" data-theme={theme}>
      <div className="app">
        <div className="app__header">
          <Header theme={theme} themeToggleHandler={themeToggleHandler} />
        </div>
        <div className="app__addtodo">
          <AddTodo addTodo={addTodo} />
        </div>
        <div className="app__body">
          <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="list">
              {(provided) => (
                <div ref={provided.innerRef} {...provided.droppableProps}>
                  <TodoList
                    todoList={todos}
                    todoActions={todoActions}
                    filter={filter}
                  />
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>
          <div className="app__footer">
            <div className="app__info">
              {todos.length > 0 ? `${todos.length} items left` : ""}
            </div>
            <div className="app__filter app__filter--pc">
              <TodoFilter filter={filter} changeFilter={changeFilter} />
            </div>
            <div className="app__clear">
              <button
                className="app__clear__button"
                onClick={() => clearCompletedHandler()}
              >
                Clear Completed
              </button>
            </div>
          </div>
        </div>
        <div className="app__filter app__filter--phone">
          <TodoFilter filter={filter} changeFilter={changeFilter} />
        </div>
        <div className="app__extra">Drag and drop to reorder list</div>
      </div>
    </div>
  );
}

export default App;
