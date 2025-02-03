"use client"

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import Link from "next/link"
import { Trophy, Shield, Truck, Headphones } from 'lucide-react';
import { Header } from "../heroheaderimg/page"


export default function Checkout() {

  const features = [
    {
      icon: <Trophy className="w-12 h-12" />,
      title: "High Quality",
      description: "crafted from top materials"
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Warranty Protection",
      description: "Over 2 years"
    },
    {
      icon: <Truck className="w-12 h-12" />,
      title: "Free Shipping",
      description: "Order over 150 $"
    },
    {
      icon: <Headphones className="w-12 h-12" />,
      title: "24 / 7 Support",
      description: "Dedicated support"
    }
  ];

  return (
    <>
    <Header sectionName="Checkout"/>
    <div className="container mx-auto px-4 md:px-20 py-8">
      <div className="grid lg:grid-cols-2 gap-16">
        {/* Billing Details Form */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Billing details</h2>
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input id="firstName" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input id="lastName" required />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="companyName">Company Name (Optional)</Label>
              <Input id="companyName" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="country">Country / Region</Label>
              <Select defaultValue="sri-lanka">
                <SelectTrigger>
                  <SelectValue placeholder="Select country" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="sri-lanka">Sri Lanka</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="streetAddress">Street address</Label>
              <Input id="streetAddress" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="townCity">Town / City</Label>
              <Input id="townCity" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="province">Province</Label>
              <Select defaultValue="western">
                <SelectTrigger>
                  <SelectValue placeholder="Select province" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="western">Western Province</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="zipCode">ZIP code</Label>
              <Input id="zipCode" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Phone</Label>
              <Input id="phone" type="tel" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email address</Label>
              <Input id="email" type="email" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="additionalInfo">Additional information</Label>
              <Textarea 
                id="additionalInfo" 
                placeholder="Additional information"
                className="min-h-[100px]"
              />
            </div>
          </form>
        </div>

        {/* Order Summary */}
        <div>
          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-lg font-semibold mb-4">Product</h3>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-gray-600">Asgaard sofa × 1</span>
                <span>Rs. 250,000.00</span>
              </div>
              <div className="flex justify-between border-t pt-4">
                <span className="text-gray-600">Subtotal</span>
                <span>Rs. 250,000.00</span>
              </div>
              <div className="flex justify-between border-t pt-4">
                <span className="font-semibold">Total</span>
                <span className="text-[#B88E2F] font-semibold">Rs. 250,000.00</span>
              </div>

              <RadioGroup defaultValue="bank-transfer" className="mt-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="bank-transfer" id="bank-transfer" />
                    <Label htmlFor="bank-transfer" className="font-medium">Direct Bank Transfer</Label>
                  </div>
                  <p className="text-sm text-gray-500 ml-6">
                    Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.
                  </p>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="cash" id="cash" />
                    <Label htmlFor="cash" className="font-medium">Cash On Delivery</Label>
                  </div>
                </div>
              </RadioGroup>

              <div className="text-sm text-gray-600 mt-6">
                Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our{" "}
                <Link href="/privacy-policy" className="text-black hover:underline">
                  privacy policy
                </Link>
                .
              </div>

              <Button className="w-full bg-[#B88E2F] hover:bg-[#A47E2A] text-white">
                Place order
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-[#FFF5EE] py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-500">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
    </>
  )
}