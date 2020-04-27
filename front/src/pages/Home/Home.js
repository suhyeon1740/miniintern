import React from 'react'
import './Home.css'
import ProjectCard from '../../components/ProjectCard'
import projectsData from '../../store/projects'
import Banner from '../../components/Banner'
import homeData from '../../store/home'

const Home = () => {
    return (
        <main className="home-page">
            <div className="inner-block">
                <Banner data={homeData.banner} />
                <section className="home-project">
                    <h1>미니인턴을 신청하세요</h1>
                    <h2>이제 집, 학교, 도서관, 카페에서 인턴십을 경험하고, 실무역량평가로 취업하세요.</h2>
                    <div className="projects-list">
                        {
                            projectsData.projects.map((item, index) =>
                                <ProjectCard key={index} subTitle={item.subTitle} title={item.title} status={item.status} src={item.src} />
                            )
                        }
                    </div>
                </section>
            </div>            
        </main>
    )
}
export default Home