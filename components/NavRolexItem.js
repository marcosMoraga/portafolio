import React, { useState, useEffect, useRef } from 'react'
import { FaChevronDown, FaChevronUp, FaChevronRight } from 'react-icons/fa';
import styles from '../styles/NavRolexItem.module.css'

const NavRolexItem = ({ hover, getView, setHover, configRolexItem, jump, lowerLimit, time }) => {
    const [rolexItem, setRolexItem] = useState([])
    const rolexItemsRefs = useRef([]);
    const [state, setState] = useState(0)
    const [stateDown, setStateDown] = useState(0)
    let contUp = state;
    let contDown = stateDown;

    useEffect(() => {

        let cont = 1
        let indexCont = 0
        let jsx
        const itemRolexProto = configRolexItem.map((item, i, array) => {
            if (cont <= 6) {
                jsx = (
                    <div key={Math.random() + Math.random()} ref={(item) => (rolexItemsRefs.current[i] = item)} className={styles[`z${cont}`]}>
                        <div className={styles.rolex__page}>{array[i + indexCont]}</div>
                        <div className={styles.rolex__page}>{array[i + 1 + indexCont]}</div>
                    </div>)
                cont++
                indexCont += 1
            } else {
                return null
            }
            return jsx
        }
        )
        itemRolexProto.splice(6, 11)
        setRolexItem(itemRolexProto)


    }, [])


    useEffect(() => {
        if (!hover) {
            const interval = setInterval(() => {
                handlerRolexUp()
            }, time)
            return () => {
                clearInterval(interval)
            }
        }

    }, [hover])
    const handlerRolexUp = () => {
        contUp = contUp - 60;
        setState(contUp)

        if ((contUp + contDown) < -60) {
            contUp = 60
            setState(contUp)
            setStateDown(0) // auxiliar con valor cero
            contDown = 0
        }

        switch ((contUp + contDown)) {
            case 0:
                getView && getView('mytinerary')

                break;
            case -60:
                getView && getView('broke & fix')
                break;
            case 60:
                getView && getView('proyecto z')
                break;
            default: break
        }

        rolexItemsRefs.current[0].style.transform = `rotate(${contUp + contDown}deg)`;
        rolexItemsRefs.current[0].childNodes.forEach(element => {
            element.style.transform = `rotate(${-contUp - contDown}deg)`;
        })
        rolexItemsRefs.current[1].style.transform = `rotate(${contUp + contDown + 30}deg)`;
        rolexItemsRefs.current[1].childNodes.forEach(element => {
            element.style.transform = `rotate(${-contUp - contDown - 30}deg)`;
        })
        rolexItemsRefs.current[2].style.transform = `rotate(${contUp + contDown + 60}deg)`;
        rolexItemsRefs.current[2].childNodes.forEach(element => {
            element.style.transform = `rotate(${-contUp - contDown - 60}deg)`;
        })
        rolexItemsRefs.current[3].style.transform = `rotate(${contUp + contDown + 90}deg)`;
        rolexItemsRefs.current[3].childNodes.forEach(element => {
            element.style.transform = `rotate(${-contUp - contDown - 90}deg)`;
        })
        rolexItemsRefs.current[4].style.transform = `rotate(${contUp + contDown + 120}deg)`;
        rolexItemsRefs.current[4].childNodes.forEach(element => {
            element.style.transform = `rotate(${-contUp - contDown - 120}deg)`;
        })
        rolexItemsRefs.current[5].style.transform = `rotate(${contUp + contDown + 150}deg)`;
        rolexItemsRefs.current[5].childNodes.forEach(element => {
            element.style.transform = `rotate(${-contUp - contDown - 150}deg)`;
        })

    }




    const handlerRolexDown = () => {
        contDown = contDown + jump;
        setStateDown(contDown);

        if ((contUp + contDown) > lowerLimit) {
            contDown = -60
            contUp = 0
            setState(0)
            setStateDown(contDown);
        }
        switch ((contUp + contDown)) {
            case 0:
                getView && getView('mytinerary')
                break;
            case -60:
                getView && getView('broke & fix')
                break;
            case 60:
                getView && getView('proyecto z')
                break;
            default: break
        }
        rolexItemsRefs.current[0].style.transform = `rotate(${contUp + contDown}deg)`;
        rolexItemsRefs.current[0].childNodes.forEach(element => {
            element.style.transform = `rotate(${-contUp - contDown}deg)`;
        })
        rolexItemsRefs.current[1].style.transform = `rotate(${contUp + contDown + 30}deg)`;
        rolexItemsRefs.current[1].childNodes.forEach(element => {
            element.style.transform = `rotate(${-contUp - contDown - 30}deg)`;
        })
        rolexItemsRefs.current[2].style.transform = `rotate(${contUp + contDown + 60}deg)`;
        rolexItemsRefs.current[2].childNodes.forEach(element => {
            element.style.transform = `rotate(${-contUp - contDown - 60}deg)`;
        })
        rolexItemsRefs.current[3].style.transform = `rotate(${contUp + contDown + 90}deg)`;
        rolexItemsRefs.current[3].childNodes.forEach(element => {
            element.style.transform = `rotate(${-contUp - contDown - 90}deg)`;
        })
        rolexItemsRefs.current[4].style.transform = `rotate(${contUp + contDown + 120}deg)`;
        rolexItemsRefs.current[4].childNodes.forEach(element => {
            element.style.transform = `rotate(${-contUp - contDown - 120}deg)`;
        })
        rolexItemsRefs.current[5].style.transform = `rotate(${contUp + contDown + 150}deg)`;
        rolexItemsRefs.current[5].childNodes.forEach(element => {
            element.style.transform = `rotate(${-contUp - contDown - 150}deg)`;
        })

    }



    return (
        <>
            <nav className={styles.nav} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} >
                <div className={styles.nav__items}>
                    {rolexItem.map(rolexItem => rolexItem)}
                </div>
                <div className={styles.nav__actions} >
                    {hover && <FaChevronUp className={styles.nav__actions_up} onClick={handlerRolexUp} />}
                    <div className={styles.nav__inside__arrow__container}>
                        <FaChevronRight className={styles.nav__inside__arrow} />
                    </div>
                    {hover && <FaChevronDown className={styles.nav__actions_down} onClick={handlerRolexDown} />}
                </div>
            </nav >
        </>

    )
}

export default NavRolexItem
