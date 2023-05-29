import axios from "axios";
import { servicesUrl } from "../../../app/endpoints";

export const getAllServices = async () => {
  try {
    const response = await axios.get(servicesUrl);
    return response;
  } catch (error) {
    console.error("Error al obtener los servicios:", error);
  }
};
