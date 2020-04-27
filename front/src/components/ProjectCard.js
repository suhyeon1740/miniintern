import React from 'react'
import './ProjectCard.css'

const ProjectCard = ({src, subTitle, title, status}) => {
    //0: 종료
    //1: 모집중
    //2: 진행중
    const getStatusElement = (status) => {
        let statusText, className = ''
        switch (status) {
            case '0':
                statusText="종료"
                className += "end"
                break
            case '1':
                statusText = "모집 중"
                className += "recruiting"
                break
            case '2':
                statusText = "진행 중"
                className += "proceeding"
                break
        }
        return <p className={className}>{statusText}</p>
    }
    return(
        <article className="project-card">
            <img className="project-image" src={"/images/projects/"+src} alt="" />
            <div className="project-description">
                <p className="sub-title">{subTitle}</p>
                <h2 className="title">{title}</h2>
                <div className="status">
                    {getStatusElement(status)}
                </div>                
            </div>            
        </article>
    )
}

export default ProjectCard