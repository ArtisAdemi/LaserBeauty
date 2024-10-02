import React from 'react';

const Navbar: React.FC = () => {
    return (
        <nav className="bg-[#FFF7EF] h-[100px] flex justify-center items-center border-b-2 border-[#9A7566]">
            <div className="container mx-auto px-4 py-2 flex justify-between items-center">
                <div className="flex space-x-4 w-1/3 justify-start">
                    <a href="#" className="text-[#9A7566] font-bold hover:text-gray-900">Home</a>
                    <a href="#" className="text-[#9A7566] font-bold hover:text-gray-900">Offers</a>
                </div>
                <div className="text-2xl font-bold text-[#9A7566] w-1/3 flex justify-center">Waxly</div>
                <div className="w-1/3 flex justify-end">
                    <a href="#" className="text-[#9A7566] font-bold hover:text-gray-900">Contact</a>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;