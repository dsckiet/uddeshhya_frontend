import axios from "axios";
import { indexAPI } from "./api";

export const getIndexData = () => axios.get(indexAPI).then(res => res.data);
