import Toggle from "../Toggle/Toggle";

function Header(props) {
  return (
    <header className="header">
      <h1 className="header__title">Todo</h1>
      <Toggle
        theme={props.theme}
        themeToggleHandler={props.themeToggleHandler}
      />
    </header>
  );
}

export default Header;
