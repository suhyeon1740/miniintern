import React from 'react'
import data from '../../store/projects'
import './ProjectDetail.css'

const ProjectDetail = ({match}) => {
    const projectData = data.projects.find((project) => project.id === match.params.id)
    return(
        <div className="project-detail">
            <div className="project-detail-wrap">
                <main>
                    <section>
                        <article>
                            <div>
                                <div>{projectData.option1 + ',' + projectData.option2 + ',' + projectData.option3}</div>
                                <h1>{projectData.title}</h1>
                            </div>
                            <div>
                                {projectData.explanation}
                            </div>
                        </article>
                    </section>
                    <section>
                        <h2>미니인턴 진행 단계</h2>
                        <ul>
                            <li>참가자모집</li>
                            <li>중간 제안서 제출</li>
                            <li>최종 제안서 제출</li>
                            <li>결과발표</li>
                        </ul>
                    </section>
                    <section>
                        <h2>참가자 OT</h2>
                        <p>날짜: 2020년 05월 15일 오후 2:00 ~ 5:00</p>
                        <p>장소: (코로나19로 인해 사전OT는 온라인으로 진행될 예정입니다. 사전OT 날짜 및 시간에 온라인 참여가 가능한 환경에서 준비해주세요! )</p>
                    </section>
                    <section>
                        <h2>질문 (2)</h2>
                        <div>
                            <textarea name="" id="" cols="30" rows="10"></textarea>
                            <div>
                                <div>자주 묻는 질문은 FAQ에서 바로 확인하실 수 있습니다.</div>
                                <div>
                                    <select name="" id="">
                                        <option value="0">공개</option>
                                        <option value="1">비공개</option>
                                    </select>
                                    <button>질문 게시</button>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div>질문1</div>
                            <div>질문2</div>
                        </div>
                    </section>
                </main>
                <aside>
                    <section>
                        <img src="" alt="" />
                        <div>
                            <button>진행중</button>
                            <div>진행 중: 20일 6시간 19분 10초 남음</div>
                        </div>
                    </section>
                    <section>
                        <ul>
                            <li>일정</li>
                            <li>혜택</li>
                            <li>개최 기업</li>
                        </ul>
                        <dl>
                            <div>
                                <dt>모집마감</dt>
                                <dd>2020년 5월 8일 오후 2:00</dd>
                            </div>
                            <div>
                                <dt>선발 결과 발표</dt>
                                <dd>2020년 5월 14일 오후 3:00</dd>
                            </div>
                        </dl>
                    </section>
                </aside>  
            </div>                      
        </div>
    )
}

export default ProjectDetail
