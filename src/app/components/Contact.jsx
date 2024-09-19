"use client"
import React, {useState} from "react";

const Contact = () => {

const [showMoreEmail, setShowMoreEmail] = useState(false);
const mostrarEmail = () => {setShowMoreEmail(!showMoreEmail); setShowMoreTelefono(false);};

const [showMoreTelefono, setShowMoreTelefono] = useState(false);
const mostrarTelefono = () => {setShowMoreTelefono(!showMoreTelefono); setShowMoreEmail(false);};

    return(
        <section className="bg-purple-200 rounded border-purple-400 border-4 mb-6"id="contact">
            <div className="pt-3 text-2xl text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-purple-800 to-purple-500 font-extrabold text-center">
                Contact
            </div>
            <div className="grid grid-cols-2 text-black p-4 font-semibold gap-12">
                <button className="h-16 bg-gradient-to-r from-purple-500 via-purple-300 to-purple-500 rounded-full shadow-md shadow-black font-semibold text-blak hover:text-white hover:bg-black hover:shadow-purple-200" onClick={mostrarEmail}>
                    Email
                </button>
                <button className="h-16 bg-gradient-to-r from-purple-500 via-purple-300 to-purple-500 rounded-full shadow-md shadow-black font-semibold text-blak hover:text-white hover:bg-black hover:shadow-purple-200" onClick={mostrarTelefono}>
                    Linkedln  
                </button>
                {showMoreEmail && (
                    <div className="col-span-2 bg-purple-100 p-4 rounded text-black m-3 shadow-sm shadow-black text-sm text-center">
                        juliagumart@gmail.com
                    </div>
                )}
                {showMoreTelefono && (
                    <div className="col-span-2 bg-purple-100 p-4 rounded text-black m-3 shadow-sm shadow-black text-sm text-center">
                        Julia Gutiérrez Martín
                    </div>
                )}
            </div>
        </section>
    );
};
export default Contact;