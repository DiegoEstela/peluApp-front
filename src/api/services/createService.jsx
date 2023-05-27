import axios from "axios";
import { createServicesUrl } from "../../app/endpoints";

export async function CreateServices(service) {
  const { concepto } = service;
  try {
    const headers = {
      "Content-Type": "application/json",
    };

    const body = {
      concepto,
    };
    await axios.post(createServicesUrl, body, {
      headers: headers,
    });
    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
}
