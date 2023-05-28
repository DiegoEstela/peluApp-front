import axios from "axios";
import { servicesUrl } from "../../../app/endpoints";

export async function CreateServices(service) {
  const { concepto } = service;
  try {
    const headers = {
      "Content-Type": "application/json",
    };

    const body = {
      concepto,
    };
    await axios.post(servicesUrl, body, {
      headers: headers,
    });
    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
}
