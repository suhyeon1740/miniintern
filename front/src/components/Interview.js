import React from 'react'

const Interview = ({content, name}) => {
    return (
        <article className="interview">
            <p>
                {content}                
            </p>
            <p>
                {name}
            </p>
        </article>
    )
}
export default Interview