import { API } from "../util/api"

export const fetcher = (url) => API.get(url).then((res) => res.data)
