import { toast } from "sonner";
import { errorMessage } from "../utils/helper";
import { ICategory } from "../interface/product";
import axios from "axios";
import { AppConfig } from "../config/app.config";

export const getCategory = async (url: string) => {
  try {
    const { data } = await axios.get(`${AppConfig.API_URL}/${url}`);
    return data as ICategory[];
  } catch (error) {
    toast.error(errorMessage(error));
  }
};
