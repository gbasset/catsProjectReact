import React, { useState } from 'react'
import { RotateSpinner as Loader2 } from "react-spinners-kit";
import './InfinityScroll.css'
export default function InfinityScroll({ post, i }) {
    const [pictureUrlCopy, setPictureUrlCopy] = useState()
    const handleCopyPictureUrl = (e) => {
        setPictureUrlCopy('Url copiée avec succès !')
        navigator.clipboard.writeText(e.target.value)
        console.log(e.target.value);

        setTimeout(() => {
            setPictureUrlCopy()
        }, 4000)

    }
    return (
        <div key={i} className="post">
            <div className="number">{i}</div>
            {
                post ?
                    <div className="post-info">
                        <img className="catsPicture" src={post.picture} />

                        <p className="post-body">{post.fact}</p>
                        <input type="text" value={post.picture || ''} readOnly onClick={handleCopyPictureUrl} />
                        {pictureUrlCopy &&
                            <div className=''>
                                {pictureUrlCopy}
                            </div>
                        }
                    </div>
                    : <Loader2 />
            }
        </div>
    )
}

