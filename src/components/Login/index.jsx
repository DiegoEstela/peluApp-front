import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../app/db";
import { FormComponent, FormContainer, FooterBody } from "./styles";
import Swal from "sweetalert2";
import Loader from "../Loader";

function Login() {
  const [loader, setLoader] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      setLoader(true);
      const { email, password } = data;
      const result = await signInWithEmailAndPassword(auth, email, password);
      if (result) {
        setLoader(false);
        const creacionOk = await Swal.fire(
          "Bienvenido",
          "Inicio de sesión exitoso",
          "success"
        );
        creacionOk && navigate("/");
      }
    } catch (err) {
      setLoader(false);
      await Swal.fire(
        "El Usuario no existe",
        "Error al iniciar sesión",
        "error"
      );
    }
  };

  return (
    <FormContainer>
      <h1 className="title">Login</h1>
      <FormComponent>
        <div className="form_container">
          <div className="form_group">
            <input
              className="form_input"
              type="text"
              {...register("email", {
                required: true,
              })}
            />
            <label className="form_label">Email</label>
            <span className="form_line"></span>
            {errors.email?.type === "required" && (
              <p className="warning">El email es requerido</p>
            )}
          </div>
          <div className="form_group">
            <input
              className="form_input"
              type="password"
              {...register("password", {
                required: true,
              })}
            />
            <label className="form_label">Password</label>
            <span className="form_line"></span>
            {errors.password?.type === "required" && (
              <p className="warning">El password es requerido</p>
            )}
          </div>
        </div>
      </FormComponent>
      <FooterBody>
        {loader ? (
          <Loader />
        ) : (
          <input
            className="form_submit"
            onClick={handleSubmit(onSubmit)}
            value="Iniciar Sesion"
          />
        )}
      </FooterBody>
    </FormContainer>
  );
}

export default Login;
