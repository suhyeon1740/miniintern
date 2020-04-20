import React from 'react'

const Footer = () => {
    return (
        <footer>
            <div className="inner-block">
                <div className="logo">
                    <a href="/">
                        <img src="" alt="logo" />
                    </a>
                </div>
                <nav>
                    <ul>
                        <li><a>이용약관</a></li>
                        <li><a>개인정보취급방침</a></li>
                        <li><a>고객센터</a></li>
                        <li><a>기업회원</a></li>
                    </ul>
                </nav>
                <p>
                    (주)오픈놀 | 대표이사 : 권인택 | 서울특별시 마포구 월드컵북로 396, 1005호 | 이메일 : help@miniintern.com | 문의 : 070-8221-3056<br />
                </p>
                <p>
                    사업자등록번호 : 110-81-99930 | 통신판매번호 : 2015-서울서대문-0130 | 직업정보제공사업 서울서부 제2018-19호
          </p>
                <a href="https://openknowl.com/">ⓒ OPENKNOWL</a>
            </div>
        </footer>
    )
}
export default Footer