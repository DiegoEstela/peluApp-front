import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { FormComponent, FormContainer, FooterBody } from "./styles";
import { CreateServices } from "../../../api/services/services/createService";
import Swal from "sweetalert2";
import ButtonBack from "../../../components/ButtonBack/index";
import Loader from "../../../components/Loader";

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
      <ButtonBack ubication="abmServices" />
      <FormComponent>
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
        </div>
      </FormComponent>
      <FooterBody>
        {loader ? (
          <Loader />
        ) : (
          <input
            className="form_submit"
            onClick={handleSubmit(onSubmit)}
            value="Agregar"
          />
        )}
      </FooterBody>
    </FormContainer>
  );
}

export default Services;
