const About = () => {
    return<div className="about">
        <h1>about</h1>
        <em>편안함으로 소통의 허브가 되는 개발자</em>
        <p className="desc">
            팀원들에게 '카피바라'라는 별명으로 불립니다. 
            누구와도 빠르게 친해지는 성격 덕분에 개발자, 기획자, 디자이너 사이에서 자연스럽게 소통 허브 역할을 맡곤 합니다. 
            막히는 곳이 생기면 먼저 말 걸고, 흐름이 끊기지 않도록 잇는 것을 즐깁니다. 
            좋은 결과물은 좋은 관계에서 나온다고 믿습니다.
        </p>
        <div className="about__list--ex">
            <ul>
                <li>
                    <span className="year">2024-2025</span>
                    <span className="title">레이랩 </span>
                    <span className="desc">Posco SCM 개편 프로젝트 외 2건 </span>
                </li>
                <li>
                    <span className="year">2023-2024</span>
                    <span className="text">한신정보기술</span>
                    <span className="desc">옥천 군청 재개편 사이트 외 2건 </span>
                </li>
            </ul>
        </div>
        <div className="about__list-- license">
            <ul>
                <li>
                    <span className="year">2023</span>
                    <span className="title">웹디자인 기능사 </span>
                </li>
                <li>
                    <span className="year">22023</span>
                    <span className="text">컴퓨터 그래픽스 기능사</span>
                </li>
            </ul>
        </div>

    </div>
}

export default About