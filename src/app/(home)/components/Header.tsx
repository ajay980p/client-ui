'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ChevronDown, ShoppingCart, Phone, Home, Menu } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"
import { UserAuth } from '../../../components/custom/userAuth'

const categories = ["All", "Vegetarian", "Meat Lovers", "Spicy", "Specialty"]

export default function Header() {
    const [isUserAuthOpen, setUserAuthOpen] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <>
            <div className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
                <div className="container mx-auto px-4 py-2 flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                        <Image
                            src="/placeholder.svg"
                            alt="Pizza Logo"
                            width={40}
                            height={40}
                            className="rounded-full"
                        />
                        <span className="text-xl font-bold text-orange-500">pizza</span>
                        <Select>
                            <SelectTrigger className="w-[180px]">
                                <SelectValue placeholder="Cheesy delight" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="cheesy">Cheesy delight</SelectItem>
                                <SelectItem value="veggie">Veggie supreme</SelectItem>
                                <SelectItem value="meat">Meat lovers</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="hidden lg:flex items-center space-x-4">
                        <Button variant="ghost">
                            <Home className="mr-2 h-4 w-4" />
                            Home
                        </Button>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="ghost">
                                    Categories
                                    <ChevronDown className="ml-2 h-4 w-4" />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                                {categories.map((category) => (
                                    <DropdownMenuItem key={category}>{category}</DropdownMenuItem>
                                ))}
                            </DropdownMenuContent>
                        </DropdownMenu>
                        <Button variant="ghost" className="flex items-center">
                            <ShoppingCart className="mr-2 h-4 w-4" />
                            Orders
                            <span className="ml-1 bg-orange-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">3</span>
                        </Button>
                        <div className="flex items-center">
                            <Phone className="mr-2 h-4 w-4" />
                            <span>+91 9800 098 998</span>
                        </div>
                        <Button
                            variant="outline"
                            className="bg-orange-500 text-white hover:bg-orange-600"
                            onClick={() => setUserAuthOpen(true)}
                        >
                            Login
                        </Button>
                    </div>

                    {/* Mobile Menu Trigger */}
                    <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" className="lg:hidden">
                                <Menu className="h-6 w-6" />
                                <span className="sr-only">Open menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                            <nav className="flex flex-col space-y-4 mt-4">
                                <Button variant="ghost" className="justify-start" onClick={() => setIsMenuOpen(false)}>
                                    <Home className="mr-2 h-4 w-4" />
                                    Home
                                </Button>
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <Button variant="ghost" className="justify-start w-full">
                                            Categories
                                            <ChevronDown className="ml-2 h-4 w-4" />
                                        </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent className="w-full">
                                        {categories.map((category) => (
                                            <DropdownMenuItem key={category}>{category}</DropdownMenuItem>
                                        ))}
                                    </DropdownMenuContent>
                                </DropdownMenu>
                                <Button variant="ghost" className="justify-start" onClick={() => setIsMenuOpen(false)}>
                                    <ShoppingCart className="mr-2 h-4 w-4" />
                                    Orders
                                    <span className="ml-auto bg-orange-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">3</span>
                                </Button>
                                <div className="flex items-center px-3 py-2">
                                    <Phone className="mr-2 h-4 w-4" />
                                    <span>+91 9800 098 998</span>
                                </div>
                                <Button
                                    variant="default"
                                    className="bg-orange-500 text-white hover:bg-orange-600 w-full"
                                    onClick={() => {
                                        setUserAuthOpen(true)
                                        setIsMenuOpen(false)
                                    }}
                                >
                                    Login
                                </Button>
                            </nav>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>

            {/* User Authentication Modal */}
            {isUserAuthOpen && (
                <UserAuth isModalOpen={isUserAuthOpen} setUserAuthOpen={setUserAuthOpen} />
            )}
        </>
    )
}