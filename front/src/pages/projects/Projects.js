import React from 'react'
import './Projects.css'
import ProjectCard from '../../components/ProjectCard'
import data from '../../store/projects'

const Projects = () => {
    return (
        <main>            
            <section className="projects-wrap projects-banner-wrap">
                <div className="projects-banner">
                    <p>봄봄봄, 채용 시즌이 왔어요.</p>
                    <p>이제는 스펙을 벗어난 역량으로 취업해 보세요.</p>
                </div>
            </section>
            <section className="projects-wrap projects-list-wrap">
                <div className="list-filter">
                    <select name="status" id="">
                        <option value="all">전체</option>
                        <option value="recruiting">모집중</option>
                        <option value="recruited">모집종료</option>
                    </select>
                    <select name="field" id="">
                        <option value="">분야</option>
                        <option value="">기획</option>
                        <option value="">아이디어제안</option>
                        <option value="">디자인</option>
                    </select>
                </div>
                <div className="projects-list">
                    {
                        data.projects.map((item, index) =>
                            <ProjectCard key={index} subTitle={item.subTitle} title={item.title} status={item.status} src={item.src} /> 
                        )
                    }
                </div>
                <div>page number</div>
            </section>
        </main>
    )
}

export default Projects