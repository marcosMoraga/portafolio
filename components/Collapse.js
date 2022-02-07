import React, { useState } from 'react'
const Collapse = (props) => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <span style={{ display: 'flex', width: '100%', justifyContent: 'flex-end' }}>
            <button style={{ alignSelf: 'flex-end', position: 'absolute', cursor: 'pointer', border: 'none', width: '100px', backgroundColor: 'transparent', color: '#00ffe1' }} onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? '(leer menos)' : props.label}
            </button>
            {isOpen && <div>{props.children}</div>}
        </span >
    )
}

export default Collapse
