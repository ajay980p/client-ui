'use client'

import Image from 'next/image'
import { useState } from 'react'
import { CardContent } from "@/components/ui/card"
import { RadioGroup } from "@/components/ui/radio-group"
import HomePageImg from "@/public/assets/pizza_homepage_img.png";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import PizzaCard from './pizzaCard';

export default function ChoosePizzaTopping({ products, isModalOpen, setIsModalOpen }: { products: any, isModalOpen: boolean, setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>> }) {
    // State for selections, you can add similar state for other configurations like crust, toppings, etc.
    const [size, setSize] = useState<string>('');
    const [crust, setCrust] = useState<string>('');

    const product = products[0];
    const priceConfiguration = product?.priceConfiguration || {};

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
                                            className="flex space-x-4"
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

                            <div>
                                <PizzaCard />
                            </div>
                        </CardContent>
                    </div>
                </div>
            </DialogContent>
        </Dialog >
    )
}