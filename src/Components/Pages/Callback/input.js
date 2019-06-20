import React, {memo, useRef} from 'react'

const Input = ({onChange}) => {
    const renderedTimes = useRef(0)
    renderedTimes.current++

    return <>
            <input type="text" onChange={onChange}/>
            <p>Component was rendered {renderedTimes.current} times</p>
        </>
}

export default memo(Input)