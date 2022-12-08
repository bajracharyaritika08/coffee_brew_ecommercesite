import React from "react";
import ApiService from './methods'

export const productService = () =>
    new Promise(async(resolve, reject) => {
        ApiService.get('/getproduct')
            .then(data => {
                resolve(data);
            })
            .catch(error => {
                reject(error);
            });
    });