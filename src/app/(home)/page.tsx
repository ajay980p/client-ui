import Footer from "./components/Footer";
import Header from "./components/Header";
import Body from "./components/Body";
import { getAllProductsList, getAllCategoriesList } from "@/utils/router";

export default async function Home() {
    let products = [];
    let productCategories = [];

    try {
        const [productsResponse, categoriesResponse] = await Promise.all([
            getAllProductsList(),
            getAllCategoriesList()
        ]);

        products = productsResponse.data || [];
        productCategories = categoriesResponse.data || [];
    } catch (error) {
        console.error("Error fetching data for Home component:", error);
    }

    return (
        <>
            <div className="min-h-screen bg-white" >
                <Header />
                <Body products={products} productCategories={productCategories} />
                <Footer />
            </div>

        </>
    );
}
