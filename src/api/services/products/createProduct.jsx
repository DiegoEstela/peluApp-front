import axios from "axios";
import { productsUrl } from "../../../app/endpoints";

export async function CreateProduct(product) {
  const { concepto, precio } = product;
  try {
    const headers = {
      "Content-Type": "application/json",
    };

    const body = {
      concepto,
      precio,
    };
    await axios.post(productsUrl, body, {
      headers: headers,
    });
    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
}
