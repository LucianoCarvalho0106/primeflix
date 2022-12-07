import axios from "axios"

//base url https://api.themoviedb.org/3/
// /movie/now_playing?api_key=63bee72475f8fa4dc04ee795ffdefc7a

const api = axios.create({
    baseURL: "https://api.themoviedb.org/3/"
})

export default api