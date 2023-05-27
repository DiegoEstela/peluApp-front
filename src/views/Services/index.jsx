import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { FormComponent, FormContainer } from "./styles";
import { CreateServices } from "../../api/services/createService";
import Spacer from "../../components/Spacer";
import Swal from "sweetalert2";
import Loader from "../../components/Loader";

function Services() {
  const [loader, setLoader] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = async (data) => {
    setLoader(true);
    const result = await CreateServices(data);
    if (result) {
      setLoader(false);
      const creacionOk = await Swal.fire(
        "Creacion Exitosa",
        "El servicio se creo correctamente",
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
      {loader ? (
        <Loader />
      ) : (
        <FormComponent onSubmit={handleSubmit(onSubmit)}>
          <h1 className="title"> Agregar nuevo Servicio</h1>
          <div className="form_container">
            <div className="form_group">
              <input
                className="form_input"
                type="text"
                {...register("concepto", {
                  required: true,
                })}
              />
              <label className="form_label">Nombre del servicio</label>
              <span className="form_line"></span>
              {errors.concepto?.type === "required" && (
                <p className="warning">El nombre es requerido</p>
              )}
            </div>
            <Spacer height="5vh" />
            <input className="form_submit" type="submit" value="Cargar" />
          </div>
        </FormComponent>
      )}
    </FormContainer>
  );
}

export default Services;
