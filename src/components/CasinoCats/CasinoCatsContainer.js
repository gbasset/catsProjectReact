import React, { useState, useEffect } from 'react'
import './CasinoCatsContainer.css'
import test from './cats/1.jpg'
import CatsList from './CatsList';
import cat0 from './cats/0.png'
import MessageAlert from './MessageAlert'

import winSound from '../../Asset/boxdig.mp3'
import loose from '../../Asset/chien.mp3'
import jeton from '../../Asset/Payout.wav'
import metroid from '../../Asset/Metroid.mp3'
export default function CasinoCatsContainer(props) {
    // const message = document.getElementById('message')

    const [click, setClick] = useState(false)
    const [number1, setNumber1] = useState(0)
    const [number2, setNumber2] = useState(1)
    const [number3, setNumber3] = useState(0)
    const [isBegin, setIsBegin] = useState('yes')
    const [isWin, setIsWin] = useState(false)
    const [loading, isLoading] = useState(false)
    const [jetons, setJetons] = useState(15)
    const [numberOfPart, setNumberOfPart] = useState(0)
    const [classCasino, setClassCasino] = useState(false)
    const max = 3
    // si gagner ne pas enlever le jeton
    let chances = 3 - numberOfPart
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
        // const audio = new Audio(jeton)
        // audio.play()
        const metroidS = new Audio(metroid)
        metroidS.play()
        setTimeout(() => {
            isLoading(false)
        }, 1000)
    }
    const gatRandomNumbersRetry = () => {
        // const audio = new Audio(jeton)
        // audio.play()
        const metroidS = new Audio(metroid)
        metroidS.play()
        setNumberOfPart(0)
        setIsWin(false)
        setClick(!click)
        setIsBegin('no')
        isLoading(true)
        setTimeout(() => {
            isLoading(false)
        }, 1000)

    }


    useEffect(() => {
        const counterJetons = () => {
            if (isLoading && numberOfPart === 3 && !isWin) {
                setJetons(jetons - 1)
                setTimeout(() => {
                    const looseA = new Audio(loose)
                    looseA.play()
                }, 150)

            }
            else if (isWin && numberOfPart === 0) {
                setJetons(jetons + 1)
                setTimeout(() => {
                    const audio2 = new Audio(winSound)
                    audio2.play()
                }, 10)
            }
        }
        setTimeout(() => {
            counterJetons()
        }, 1000)
    }, [numberOfPart])

    // setInterval(
    setTimeout(() => {
        setClassCasino(!classCasino)
    }, 1000)
    // , 1000)

    // console.log("isWin", isWin);
    // console.log("numberOfPart", numberOfPart);
    // console.log("jetons", jetons);
    // console.log(number1, number2, number3);
    // console.log("isLoading", loading);


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

                        <div className={!loading ? 'catImagePurple' : 'imgcatload'}>
                            <img className={!loading ? 'imgcat' : 'imgcatActive'} src={`${CatsList[number1].url}`} />
                        </div>
                        <div className={!loading ? 'catImagePurple' : 'imgcatload'}>
                            <img className={!loading ? 'imgcat' : 'imgcatActive'} src={`${CatsList[number2].url}`} />
                        </div>
                        <div className={!loading ? 'catImagePurple' : 'imgcatload'}>
                            <img className={!loading ? 'imgcat' : 'imgcatActive'} src={`${CatsList[number3].url}`} />
                        </div>

                    </>
                }

            </div>
            {!isWin &&
                !loading && numberOfPart < 3 && !isWin && <>
                    {
                        <p className="chances"> Il vous reste {chances > 0 ? `${chances} chances` : `${chances} chance`} </p>}
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
