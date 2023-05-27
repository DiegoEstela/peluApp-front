import { ButtonContainer, ButtonComponent } from "./styles";

function Button({ text, color, size }) {
  return (
    <ButtonContainer>
      <ButtonComponent color={color} size={size}>
        {text}
      </ButtonComponent>
    </ButtonContainer>
  );
}

export default Button;
