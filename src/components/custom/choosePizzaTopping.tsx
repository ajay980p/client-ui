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

export default function ChoosePizzaTopping({ isModalOpen, setIsModalOpen }: { isModalOpen: boolean, setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>> }) {
    const [size, setSize] = useState<string>('medium')
    const [crust, setCrust] = useState<string>('thin')

    return (
        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
            <DialogContent className="sm:max-w-[600px]">
                <div className="flex flex-col md:flex-row">

                    {/* Left section with Pizza image */}
                    <div className="flex justify-center items-center md:w-1/2">
                        <Image
                            src={HomePageImg}
                            alt="Pizza"
                            width={200}
                            height={200}
                            className="p-0 m-0 object-contain max-w-[100%] max-h-[100%] rounded-lg"
                        />
                    </div>

                    {/* Right section with selection options */}
                    <div className="md:w-1/2 p-1">
                        <DialogHeader className='p-0'>
                            <DialogTitle className="text-left text-2xl font-bold text-orange-500">Margarita Pizza</DialogTitle>
                            <p className="text-sm text-muted-foreground">This is a very tasty pizza</p>
                        </DialogHeader>

                        <CardContent className='p-0 m-0'>
                            {/* Choose Size */}
                            <div className="my-4">
                                <h3 className="mb-2 font-semibold">Choose the size</h3>
                                <RadioGroup defaultValue={size} onValueChange={setSize} className="flex space-x-4">
                                    <Button className={size === 'small' ? '' : 'bg-white'} variant={size === 'small' ? 'default' : 'outline'} onClick={() => setSize('small')}>
                                        Small
                                    </Button>
                                    <Button className={size === 'medium' ? '' : 'bg-white'} variant={size === 'medium' ? 'default' : 'outline'} onClick={() => setSize('medium')}>
                                        Medium
                                    </Button>
                                    <Button className={size === 'large' ? '' : 'bg-white'} variant={size === 'large' ? 'default' : 'outline'} onClick={() => setSize('large')}>
                                        Large
                                    </Button>
                                </RadioGroup>
                            </div>

                            {/* Choose Crust */}
                            <div className='my-4'>
                                <h3 className="mb-2 font-semibold">Choose the crust</h3>
                                <RadioGroup defaultValue={crust} onValueChange={setCrust} className="flex space-x-4">
                                    <Button className={crust === 'thin' ? '' : 'bg-white'} variant={crust === 'thin' ? 'default' : 'outline'} onClick={() => setCrust('thin')}>
                                        Thin
                                    </Button>
                                    <Button className={crust === 'thick' ? '' : 'bg-white'} variant={crust === 'thick' ? 'default' : 'outline'} onClick={() => setCrust('thick')}>
                                        Thick
                                    </Button>
                                </RadioGroup>
                            </div>

                            <Separator className="my-4" />

                            <div>
                                <PizzaCard />
                            </div>

                        </CardContent>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )
}
