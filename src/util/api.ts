import axios from "axios"
import { baseurl } from "./baseurl"

export const API = axios.create({
  baseURL: baseurl,
})
