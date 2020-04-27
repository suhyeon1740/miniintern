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
                <div className="pagination">
                    <span><svg width="6" height="10" xmlns="http://www.w3.org/2000/svg"><path d="M5.354 1.354a.5.5 0 0 0-.708-.708L.293 5l4.353 4.354a.5.5 0 0 0 .708-.708L1.707 5l3.647-3.646z"></path></svg></span>
                    <span className="active">1</span>
                    <span>2</span>
                    <span>3</span>
                    <span><svg width="6" height="10" xmlns="http://www.w3.org/2000/svg"><path d="M.44 8.646a.5.5 0 0 0 .706.708L5.5 5 1.146.646a.5.5 0 0 0-.707.708L4.086 5 .439 8.646z"></path></svg></span>
                </div>
            </section>
        </main>
    )
}

export default Projects