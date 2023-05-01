import { baseURL } from "./baseURL";
import axios from "axios";

const instance = axios.create({
  baseURL: baseURL,
});
export const getDatas = async () => {
  return await instance.get();
};
