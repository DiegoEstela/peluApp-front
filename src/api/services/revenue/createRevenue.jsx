import axios from "axios";
import { revenuesUrl } from "../../../app/endpoints";

export async function createRevenue(customerId, data, productId) {
  const body = {
    cliente_id: customerId,
    valor: data,
    producto: productId,
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
