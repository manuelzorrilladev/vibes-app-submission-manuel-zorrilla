import axiosSetup from './axiosSetup';

const getAllProducts = () => {
     return axiosSetup.get("/products/all");
};
const getFilteredObjects = (form) => {
     console.log(form);
     return axiosSetup.get("/products/", { params: form })

};

export default {
     getAllProducts, getFilteredObjects
};
