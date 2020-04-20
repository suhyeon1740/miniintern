import React from 'react'

const Benefit = ({title, content}) => {
    return (
        <article className="benefit-card">
            <h3>{title}</h3>
            <p>
                {content}
            </p>
        </article>
    )
}
export default Benefit