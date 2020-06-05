
export default Sounds
import React from 'react'

export default function Sound() {
    var audio = new Audio('../../Asset/j_perdu1.mp3')
    return (
        <div>
            <img src={dwight} onClick={audio.play()} />
        </div>
    )
}
