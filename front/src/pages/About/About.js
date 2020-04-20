import React from 'react'
import './About.css'
import internToFull_2x from '../../images/internToFull_2x.webp'
import data from '../../store/about'
import Process from '../../components/Process'
import Benefit from '../../components/Benefit'
import Interview from '../../components/Interview'
 
const About = () => {    
    return (
        <main>
            <section className="intro">
                <div className="intro-text">
                    <h1>기업과제를 온라인으로 수행하며<br />2주만에 실무경험을 쌓는 미니인턴</h1>
                    <p>이제 집, 학교, 도서관, 카페에서 인턴십을 경험하고, 실무역량평가로 취업하세요.</p>
                </div>                
            </section>            
            <section>
                <h2>인턴십 경험에서<br />정규직 취업까지</h2>
                <div className="image-wrapper">
                    <img className="intern-to-full" src={internToFull_2x} alt="" />
                </div>                
                <p>
                    미니인턴은 온라인으로 진행되는 단기 인턴십 프로그램입니다. 참가자들은 효율적으로 기업 실무를 경험하고 자신에게 맞는 직무를 찾을 수 있죠. 참가 결과에 따라 정규직 취업까지도 노려볼 수 있습니다. 취업 성공의 꿈, 미니인턴과 함께 해보세요.
                </p>
            </section>  
            <section className="process">
                <h2>취준기간 줄여주는 2주 인턴십</h2>
                <div className="slide-wrapper">
                    {
                        data.process.map((item, index) =>
                            <Process key={index} title={item.title} day={item.day} content={item.content} />
                        )
                    }
                </div>
            </section>      
            <section className="benefit">
                <h2>지금, 미니인턴을<br />시작해야 하는 이유</h2>
                <div className="banefit-wrapper">
                    {
                        data.benefit.map((item, index) =>
                            <Benefit key={index} title={item.title} content={item.content} />
                        )
                    }
                </div>
            </section>
            <section>
                <h2>준비된 당신을 위한<br />헤더헌팅 서비스</h2>
                <p>
                    미니인턴을 수료하셨나요? 모든 수료자에게 찾아오는 기회 헤드헌팅 서비스! 당신을 기다리는 기업으로부터 입사 제의를 받으세요.
                </p>
                <p>
                    헤드헌팅은 미니인턴 수료자를 대상으로 진행됩니다.
                </p>
            </section>     
            <section className="interview-wrapper">
                <h2>미니인턴을 거쳐간 사람들의<br />이야기를 들어보세요.</h2>
                {
                    data.interview.map((item, index) =>
                        <Interview title={item.title} content={item.content} key={index} />
                    )
                }
            </section>                 
            <section className="about-footer">                
                <p>수백 명의 취업 준비생이 실무 경험을 얻기 위해<br /> 미니인턴에 참가했습니다. 미래를 위한 경험.<br />미니인턴에서 준비해보세요.</p>
                <a href="/">참가 가능한 미니인턴 보기</a>
            </section>
        </main>
    )
}
export default About