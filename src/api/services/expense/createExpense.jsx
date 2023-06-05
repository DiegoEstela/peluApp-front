import axios from "axios";
import { expensesUrl } from "../../../app/endpoints";

export async function createExpense(servicio_id, data, userId) {
  const { monto, medio_de_pago } = data;
  const body = {
    idUsuario: userId,
    idServicio: servicio_id,
    monto,
    metodoPago: medio_de_pago,
  };

  try {
    const headers = {
      "Content-Type": "application/json",
    };

    await axios.post(expensesUrl, body, {
      headers: headers,
    });
    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
}
