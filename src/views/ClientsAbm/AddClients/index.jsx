import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { FormComponent, FormContainer } from "./styles";
import { CreateCostumer } from "../../../api/services/customers/createCustomer";
import Spacer from "../../../components/Spacer";
import Swal from "sweetalert2";
import Loader from "../../../components/Loader";
import ButtonClosed from "../../../components/ButtonClosed";

function Clients() {
  const [loader, setLoader] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = async (data) => {
    setLoader(true);
    const result = await CreateCostumer(data);
    if (result) {
      setLoader(false);
      const creacionOk = await Swal.fire(
        "Creacion Exitosa",
        "El cliente se creo correctamente",
        "success"
      );
      creacionOk && navigate("/");
    } else {
      setLoader(false);
      await Swal.fire("Creacion Fallida", "Error al crear el usuario", "error");
    }
  };
  return (
    <FormContainer>
      <ButtonClosed />
      <FormComponent onSubmit={handleSubmit(onSubmit)}>
        <h1 className="title"> Agregar nuevo Cliente</h1>
        <div className="form_container">
          <div className="form_group">
            <input
              className="form_input"
              type="text"
              {...register("nombre", {
                required: true,
              })}
            />
            <label className="form_label">Nombre</label>
            <span className="form_line"></span>
            {errors.nombre?.type === "required" && (
              <p className="warning">El nombre es requerido</p>
            )}
          </div>
          <div className="form_group">
            <input
              className="form_input"
              type="text"
              {...register("apellido", {
                required: true,
              })}
            />
            <label className="form_label">Apellido</label>
            <span className="form_line"></span>
            {errors.apellido?.type === "required" && (
              <p className="warning">El Apellido es requerido</p>
            )}
          </div>
          <div className="form_group">
            <input
              className="form_input"
              defaultValue="11"
              type="numer"
              {...register("telefono", {
                required: true,
                maxLength: 10,
                minLength: 10,
              })}
            />
            <label className="form_label">Telefono</label>
            <span className="form_line"></span>
            {errors.telefono?.type === "maxLength" && (
              <span className="warning">
                El numero ingresado no puede superar los 10 digitos
              </span>
            )}
            {errors.telefono?.type === "minLength" && (
              <span className="warning">
                Recuerde que el numero debe comenzar en 11
              </span>
            )}
          </div>
          <div className="form_group">
            <input
              className="form_input"
              type="date"
              {...register("fecha_nacimiento", {
                required: true,
              })}
            />
            <label className="form_label">Nacimiento</label>
            <span className="form_line"></span>
            {errors.fecha_nacimiento?.type === "required" && (
              <span className="warning">Complete la fecha de nacimiento</span>
            )}
          </div>
          <Spacer height="5vh" />
          {loader ? (
            <Loader />
          ) : (
            <input className="form_submit" type="submit" value="Enviar" />
          )}
        </div>
      </FormComponent>
    </FormContainer>
  );
}

export default Clients;
