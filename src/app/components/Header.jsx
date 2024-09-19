"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";

const Header = () =>{
    return ( 
        <section>
            <div className="grid grid-cols-1 lg:grid-cols-12">
                <div className="lg:col-span-5 place-self-center ml-10 lg:py-20 py-10">
                    <div className="relative shadow-md shadow-white rounded-full  bg-purple-400  lg:w-[500px] lg:h-[500px] w-[250px] h-[250px]">
                        <Image src="/images/icon.png" width={500} height={500} className=""></Image>
                    </div>
                </div>
                <div className="lg:col-span-7 lg:px-24 lg:py-15 px-12 py-10 place-self-center">
                    <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-purple-200 via-violet-400 to-purple-800 font-extrabold lg:text-6xl text-4xl pb-24">Hola! <br></br>Soy Julia Gutiérrez Martín.</h1>
                    <span className="text-gray-50 text-size-6 lg:text-size-12">
                        Soy {" "}
                    </span>
                    <TypeAnimation
                        sequence={[
                            "una estudiante de Ingeniería informática",
                            1000,
                            "una estudiante de Ingeniería de software",
                            1000
                        ]}
                        wrapper="span"
                        speed={50}
                        style={{display: 'inline-block'}}
                        repeat={Infinity}
                    />
                    <div>
                        <div className="flex justify-center lg:justify-start space-x-10 pt-10 ">
                                <button className="flex  px-6 py-3 rounded-full  bg-gradient-to-r from-purple-500 via-purple-300 to-purple-500 text-black font-bold shadow-md shadow-gray-100 hover:bg-black hover:text-white hover:shadow-black hover:font-extrabold "><a href="curri.pdf">Curriculum<svg fill="none" viewBox="-2 0 28 24" strokeWidth={2} stroke="currentColor" className="size-6"><path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" /></svg></a></button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Header;