'use client';

import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function UserAuth({ isModalOpen, setUserAuthOpen }: { isModalOpen: boolean, setUserAuthOpen: React.Dispatch<React.SetStateAction<boolean>> }) {

    return (
        <Dialog open={isModalOpen} onOpenChange={setUserAuthOpen}>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle className="text-center text-2xl font-bold text-orange-500">Welcome</DialogTitle>
                </DialogHeader>
                <Tabs defaultValue="login" className="w-full mt-4">
                    <TabsList className="grid w-full grid-cols-2 border-b border-gray-300">
                        <TabsTrigger
                            value="login"
                            className="py-2 px-4 text-gray-400 hover:text-orange-500 transition-colors focus:outline-none
                                       data-[state=active]:bg-orange-500 data-[state=active]:text-white"
                        >
                            Login
                        </TabsTrigger>
                        <TabsTrigger
                            value="signup"
                            className="py-2 px-4 text-gray-400 hover:text-orange-500 transition-colors focus:outline-none
                                       data-[state=active]:bg-orange-500 data-[state=active]:text-white"
                        >
                            Sign Up
                        </TabsTrigger>
                    </TabsList>
                    <TabsContent value="login" className="mt-4">
                        <form className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="email">Email</Label>
                                <Input id="email" type="email" placeholder="Enter your email" required />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="password">Password</Label>
                                <Input id="password" type="password" placeholder="Enter your password" required />
                            </div>
                            <div className="flex items-center space-x-2">
                                <Checkbox id="remember" />
                                <Label htmlFor="remember">Remember me</Label>
                            </div>
                            <Button type="submit" className="w-full bg-orange-500 text-white hover:bg-orange-600">
                                Login
                            </Button>
                        </form>
                    </TabsContent>
                    <TabsContent value="signup" className="mt-4">
                        <form className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="signup-email">Email</Label>
                                <Input id="signup-email" type="email" placeholder="Enter your email" required />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="signup-mobile">Mobile</Label>
                                <Input id="signup-mobile" type="tel" placeholder="Enter your mobile number" required />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="signup-password">Password</Label>
                                <Input id="signup-password" type="password" placeholder="Create a password" required />
                            </div>
                            <Button type="submit" className="w-full bg-orange-500 text-white hover:bg-orange-600">
                                Sign Up
                            </Button>
                        </form>
                    </TabsContent>
                </Tabs>
            </DialogContent>
        </Dialog>
    );
}