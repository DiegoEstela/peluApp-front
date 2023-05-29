import axios from "axios";
import { revenuesUrl } from "../../../app/endpoints";

export async function createRevenue(data) {
  const body = {
    cliente_id: data.cliente_id,
    valor: data.valor,
    producto: data.product_id,
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