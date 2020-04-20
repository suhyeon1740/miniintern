import React from 'react'
import './Header.css'

const Header = () => {
    return (
        <header>
            <div className="inner-block">
                <div className="logo">
                    <a href="/">
                        <svg class="logo" width="202" height="34" viewBox="0 0 202 34" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M84.62 30.58h4.17v-.68h-3.06l1.05-1.06c1.16-1.18 1.86-1.98 1.86-3.14 0-1.2-.73-1.95-2.08-1.95-.76 0-1.44.34-1.86.61l.23.63c.39-.27.93-.55 1.5-.55.95 0 1.38.44 1.38 1.33 0 .96-.64 1.69-1.59 2.68l-1.6 1.66v.47zm12.61-4.1c-1.34-.15-3.13-1.04-3.17-2.27h2.81v-.63h-6.44v.63h2.83c-.04 1.22-1.73 2.14-3.16 2.29l.35.64c1.49-.25 2.85-1.15 3.2-1.97.4.82 1.79 1.7 3.22 1.95l.36-.64zm-3.21 5.22v-3.13h3.58v-.64h-7.89v.64h3.55v3.13h.76zm8.78-3.92v-4.05h-4.14v4.05h4.14zm-.76-.63h-2.62v-2.79h2.62v2.79zm4.37-.94v-.64h-1.33v-2.61h-.76v6.35h.76v-3.1h1.33zm-.99 5.19v-.63h-5.05v-2.06h-.76v2.69h5.81zm3.65-7.68c-1.27 0-1.92 1.24-1.92 2.99 0 1.76.65 2.99 1.92 2.99 1.2 0 1.84-1.07 1.92-2.65h.94v4.23h.74v-8.15h-.74v3.29h-.94c-.06-1.59-.71-2.7-1.92-2.7zm1.17 2.99c0 1.42-.46 2.32-1.17 2.32-.7 0-1.15-.9-1.15-2.32 0-1.41.45-2.32 1.15-2.32.71 0 1.17.91 1.17 2.32zm4.14 4.99v-8.74h-.75v8.74h.75zm11.05-4.27v-4.47h-.76v4.47h.76zm-1.92-.77c-1.08-.39-2.23-1.24-2.23-2.65v-.75h-.77v.78c0 1.4-1.11 2.45-2.24 2.9l.42.58c1.05-.5 1.96-1.35 2.23-2.25.41.92 1.29 1.64 2.16 1.98l.43-.59zm2.25 4.94v-.62h-5.25V30h4.92v-2.09h-5.7v.62h4.94v.9h-4.92v2.17h6.01zm8.08-4.62v-3.53h-5.93v3.53h5.93zm-.76-.63h-4.4v-2.27h4.4v2.27zm-1.83 5.36v-2.98h3.58v-.64h-7.89v.64h3.55v2.98h.76zM145.43 30c0-1.01-1.08-1.65-2.97-1.65-1.91 0-2.98.64-2.98 1.65 0 1.02 1.07 1.66 2.98 1.66 1.89 0 2.97-.64 2.97-1.66zm-2.97-1.01c1.38 0 2.19.37 2.19 1.01 0 .65-.81 1.03-2.19 1.03s-2.19-.38-2.19-1.03c0-.64.81-1.01 2.19-1.01zm.21-1.99h1.93v1.48h.76v-5.52h-.76v1.58h-1.79v.63h1.79v1.2h-1.93V27zm.05-3.36h-4.02v.65h3.16c-.26 1.48-1.74 2.93-3.54 3.43l.38.65c2.31-.81 3.89-2.53 4.02-4.73zm11.3 7.93v-2.74h-5.65v2.74h5.65zm-.76-.63h-4.13v-1.48h4.13v1.48zm.75-2.58v-5.4h-.76v2.82h-1.5v.63h1.5v1.95h.76zm-3.32-4.57v-.64h-2.51v.64h2.51zm1.27 1.24v-.62h-5.1v.62h5.1zm-.46 1.83c0-.9-.89-1.44-2.07-1.44-1.18 0-2.07.54-2.07 1.44 0 .88.9 1.44 2.07 1.44 1.18 0 2.07-.57 2.07-1.44zm-.75 0c0 .53-.62.85-1.32.85-.67 0-1.32-.32-1.32-.85 0-.54.64-.85 1.32-.85.7 0 1.32.31 1.32.85zm12.66.52v-.64h-7.89v.64h7.89zm-.88-2.78c0-.96-1.16-1.52-3.06-1.52-1.88 0-3.04.56-3.04 1.52s1.16 1.51 3.04 1.51c1.9 0 3.06-.55 3.06-1.51zm-3.06-.9c1.39 0 2.29.35 2.29.9 0 .54-.9.88-2.29.88-1.37 0-2.26-.34-2.26-.88 0-.55.89-.9 2.26-.9zm3.24 7.92V31h-5.51v-.88h5.22v-1.96h-6v.61h5.24v.77h-5.22v2.08h6.27zm8.53-3.84v-4.05h-4.14v4.05h4.14zm-.76-.63h-2.62v-2.79h2.62v2.79zm4.37-.94v-.64h-1.33v-2.61h-.76v6.35h.76v-3.1h1.33zm-.99 5.19v-.63h-5.05v-2.06h-.76v2.69h5.81zm8.53-3.46v-.63h-5.19v-2.85h5.11v-.63h-5.87v4.11h5.95zm.95 2.56v-.64h-7.89v.64h7.89zm8.16 1.2v-8.74h-.75v8.74h.75zm-1.73-.44v-8.09h-.74v2.94h-1.55v.64h1.55v4.51h.74zm-1.27-2.32c-.95-.63-1.97-1.9-1.97-3.6v-1.57h-.75v1.59c0 1.71-.88 3.2-1.87 3.83l.47.57c.87-.63 1.59-1.77 1.78-2.77.28.99 1.2 2.03 1.87 2.51l.47-.56zm11.34-3.13c0-1.35-1.25-2.27-3.16-2.27-1.88 0-3.14.92-3.14 2.27s1.26 2.25 3.14 2.25c1.9 0 3.16-.9 3.16-2.25zm-.73 0c0 .98-.97 1.64-2.43 1.64-1.45 0-2.41-.66-2.41-1.64 0-.98.96-1.64 2.41-1.64 1.47 0 2.43.66 2.43 1.64zm1.53 4.78v-.64h-1.98v-1.63l-.76-.02v1.65h-2.44V28.3l-.76.02v1.63h-1.95v.64h7.89z" fill="#ABB1B1"></path><mask id="a" maskUnits="userSpaceOnUse" x="1" y="1" width="162" height="30"><path fill-rule="evenodd" clip-rule="evenodd" d="M81.592 30.751h80.591V1H1v29.751h80.592z" fill="#fff"></path></mask><g mask="url(#a)"><path fill-rule="evenodd" clip-rule="evenodd" d="M68.58 30.751c-4.891 0-9.559-2.293-12.46-6.23l2.637-2.03c2.354 3.085 5.947 4.952 9.823 4.952 3.876 0 7.468-1.867 9.863-4.952l2.638 2.03c-2.943 3.937-7.59 6.23-12.501 6.23zm88.185-25.814c3.389-.04 5.419 2.598 5.419 5.926v9.843h-4.039v-9.437c0-1.746-1.116-3.329-2.922-3.247-1.482.06-2.639 1.095-3.369 2.415v10.269h-4.059V5.24h4.059v2.152c1.319-1.563 2.841-2.436 4.911-2.456zm-106.531 0c3.389-.04 5.419 2.598 5.419 5.926v9.843h-4.039v-9.437c0-1.746-1.117-3.329-2.923-3.247-1.481.06-2.638 1.095-3.368 2.415v10.269h-4.059V5.24h4.059v2.152c1.319-1.563 2.841-2.436 4.911-2.456zm40.649 0c3.39-.04 5.419 2.598 5.419 5.926v9.843h-4.039v-9.437c0-1.746-1.116-3.329-2.922-3.247-1.482.06-2.638 1.095-3.369 2.415v10.269h-4.06V5.24h4.06v2.152c1.32-1.563 2.84-2.436 4.91-2.456zm-27.904 5.906l2.942-2.354V5.24h-4.383v15.465h4.383v-7.469l-2.943-2.394zm61.518.547c-.162-1.988-1.035-3.774-3.125-3.774-2.091 0-3.085 1.664-3.308 3.774h6.433zm-3.226-6.554c5.256.02 7.224 3.591 7.163 8.421v.589h-10.431c.224 2.841 1.968 4.201 4.627 4.201 2.111 0 3.754-.69 5.459-1.887v3.044c-1.765 1.157-3.45 1.786-6.088 1.786-4.769 0-8.016-2.983-8.016-8.037 0-4.607 2.638-8.138 7.286-8.117zm-48.267 6.007l2.943-2.354V5.24h-4.384v15.465h4.384v-7.469l-2.943-2.394zm68.297-5.906c1.4-.101 2.435.365 3.024.913v4.242c-1.401-1.238-3.592-1.482-5.236-.426-.751.487-1.604 1.42-2.212 2.78v8.26h-4.059V5.24h4.059v3.613c.954-2.395 2.76-3.795 4.424-3.917zm-39.195-2.76L106.002 1v4.465h4.709v2.658h-4.709v7.144c-.02 1.522.772 2.374 2.131 2.395 1.096.02 1.786-.244 2.74-.65v3.125c-1.278.589-2.435.853-3.694.853-3.044 0-5.073-1.948-5.073-5.277v-7.59H99.65V5.465h2.456V2.177zM31.239 20.706h4.058V5.24H31.24v15.465zM10.01 4.937c2.172-.04 3.816 1.136 4.73 3.085 1.38-1.847 3.165-3.045 5.418-3.085 3.47-.061 5.48 2.659 5.48 5.865v9.904h-4.06v-9.214c0-1.745-.832-3.47-2.74-3.47-1.36 0-2.719.974-3.53 2.415v10.269h-4.04V11.41c0-1.766-.994-3.39-2.78-3.39-1.48 0-2.719 1.056-3.43 2.416v10.269H1V5.24H5.06v2.152C6.419 5.83 7.96 4.977 10.01 4.937z" fill="#003844"></path></g></svg>
                    </a>
                </div>
                <div className="header-inner-block">
                    <nav>
                        <ul>
                            <li><a>서비스소개</a></li>
                            <li><a>기업과제 리스트</a></li>
                        </ul>
                    </nav>
                    <nav className="login-menu">
                        <ul>
                            <li><a href="">회원가입</a></li>
                            <li><a href="">로그인</a></li>
                        </ul>
                    </nav>
                </div>    
            </div>                                                
        </header>
    )
}

export default Header;