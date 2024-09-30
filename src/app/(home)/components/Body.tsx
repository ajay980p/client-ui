'use client'

import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import { Button } from '../../../components/ui/button';
import ChoosePizzaTopping from '../../../components/custom/choosePizzaTopping';
import HomePageImg from "@/public/assets/pizza_homepage_img.png";
import { Card, CardContent, CardFooter } from "@/components/ui/card"


const Body = ({ products, productCategories }: { products: any, productCategories: any }) => {
    const [isOpenToppingsCard, setIsOpenToppingsCard] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const [filteredProducts, setFilteredProducts] = useState(products);

    useEffect(() => {
        if (selectedCategory) {
            const filtered = products.filter((product: any) => product.categoryId === selectedCategory);
            setFilteredProducts(filtered);
        } else {
            setFilteredProducts(products);
        }
    }, [selectedCategory, products]);

    console.log("products", products);

    return (
        <main className="container py-5 xs:mt-16 mx-auto">

            <div className="flex flex-col md:flex-row items-center justify-between bg-white xs:p-0 lg:p-10">
                <div className="md:w-1/2 mb-8 md:mb-0">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">
                        Super Delicious Pizza in
                        <span className="text-orange-500"> Only 45 Minutes!</span>
                    </h1>
                    <p className="text-gray-600 mb-6">Enjoy a Free Meal if Your Order Takes More Than 45 Minutes!</p>
                    <Button className="bg-orange-500 text-white hover:bg-orange-600">Get your pizza now</Button>
                </div>
                <div className="md:w-1/2">
                    <Image src={HomePageImg} alt="Delicious Pizza" width={400} height={400} className="rounded-full bg-transparent" />
                </div>
            </div>

            <div className="mb-8 xs:p-0 sm:p-0 lg:p-10">
                <div className="flex space-x-4 mb-4 overflow-x-auto pb-2">
                    <Button
                        variant="ghost"
                        onClick={() => setSelectedCategory(null)}
                        className={selectedCategory === null ? "text-orange-500 font-bold" : ""}
                    >
                        All
                    </Button>
                    {productCategories.map((item: any) => (
                        <Button
                            key={item._id}
                            variant="ghost"
                            onClick={() => setSelectedCategory(item._id)}
                            className={selectedCategory === item._id ? "text-orange-500 font-bold" : ""}
                        >
                            {item.name}
                        </Button>
                    ))}
                </div>

                {/* Products Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 min-h-[370px]">
                    {filteredProducts.map((item: any) => (
                        <Card key={item._id} className="overflow-hidden transition-all duration-300 hover:shadow-lg">
                            <CardContent className="p-4 flex flex-col items-center">
                                <div className="relative w-40 h-40 mb-4">
                                    <Image
                                        src={item.image}
                                        alt={item.name}
                                        layout="fill"
                                        objectFit="contain"
                                        className="rounded-full"
                                    />
                                </div>
                                <h3 className="text-lg font-semibold mb-2 text-center">{item.name}</h3>
                                <p className="text-gray-600 mb-2 text-center">{(item.description).slice(0, 30) + "..."}</p>
                                <p className="font-semibold text-gray-700">From ₹{item.priceConfiguration.size.availableOptions.Small}</p>
                            </CardContent>
                            <CardFooter className="flex justify-center">
                                <Button variant="outline" className="w-full max-w-[200px] bg-orange-100 text-orange-500 hover:bg-orange-200 border-orange-200" onClick={() => setIsOpenToppingsCard(true)}>Choose</Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>

            {
                isOpenToppingsCard && <ChoosePizzaTopping products={products} isModalOpen={isOpenToppingsCard} setIsModalOpen={setIsOpenToppingsCard} />
            }
        </main>
    )
}

export default Body