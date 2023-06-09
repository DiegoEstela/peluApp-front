import axios from "axios";
import { customersUrl } from "../../../app/endpoints";

export async function CreateCostumer(costumer, userId) {
  const { nombre, apellido, fecha_nacimiento, telefono } = costumer;
  try {
    const headers = {
      "Content-Type": "application/json",
    };

    const body = {
      idUsuario: userId,
      nombre,
      apellido,
      fecha_nacimiento,
      telefono,
    };

    console.log(body);
    await axios.post(customersUrl, body, {
      headers: headers,
    });
    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
}
