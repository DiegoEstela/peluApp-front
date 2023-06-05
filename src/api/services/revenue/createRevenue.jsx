import axios from "axios";
import { revenuesUrl } from "../../../app/endpoints";

export async function createRevenue(data, userId) {
  const { idCliente, idProducto, monto, metodoPago } = data;
  const body = {
    idUsuario: userId,
    idProducto,
    idCliente,
    monto,
    metodoPago,
  };

  try {
    const headers = {
      "Content-Type": "application/json",
    };

    await axios.post(revenuesUrl, body, {
      headers: headers,
    });
    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
}
