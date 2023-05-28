import styled from "styled-components";

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export const FormComponent = styled.form`
  margin: auto;
  width: 80%;
  max-width: 370px;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 5px 10px -3px rgb(0 0 0 / 80%);

  .title {
    font-size: 1.5rem;
  }
  .form_container {
    margin-top: 3em;
    display: grid;
    gap: 1.5em;
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
  .form_submit{
    background: #9db4c0;
    color: #fff;
    font-family: "Roboto", sans-serif;
    margin: 0px 30px;
    padding: 8px;
    font-size: 1rem;
    border: none;
    border-radius: 10px; 
    :hover{
        cursor: pointer
    }
    .form_line{
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 1px;
        background-color: red;
        transform: scale(0)
        transform: left bottom;
        transition: transform .4s;

    }

  }

  .warning{
    color: red;
  }


`;
