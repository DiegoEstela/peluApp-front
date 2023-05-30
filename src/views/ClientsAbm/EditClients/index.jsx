import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useQuery } from "react-query";
import { getAllCustomers } from "../../../api/services/customers/getAllCustomers";
import Loader from "../../../components/Loader";
import { FormComponent, FormContainer } from "./styles";
import Swal from "sweetalert2";
import { EditCostumers } from "../../../api/services/customers/editCustumers";
import ButtonClosed from "../../../components/ButtonClosed";

function EditClients() {
  const [ClientId, setClientId] = useState();
  const [loader, setLoader] = useState(false);
  const { data: customers, status } = useQuery("customers", getAllCustomers);
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
  } = useForm();
  const onSubmit = async (data) => {
    setLoader(true);
    const result = await EditCostumers(data, ClientId);
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

  const handleValue = (id) => {
    const dataFinded = customers?.data.find(
      (customer) => customer.id === parseInt(id)
    );
    setClientId(id);
    setValue("nombre", dataFinded.nombre);
    setValue("apellido", dataFinded.apellido);
    setValue("telefono", dataFinded.telefono);
    setValue("fecha_nacimiento", dataFinded.fecha_nacimiento);
  };

  return (
    <FormContainer>
      <ButtonClosed />
      <FormComponent onSubmit={handleSubmit(onSubmit)}>
        {status === "error" && <div>Error al obtener los clientes</div>}
        <h1 className="title"> Editar Cliente</h1>
        <div className="form_container">
          <div className="form_group">
            <select
              className="form_input"
              onChange={(e) => handleValue(e.target.value)}
            >
              <option>Seleccionar</option>
              {customers?.data.map((customer) => (
                <option key={customer.id} value={`${customer.id}`}>
                  {customer.apellido} {customer.nombre}
                </option>
              ))}
            </select>
            <label className="form_label">Cliente</label>
            <span className="form_line"></span>
          </div>
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
              <span className="warning">El nombre es requerido</span>
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
              <span className="warning">El Apellido es requerido</span>
            )}
          </div>
          <div className="form_group">
            <input
              className="form_input"
              type="number"
              {...register("telefono", {
                required: true,
              })}
            />
            <label className="form_label">Telefono</label>
            <span className="form_line"></span>
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
          </div>

          {loader || status === "loading" ? (
            <Loader />
          ) : (
            <input className="form_submit" type="submit" value="Enviar" />
          )}
        </div>
      </FormComponent>
    </FormContainer>
  );
}

export default EditClients;
