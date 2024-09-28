'use client'

import Image, { StaticImageData } from 'next/image'
import { useState } from 'react'
import { CheckIcon } from "lucide-react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import Chicken from "@/public/assets/chicken-leg.png";
import Mushroom from "@/public/assets/mushrooms.png";
import Cheese from "@/public/assets/cheese.png";
import { Button } from '../ui/button'
import { ShoppingCart } from 'lucide-react'

interface Topping {
    name: string;
    price: number;
    image: StaticImageData | string;
}
export default function ExtraToppings() {
    const [selectedToppings, setSelectedToppings] = useState<string[]>([])


    const toppings: Topping[] = [
        { name: 'Chicken', price: 50, image: Chicken },
        { name: 'Mushroom', price: 50, image: Mushroom },
        { name: 'Cheese', price: 50, image: Cheese },
    ]

    const handleToppingToggle = (toppingName: string) => {
        setSelectedToppings(prev =>
            prev.includes(toppingName)
                ? prev.filter(t => t !== toppingName)
                : [...prev, toppingName]
        )
    }

    const calculateTotal = () => {
        const basePrice = 400
        const toppingPrice = selectedToppings.length * 50
        return basePrice + toppingPrice
    }

    return (
        <div className="w-full max-w-md">
            <h3 className="text-lg font-semibold mb-2">Extra toppings</h3>

            <div className="grid grid-cols-3 gap-4">
                {toppings.map((topping) => (
                    <Card
                        key={topping.name}
                        className={`relative cursor-pointer transition-all ${selectedToppings.includes(topping.name)
                            ? 'border-2 border-orange-500'
                            : 'border border-gray-200'
                            }`}
                        onClick={() => handleToppingToggle(topping.name)}
                    >
                        <CardContent className="p-4 flex flex-col items-center">
                            {selectedToppings.includes(topping.name) && (
                                <div className="absolute top-2 right-2 bg-orange-500 rounded-full p-1">
                                    <CheckIcon className="h-4 w-4 text-white" />
                                </div>
                            )}
                            <Image
                                src={topping.image}
                                alt={topping.name}
                                width={60}
                                height={60}
                                className="rounded-full mb-2"
                            />
                            <span className="text-sm font-medium">{topping.name}</span>
                            <span className="text-sm text-gray-600">₹{topping.price}</span>
                        </CardContent>
                    </Card>
                ))}
            </div>

            <CardFooter className="flex justify-between mt-5 p-0">
                <span className="text-2xl font-bold">₹{calculateTotal()}</span>
                <Button className='flex items-center space-x-1.5'>
                    <ShoppingCart className='h-5 w-5' />
                    <span>Add to cart</span>
                </Button>

            </CardFooter>
        </div>
    )
}