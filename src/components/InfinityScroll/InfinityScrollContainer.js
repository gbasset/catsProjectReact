import React, { useEffect, useState } from 'react';
import axios from 'axios'
import '../../../src/App.css';
import InfinityScroll from './InfinityScroll';

function InfinityScrollContainer() {
    const [newCats, setNewCats] = useState([])
    const [catsWithPic, setCatsWithPic] = useState([])
    const [isFetching, setIsFetching] = useState(false);
    const loading = document.querySelector('.loader');
    // https://documenter.getpostman.com/view/5578104/RWgqUxxh?version=latest#997f5b37-79cc-49a4-8c11-ddf24b72a4d9
    //  https://documenter.getpostman.com/view/1946054/S11HvKSz?version=latest#a329cc1e-b51b-4ed6-a1b8-d57dcabff67c
    //  https://docs.thecatapi.com/pagination
    useEffect(() => {
        const getCats = async () => {
            const result = await axios.get(`https://catfact.ninja/facts?limit=5&max_length=140`)
            const picture = await axios.get(`https://api.thecatapi.com/v1/images/search?mime_types=gif&limit=5`)
            let dataArray = result.data.data
            let pict = picture.data
            let finalArray = dataArray.map((cat, index) => {
                cat.picture = pict[index].url
                cat.id = index
                cat.title = pict[index].id
                cat.body = pict[index].id
                return cat
            })
            setCatsWithPic(finalArray)
        }
        getCats()
    }, [])

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        setTimeout(() => {
            return () => window.removeEventListener('scroll', handleScroll);
        }, 1000);
    });
    function handleScroll() {
        if (document.documentElement.offsetHeight >= document.documentElement.scrollHeight - 50) {
            setIsFetching(true);
            console.log('Fetch more list items!')
        }
    }
    useEffect(() => {
        if (!isFetching) return;
        fetchMoreListItems();
    }, [isFetching])

    const fetchMoreListItems = async () => {
        const result = await axios.get(`https://catfact.ninja/facts?limit=5&max_length=140`)
        const picture = await axios.get(`https://api.thecatapi.com/v1/images/search?mime_types=gif&limit=5`)
        let dataArray = result.data.data
        let pict = picture.data
        let finalArray = dataArray.map((cat, index) => {
            cat.picture = pict[index].url
            cat.id = index
            cat.title = pict[index].id
            cat.body = pict[index].id
            return cat
        })
        loading.classList.add('show');
        setTimeout(() => {
            setCatsWithPic(prevValues => (
                [...prevValues,
                ...finalArray]
            ))
            setIsFetching(false);
            loading.classList.remove('show');
        }, 2000);
    }

    // console.log(catsWithPic);
    return (
        <div className="contain">
            {
                catsWithPic.map((post, i) =>
                    <InfinityScroll
                        key={i}
                        post={post}
                        i={i + 1}
                    />
                )
            }
            <div className="loader">
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
            </div>
        </div>
    )
}
export default InfinityScrollContainer
