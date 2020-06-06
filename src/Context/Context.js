import React, { createContext, useState } from 'react'

export const context = createContext()

const ContextCats = (props) => {

    const [isWin, setIsWin] = useState(false)

    const changeWin = (e) => {
        setIsWin(e)
    }
    return (
        <context.Provider value={{
            setIsWin,
            isWin,
            changeWin

        }}>
            {props.children}
        </context.Provider>
    )

}
export default ContextCats