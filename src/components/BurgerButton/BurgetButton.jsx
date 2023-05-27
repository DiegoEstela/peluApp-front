import { Burger } from "./styles";

function BurgetButton({ active, setActive }) {
  return (
    <Burger>
      <div
        className={`icon nav-icon-5 ${active ? "open" : ""}`}
        onClick={() => setActive(!active)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </Burger>
  );
}

export default BurgetButton;
