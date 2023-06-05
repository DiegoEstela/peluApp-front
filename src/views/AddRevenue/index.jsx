import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useQuery } from "react-query";
import { getAllCustomers } from "../../api/services/customers/getAllCustomers";
import { getAllProducts } from "../../api/services/products/getAllProduts";
import Loader from "../../components/Loader";
import { FormComponent, FormContainer, FooterBody } from "./styles";
import Swal from "sweetalert2";
import { createRevenue } from "../../api/services/revenue/createRevenue";
import ButtonClosed from "../../components/ButtonClosed";

function AddRevenue() {
  const [loader, setLoader] = useState(false);
  const { data: customers, status } = useQuery("customers", getAllCustomers);
  const { data: products, isLoading } = useQuery("products", getAllProducts);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setLoader(true);
    const result = await createRevenue(data);
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

  const handleSelectChange = (prodId) => {
    const productSelected = products.data.find((prod) => prod.id === prodId);
    if (productSelected) {
      setValue("cliente_id", customers?.data[0].id);
      setValue("product_id", productSelected.id);
      setValue("valor", productSelected.precio);
    }
  };

  return (
    <FormContainer>
      <ButtonClosed />
      <FormComponent>
        {status === "error" && <div>Error al obtener los clientes</div>}
        <h1 className="title"> Ingresar nuevo corte</h1>
        <div className="form_container">
          <div className="form_group">
            <select className="form_input" {...register("cliente_id")}>
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
              onChange={(e) => handleSelectChange(parseInt(e.target.value))}
            >
              <option> Seleccionar</option>
              {products?.data.map((product) => (
                <option key={product.id} value={`${product.id}`}>
                  {product.concepto}
                </option>
              ))}
            </select>
            <label className="form_label">Producto</label>
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
            <label className="form_label">Valor</label>
            <span className="form_line"></span>
            {errors.valor?.type === "required" && (
              <p className="warning">Elija un producto para guardar</p>
            )}
          </div>
          <div className="form_group">
            <select className="form_input" {...register("medio_de_pago")}>
              <option> Seleccionar</option>
              <option> Efectivo</option>
              <option> Mercado pago</option>
              <option> Banco</option>
            </select>
            <label className="form_label">Medio de pago</label>
            <span className="form_line"></span>
          </div>
        </div>
      </FormComponent>
      <FooterBody>
        {loader | isLoading ? (
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

export default AddRevenue;
