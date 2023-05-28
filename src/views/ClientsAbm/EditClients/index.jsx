import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useQuery } from "react-query";
import { getAllCustomers } from "../../../api/services/customers/getAllCustomers";
import Loader from "../../../components/Loader";
import { FormComponent, FormContainer } from "./styles";
import Spacer from "../../../components/Spacer";
import Swal from "sweetalert2";
import { EditCostumers } from "../../../api/services/customers/editCustumers";

function EditClients() {
  const [defaultValues, setDefaultValues] = useState();
  const [loader, setLoader] = useState(false);
  const { data: customers, status } = useQuery("customers", getAllCustomers);
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = async (data) => {
    setLoader(true);
    const result = await EditCostumers(data, defaultValues?.id);
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
    const body = {
      id,
      nombre: dataFinded.nombre,
      apellido: dataFinded.apellido,
      telefono: dataFinded.telefono,
      fecha_nacimiento: dataFinded.fecha_nacimiento,
    };

    setDefaultValues(body);
  };

  return (
    <FormContainer>
      {status === "loading" && <Loader />}
      {loader && <Loader />}
      {status === "error" && <div>Error al obtener los clientes</div>}
      <FormComponent onSubmit={handleSubmit(onSubmit)}>
        <h1 className="title"> Editar Cliente</h1>
        <div className="form_container">
          <div className="form_group">
            <select
              className="form_input"
              onChange={(e) => handleValue(e.target.value)}
            >
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
              defaultValue={defaultValues?.nombre || ""}
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
              defaultValue={defaultValues?.apellido || ""}
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
              defaultValue={defaultValues?.telefono || ""}
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
              defaultValue={defaultValues?.fecha_nacimiento || ""}
              className="form_input"
              type="date"
              {...register("fecha_nacimiento", {
                required: true,
              })}
            />
            <label className="form_label">Nacimiento</label>
            <span className="form_line"></span>
          </div>
          <Spacer height="5vh" />
          <input className="form_submit" type="submit" value="Enviar" />
        </div>
      </FormComponent>
    </FormContainer>
  );
}

export default EditClients;
