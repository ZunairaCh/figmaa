"use client";
import Image from "next/image";
import One from "/public/one.png";
import Two from "/public/two.png";
import Three from "/public/three.png";
import Four from "/public/for.png";
import React from 'react';
import { FaShoppingCart, FaStar } from 'react-icons/fa';

function Wishlist() {
    return (
        <div className="w-full max-w-screen-xl mx-auto py-8">
            <div className="flex items-center justify-between p-4">
                <div className="flex items-center">
                    <div className="bg-orange-500 rounded-tl-[4px] w-[20px] h-[40px] rounded-md"></div>
                    <div className="text-[20px] font-normal leading-[26px] text-center text-black ml-2">Just For You</div>
                </div>
                <button className="w-[150px] border-slate-700 bg-white text-black h-[56px] px-[20px] py-[16px] gap-[10px] border-[1px] border-solid rounded-[4px]">
                    See All
                </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4">
                {/* Product 1 */}
                <div className="border p-4 flex flex-col max-w-full">
                    <div className="relative border bg-slate-100 flex-1 overflow-hidden">
                        <Image 
                            src={One}
                            alt="IPS LCD Gaming Monitor"
                            width={270} 
                            height={250} 
                            objectFit="cover"
                            className="w-full h-full"
                        />
                        <button className="bg-black text-white px-4 py-2 flex items-center mt-2 absolute bottom-2 left-0 right-0 mx-auto">
                            <FaShoppingCart className="mr-2" /> 
                            Add To Cart
                        </button>
                        <span className="absolute top-0 left-0 bg-red-500 text-white p-1">-35%</span>
                    </div>
                    <p className="font-bold text-sm sm:text-base mt-2">ASUS FHD Gaming Laptop</p>
                    <p className="line-through text-sm sm:text-base">$1160</p>
                    <p className="text-red-500 text-sm sm:text-base">$960</p>
                    <div className="flex items-center">
                        {[...Array(5)].map((_, index) => ( 
                            <FaStar key={index} className="text-yellow-500" />
                        ))}
                        <p className="ml-1 text-sm sm:text-base">(65)</p>
                    </div>
                </div>

                {/* Product 2 */}
                <div className="border p-4 flex flex-col max-w-full">
                    <div className="relative border bg-slate-100 flex-1 overflow-hidden">
                        <Image 
                            src={Two}
                            alt="IPS LCD Gaming Monitor"
                            width={270} 
                            height={250} 
                            objectFit="cover"
                            className="w-full h-full"
                        />
                        <button className="bg-black text-white px-4 py-2 flex items-center mt-2 absolute bottom-2 left-0 right-0 mx-auto">
                            <FaShoppingCart className="mr-2" /> 
                            Add To Cart
                        </button>
                    </div>
                    <p className="font-bold text-sm sm:text-base mt-2">IPS LCD Gaming Monitor</p>
                    <p className="text-black text-sm sm:text-base">$1160</p>
                    <div className="flex items-center">
                        {[...Array(5)].map((_, index) => (
                            <FaStar key={index} className="text-yellow-500" />
                        ))}
                        <p className="ml-1 text-sm sm:text-base">(65)</p>
                    </div>
                </div>

                {/* Product 3 */}
                <div className="border p-4 flex flex-col max-w-full">
                    <div className="relative border bg-slate-100 flex-1 overflow-hidden">
                        <Image 
                            src={Three}
                            alt="HAVIT HV-G92 Gamepad"
                            width={270}
                            height={250}
                            objectFit="cover"
                            className="w-full h-full"
                        />
                        <button className="bg-black text-white px-4 py-2 flex items-center mt-2 absolute bottom-2 left-0 right-0 mx-auto">
                            <FaShoppingCart className="mr-2" /> 
                            Add To Cart
                        </button>
                    </div>
                    <p className="font-bold text-sm sm:text-base mt-2">HAVIT HV-G92 Gamepad</p>
                    <p className="text-black text-sm sm:text-base">$560</p>
                    <div className="flex items-center">
                        {[...Array(5)].map((_, index) => (
                            <FaStar key={index} className="text-yellow-500" />
                        ))}
                        <p className="ml-1 text-sm sm:text-base">(65)</p>
                    </div>
                </div>

                {/* Product 4 */}
                <div className="border p-4 flex flex-col max-w-full">
                    <div className="relative border bg-slate-100 flex-1 overflow-hidden">
                        <Image 
                            src={Four}
                            alt="AK-900 Wired Keyboard"
                            width={270}
                            height={250}
                            objectFit="cover"
                            className="w-full h-full"
                        />
                        <button className="bg-black text-white px-4 py-2 flex items-center mt-2 absolute bottom-2 left-0 right-0 mx-auto">
                            <FaShoppingCart className="mr-2" /> 
                            Add To Cart
                        </button>
                    </div>
                    <p className="font-bold text-sm sm:text-base mt-2">AK-900 Wired Keyboard</p>
                    <p className="text-black text-sm sm:text-base">$200</p>
                    <div className="flex items-center">
                        {[...Array(5)].map((_, index) => (
                            <FaStar key={index} className="text-yellow-500" />
                        ))}
                        <p className="ml-1 text-sm sm:text-base">(65)</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Wishlist;


 

