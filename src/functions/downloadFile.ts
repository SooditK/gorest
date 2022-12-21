import axios from "axios";
import { baseUrl } from "../hooks/useUpdateUser";

export const downloadFile = async () => {
  const { data } = await axios.post(`${baseUrl}/getfile`);
  const url = window.URL.createObjectURL(new Blob([data]));
  const link = document.createElement("a");
  link.href = url;
  link.setAttribute("download", "file.csv");
  document.body.appendChild(link);
  link.click();
};
