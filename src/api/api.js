import React from "react";
import axios from 'axios';

const api = (configuration) => {
    return axios.create(configuration)
};
export default api;

