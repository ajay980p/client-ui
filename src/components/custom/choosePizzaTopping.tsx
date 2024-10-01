'use client'

import Image from 'next/image'
import { Suspense, useEffect, useState } from 'react'
import { CardContent } from "@/components/ui/card"
import { RadioGroup } from "@/components/ui/radio-group"
import HomePageImg from "@/public/assets/pizza_homepage_img.png";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import PizzaCard from './pizzaCard';
import { getAllToppingsListById } from '@/utils/router'
// import ExtraToppings from './ExtraToppings';

export default function ChoosePizzaTopping({ product, isModalOpen, setIsModalOpen }: { product: any, isModalOpen: boolean, setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>> }) {
    // State for selections for size, crust, and toppings
    const [size, setSize] = useState<string>('');
    const [crust, setCrust] = useState<string>('');
    const [toppings, setToppings] = useState<any[]>([]);

    useEffect(() => {
        getToppingDetails();
    }, [])
    const getToppingDetails = async () => {
        const response = await getAllToppingsListById({ tenantId: 10 })
        setToppings(response.data);
    }

    const priceConfiguration = product?.priceConfiguration || {};

    // Function to calculate the total price
    // const calculateTotal = () => {
    //     let basePrice = 0;

    //     // Get the base price based on the selected size
    //     if (size && priceConfiguration.size) {
    //         basePrice = priceConfiguration.size.availableOptions[size];
    //     }

    //     // Add the price of the crust if selected
    //     let crustPrice = 0;
    //     if (crust && priceConfiguration.crust) {
    //         crustPrice = priceConfiguration.crust.availableOptions[crust];
    //     }

    //     // Calculate the price of the selected toppings
    //     const toppingPrice = selectedToppings.length * 50;

    //     return basePrice + crustPrice + toppingPrice;
    // };

    return (
        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
            <DialogContent className="sm:max-w-[700px]">
                <div className="flex flex-col md:flex-row">

                    {/* Left section with Pizza image */}
                    <div className="flex justify-center items-center md:w-[40%]">
                        <Image src={product.image || HomePageImg} alt="Pizza" width={200} height={200} className="p-0 m-0 object-contain max-w-[100%] max-h-[100%] rounded-lg" />
                    </div>

                    {/* Right section with selection options */}
                    <div className="md:w-[60%] p-1">
                        <DialogHeader className='p-0'>
                            <DialogTitle className="text-left text-2xl font-bold text-orange-500">{product.name}</DialogTitle>
                            <p className="text-sm text-muted-foreground">{product.description}</p>
                        </DialogHeader>

                        <CardContent className='p-0 m-0'>
                            {Object.entries(priceConfiguration).map(([configKey, configValue]) => {
                                const availableOptions = (configValue as any).availableOptions;

                                return (
                                    <div className="my-4" key={configKey}>
                                        <h3 className="mb-2 font-semibold">Choose the {configKey}</h3>
                                        <RadioGroup
                                            defaultValue=""
                                            onValueChange={(selectedValue) => {
                                                if (configKey === 'size') {
                                                    setSize(selectedValue);
                                                } else if (configKey === 'crust') {
                                                    setCrust(selectedValue);
                                                }
                                            }}
                                            className="flex flex-wrap -ml-2"
                                        >
                                            {Object.entries(availableOptions).map(([optionKey, optionValue]) => (
                                                <Button
                                                    key={optionKey}
                                                    className={(configKey === 'size' && size === optionKey) || (configKey === 'crust' && crust === optionKey) ? '' : 'bg-white'}
                                                    variant={(configKey === 'size' && size === optionKey) || (configKey === 'crust' && crust === optionKey) ? 'default' : 'outline'}
                                                    onClick={() => {
                                                        if (configKey === 'size') {
                                                            setSize(optionKey);
                                                        } else if (configKey === 'crust') {
                                                            setCrust(optionKey);
                                                        }
                                                    }}
                                                >
                                                    {optionKey} - ₹{optionValue}
                                                </Button>
                                            ))}
                                        </RadioGroup>
                                    </div>
                                );
                            })}

                            <Separator className="my-4" />

                            <Suspense fallback={<div>Loading...</div>}>
                                <PizzaCard toppings={toppings} />
                            </Suspense>

                            {/* Display the total price */}
                            {/* <div className="flex justify-between items-center">
                                <span className="text-2xl font-bold">Total: ₹{calculateTotal()}</span>
                                <Button className='flex items-center space-x-1.5'>
                                    <span>Add to cart</span>
                                </Button>
                            </div> */}
                        </CardContent>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )
}
