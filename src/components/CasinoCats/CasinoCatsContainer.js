import React, { useState, useEffect } from 'react'
import './CasinoCatsContainer.css'
import test from './cats/1.jpg'
import CatsList from './CatsList';
import cat0 from './cats/0.png'
export default function CasinoCatsContainer(props) {
    const message = document.getElementById('message')
    const [click, setClick] = useState(false)
    const [number1, setNumber1] = useState(0)
    const [number2, setNumber2] = useState(1)
    const [number3, setNumber3] = useState(0)
    const [isBegin, setIsBegin] = useState('yes')

    const [off, setOff] = useState(false)
    const max = 5
    const gatRandomNumbers = () => {
        setClick(!click)
        setIsBegin('no')
        setOff(true)
        setTimeout(() => {
            setOff(false)
        }, 3000)

    }
    useEffect(() => {
        setNumber1(Math.floor(Math.random() * Math.floor(max)))
        setNumber2(Math.floor(Math.random() * Math.floor(max)))
        setNumber3(Math.floor(Math.random() * Math.floor(max)))

    }, [click])

    if (number1 && number2 && number3 === number1) {

        message.style.display = 'block'
        message.classList.add("win");
        message.innerHTML = 'You win'
        setTimeout(() => {
            message.style.display = 'none'
        }, 3000)
    }
    if (number1 && number2 && number3 !== number1) {
        message.style.display = 'block'
        message.classList.add("loose");
        message.innerHTML = 'You Loose'
        setTimeout(() => {
            message.style.display = 'none'
        }, 3000)
    }
    return (
        <div className="contain">
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

                            <div className="catImage"
                                style={{
                                    backgroundImage: `url(${CatsList[number1].url})`,
                                    backgroundPosition: 'center',
                                    backgroundSize: 'cover'
                                }}
                            >
                                {/* // <img className="catsImageCasino" src={CatsList[0].url} alt="cats" /> */}
                            </div>
                            <div className="catImage" style={{
                                backgroundImage: `url(${CatsList[number2].url})`,
                                backgroundPosition: 'center',
                                backgroundSize: 'cover'
                            }}></div>
                            <div className="catImage" style={{
                                backgroundImage: `url(${CatsList[number3].url})`,
                                backgroundPosition: 'center',
                                backgroundSize: 'cover'
                            }}></div>

                        </>
                    }

                </div>
            </div>
            {!off && <>
                < div className='btn-casino' onClick={gatRandomNumbers}>TRY</div>
            </>}


            <p id="message" className="">

            </p>



        </div >
    )
}
