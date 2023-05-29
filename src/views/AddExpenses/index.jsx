import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { FormComponent, FormContainer } from "./styles";
import { useQuery } from "react-query";
import Spacer from "../../components/Spacer";
import Swal from "sweetalert2";
import Loader from "../../components/Loader";
import ButtonClosed from "../../components/ButtonClosed";
import { getAllServices } from "../../api/services/services/getAllServices";
import { createExpense } from "../../api/services/expense/createExpense";

function AddExpense() {
  const { data: services, isLoading } = useQuery("services", getAllServices);
  const [serviceId, setServiceId] = useState(1);
  const [loader, setLoader] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = async (data) => {
    setLoader(true);
    const result = await createExpense(serviceId, data?.valor);
    if (result) {
      setLoader(false);
      const creacionOk = await Swal.fire(
        "Creacion Exitosa",
        "El producto se creo correctamente",
        "success"
      );
      creacionOk && navigate("/");
    } else {
      setLoader(false);
      await Swal.fire(
        "Creacion Fallida",
        "Error al cargar el producto",
        "error"
      );
    }
  };
  return (
    <FormContainer>
      <ButtonClosed />
      <FormComponent onSubmit={handleSubmit(onSubmit)}>
        <h1 className="title"> Agregar Gasto</h1>
        <div className="form_container">
          <div className="form_group">
            <select
              className="form_input"
              onChange={(e) => setServiceId(parseInt(e.target.value))}
            >
              {services?.data.map((service) => (
                <option key={service.id} value={`${service.id}`}>
                  {service.concepto}
                </option>
              ))}
            </select>
            <label className="form_label">Servicio</label>
            <span className="form_line"></span>
          </div>
          <div className="form_group">
            <input
              className="form_input"
              type="number"
              {...register("valor", {
                required: true,
              })}
            />
            <label className="form_label">Valor del gasto</label>
            <span className="form_line"></span>
            {errors.concepto?.type === "required" && (
              <p className="warning">El valor del gasto es requerido</p>
            )}
          </div>
          <Spacer height="20vh" />
          {loader | isLoading ? (
            <Loader />
          ) : (
            <input className="form_submit" type="submit" value="Cargar" />
          )}
        </div>
      </FormComponent>
    </FormContainer>
  );
}

export default AddExpense;
