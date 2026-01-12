import axios, { AxiosInstance } from "axios"

const pollinationsBaseUrl = "https://gen.pollinations.ai/v1"

const instance: AxiosInstance = axios.create({
    baseURL: pollinationsBaseUrl,
    headers: {
        "Content-Type": "application/json",
    },
})

export default instance
