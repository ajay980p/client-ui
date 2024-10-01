// utils/fetchUtils.js
import { apiRoutes } from "./apiRoute";

export const fetchFromAPI = async (endpoint: string, data: object = {}) => {
    const url = `${process.env.NEXT_PUBLIC_BACKEND_SERVICE}${endpoint}`;
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            throw new Error("API request failed");
        }

        return await response.json();
    } catch (error) {
        console.error("Error fetching from API:", error);
        return [];
    }
};

// Export specific functions
export const getAllProductsList = async (data = {}) => fetchFromAPI(apiRoutes.getAllProductsList, data);
export const getAllCategoriesList = async (data = {}) => fetchFromAPI(apiRoutes.getCategoryList, data);
export const getAllToppingsListById = async (data = {}) => fetchFromAPI(apiRoutes.getToppingsListById, data);