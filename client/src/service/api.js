import axios from 'axios';

// const API_URI = 'http://localhost:8000';
// const API_URI = https://fileshr.onrender.com

export const uploadFile = async (data) => {
    try {
        const response = await axios.post(`https://fileshr.onrender.com/upload`, data);
        return response.data;
    } catch (error) {
        console.log('Error while calling the API ', error.message);
    }
}
