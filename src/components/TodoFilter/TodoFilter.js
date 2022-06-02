function TodoFilter(props) {
  const filter = props.filter;
  return (
    <div className="filter">
      <button
        onClick={() => props.changeFilter("all")}
        className={
          props.filter == "all"
            ? "filter__button filter__button--active"
            : "filter__button"
        }
      >
        All
      </button>
      <button
        onClick={() => props.changeFilter("active")}
        className={
          props.filter == "active"
            ? "filter__button filter__button--active"
            : "filter__button"
        }
      >
        Active
      </button>
      <button
        onClick={() => props.changeFilter("completed")}
        className={
          props.filter == "completed"
            ? "filter__button filter__button--active"
            : "filter__button"
        }
      >
        Completed
      </button>
    </div>
  );
}

export default TodoFilter;
