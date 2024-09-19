import React from "react";

const AboutMe = () => {
    return(
        <section className="bg-purple-200 rounded border-purple-400 border-4 mb-6"id="aboutme">
            <div className="pt-3 text-2xl text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-purple-800 to-purple-500 font-extrabold text-center">
                About me
            </div>
            <div className="text-black p-4 font-semibold">
                Soy Julia, soy estudiante de Ingeniería informática en la Universidad de Vallladolid en España.<br/>
                Estoy especializada en la mención de Ingeniería de software.<br/>
                Realmemte disfruto programando y aprendiendo nuevos lenguajes ya sea en la Universidad o de forma autodidacta<br/>
                Estoy interesada en usar y desarrollar mis habilidades así como ampliar mis conocimientos.<br/>
                Me gusta trabajar en equipo, me parece una buena oportunidad de poner en común ideas y aprender de la experiencia de mis compañeros.<br/>
                Estoy buscando una oportunidad para trabajar y crecer profesionalmente.<br/>
                Todavía tengo mucho que aprender pero pondré todo de mi parte para alcanzar mis objetivos.
            </div>
        </section>
    );
};
export default AboutMe;