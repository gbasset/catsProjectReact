import React, { useState, useEffect } from 'react'
import './CasinoCatsContainer.css'
import test from './cats/1.jpg'
import CatsList from './CatsList';
import cat0 from './cats/0.png'
import MessageAlert from './MessageAlert'

import winSound from '../../Asset/winsound.wav'
import loose from '../../Asset/j_perdu1.mp3'
import jeton from '../../Asset/Payout.wav'
export default function CasinoCatsContainer(props) {
    // const message = document.getElementById('message')

    const [click, setClick] = useState(false)
    const [number1, setNumber1] = useState(0)
    const [number2, setNumber2] = useState(1)
    const [number3, setNumber3] = useState(0)
    const [isBegin, setIsBegin] = useState('yes')
    const [isWin, setIsWin] = useState(false)
    const [isLost, setIsLost] = useState(false)
    const [loading, isLoading] = useState(false)
    const [jetons, setJetons] = useState(15)
    const [numberOfPart, setNumberOfPart] = useState(0)
    const [classCasino, setClassCasino] = useState(false)
    const max = 3
    // si gagner ne pas enlever le jeton
    const gatRandomNumbers = () => {
        setClick(true)
        setIsBegin('no')
        isLoading(true)
        setTimeout(() => {
            isLoading(false)

        }, 1500)
    }
    const gatRandomNumbersRetry = () => {
        setNumberOfPart(0)
        setIsWin(false)
        setIsLost(false)
        setClick(true)
        setIsBegin('no')
        isLoading(true)
        setTimeout(() => {
            isLoading(false)

        }, 1500)
    }
    useEffect(() => {
        if (click === true) {
            setClick(false)
            setNumber1(Math.floor(Math.random() * Math.floor(max)))
            setNumber2(Math.floor(Math.random() * Math.floor(max)))
            setNumber3(Math.floor(Math.random() * Math.floor(max)))
        }

        if (number1 === number2 && number2 === number3) {
            setIsWin(true)
            setIsLost(false)
            setNumberOfPart(3)
            // winSound.play()
        }
        if (number1 !== number3 || number2 !== number1) {
            setIsWin(false)
            setIsLost(true)
        }
    }, [click])

    useEffect(() => {
        const counterMaj = () => {
            if (click) {
                setNumberOfPart(numberOfPart + 1)
                const audio = new Audio(jeton)
                audio.play()
            }
        }
        counterMaj()
    }, [click])

    useEffect(() => {
        const counterJetons = () => {
            if (numberOfPart === 3 && isLost) {
                setJetons(jetons - 1)
                setTimeout(() => {
                    const audio = new Audio(loose)
                    audio.play()
                }, 2000)

            }
            else if (numberOfPart === 3 && isWin) {
                setJetons(jetons + 1)
                setTimeout(() => {
                    const audio2 = new Audio(winSound)
                    audio2.play()
                }, 2000)

            }
        }
        counterJetons()
    }, [numberOfPart])
    console.log("isWin", isWin);
    console.log("isLost", isLost);
    console.log("numberOfPart", numberOfPart);
    console.log("jetons", jetons);
    setInterval(
        setTimeout(() => {
            setClassCasino(!classCasino)
        }, 1000)
        ,
        3000)
    return (
        <div className="containCasino">
            <div className="containTitleCasino">
                <span className={classCasino ? 'casinoTitleRed' : 'casinoTitleYellow'}>Casino Cats</span>
            </div>

            <h1 style={{ color: 'white' }}>

            </h1>

            <div className="containerCatsImages">
                {isBegin === 'yes' &&
                    <>

                        <div className={classCasino ? 'catImageRed' : 'catImageYellow'}
                            style={{
                                backgroundImage: `url(${cat0})`,
                                backgroundPosition: 'center',
                                backgroundSize: 'cover'
                            }}
                        >
                            {/* // <img className="catsImageCasino" src={CatsList[0].url} alt="cats" /> */}
                        </div>
                        <div className={classCasino ? 'catImageRed' : 'catImageYellow'} style={{
                            backgroundImage: `url(${cat0})`,
                            backgroundPosition: 'center',
                            backgroundSize: 'cover'
                        }}></div>
                        <div className={classCasino ? 'catImageRed' : 'catImageYellow'} style={{
                            backgroundImage: `url(${cat0})`,
                            backgroundPosition: 'center',
                            backgroundSize: 'cover'
                        }}></div>

                    </>
                }
                {isBegin === 'no' &&
                    <>

                        <div className={!loading ? 'catImage' : 'imgcatload'}

                        >
                            <img className={!loading ? 'imgcat' : 'imgcatActive'} src={`${CatsList[number1].url}`} />
                        </div>
                        <div className={!loading ? 'catImage' : 'imgcatload'}>
                            <img className={!loading ? 'imgcat' : 'imgcatActive'} src={`${CatsList[number2].url}`} />
                        </div>
                        <div className={!loading ? 'catImage' : 'imgcatload'}>
                            <img className={!loading ? 'imgcat' : 'imgcatActive'} src={`${CatsList[number3].url}`} />
                        </div>

                    </>
                }

            </div>

            {
                !loading && numberOfPart < 3 && jetons !== 0 && <>
                    < div className='btn-casino' onClick={() => gatRandomNumbers()}>TRY</div>
                </>
            }
            {
                !loading && numberOfPart === 3 && jetons !== 0 && <>
                    < div className='btn-casino' onClick={() => gatRandomNumbersRetry()}>Rejouer</div>
                </>
            }

            {
                !loading && numberOfPart === 3 && isWin === true && jetons !== 0 && <MessageAlert
                    msg={`Super ! Vous avez gagné votre nombre de jetons augmente de 1, il est donc de : ${jetons}`}
                    color='green' />
            }

            {
                !loading && numberOfPart === 3 && isLost === true && jetons !== 0 && <MessageAlert
                    msg={` Dommage ! Vous avez perdu votre nombre de jetons est de : ${jetons}`}
                    color='red' />
            }
            {
                isBegin === 'yes' &&
                <MessageAlert
                    msg={`Vous commencez avec un solde de ${jetons} jetons  
        chaque partie coute 1 jetons et dure 3 essais`}
                    color='red' />
            }
            {
                jetons === 0 &&
                <MessageAlert
                    msg={`Vous n'avez plus de credit, allez en page d'accueil voir des chats !`}
                    color='red' />
            }

        </div>
    )
}
