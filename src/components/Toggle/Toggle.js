function Toggle(props) {
  const src = `./assets/icon-${props.theme === "light" ? "moon" : "sun"}.svg`;
  const clickHandler = () => {
    props.themeToggleHandler();
  };
  return (
    <button className="toggle" onClick={clickHandler}>
      <img className="toggle__icon" src={src} alt="theme changing icon" />
    </button>
  );
}

export default Toggle;
