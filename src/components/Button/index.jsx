import { ButtonComponent } from "./styles";

function Button({ text, color, size }) {
  return (
    <ButtonComponent color={color} size={size}>
      {text}
    </ButtonComponent>
  );
}

export default Button;
