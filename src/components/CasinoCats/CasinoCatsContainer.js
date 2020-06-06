import React, { useState, useEffect } from 'react'
import './CasinoCatsContainer.css'
import test from './cats/1.jpg'
import CatsList from './CatsList';
import cat0 from './cats/0.png'
import MessageAlert from './MessageAlert'

import winSound from '../../Asset/winsound.wav'
import loose from '../../Asset/chien.mp3'
import jeton from '../../Asset/Payout.wav'
export default function CasinoCatsContainer(props) {
    // const message = document.getElementById('message')

    const [click, setClick] = useState(false)
    const [number1, setNumber1] = useState(0)
    const [number2, setNumber2] = useState(1)
    const [number3, setNumber3] = useState(0)
    const [isBegin, setIsBegin] = useState('yes')
    const [isWin, setIsWin] = useState(false)
    const [loading, isLoading] = useState(false)
    const [jetons, setJetons] = useState(5)
    const [numberOfPart, setNumberOfPart] = useState(0)
    const [classCasino, setClassCasino] = useState(false)
    const max = 2
    // si gagner ne pas enlever le jeton
    useEffect(() => {
        const verifyIfWin = () => {
            if (number1 === number2 && number2 === number3 && number3 === number1) {
                setNumberOfPart(0)
                setIsWin(true)

            }
            else {
                setIsWin(false)
            }
            console.log('lunch');
        }
        verifyIfWin()
    }, [loading])

    useEffect(() => {
        if (isBegin !== 'yes') {
            const getMyRandom = () => {
                setIsWin(false)
                setNumber1(Math.floor(Math.random() * Math.floor(max)))
                setNumber2(Math.floor(Math.random() * Math.floor(max)))
                setNumber3(Math.floor(Math.random() * Math.floor(max)))
                setNumberOfPart(numberOfPart + 1)
            }
            getMyRandom()
        }
    }, [click])

    const gatRandomNumbers = () => {
        setIsBegin('no')
        isLoading(true)
        setClick(!click)
        const audio = new Audio(jeton)
        audio.play()
        setTimeout(() => {
            isLoading(false)
        }, 1000)
    }
    const gatRandomNumbersRetry = () => {
        setNumberOfPart(0)
        setIsWin(false)
        setClick(!click)
        setIsBegin('no')
        isLoading(true)
        setTimeout(() => {
            isLoading(false)
        }, 1000)

    }


    // useEffect(() => {
    //     const counterMaj = () => {
    //         if (click) {

    //         }
    //     }
    //     counterMaj()
    // }, [click])

    useEffect(() => {
        const counterJetons = () => {
            if (numberOfPart === 3 && !isWin) {
                setJetons(jetons - 1)
                setTimeout(() => {
                    const audio = new Audio(loose)
                    audio.play()
                }, 2000)
                return
            }
            else if (isWin) {
                setJetons(jetons + 1)
                setTimeout(() => {
                    const audio2 = new Audio(winSound)
                    audio2.play()

                }, 1000)
            }

            return
        }
        counterJetons()
    }, [numberOfPart])

    // setInterval(
    setTimeout(() => {
        setClassCasino(!classCasino)
    }, 1000)
    // , 1000)

    console.log("isWin", isWin);
    console.log("numberOfPart", numberOfPart);
    console.log("jetons", jetons);
    console.log(number1, number2, number3);
    console.log("isLoading", loading);


    return (
        <div className="containCasino">
            <div className="containTitleCasino">
                <span className={classCasino ? 'casinoTitleRed' : 'casinoTitleYellow'}>Casino Cats</span>
            </div>

            <h1 style={{ color: 'white' }}></h1>

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

                        <div className={!loading ? 'catImage' : 'imgcatload'}>
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
                !loading && numberOfPart < 3 && !isWin && <>
                    < div className='btn-casino' onClick={() => gatRandomNumbers()}>TRY</div>
                </>
            }
            {
                !loading && numberOfPart === 3 && jetons !== 0 && <>
                    < div className='btn-casino' onClick={() => gatRandomNumbersRetry()}>Rejouer</div>
                </>
            }
            {
                !loading && isWin && <>
                    < div className='btn-casino' onClick={() => gatRandomNumbersRetry()}>Rejouer</div>
                </>
            }
            {
                !loading && isWin === true && <MessageAlert
                    msg={`Super ! Vous avez gagné votre nombre de jetons augmente de 1, il est donc de : ${jetons}`}
                    color='green' />
            }

            {
                !loading && numberOfPart === 3 && isWin === false && jetons !== 0 && <MessageAlert
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
