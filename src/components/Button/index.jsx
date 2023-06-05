import { ButtonContainer, ButtonComponent } from "./styles";

function Button({ text, color, onClick }) {
  return (
    <ButtonContainer>
      <ButtonComponent onClick={onClick} color={color}>
        {text}
      </ButtonComponent>
    </ButtonContainer>
  );
}

export default Button;
