import React from 'react'

const Process = ({title, day, content}) => {
    return (
        <article>
            <h3>{title}</h3>
            <h4>{day}</h4>
            <p>
                {content}
            </p>
        </article>
    )
}
export default Process