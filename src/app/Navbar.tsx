import Link from "next/link"
import { User, Search, Heart, ShoppingCart } from 'lucide-react';
import Image from "next/image";

export function Navbar() {
  return (
    <div>
    <header className="sticky top-0 z-50 w-full border-b bg-background">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/home" className="flex items-center space-x-2">
        <Image className='flex' src="/logo.png" alt="logo" height={35} width={35} />
          <span className="text-2xl font-bold">Furniro</span>
        </Link>
        <nav className="hidden md:flex items-center space-x-10">
          <Link href="/home" className="font-medium transition-colors hover:text-primary">
            Home
          </Link>
          <Link href="/shop" className="font-medium transition-colors hover:text-primary">
            Shop
          </Link>
          <Link href="/Blog" className="font-medium transition-colors hover:text-primary">
            Blog
          </Link>
          <Link href="/contact" className="font-medium transition-colors hover:text-primary">
            Contact
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          <Link href="/account" className="p-2 hover:text-primary">
            <User className="h-5 w-5" />
            <span className="sr-only">Account</span>
          </Link>
          <button className="p-2 hover:text-primary">
            <Search className="h-5 w-5" />
            <span className="sr-only">Search</span>
          </button>
          <Link href="/wishlist" className="p-2 hover:text-primary">
            <Heart className="h-5 w-5" />
            <span className="sr-only">Wishlist</span>
          </Link>
          <Link href="/cart" className="p-2 hover:text-primary">
            <ShoppingCart className="h-5 w-5" />
            <span className="sr-only">Cart</span>
          </Link>
        </div>
      </div>
    </header>



</div>
  )
};



