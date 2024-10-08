import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-[#FFF7EF] border-t-2 border-[#9A7566] py-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-between">
                    {/* Logo and Description */}
                    <div className="w-full md:w-1/4 mb-6 md:mb-0">
                        <div className="text-2xl font-bold text-[#9A7566] mb-2">Waxly</div>
                        <p className="text-[#9A7566] mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-[#9A7566] hover:text-gray-900">Facebook</a>
                            <a href="#" className="text-[#9A7566] hover:text-gray-900">Instagram</a>
                            <a href="#" className="text-[#9A7566] hover:text-gray-900">Twitter</a>
                            <a href="#" className="text-[#9A7566] hover:text-gray-900">Pinterest</a>
                        </div>
                    </div>
                    {/* Support Links */}
                    <div className="w-full md:w-1/4 mb-6 md:mb-0">
                        <h3 className="text-lg font-bold text-[#9A7566] mb-2">Support</h3>
                        <ul>
                            <li><a href="#" className="text-[#9A7566] hover:text-gray-900">FAQ's</a></li>
                            <li><a href="#" className="text-[#9A7566] hover:text-gray-900">Privacy Policy</a></li>
                            <li><a href="#" className="text-[#9A7566] hover:text-gray-900">Terms & Conditions</a></li>
                            <li><a href="#" className="text-[#9A7566] hover:text-gray-900">Contact</a></li>
                        </ul>
                    </div>
                    {/* Contact Information */}
                    <div className="w-full md:w-1/4 mb-6 md:mb-0">
                        <h3 className="text-lg font-bold text-[#9A7566] mb-2">Contact</h3>
                        <p className="text-[#9A7566]">Jl. Raya Seminyak 36, Badung, Bali</p>
                        <p className="text-[#9A7566]">waxly@domain.com</p>
                        <p className="text-[#9A7566]">Phone: (+62) 81 234 5678</p>
                    </div>
                    {/* Opening Hours */}
                    <div className="w-full md:w-1/4">
                        <h3 className="text-lg font-bold text-[#9A7566] mb-2">Opening Hour</h3>
                        <p className="text-[#9A7566]">Monday - Friday: 09:00 AM - 19:00 PM</p>
                        <p className="text-[#9A7566]">Saturday - Sunday: 10:00 AM - 20:00 PM</p>
                        <div className="flex space-x-2 mt-2">
                            <a href="#" className="text-[#9A7566] hover:text-gray-900">VISA</a>
                            <a href="#" className="text-[#9A7566] hover:text-gray-900">PayPal</a>
                            <a href="#" className="text-[#9A7566] hover:text-gray-900">JCB</a>
                        </div>
                    </div>
                </div>
                <div className="text-center text-[#9A7566] mt-8">
                    <a href="https://influxo.vercel.app" className="text-[#9A7566] hover:text-gray-900">Inflxuo</a>
                    <p>Copyright © {new Date().getFullYear()}. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;