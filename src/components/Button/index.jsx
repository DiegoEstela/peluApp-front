import { ButtonContainer, ButtonComponent } from "./styles";

function Button({ text, color }) {
  return (
    <ButtonContainer>
      <ButtonComponent color={color}>{text}</ButtonComponent>
    </ButtonContainer>
  );
}

export default Button;
