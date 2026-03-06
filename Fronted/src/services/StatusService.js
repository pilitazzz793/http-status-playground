const API_URL = "http://localhost:3000/status";

export const getStatus = async()=>{
    const response = await fetch(API_URL);
    const data = await response.json();
    return data;
};