import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Clock } from 'lucide-react'
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Trophy, Shield, Truck, Headphones } from 'lucide-react';
import Header from "../heroheaderimg/page";


const formFields = [
    { id: 'name', label: 'Your name', type: 'text', placeholder: 'Abc' },
    { id: 'email', label: 'Email address', type: 'email', placeholder: 'Abc@def.com' },
    { id: 'subject', label: 'Subject', type: 'text', placeholder: 'This is an optional' },
    { id: 'message', label: 'Message', type: 'textarea', placeholder: "Hi! I'd like to ask about" },
]

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


export default function Contactsection() {
    return (
        <>
        <Header sectionName="Contact"/>
        
        <div className="container mx-auto px-4 md:px-20 py-16">
            {/* Header Section */}
            <div className="text-center mb-16">
                <h1 className="text-4xl font-bold mb-4">Get In Touch With Us</h1>
                <p className="text-gray-600 max-w-2xl mx-auto">
                    For More Information About Our Product & Services. Please Feel Free To Drop Us
                    An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!
                </p>
            </div>

            {/* Contact Section */}
            <div className="grid md:grid-cols-2 gap-16 max-w-6xl mx-auto">
                {/* Contact Information */}
                <div className="space-y-8">
                    <div className="flex gap-4">
                        <div className="flex-shrink-0">
                            <MapPin className="w-10 h-10" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-2">Address</h3>
                            <p className="text-gray-600">
                                236 5th SE Avenue, New<br />
                                York NY10000, United<br />
                                States
                            </p>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <div className="flex-shrink-0">
                            <Phone className="w-10 h-10" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-2">Phone</h3>
                            <p className="text-gray-600">
                                Mobile: +(84) 546-6789<br />
                                Hotline: +(84) 456-6789
                            </p>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <div className="flex-shrink-0">
                            <Clock className="w-10 h-10" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-2">Working Time</h3>
                            <p className="text-gray-600">
                                Monday-Friday: 9:00 - 22:00<br />
                                Saturday-Sunday: 9:00 - 21:00
                            </p>
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <div>
                    <form className="space-y-6">
                        {formFields.map((field) => (
                            <div key={field.id}>
                                <label className="block text-sm font-medium mb-2" htmlFor={field.id}>
                                    {field.label}
                                </label>
                                {field.type === 'textarea' ? (
                                    <Textarea
                                        id={field.id}
                                        placeholder={field.placeholder}
                                        className="w-full min-h-[150px]"
                                    />
                                ) : (
                                    <Input
                                        id={field.id}
                                        type={field.type}
                                        placeholder={field.placeholder}
                                        className="w-full"
                                    />
                                )}
                            </div>
                        ))}

                        <Button
                            type="submit"
                            className="w-full bg-[#B88E2F] hover:bg-[#A47E2A] text-white"
                        >
                            Submit
                        </Button>
                    </form>
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

            {/* <section className="bg-beige-100 py-8">
      <div className="container mx-auto flex flex-wrap justify-around items-center px-4 text-center lg:text-left">
        <div className="flex items-center lg:items-start space-y-2">
          <span className="text-4xl text-gray-900 flex">
            <i className="fa fa-trophy"></i>
          </span>
          <h3 className="text-lg font-semibold text-black px-2">High Quality</h3>
          <br />
          <p className="text-sm text-gray-500">Crafted from top materials</p>
        </div>

        <div className="flex items-center lg:items-start space-y-2">
          <span className="text-4xl text-gray-900">
            <i className="fa fa-check-circle"></i>
          </span>
          <h3 className="text-lg font-semibold text-black px-2">Warranty Protection</h3>
          <p className="text-sm text-gray-500">Over 2 years</p>
        </div>

        <div className="flex items-center lg:items-start space-y-2">
          <span className="text-4xl text-gray-900">
            <i className="fa fa-shipping-fast"></i>
          </span>
          <h3 className="text-lg font-semibold text-black px-2">Free Shipping</h3>
          <p className="text-sm text-gray-500">Order over $150</p>
        </div>

        <div className="flex items-center lg:items-start space-y-2">
          <span className="text-4xl text-gray-900">
            <i className="fa fa-headset"></i>
          </span>
          <h3 className="text-lg font-semibold text-black px-2">24/7 Support</h3>
          <p className="text-sm text-gray-500">Dedicated support</p>
        </div>
      </div>
    </section> */}


        </div>
        </>
    )
}