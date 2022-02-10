import React, { useState, useRef, useMemo, useEffect } from "react";
import Link from "next/link";
import NavRolexItem from "../../components/NavRolexItem";
import Head from "next/head";
import styles from "../../styles/Work.module.css";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { HiOutlineHome } from "react-icons/hi";
import Image from 'next/image'
import useMediaQuery from '@mui/material/useMediaQuery';

const proyects = [{
    name: "mytinerary",
    url: "https://mytinerary-moraga.netlify.app/",
    description: {
        role: "Este proyecto se caracteriza por su desarrollo individual (full stack), atendiendo al patrón de diseño MVC.",
        dificulties:
            "En este proyecto lo mas complejo se evidencio a la hora de utilizar estados en los que se necesitaban en mas de un componente, inicialmente teniendo que transportar la información mediante las propiedades de otros componentes.",
        solution:
            "Una de las soluciones mas acertadas, fue el uso de Redux. La que fue elegida por sobre otras (context hook), ya que se prentende que el actual proyecto escale a una gran madurez",
        tech: [
            "React",
            "Redux",
            "NodeJs",
            "ExpressJs",
            "Mongodb",
            "JOI",
            "Passport",
            "JWT",
            "Mongoose",
            "Google OAuth",
            "Git",
            "Postman",
            "MongoDBCompass",
        ],
        features: [
            "Login",
            "Registro de usuarios",
            "Likes",
            "Comentarios",
            "Validador - formulario de registro",
        ],
    },
    img: '/proyect-3.jpg'
},
{
    name: "broke & fix",
    description: {
        role: "En broke & fix tome el rol de product owner y fui lider en el equipo backend, logrando un producto minimo viable",
        dificulties:
            "En un comienzo se vio afectado por la poca o nula comunicación entre los equipos de desarrollos (backend - frontend)",
        solution:
            "Se establece seguir al pie de la letra la metodologia scrum, donde diariamente en no mas de 20 min, se mencionaba el estado en que se encontraba cada equipo",
        tech: [
            "React",
            "Redux",
            "NodeJs",
            "ExpressJs",
            "Mongodb",
            "JOI",
            "Passport",
            "JWT",
            "Mongoose",
            "Google OAuth",
            "Git",
            "Postman",
            "MongoDBCompass",
        ],
        features: [
            "Login",
            "Registro de usuarios",
            "Rating",
            "Comentarios",
            "Validador - formulario de registro",
            "Panel de administración",
        ],
    },
    url: "https://brokandfix.herokuapp.com/",
    img: "/proyect-1.jpg",
},
{
    name: "proyecto z",
    description: {
        role: "En Proyecto Z, buscamos familiarizarnos con el mundo de los NFT, siendo mi participacion clave a la hora de desarrollar funcionalidades (tanto de backend como de frontend) propios del sistema en cuestión",
        dificulties:
            "AL ser un proyecto relacionado con un rubro nuevo y con un tiempo muy limitado, existian grandes dificultades a la hora de abordar funcionalidades que derivan del sistema en desarrollo",
        solution:
            "La solución mas proxima fue esclarecer con el equipo de desarrollo el alcance del proyecto, logrando simular un marketplace de ofertas y demandas",
        tech: [
            "React",
            "Redux",
            "NodeJs",
            "ExpressJs",
            "Mongodb",
            "Websockets",
            "JOI",
            "Passport",
            "JWT",
            "Mongoose",
            "Google OAuth",
            "Git",
            "Postman",
            "MongoDBCompass",
            "Paypal",
        ],
        features: [
            "Compra/venta de NFT",
            "Paypal",
            "Juego",
            "Suscripción",
            "Dashboard",
            "Graficos en tiempo real",
        ],
    },
    url: "https://proyectzzzz.netlify.app/",
    img: "/proyect-2.jpg",
},]

const Modules = () => {

    const largeSize = useMediaQuery('(min-width:801px) and (max-width:1023px)');
    const mediumSize = useMediaQuery('(min-width:501px) and (max-width:800px)');
    const smallSize = useMediaQuery('(min-width:320px) and (max-width:500px)');
    const [image, setImg] = useState('/proyect-3.jpg')
    const [filteredView, setView] = useState({ img: '/proyect-3.jpg' })


    const getView = (paramView) => {
        const filteredView = proyects.find((proyect) => proyect.name === paramView);
        setView(filteredView);

        demo.current.href = filteredView.url;
        setDescription({
            role: filteredView.description.role,
            dificulties: filteredView.description.dificulties,
            solution: filteredView.description.solution,
            tech: filteredView.description.tech,
            features: filteredView.description.features,
        });
    };

    useEffect(() => {
        const urlImage = filteredView.img.substring(0, 10)
        const img = largeSize ? `${urlImage}-l.jpg` : mediumSize ? `${urlImage}-m.jpg` : smallSize ? `${urlImage}-sm.jpg` : `${urlImage}.jpg`;
        setImg(img)
    }, [largeSize, mediumSize, smallSize, getView]);


    const demo = useRef();
    const [step, setStep] = useState(1);
    const [description, setDescription] = useState({
        role: proyects[0].description.role,
        dificulties: proyects[0].description.dificulties,
        solution: proyects[0].description.solution,
        tech: proyects[0].description.tech,
        features: proyects[0].description.features,
    });
    const [hover, setHover] = useState(false);
    const renderComponent = useMemo(
        () => (
            <NavRolexItem
                hover={hover}
                setHover={setHover}
                getView={getView}
                arrowRightMargin={12}
                jump={60}
                upperLimit={-60}
                lowerLimit={60}
                time={5000}
                configRolexItem={[
                    "",
                    "",
                    "Proyectz",
                    "",
                    "",
                    "",
                    "Mytinerary",
                    "",
                    "",
                    "",
                    "Broke&Fix",
                    "",
                ]}
            />
        ),
        [hover]
    );

    return (
        <>
            <div className={styles.container__module}>
                <Head>
                    <title>Trabajo | Marcos Moraga</title>
                    <meta charSet="UTF-8" />

                    <link rel="icon" href="/favicon.ico" />
                </Head>

                <Image src={image} layout='fill'></Image>
                <article
                    className={styles.article}
                >
                    <div
                        id="proyects"
                        className={styles.proyects__container}
                    >
                        {renderComponent}
                        <div

                            className={styles.proyects}
                        >
                            <div
                                onMouseEnter={() => setHover(true)}
                                onMouseLeave={() => setHover(false)}

                                className={styles.proyects__paragraph__container}
                            >
                                <div

                                    className={styles.proyects__paragraph}
                                >
                                    <div

                                        className={styles.proyects__paragraph_steper_container}
                                    >
                                        <BsChevronLeft
                                            onClick={() => {
                                                step > 1 && setStep((prev) => prev - 1);
                                            }}

                                            className={styles.proyects__paragraph_steper_left}
                                        />
                                        <span>{step}/5</span>
                                        <BsChevronRight
                                            onClick={() => {
                                                step < 5 && setStep((prev) => prev + 1);
                                            }}

                                            className={styles.proyects__paragraph_steper_right}
                                        />
                                    </div>
                                    <h2 className={styles.proyects__paragraph_title} >
                                        {step === 1 && "Rol"}
                                        {step === 2 && "Dificultades"}
                                        {step === 3 && "Solución"}
                                        {step === 4 && "Características destacables"}
                                        {step === 5 && "Tecnologías"}
                                    </h2>
                                    {(step !== 4 && step !== 5) ?
                                        <p
                                            className={styles.proyects__paragraph_text}
                                        >
                                            {step === 1 && description.role}
                                            {step === 2 && description.dificulties}
                                            {step === 3 && description.solution}
                                        </p>
                                        :
                                        <ul className={styles.proyects__paragraph_list} >
                                            {step === 4 ? description.features.map(feature => <li key={feature}>{feature}</li>) : description.tech.map(tech => <li key={tech}>{tech}</li>)}
                                        </ul>
                                    }

                                </div>
                                <div
                                    style={{

                                    }}
                                    className={styles.proyects__actions}
                                >
                                    <Link href="/">
                                        <a>
                                            <HiOutlineHome className={styles.proyects__actions_home} />
                                        </a>
                                    </Link>
                                    <a
                                        ref={demo}
                                        rel="noreferrer"
                                        href="https://mytinerary-moraga.netlify.app/"
                                        target="_blank"
                                    >
                                        DEMO
                                    </a>
                                    <a rel="noreferrer" href="mailto:moraga.dev@gmail.com">
                                        <AiOutlineMail className={styles.proyects__actions_email} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
            </div>
        </>
    );
};

export default Modules;
