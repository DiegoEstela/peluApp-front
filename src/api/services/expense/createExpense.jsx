import axios from "axios";
import { expensesUrl } from "../../../app/endpoints";

export async function createExpense(servicio_id, valor) {
  const body = {
    servicio_id,
    valor,
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
