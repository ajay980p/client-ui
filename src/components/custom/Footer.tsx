import Link from 'next/link'
import { Facebook, Instagram, Twitter } from 'lucide-react'

export default function Footer() {
    return (
        <footer className="bg-gradient-to-r from-orange-100 to-orange-200 py-4">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap items-center justify-between">
                    <div className="flex items-center space-x-4">
                        <Link href="/" className="text-2xl font-bold text-orange-500">pizza</Link>
                        <nav>
                            <ul className="flex space-x-4">
                                <li><Link href="/" className="text-gray-600 hover:text-orange-500 transition-colors">Home</Link></li>
                                <li><Link href="/menu" className="text-gray-600 hover:text-orange-500 transition-colors">Menu</Link></li>
                                <li><Link href="/contact" className="text-gray-600 hover:text-orange-500 transition-colors">Contact</Link></li>
                            </ul>
                        </nav>
                    </div>
                    <div className="flex items-center space-x-4">
                        <a href="#" className="text-gray-600 hover:text-orange-500 transition-colors">
                            <Facebook className="h-5 w-5" />
                            <span className="sr-only">Facebook</span>
                        </a>
                        <a href="#" className="text-gray-600 hover:text-orange-500 transition-colors">
                            <Instagram className="h-5 w-5" />
                            <span className="sr-only">Instagram</span>
                        </a>
                        <a href="#" className="text-gray-600 hover:text-orange-500 transition-colors">
                            <Twitter className="h-5 w-5" />
                            <span className="sr-only">Twitter</span>
                        </a>
                    </div>
                </div>
                <div className="mt-2 text-center text-sm text-gray-600">
                    &copy; {new Date().getFullYear()} Pizza Delivery. All rights reserved. |
                    <Link href="/privacy" className="hover:text-orange-500 transition-colors ml-1">Privacy</Link> |
                    <Link href="/terms" className="hover:text-orange-500 transition-colors ml-1">Terms</Link>
                </div>
            </div>
        </footer>
    )
}