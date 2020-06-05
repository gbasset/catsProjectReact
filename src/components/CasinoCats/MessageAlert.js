
import React from 'react';


const Message = ({ msg, color }) => {
    const styleMsg = {
        position: 'fixed',
        right: '0',
        zIndex: '2000',
        width: '100%',
        margin: 'auto',
        textAlign: 'center',
        fontSize: '28px',
        fontFamily: 'xants, sans-serif',
        color: `${color}`
    }

    return (
        <div className={`alertMsg`} role='alert'
            style={styleMsg}>
            {msg}
            {/* <button
                type='button'
                className='close'
                data-dismiss='alert'
                aria-label='Close'
            >
                <span aria-hidden='true'>&times;</span>
            </button> */}
        </div>
    );
};

export default Message;