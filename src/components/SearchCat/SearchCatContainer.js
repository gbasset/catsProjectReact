import React, { useEffect, useState } from 'react';
import axios from 'axios'
import './SearchCatContainer.css'
import filterList from './filterList'
import filteredCat from './filteredCat'
export default function SearchCatContainer() {
    const [arrayOfCat, setArrayOfCat] = useState();
    const [value, setValue] = useState()
    const [isClick, setIsClick] = useState(false)
    const [env, setEnv] = useState()
    const [valuetag, setValueTag] = useState()
    const [categorylist, setCategoryList] = useState()
    const [categoryChoose, setCategoryChoose] = useState()
    const [categoryName, setCategoryName] = useState()
    const [url, setUrl] = useState()
    useEffect(() => {
        const getCats = async () => {

            if (value && env === "says") {
                setArrayOfCat(`https://cataas.com/cat/says/${value}`)
                setUrl(`https://cataas.com/cat/says/${value}`)
                setValue()
            }
            if (env === "tag") {
                setArrayOfCat(`https://cataas.com/cat/${valuetag}`)
                setValue()
            }
            if (env === "category" && categoryChoose) {
                axios.defaults.headers.common['x-api-key'] = "00465795-a5c9-4d1b-b408-96edf9b0286d"
                const res = await axios.get(`https://api.thecatapi.com/v1/images/search?category_ids=${categoryChoose}&limit=10`)
                console.log('res', res);
                setArrayOfCat(res.data)
                setValue()
            }

        }
        getCats()
    }, [isClick])

    useEffect(() => {
        const getCategory = async () => {
            if (env === "category") {
                console.log('hhjhghj')
                const result = await axios.get(`https://api.thecatapi.com/v1/categories`)
                setCategoryList(result.data)
                console.log(result.data);
            }
        }
        getCategory()
    }, [env])
    console.log(env);

    console.log(url);

    //modifier la valeur d'une propriété d'un bespoke
    const handleSearch = (event) => {
        setValue(event.target.value)
    }

    const handleClick = () => {
        setIsClick(!isClick)
    }
    const handleFilterEnv = (e) => {
        setArrayOfCat()
        setUrl()
        setEnv(e.target.value);
    }
    const handleTag = (e) => {
        setValueTag(e.value)
        setIsClick(!isClick)
    }
    const handleCategory = (e) => {
        setCategoryChoose(e.id)
        setCategoryName(e.name)
        setIsClick(!isClick)
    }

    return (
        <div className="contain">
            <form className="form" id="form">
                <div className="form-controlS ">
                    <label htmlFor="account">Search type </label>
                    <select
                        className="form-control type "
                        id="inputFilteredByEnv"
                        onChange={(e) => handleFilterEnv(e)}
                    >
                        {filterList.map(x => <option className="type" key={x.label} value={x.value}> {x.label}</option>)}
                    </select>
                </div>

            </form>
            <div className="containSearch">

                {env === "says" &&
                    <div className="form-control">
                        <label htmlFor="searchBar">Search Cat Says</label>
                        <input type="text" id="searchBar" name="search" placeholder="search for a cat saying ..." value={value || ''} onChange={handleSearch} />
                        <div className="btn-normal" onClick={handleClick}>Search</div>
                        <div>
                            <img className="catsPicture" src={arrayOfCat} alt="" />
                        </div>
                        {arrayOfCat &&
                            <input type="text" value={url || ''} readOnly />

                        }

                    </div>

                }
                {env === "tag" &&
                    <>
                        <ul className="listCats">
                            {filteredCat.map((x, i) => <li key={i} className="cat" name={x.value} onClick={(e) => handleTag(x)}> {x.value}</li>)}
                        </ul>
                        <div>
                            <img className="catsPicture" src={arrayOfCat} alt="" />
                        </div>
                    </>
                }
                {env === "category" && categorylist &&
                    <>
                        <ul className="listCats">
                            {categorylist.map((x, i) => <li key={i} className="cat" onClick={(e) => handleCategory(x)}> {x.name}</li>)}
                        </ul>
                        <h2>Category :  {categoryName}</h2>
                        <div className="catsCategory">
                            {arrayOfCat && <div className="btn-normal" onClick={() => setIsClick(!isClick)}> Refresh</div>}

                            {arrayOfCat && arrayOfCat.map((x, i) =>
                                <img key={i} className="catsPicture" src={x.url} alt="" />
                            )}
                        </div>
                    </>
                }
            </div>
        </div >


    )
}
