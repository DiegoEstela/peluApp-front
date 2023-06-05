import { useContext, useState } from "react";
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
import { AuthContext } from "../../context/AuthProvider";
import { getUserData } from "../../api/services/services/getUserData";

function AddRevenue() {
  const [loader, setLoader] = useState(false);
  const { data: customers, status } = useQuery("customers", getAllCustomers);
  const { data: products, isLoading } = useQuery("products", getAllProducts);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setLoader(true);
    const userData = await getUserData(user?.uid);
    const result = await createRevenue(data, userData?.userId);
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
    const productSelected = products.data.find(
      (prod) => prod.idproducto === prodId
    );
    if (productSelected) {
      setValue("idCliente", customers?.data[0].idcliente);
      setValue("idProducto", productSelected.idproducto);
      setValue("monto", productSelected.monto);
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
            <select className="form_input" {...register("idCliente")}>
              {customers?.data.map((customer) => (
                <option
                  key={customer.idcliente}
                  value={`${customer.idcliente}`}
                >
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
                <option
                  key={product.idproducto}
                  value={`${product.idproducto}`}
                >
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
              {...register("monto", {
                required: true,
              })}
            />
            <label className="form_label">Monto</label>
            <span className="form_line"></span>
            {errors.monto?.type === "required" && (
              <p className="warning">Elija un producto para guardar</p>
            )}
          </div>
          <div className="form_group">
            <select className="form_input" {...register("metodoPago")}>
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
