import React, { useState, useEffect } from 'react'
import './CasinoCatsContainer.css'
import test from './cats/1.jpg'
import CatsList from './CatsList';
import cat0 from './cats/0.png'
import MessageAlert from './MessageAlert'
export default function CasinoCatsContainer(props) {
    // const message = document.getElementById('message')

    const [click, setClick] = useState(false)
    const [number1, setNumber1] = useState(0)
    const [number2, setNumber2] = useState(1)
    const [number3, setNumber3] = useState(0)
    const [isBegin, setIsBegin] = useState('yes')
    const [isWin, setIsWin] = useState(false)
    const [isLost, setIsLost] = useState(false)
    const [off, setOff] = useState(false)
    const max = 4

    const gatRandomNumbers = () => {
        setClick(true)
        setIsBegin('no')
        setOff(true)

        setTimeout(() => {
            setOff(false)

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
        }
        if (number1 !== number3) {
            setIsWin(false)
            setIsLost(true)
        }
    }, [click])

    console.log(off);



    return (
        <div className="containCasino">
            <h1>Casino Cats</h1>
            <div className='containAll'>

                <h1 style={{ color: 'white' }}>

                </h1>

                <div className="containerCatsImages">
                    {isBegin === 'yes' &&
                        <>

                            <div className="catImage"
                                style={{
                                    backgroundImage: `url(${cat0})`,
                                    backgroundPosition: 'center',
                                    backgroundSize: 'cover'
                                }}
                            >
                                {/* // <img className="catsImageCasino" src={CatsList[0].url} alt="cats" /> */}
                            </div>
                            <div className="catImage" style={{
                                backgroundImage: `url(${cat0})`,
                                backgroundPosition: 'center',
                                backgroundSize: 'cover'
                            }}></div>
                            <div className="catImage" style={{
                                backgroundImage: `url(${cat0})`,
                                backgroundPosition: 'center',
                                backgroundSize: 'cover'
                            }}></div>

                        </>
                    }
                    {isBegin === 'no' &&
                        <>

                            <div className={!off ? 'catImage' : 'imgcatload'}

                            >
                                <img className={!off ? 'imgcat' : 'imgcatActive'} src={`${CatsList[number1].url}`} />
                            </div>
                            <div className={!off ? 'catImage' : 'imgcatload'}>
                                <img className={!off ? 'imgcat' : 'imgcatActive'} src={`${CatsList[number2].url}`} />
                            </div>
                            <div className={!off ? 'catImage' : 'imgcatload'}>
                                <img className={!off ? 'imgcat' : 'imgcatActive'} src={`${CatsList[number3].url}`} />
                            </div>

                        </>
                    }

                </div>
            </div>

            {!off && <>
                < div className='btn-casino' onClick={gatRandomNumbers}>TRY</div>
            </>}

            {!off && isWin === true && <MessageAlert
                msg='Vous avez gagné'
                color='green' />}

            {!off && isLost === true && <MessageAlert
                msg='Vous avez perdu'
                color='red' />}

        </div >
    )
}
