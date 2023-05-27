import axios from "axios";
import { createCostumersUrl } from "../../app/endpoints";

export async function CreateCostumer(costumer) {
  const { nombre, apellido, fecha_nacimiento, telefono } = costumer;
  try {
    const headers = {
      "Content-Type": "application/json",
    };

    const body = {
      nombre,
      apellido,
      fecha_nacimiento,
      telefono,
    };
    await axios.post(createCostumersUrl, body, {
      headers: headers,
    });
    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
}
