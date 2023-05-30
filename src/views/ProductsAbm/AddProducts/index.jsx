import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { FormComponent, FormContainer, FooterBody } from "./styles";
import Swal from "sweetalert2";
import Loader from "../../../components/Loader";
import { CreateProduct } from "../../../api/services/products/createProduct";
import ButtonBack from "../../../components/ButtonBack";

function Products() {
  const [loader, setLoader] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    setLoader(true);
    const result = await CreateProduct(data);
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
      <ButtonBack ubication="abmProducts" />
      <FormComponent>
        <h1 className="title"> Agregar nuevo producto</h1>
        <div className="form_container">
          <div className="form_group">
            <input
              className="form_input"
              type="text"
              {...register("concepto", {
                required: true,
              })}
            />
            <label className="form_label">Nombre del producto</label>
            <span className="form_line"></span>
            {errors.concepto?.type === "required" && (
              <p className="warning">El nombre del producto es requerido</p>
            )}
          </div>
          <div className="form_group">
            <input
              className="form_input"
              type="number"
              {...register("precio", {
                required: true,
              })}
            />
            <label className="form_label">Precio</label>
            <span className="form_line"></span>
            {errors.concepto?.type === "required" && (
              <p className="warning">El valor del producto es requerido</p>
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

export default Products;
