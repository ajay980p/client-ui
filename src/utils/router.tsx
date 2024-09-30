// utils/fetchUtils.js
import { apiRoutes } from "./apiRoute";

export const fetchFromAPI = async (endpoint: string) => {
    const url = `${process.env.NEXT_PUBLIC_BACKEND_CATALOG_SERVICE}${endpoint}`;
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({})
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
export const getAllProductsList = async () => fetchFromAPI(apiRoutes.getAllProductsList);
export const getAllCategoriesList = async () => fetchFromAPI(apiRoutes.getCategoryList);