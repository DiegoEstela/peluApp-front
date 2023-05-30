import styled from "styled-components";

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export const FooterBody = styled.div`
  position: fixed;
  bottom: 18vh;
  .form_submit {
    text-align: center;
    width: 140px;
    height: 32px;
    background: #9db4c0;
    color: #fff;
    font-family: "Roboto", sans-serif;
    padding: 8px;
    font-size: 1rem;
    border: none;
    border-radius: 10px;
    :hover {
      cursor: pointer;
    }
  }
`;

export const FormComponent = styled.form`
margin: auto;
  width: 80%;
  max-width: 370px;

  @media (max-width: 768px) {
    height: 100%;
    padding: 0;
    border-radius: 0;
    box-shadow: none;
  }
 
 
  .title {
    font-size: 1.2rem;
  }
  .form_container {
    margin-top: 32px;
    display: grid;
    gap: 3em;
    @media (max-width: 768px) {
      margin-top: 16px;
    display: grid;
    gap: 1em;
  }
  }

  .form_group {
    position: relative;
  }

  
  .form_input {
    width: 100%;
    background: none;
    color: #5c6b73;
    font-size: 1rem;
    padding-top: 16px;
    border: none;
    outline: none;
    border-bottom: 1px solid #9db4c0;
    font-family: "Roboto", sans-serif;

  }

  .form_label {
    color: #9db4c0;
    cursor: pointer;
    position: absolute;
    top: -5px;
    left: 1px;
  }

  
    .form_line{
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 1px;
        transform: scale(0)
        transform: left bottom;
        transition: transform .4s;
  }

  .warning{
    margin: 0;
    padding: 0;
    color: red;
  }

`;
