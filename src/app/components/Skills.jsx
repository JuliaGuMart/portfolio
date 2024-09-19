"use client"
import React, {useState} from "react";


const Skills = () => {

        
    const [showMoreJava, setShowMoreJava] = useState(false);
    const handleShowMoreJava = () => {setShowMoreJava(!showMoreJava);};
      
    const [showMorePython, setShowMorePython] = useState(false);
    const handleShowMorePython = () => {setShowMorePython(!showMorePython);};

    const [showMoreHTML, setShowMoreHTML] = useState(false);
    const handleShowMoreHTML = () => {setShowMoreHTML(!showMoreHTML);};
      
    const [showMoreScript, setShowMoreScript] = useState(false);
    const handleShowMoreScript = () => {setShowMoreScript(!showMoreScript);};

    const [showMoreUML, setShowMoreUML] = useState(false);
    const handleShowMoreUML = () => {setShowMoreUML(!showMoreUML);};
      
    const [showMoreC, setShowMoreC] = useState(false);
    const handleShowMoreC = () => {setShowMoreC(!showMoreC);};

    const [showMoreSQL, setShowMoreSQL] = useState(false);
    const handleShowMoreSQL = () => {setShowMoreSQL(!showMoreSQL);};
      
    return(
        <section className="bg-purple-200 rounded border-purple-400 border-4 mb-6 pb-3"id="skills">
            <div className="pt-3 pb-5 text-2xl text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-purple-800 to-purple-500 font-extrabold text-center">
                Skills
            </div>
            <div className="flex flex-col gap-4">
                <div className="grid grid-rows-2 bg-purple-400 rounded m-2 ml-7 mr-7 shadow-sm shadow-black">
                    <div className="text-black font-bold text-center">
                        Java
                    </div>
                    <button className="text-black text-4xl text-center" onClick={handleShowMoreJava}>
                        {showMoreJava ? "-" : "+"}
                    </button>
                    {showMoreJava && (
                        <div className="bg-purple-100 p-4 rounded text-black m-3 shadow-sm shadow-black text-sm font-medium">
                            Tengo experiencia utilizando Java para desarrollar una variedad de aplicaciones y soluciones de software.<br/><br/>
                            Sé aprovechar las características clave de Java como su portabilidad, seguridad y amplia biblioteca de APIs para desarrollar tanto aplicaciones de escritorio como aplicaciones web empresariales. <br/><br/>
                            Estoy familiarizado con conceptos fundamentales de Java como clases, objetos, herencia, polimorfismo e interfaces.<br/><br/>
                            También poseo conocimientos de programación orientada a objetos, bases de datos relacionales y no relacionales, pruebas unitarias y patrones de diseño.<br/><br/>
                            Además, tengo experiencia utilizando entornos de desarrollo integrados (IDEs) populares para Java como Eclipse o NetBeans para escribir, depurar y probar código de manera eficiente.<br/><br/>
                            Mi conocimiento de Java me permite crear soluciones robustas y escalables para diversos casos de uso, desde aplicaciones simples hasta sistemas complejos. 
                        </div>
                    )}
                </div>
                <div className="grid grid-rows-2 bg-purple-400 rounded m-2 ml-7 mr-7 shadow-sm shadow-black">
                    <div className="text-black font-bold text-center">
                        Python
                    </div>
                    <button className="text-black text-4xl text-center"onClick={handleShowMorePython}>
                        {showMorePython ? "-" : "+"}
                    </button>
                    {showMorePython && (
                        <div className="bg-purple-100 p-4 rounded text-black m-3 shadow-sm shadow-black text-sm font-medium">
                            Gracias a mi experiencia con Python, puedo crear diferentes herramientas y scripts que ayudan a automatizar tareas y hacer procesos más sencillos.<br/><br/>
                            Utilizo bibliotecas como NumPy y pandas para analizar datos, lo que me permite obtener información útil de ellos.<br/><br/>
                            También tengo la capacidad de desarrollar aplicaciones de línea de comandos que facilitan la realización de tareas repetitivas.<br/><br/>
                            Además, aplico principios de programación orientada a objetos en mis proyectos, lo que me ayuda a escribir un código más organizado y fácil de entender.
                        </div>
                    )}
                </div>
                <div className=" grid grid-rows-2 bg-purple-400 rounded m-2 ml-7 mr-7 shadow-sm shadow-black">
                    <div className="text-black font-bold text-center">
                        HTML, CSS y JavaScript
                    </div>
                    <button className="text-black text-4xl text-center" onClick={handleShowMoreHTML}>
                        {showMoreHTML ? "-" : "+"}
                    </button>
                    {showMoreHTML && (
                        <div className="bg-purple-100 p-4 rounded text-black m-3 shadow-sm shadow-black text-sm font-medium">
                            Gracias a mi experiencia con HTML, CSS y JavaScript, puedo crear sitios web que son atractivos y fáciles de usar.<br/><br/>
                            Utilizo HTML5 para construir la estructura de las páginas y organizar el contenido de manera clara.<br/><br/>
                            Con CSS3, diseño y personalizo la apariencia de las páginas, asegurándome de que se vean bien en diferentes dispositivos, utilizando herramientas como Tailwind para hacerlo más rápido y sencillo.<br/><br/>
                            Además, sé cómo hacer que las páginas sean interactivas con JavaScript, lo que permite que los usuarios interactúen con el contenido de maneras interesantes.<br/><br/>
                            Puedo agregar efectos visuales y animaciones que mejoran la experiencia del usuario.<br/><br/>
                            También utilizo jQuery para facilitar la manipulación del contenido en la página y crear transiciones suaves.<br/><br/>
                            En resumen, mi conocimiento en estas tecnologías me permite desarrollar sitios web completos que son tanto bonitos como funcionales.
                        </div>
                    )}
                </div>
                <div className="grid grid-rows-2 bg-purple-400 rounded m-2 ml-7 mr-7 shadow-sm shadow-black">
                    <div className="text-black font-bold text-center">
                        UML
                    </div>
                    <button className="text-black text-4xl text-center" onClick={handleShowMoreUML}>
                        {showMoreUML ? "-" : "+"}
                    </button>
                    {showMoreUML && (
                        <div className="bg-purple-100 p-4 rounded text-black m-3 shadow-sm shadow-black text-sm font-medium">
                            Cuento con una sólida formación en el uso de UML, lo que me permite abordar de manera efectiva los desafíos en el análisis y diseño de software.<br/><br/>
                            Esta habilidad me permite crear soluciones de alta calidad que cumplen con los requisitos establecidos por el negocio.<br/><br/>
                            Para ello utilizo diagramas de casos de uso, clases y secuencia para capturar y modelar los requisitos durante las fases de análisis y diseño.<br/><br/>
                            Además, los diagramas de despliegue me ayudan a definir la arquitectura del sistema, identificar las interrelaciones entre los diferentes módulos y especificar la infraestructura necesaria para su implementación.<br/><br/>
                            Las herramientas con las que estoy familiarizada son Visual Paradigm y Astah.
                        </div>
                    )}
                </div>
                <div className="grid grid-rows-2 bg-purple-400 rounded m-2 ml-7 mr-7 shadow-sm shadow-black">
                    <div className="text-black font-bold text-center">
                        Prolog y Clips
                    </div>
                    <button className="text-black text-4xl text-center" onClick={handleShowMoreC}>
                        {showMoreC ? "-" : "+"}
                    </button>
                    {showMoreC && (
                        <div className="bg-purple-100 p-4 rounded text-black m-3 shadow-sm shadow-black text-sm font-medium">
                            Mi experiencia con Prolog y CLIPS me permite trabajar con paradigmas de programación lógica y desarrollar sistemas expertos eficaces.<br/><br/>
                            Puedo crear bases de conocimiento utilizando hechos y reglas para modelar dominios complejos.<br/><br/>
                            Con estas herramientas, soy capaz de implementar motores de inferencia para razonar sobre la información y generar conclusiones lógicas.<br/><br/>
                            Esto es especialmente útil para tareas como el diagnóstico de fallas, donde puedo definir reglas que relacionen síntomas con posibles causas.<br/><br/>
                            Además, puedo aprovechar el encadenamiento hacia adelante de CLIPS y el encadenamiento hacia atrás de Prolog para abordar diferentes tipos de problemas de razonamiento.<br/><br/>
                            Esta combinación de habilidades me permite diseñar sistemas inteligentes capaces de analizar situaciones complejas, tomar decisiones basadas en reglas y proporcionar recomendaciones expertas en diversos campos.
                        </div>
                    )}
                </div>
                <div className="grid grid-rows-2 bg-purple-400 rounded m-2 ml-7 mr-7 shadow-sm shadow-black">
                    <div className="text-black font-bold text-center">
                        SQL
                    </div>
                    <button className="text-black text-4xl text-center" onClick={handleShowMoreSQL}>
                        {showMoreSQL ? "-" : "+"}
                    </button>
                    {showMoreSQL && (
                        <div className="bg-purple-100 p-4 rounded text-black m-3 shadow-sm shadow-black text-sm font-medium">
                            Tengo la capacidad de trabajar con bases de datos SQL, tanto relacionales como no relacionales, lo que me permite diseñar y gestionar estructuras de datos eficientes para diversas aplicaciones.<br/><br/>
                            Estoy familiarizado con la creación de esquemas y la optimización del rendimiento en bases de datos relacionales.<br/><br/>
                            Además, puedo realizar consultas complejas utilizando SQL para extraer, manipular y analizar información de manera efectiva.<br/><br/>
                            He utilizado sistemas de gestión de bases de datos como Apache Derby y PostgreSQL, aprovechando sus características avanzadas para implementar soluciones robustas.<br/><br/>
                            Esta experiencia me permite manejar grandes volúmenes de datos y garantizar que las aplicaciones funcionen de manera fluida y eficiente.
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};
export default Skills;