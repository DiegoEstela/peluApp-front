import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { FormComponent, FormContainer, FooterBody } from "./styles";
import { CreateCostumer } from "../../../api/services/customers/createCustomer";
import Swal from "sweetalert2";
import Loader from "../../../components/Loader";
import ButtonBack from "../../../components/ButtonBack";
import { AuthContext } from "../../../context/AuthProvider";
import { getUserData } from "../../../api/services/services/getUserData";

function Clients() {
  const [loader, setLoader] = useState(false);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = async (data) => {
    setLoader(true);
    const userData = await getUserData(user?.uid);
    const result = await CreateCostumer(data, userData?.userId);
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
      <ButtonBack ubication="abmClients" />
      <FormComponent>
        <h1 className="title"> Agregar Nuevo Cliente</h1>
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
              <p className="warning">
                El numero ingresado no puede superar los 10 digitos
              </p>
            )}
            {errors.telefono?.type === "minLength" && (
              <p className="warning">el numero debe comenzar en 11</p>
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
              <p className="warning">Complete la fecha de nacimiento</p>
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
            value="Crear"
          />
        )}
      </FooterBody>
    </FormContainer>
  );
}

export default Clients;
