import React from 'react'
import './Home.css'
import ProjectCard from '../../components/ProjectCard'
import data from '../../store/projects'

const Home = () => {
    return (
        <main>
            <section>
                <div className="home-banner-wrap">
                    <div className="home-banner">
                        <div className="banner-title">
                            <p>최대한의 효율로 <br />직무경험을 쌓아보세요</p>
                            <p>2주만에 실무 경험을 만드는, 미니인턴</p>
                        </div>                        
                        <img src="/images/home/banner1.jpg" alt=""/>
                    </div>
                    <div className="home-banner">
                        <div className="banner-title">
                            <p>최대한의 효율로 <br />직무경험을 쌓아보세요</p>
                            <p>2주만에 실무 경험을 만드는, 미니인턴</p>
                        </div>
                        <img src="/images/home/banner2.jpg" alt="" />
                    </div>
                </div>
            </section>
            <section className="home-project">
                <h1>미니인턴을 신청하세요</h1>
                <h2>이제 집, 학교, 도서관, 카페에서 인턴십을 경험하고, 실무역량평가로 취업하세요.</h2>
                <div className="projects-list">
                    {
                        data.projects.map((item, index) =>
                            <ProjectCard key={index} subTitle={item.subTitle} title={item.title} status={item.status} src={item.src} />
                        )
                    }
                </div>
            </section>
        </main>
    )
}
export default Home