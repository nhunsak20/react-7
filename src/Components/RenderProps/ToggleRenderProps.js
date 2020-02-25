import React, { useState } from 'react'

const ToggleRenderProps = props => {
    const [isVisible, setIsVisible] = useState(false)
    return <div>{props.render(isVisible, setIsVisible)}</div>
}

export default ToggleRenderProps