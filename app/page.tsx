"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Clock,
  Shield,
  Star,
  Phone,
  Mail,
  Twitter,
  Facebook,
  Instagram,
} from "lucide-react";

export default function TaxiBooking() {
  return (
    <div className="scroll-smooth bg-white">
      {/* Hero Section */}
      <section className="min-h-screen bg-gradient-to-br from-yellow-400 via-yellow-300 to-yellow-200 flex flex-col relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <header className="relative flex justify-between items-center p-6 md:p-8">
          <div className="text-2xl font-bold text-gray-900">Royal Cars</div>
          <Button variant="outline" className="rounded-xl bg-white/90">
            Call Now
          </Button>
        </header>

        <div className="relative flex-1 flex flex-col items-center justify-center px-4 text-center">
          <div className="space-y-6 max-w-5xl">
            <h1 className="text-[clamp(2.5rem,12vw,8rem)] font-extrabold leading-none tracking-tight text-gray-900">
              <span className="inline-block">Your Ride.</span>
              <br />
              <span className="inline-block text-white drop-shadow-sm">
                Your Way.
              </span>
              <br />
            </h1>
            <p className="text-md md:text-3xl text-gray-800 max-w-2xl mx-auto font-light">
              EGHAM ROYAL CARS TAXI Specialises in All Major Airports and Ports
              Transfer Service
            </p>
            <Button
              variant="outline"
              className="rounded-xl bg-white/90 text-gray-900 px-12 py-8 text-xl border shadow-sm"
              onClick={() =>
                document
                  .getElementById("booking")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Book Your Ride
            </Button>
          </div>

          {/* Decorative elements */}
          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-yellow-400/20 to-transparent"></div>
          <div className="absolute top-1/4 right-10 w-64 h-64 bg-yellow-200 rounded-full filter blur-3xl opacity-50"></div>
          <div className="absolute bottom-1/4 left-10 w-48 h-48 bg-yellow-300 rounded-full filter blur-3xl opacity-50"></div>
        </div>
      </section>

      <div className="relative bg-gray-50">
        {/* Background decorative elements */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:48px_48px]"></div>

        {/* Services Section */}
        <section className="relative py-24 px-4" id="services">
          <div className="max-w-6xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-20">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900">
                Why Choose{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-600">
                  Royal Cars
                </span>
              </h2>
              <p className="text-gray-600 text-lg">
                Experience unmatched service quality and reliability with our
                premium taxi service
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Clock className="w-10 h-10" />,
                  title: "24/7 Availability",
                  description:
                    "Round-the-clock service for your convenience, whenever you need us",
                },
                {
                  icon: <Shield className="w-10 h-10" />,
                  title: "Professional Drivers",
                  description:
                    "Experienced and vetted chauffeurs ensuring your safety",
                },
                {
                  icon: <Star className="w-10 h-10" />,
                  title: "Premium Service",
                  description:
                    "Luxury vehicles and exceptional comfort for every journey",
                },
              ].map((service, index) => (
                <Card
                  key={index}
                  className="relative p-8 text-center transition-all duration-300 border-none bg-white/80 backdrop-blur-sm shadow-lg rounded-xl overflow-hidden"
                >
                  <div className="absolute inset-0"></div>
                  <div className="relative">
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-xl  text-yellow-600 mb-6">
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-gray-900">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-lg leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Booking Section */}
        <section className="relative py-24 px-4" id="booking">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/80 to-transparent"></div>
          <div className="relative max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 text-gray-900">
              Book Your <span className="text-yellow-500">Journey</span>
            </h2>

            <Card className="p-8 rounded-xl  backdrop-blur-sm border-none">
              <form className="space-y-6">
                <Input
                  placeholder="Name"
                  className="h-12 rounded-xl bg-white"
                />
                <div className="grid grid-cols-2 gap-4">
                  <Input
                    placeholder="From"
                    className="h-12 rounded-xl bg-white"
                  />
                  <Input
                    placeholder="To"
                    className="h-12 rounded-xl bg-white"
                  />
                </div>
                <Input
                  type="date"
                  placeholder="Date"
                  className="h-12 rounded-xl bg-white"
                />
                <Input
                  type="time"
                  placeholder="Time"
                  className="h-12 rounded-xl bg-white"
                />
                <div className="grid grid-cols-2 gap-4">
                  <Input
                    placeholder="Mobile No"
                    className="h-12 rounded-xl bg-white"
                  />
                  <Input
                    type="email"
                    placeholder="E-Mail"
                    className="h-12 rounded-xl bg-white"
                  />
                </div>
                <Textarea
                  placeholder="Other Information"
                  className="h-24 rounded-xl bg-white"
                />
                <Button className="w-full h-12 bg-yellow-500 text-white rounded-xl hover:bg-black">
                  BOOK NOW
                </Button>
              </form>
            </Card>
          </div>
        </section>

        {/* About Us Section */}
        <section className="relative py-24 px-4" id="about">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/80 to-transparent"></div>
          <div className="relative max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900">
                  About <span className="text-yellow-500">Royal Cars</span>
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  Egham Royal Cars Taxi has been serving in the Egham,
                  Englefield Green, Virginia Water, Staines, Old Windsor and
                  neighbouring areas for many years. We specialize in airport
                  transfers, local journeys, and drop off & pick ups to and from
                  London and other areas.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  Being local, we know the Egham, Englefield Green, Virginia
                  Water, Staines and neighbouring areas quite well. All Egham
                  Royal Cars Taxi drivers live and have been working in the
                  Egham area for many years.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  Our drivers are licensed and regulated by Runnymede Borough
                  Council. All drivers undergo enhanced Criminal Record Bureau
                  and medical checks before receiving their Taxi driver badges.
                  Every six months, all vehicles must pass MOT checks without
                  any advisory notes.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  We offer friendly, reliable, and affordable taxi services
                  across the country. Our taxis are equipped with free WiFi,
                  phone chargers, and card machines to accept card payments on
                  the spot.
                </p>
              </div>
              {/* <div className="relative h-[400px] rounded-xl overflow-hidden bg-white/80 backdrop-blur-sm shadow-lg">
                <div className="absolute inset-0 bg-yellow-100/20"></div>
              </div> */}
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="relative py-24 px-4" id="location">
          <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/80 to-transparent"></div>
          <div className="relative max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 text-gray-900">
              Our <span className="text-yellow-500">Location</span>
            </h2>
            <Card className="p-4 shadow-xl rounded-xl bg-white/80 backdrop-blur-sm border-none">
              <div className="h-[400px] rounded-xl overflow-hidden">
                {/* Add map iframe here */}
                <div className="w-full h-full bg-white/50 flex items-center justify-center">
                  <p className="text-gray-500">Map Loading...</p>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Add Footer Section */}
        <footer className="bg-yellow-400 py-12">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8 text-gray-900">
              {/* Brand Section */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">Royal Cars</h3>
                <p className="text-gray-700">
                  Your reliable partner for premium taxi services
                </p>
              </div>

              {/* Contact Section */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold">Contact Us</h3>
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5" />
                    <span>+44 1234 567890</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5" />
                    <span>info@royalcars.com</span>
                  </div>
                </div>
              </div>

              {/* Social Media Section */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold">Follow Us</h3>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="p-2 bg-yellow-500 rounded-lg hover:bg-yellow-600 transition-colors"
                  >
                    <Twitter className="w-6 h-6 text-white" />
                  </a>
                  <a
                    href="#"
                    className="p-2 bg-yellow-500 rounded-lg hover:bg-yellow-600 transition-colors"
                  >
                    <Facebook className="w-6 h-6 text-white" />
                  </a>
                  <a
                    href="#"
                    className="p-2 bg-yellow-500 rounded-lg hover:bg-yellow-600 transition-colors"
                  >
                    <Instagram className="w-6 h-6 text-white" />
                  </a>
                </div>
              </div>
            </div>

            {/* Copyright Section */}
            <div className="mt-12 pt-8 border-t border-yellow-500/20 text-center">
              <p className="text-sm text-gray-900">
                © {new Date().getFullYear()} Royal Cars. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
