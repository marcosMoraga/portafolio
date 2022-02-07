import React, { useEffect, useState } from 'react'

import styles from '../styles/CardProyect.module.css'
const CardProyect = () => {
    const [hover, setHover] = useState(false)
    const slideStyles = {

        firstSlide: {
            width: '48%',
            height: '48%',
            zIndex: '2',
            backgroundColor: 'black',
            borderRadius: '15px',
            position: 'absolute',
        },
        secondSlide: {
            transform: 'translate(1rem, -1rem)',
            width: '48%',
            height: '48%',
            position: 'absolute',
            zIndex: '1',
            backgroundColor: 'black',
            borderRadius: '15px'

        },
        thirdSlide: {
            transform: 'translate(2rem, -2rem)',
            position: 'absolute',
            width: '48%',
            height: '48%',
            zIndex: '0',
            borderRadius: '15px',
            backgroundColor: 'black'
        }

    };

    const [slide, setSlide] = useState(0)

    useEffect(() => {
        if (!hover) {

            const interval = setInterval(() => {
                handlerUp()
            }, 7000)
            return () => clearInterval(interval)
        }

    })
    const handlerUp = () => {
        if (slide <= 2) {
            setSlide(prev => prev + 1)
        } else {
            setSlide(0)
        }
    }


    return (

        <div className={styles.landing__main_proyects}>
            <div onMouseLeave={() => setHover(false)} onMouseEnter={() => setHover(true)} style={slide === 0 ? slideStyles.firstSlide : slide === 1 ? slideStyles.thirdSlide : slideStyles.secondSlide} ><a rel='noreferrer' target='_blank' href="https://brokandfix.herokuapp.com/"><div className={styles.slideOne}></div></a></div>
            <div onMouseLeave={() => setHover(false)} onMouseEnter={() => setHover(true)} style={slide === 0 ? slideStyles.secondSlide : slide === 1 ? slideStyles.firstSlide : slideStyles.thirdSlide} ><a rel='noreferrer' target='_blank' href="https://proyectzzzz.netlify.app/"><div className={styles.slideTwo} ></div></a></div>
            <div onMouseLeave={() => setHover(false)} onMouseEnter={() => setHover(true)} style={slide === 0 ? slideStyles.thirdSlide : slide === 1 ? slideStyles.secondSlide : slideStyles.firstSlide} ><a rel='noreferrer' target='_blank' href="https://mytinerary-moraga.netlify.app/"><div className={styles.slideThree} ></div></a></div>
        </div >

    )
}

export default CardProyect
