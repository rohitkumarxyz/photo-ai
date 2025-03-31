import { BACKEND_URL } from "@/app/config";
import axios from "axios";


export const getOldImages = async (token: string) => {
    const response = await axios.get(`${BACKEND_URL}/images/old`, {
        headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
};


export const getImage = async (token: string, id: string) => {
    const response = await axios.get(`${BACKEND_URL}/images/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
};

