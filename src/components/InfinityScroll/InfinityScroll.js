import React from 'react'
import './InfinityScroll.css'
export default function InfinityScroll({ post, i }) {
    return (
        <div key={i} className="post">
            <div className="number">{i}</div>
            <div className="post-info">
                <img className="catsPicture" src={post.picture} />

                <p className="post-body">{post.fact}</p>
                <input type="text" value={post.picture || ''} readOnly />
            </div>
        </div>
    )
}

