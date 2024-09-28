'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroupItem } from "@/components/ui/radio-group"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup } from '@radix-ui/react-radio-group'
import { CreditCard, HandCoins } from 'lucide-react'

export default function CheckoutForm() {
    const [paymentMode, setPaymentMode] = useState('card')
    const [selectedAddress, setSelectedAddress] = useState('address1')

    return (
        <div className="container mx-auto p-4 max-w-6xl">

            {/* Adjust grid layout with responsive breakpoints */}
            <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-8">

                {/* Customer Details */}
                <Card className="p-4">
                    <CardHeader>
                        <CardTitle className="text-lg font-semibold">Customer details</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <form className="space-y-6">
                            {/* First Name and Last Name */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <Label htmlFor="firstName">First Name</Label>
                                    <Input id="firstName" placeholder="Enter your first name" />
                                </div>
                                <div>
                                    <Label htmlFor="lastName">Last Name</Label>
                                    <Input id="lastName" placeholder="Enter your last name" />
                                </div>
                            </div>

                            {/* Email */}
                            <div>
                                <Label htmlFor="email">Email</Label>
                                <Input id="email" type="email" placeholder="Enter your email" />
                            </div>

                            <div>
                                {/* Address Section */}
                                <Label htmlFor="address">Address</Label>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                                    {/* First Address Option */}
                                    <div className={`border p-4 rounded-lg flex items-start space-x-2 ${selectedAddress === 'address1' ? 'border-orange-500' : 'border-gray-300'}`}>
                                        <input
                                            type="radio"
                                            id="address1"
                                            name="address"
                                            className="form-radio"
                                            checked={selectedAddress === 'address1'}
                                            onChange={() => setSelectedAddress('address1')}
                                        />
                                        <label htmlFor="address1" className="cursor-pointer">
                                            123, ABC Street, Malad West, Mumbai, Maharashtra, India 400064
                                        </label>
                                    </div>
                                    {/* Second Address Option */}
                                    <div className={`border p-4 rounded-lg flex items-start space-x-2 ${selectedAddress === 'address2' ? 'border-orange-500' : 'border-gray-300'}`}>
                                        <input
                                            type="radio"
                                            id="address2"
                                            name="address"
                                            className="form-radio"
                                            checked={selectedAddress === 'address2'}
                                            onChange={() => setSelectedAddress('address2')}
                                        />
                                        <label htmlFor="address2" className="cursor-pointer">
                                            Flat No. 501, Sunshine Apartments, Andheri East, Mumbai, Maharashtra, India 400069
                                        </label>
                                    </div>
                                </div>
                                <Button variant="outline" className="mt-3 text-sm text-orange-500">
                                    + Add New Address
                                </Button>
                            </div>

                            <RadioGroup value={paymentMode} onValueChange={setPaymentMode} className="grid grid-cols-2 gap-4 mt-2">
                                {/* Card Option */}
                                <div
                                    className={`border p-4 rounded-lg flex items-center justify-center space-x-2 cursor-pointer ${paymentMode === 'card' ? 'border-orange-500 bg-orange-50' : 'border-gray-300'}`}
                                    onClick={() => setPaymentMode('card')}
                                >
                                    <RadioGroupItem value="card" id="card" className="hidden" />
                                    <span className={`icon ${paymentMode === 'card' ? 'text-orange-500' : 'text-gray-500'}`}>
                                        <CreditCard />
                                    </span>
                                    <Label htmlFor="card" className="cursor-pointer">Card</Label>
                                </div>

                                {/* Cash Option */}
                                <div
                                    className={`border p-4 rounded-lg flex items-center justify-center space-x-2 cursor-pointer ${paymentMode === 'cash' ? 'border-orange-500 bg-orange-50' : 'border-gray-300'}`}
                                    onClick={() => setPaymentMode('cash')}
                                >
                                    <RadioGroupItem value="cash" id="cash" className="hidden" />
                                    <span className={`icon ${paymentMode === 'cash' ? 'text-orange-500' : 'text-gray-500'}`}>
                                        <HandCoins />
                                    </span>
                                    <Label htmlFor="cash" className="cursor-pointer">Cash</Label>
                                </div>
                            </RadioGroup>


                            {/* Comment */}
                            <div>
                                <Label htmlFor="comment">Comment</Label>
                                <Textarea id="comment" placeholder="Enter any additional comments" />
                            </div>
                        </form>
                    </CardContent>
                </Card>

                {/* Order Summary */}
                <Card className="p-4">
                    <CardHeader>
                        <CardTitle className="text-lg font-semibold">Order summary</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            {/* Order Details */}
                            <div className="flex justify-between">
                                <span>Subtotal</span>
                                <span>₹8130</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Taxes</span>
                                <span>₹82</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Delivery charges</span>
                                <span>₹100</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Discount</span>
                                <span>₹0</span>
                            </div>
                            <div className="flex justify-between font-bold">
                                <span>Order total</span>
                                <span>₹8300</span>
                            </div>

                            {/* Coupon Code */}
                            <div className="mt-4 flex space-x-2">
                                <Input placeholder="Coupon code" />
                                <Button variant="outline">Apply</Button>
                            </div>

                            {/* Place Order Button */}
                            <Button className="w-full mt-6 bg-orange-500 hover:bg-orange-600 text-white">
                                Place order
                            </Button>
                        </div>
                    </CardContent>
                </Card>

            </div>
        </div>
    )
}