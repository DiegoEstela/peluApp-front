import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useQuery } from "react-query";
import { getAllCustomers } from "../../api/services/customers/getAllCustomers";
import { getAllProducts } from "../../api/services/products/getAllProduts";
import Loader from "../../components/Loader";
import { FormComponent, FormContainer } from "./styles";
import Swal from "sweetalert2";
import Spacer from "../../components/Spacer";
import { createRevenue } from "../../api/services/revenue/createRevenue";

function AddRevenue() {
  const [customerId, setCustomerId] = useState();
  const [productId, setProductId] = useState();
  const [precio, setPrecio] = useState();
  const [loader, setLoader] = useState(false);
  const { data: customers, status } = useQuery("customers", getAllCustomers);
  const { data: products, isLoading } = useQuery("products", getAllProducts);
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    setLoader(true);
    const result = await createRevenue(customerId, data?.valor, productId);
    if (result) {
      setLoader(false);
      const creacionOk = await Swal.fire(
        "Creacion Exitosa",
        "El corte se agrego correctamente",
        "success"
      );
      creacionOk && navigate("/");
    } else {
    }
  };

  const handleValuePrecio = async (id) => {
    const productFinded = products?.data.find((product) => product.id === id);
    setPrecio(productFinded.precio);
    setProductId(id);
  };

  return (
    <FormContainer>
      {status === "loading" && <Loader />}
      {loader && <Loader />}
      {status === "error" && <div>Error al obtener los clientes</div>}
      <FormComponent onSubmit={handleSubmit(onSubmit)}>
        <h1 className="title"> Ingresar nuevo corte</h1>
        <div className="form_container">
          <div className="form_group">
            <select
              className="form_input"
              onChange={(e) => setCustomerId(parseInt(e.target.value))}
            >
              {customers?.data.map((customer) => (
                <option key={customer.id} value={`${customer.id}`}>
                  {customer.nombre} {customer.apellido}
                </option>
              ))}
            </select>
            <label className="form_label">Cliente</label>
            <span className="form_line"></span>
          </div>
          <div className="form_group">
            <select
              className="form_input"
              onChange={(e) => handleValuePrecio(parseInt(e.target.value))}
            >
              {products?.data.map((product) => (
                <option key={product.id} value={`${product.id}`}>
                  {product.concepto}
                </option>
              ))}
            </select>
            <label className="form_label">Producto</label>
            <span className="form_line"></span>
          </div>
          {isLoading ? (
            <Loader />
          ) : (
            <div className="form_group">
              <input
                className="form_input"
                type="number"
                defaultValue={precio || ""}
                {...register("valor", {
                  required: true,
                })}
              />
              <label className="form_label">Valor</label>
              <span className="form_line"></span>
            </div>
          )}

          <Spacer height="5vh" />
          <input className="form_submit" type="submit" value="Enviar" />
        </div>
      </FormComponent>
    </FormContainer>
  );
}

export default AddRevenue;
