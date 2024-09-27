import React from 'react'
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import HomePageImg from "@/public/assets/pizza_homepage_img.png";
import { Button } from '../ui/button';
import Image from 'next/image';

const pizzas = [
    { id: 1, name: "Margherita Pizza", price: 500, description: "This is very tasty pizza", image: "/placeholder.svg?height=200&width=200" },
    { id: 2, name: "Pepperoni Pizza", price: 600, description: "This is very tasty pizza", image: "/placeholder.svg?height=200&width=200" },
    { id: 3, name: "Vegetarian Pizza", price: 550, description: "This is very tasty pizza", image: "/placeholder.svg?height=200&width=200" },
    { id: 4, name: "Hawaiian Pizza", price: 580, description: "This is very tasty pizza", image: "/placeholder.svg?height=200&width=200" },
    { id: 5, name: "BBQ Chicken Pizza", price: 620, description: "This is very tasty pizza", image: "/placeholder.svg?height=200&width=200" },
    { id: 6, name: "Mushroom Pizza", price: 540, description: "This is very tasty pizza", image: "/placeholder.svg?height=200&width=200" },
    { id: 7, name: "Supreme Pizza", price: 650, description: "This is very tasty pizza", image: "/placeholder.svg?height=200&width=200" },
    { id: 8, name: "Four Cheese Pizza", price: 590, description: "This is very tasty pizza", image: "/placeholder.svg?height=200&width=200" },
]
const Body = () => {
    return (
        <main className="container py-8 p-10 xs:mt-16 mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between mb-12">
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

            <div className="mb-8">
                <div className="flex space-x-4 mb-4 overflow-x-auto pb-2">
                    <Button variant="ghost" className="text-orange-500">Pizza</Button>
                    <Button variant="ghost">Beverages</Button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {pizzas.map((pizza) => (
                        <Card key={pizza.id} className="overflow-hidden transition-all duration-300 hover:shadow-lg">
                            <CardContent className="p-4 flex flex-col items-center">
                                <div className="relative w-40 h-40 mb-4">
                                    <Image
                                        src={pizza.image}
                                        alt={pizza.name}
                                        layout="fill"
                                        objectFit="cover"
                                        className="rounded-full"
                                    />
                                </div>
                                <h3 className="text-lg font-semibold mb-2 text-center">{pizza.name}</h3>
                                <p className="text-gray-600 mb-2 text-center">{pizza.description}</p>
                                <p className="font-semibold text-gray-700">From ₹{pizza.price}</p>
                            </CardContent>
                            <CardFooter className="flex justify-center">
                                <Button variant="outline" className="w-full max-w-[200px] bg-orange-100 text-orange-500 hover:bg-orange-200 border-orange-200">Choose</Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </main>
    )
}

export default Body