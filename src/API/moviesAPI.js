import axios from "axios";

export default axios.create({
    baseURL: 'https://moviestrailers-app.netlify.app/'
});