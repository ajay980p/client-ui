'use client'

import Image from 'next/image'
import { useState } from 'react'
import { Label } from "@/components/ui/label"
import { CardContent } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import HomePageImg from "@/public/assets/pizza_homepage_img.png";
import PizzaCard from "./pizzaCard";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";


export default function ChoosePizzaTopping({ isModalOpen, setIsModalOpen }: { isModalOpen: boolean, setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>> }) {
    const [size, setSize] = useState<string>('medium')
    const [crust, setCrust] = useState<string>('thin')

    return (
        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
            <DialogContent className="sm:max-w-[370px] sm:max-h-[600px]">

                <DialogHeader className='p-0'>
                    <DialogTitle className="text-center text-2xl font-bold text-orange-500">Pizza 1</DialogTitle>
                    <p className="text-sm text-muted-foreground text-center">This is a very healthy pizza</p>
                </DialogHeader>

                <CardContent className='p-0 m-0'>
                    <div className="flex justify-center">
                        <Image src={HomePageImg} className="p-0 m-0 box-border" alt="Pizza" width={120} height={120} />
                    </div>

                    <div>
                        <h3 className="mb-2 font-semibold">Choose the size</h3>
                        <RadioGroup defaultValue={size} onValueChange={setSize} className="flex space-x-2">
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="small" id="small" />
                                <Label htmlFor="small">Small</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="medium" id="medium" />
                                <Label htmlFor="medium">Medium</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="large" id="large" />
                                <Label htmlFor="large">Large</Label>
                            </div>
                        </RadioGroup>
                    </div>

                    <div className='py-4'>
                        <h3 className="mb-2 font-semibold">Choose the crust</h3>
                        <RadioGroup defaultValue={crust} onValueChange={setCrust} className="flex space-x-2">
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="thin" id="thin" />
                                <Label htmlFor="thin">Thin</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="thick" id="thick" />
                                <Label htmlFor="thick">Thick</Label>
                            </div>
                        </RadioGroup>
                    </div>

                    <div>
                        <PizzaCard />
                    </div>
                </CardContent>

            </DialogContent>

        </Dialog>
    )
}