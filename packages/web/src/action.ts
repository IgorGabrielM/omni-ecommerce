import {ProductModel} from "./interfaces/Product.model";

export const loginUser = () => {
    return {
        type: 'login/loginUser'
    }
}

export const addProduct = (product: ProductModel) => {
    return {
        type: 'checkout/addProduct',
        product
    }
}
