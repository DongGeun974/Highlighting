import React, { useState, useRef, useCallback } from "react";

import { GiPlayButton } from "react-icons/gi";
import "./Home.scss";

const Home = () => {

  const [active0, setActive0] = useState(true);
  const [active1, setActive1] = useState(false);
  const [active2, setActive2] = useState(false);
  const [active3, setActive3] = useState(false);

  const onClickGuide = (e) => {
    const id = e.target.id;
    switch (id) {
      case "zero":
        activeZero();
        break;
      case "first":
        activeFirst();
        break;
      case "second":
        activeSecond();
        break;
      case "third":
        activeThird();
        break;
      default:
    }
  };

  const viewChange = () => {
    document.getElementById("guidline").scrollIntoView({ behavior: "smooth" });
  };
  const activeZero = () => {
    setActive0(true);
    setActive1(false);
    setActive2(false);
    setActive3(false);
  };

  const activeFirst = () => {
    setActive0(false);
    setActive1(true);
    setActive2(false);
    setActive3(false);
  };

  const activeSecond = () => {
    setActive0(false);
    setActive1(false);
    setActive2(true);
    setActive3(false);
  };

  const activeThird = () => {
    setActive0(false);
    setActive1(false);
    setActive2(false);
    setActive3(true);
  };

  return (
    <div>
      <div className="HomeContainer">
        <div className="UpperContainer">
          <div className="upper_left_container">
            {/* 좌상단 소개 페이지 */}
            <div></div>
            {/* 좌상단 소개 페이지 */}
          </div>
          <div className="upper_right_container">
            {/* 우상단 URL 입력창 */}
            <div className="Home_urlInput">
              <h1>
                {" "}
                <img
                  className="inputLogo"
                  src={require("./image/icon.png")}
                />
                HIGHLIGHTING
              </h1>
              <a href="https://drive.google.com/file/d/18kx-V44rLVlF4QzHpMjlQ2tytbKs-L0V/view?usp=sharing"
              target='_blank'>
              <button className="resultButton">
                <span>Window 다운</span>
              </button>
              </a>
              
              <button className="resultButton">
                <span>Linux 다운</span>
              </button>
            </div>
            {/* 우상단 URL 입력창 */}
          </div>
        </div>

        <div className="LowerContainer">
          <div className="lower_left_container">
            {/* 좌하단 가이드라인 */}
            <div className="Home_introduction_heading_wrap">
              <h2 id="guidline"> 단계별 가이드라인 </h2>
            </div>
            <ul className="Home_list">
              <li className="Home_list-item">
                <div>
                  <p
                    className={
                      "Home_list-content" + " " + (active0 ? "is-active" : "")
                    }
                    id="zero"
                    onMouseEnter={onClickGuide}
                  >
                    0 - 다시보기 스트리밍 영상이란?
                  </p>
                  <p
                    className={
                      "Home_list-sub" + " " + (active0 ? "sub-active" : "")
                    }
                  >
                    다시보기 스트리밍 영상이란 다음의 영상들을 의미합니다. 해당
                    영상링크가 아닐 경우 분석이 불가능합니다.
                  </p>
                </div>
              </li>

              <li className="Home_list-item">
                <div className="Home_list-content-wrap">
                  <p
                    className={
                      "Home_list-content" + " " + (active1 ? "is-active" : "")
                    }
                    id="first"
                    onMouseEnter={onClickGuide}
                  >
                    1 - 키보드 조작방법
                  </p>
                  <p
                    className={
                      "Home_list-sub" + " " + (active1 ? "sub-active" : "")
                    }
                  >
                    저희 HIGHLIGHTING은 다양한 키보드 단축키들을 제공합니다.
                  </p>
                </div>
              </li>

              <li className="Home_list-item">
                <div className="Home_list-item-image"></div>
                <div className="Home_list-content-wrap">
                  <p
                    className={
                      "Home_list-content" + " " + (active2 ? "is-active" : "")
                    }
                    id="second"
                    onMouseEnter={onClickGuide}
                  >
                    2 - 키워드 검색 기능
                  </p>
                  <p
                    className={
                      "Home_list-sub" + " " + (active2 ? "sub-active" : "")
                    }
                  >
                    내가 원하는 키워드의 사용 빈도와 도네이션의 발생 시점등을
                    알려줍니다.
                  </p>
                </div>
              </li>

              <li className="Home_list-item">
                <div className="Home_list-content-wrap">
                  <p
                    className={
                      "Home_list-content" + " " + (active3 ? "is-active" : "")
                    }
                    id="third"
                    onMouseEnter={onClickGuide}
                  >
                    3단계 - 북마크 기능
                  </p>
                  <p
                    className={
                      "Home_list-sub" + " " + (active3 ? "sub-active" : "")
                    }
                  >
                    원하는 구간을 컷으로 편집하여 보관, 저장하여 다시 볼 수
                    있습니다.
                  </p>
                  <a className="UPscroll">
                    <br />
                    <br />
                    <br />
                  </a>
                </div>
              </li>
            </ul>
            {/* 좌하단 가이드라인 */}
          </div>
          <div className="lower_right_container">
            {/* 우하단 내용 컨테이너 */}
            <div className="Home_GuidelineContainer" id="guideContainer">
              {active0 ? (
                <div className="GuideLine_content">
                  <h2>다시보기 영상이란?</h2>
                  <div className="guide_content_box">
                    <img
                      className="review1"
                      src={require("./image/다시보기1.png")}
                    />
                    <p className="guide_content_p1">
                      1. 동영상 => 필터 => 지난 방송 탭의 영상
                    </p>
                    <img
                      className="review2"
                      src={require("./image/다시보기2.png")}
                    />

                    <p className="guide_content_p2">
                      2. 이전 실시간 스트림 탭의 영상
                    </p>
                  </div>
                  <div className="guide_button_box">
                    <GiPlayButton
                      className="previousButton"
                      onClick={() => {
                        activeThird();
                        viewChange();
                      }}
                    />{" "}
                    <GiPlayButton
                      className="nextButton"
                      onClick={() => {
                        activeFirst();
                        viewChange();
                      }}
                    />
                  </div>
                </div>
              ) : (
                ""
              )}
              {active1 ? (
                <div className="GuideLine_content">
                  <h2> 키보드 조작 방법</h2>
                  <div className="guide_content_box">
                    <img
                      className="review3"
                      src={require("./image/배경.png")}
                    />
                    <p className="guide_content_p1">1. space바 : 재생 / 정지</p>
                    <p className="guide_content_p1">
                      2. 좌(◀), 우(▶) 버튼 : 5초 단위 앞, 뒤로 영상 시점 이동
                    </p>
                    <p className="guide_content_p1">
                      3. Ctrl + shift + S : 마우스 드래그한 범위 컷편집 저장
                    </p>
                  </div>
                  <div className="guide_button_box">
                    <GiPlayButton
                      className="previousButton"
                      onClick={() => {
                        activeZero();
                        viewChange();
                      }}
                    />{" "}
                    <GiPlayButton
                      className="nextButton"
                      onClick={() => {
                        activeSecond();
                        viewChange();
                      }}
                    />
                  </div>
                </div>
              ) : (
                ""
              )}
              {active2 ? (
                <div className="GuideLine_content">
                  <h2>키워드 검색 기능</h2>
                  <div className="guide_content_box">
                    <img
                      className="review1"
                      src={require("./image/그림1.png")}
                    />
                    <p className="guide_content_p1">
                      {" "}
                      키워드 검색 버튼 클릭후 키워드 입력
                    </p>
                    <img
                      className="review2"
                      src={require("./image/그림2.png")}
                    />
                    <p className="guide_content_p2">
                      {" "}
                      키워드 입력 후 검색버튼 활성화 시 차트 데이터 변경
                    </p>
                  </div>
                  <div className="guide_button_box">
                    <GiPlayButton
                      className="previousButton"
                      onClick={() => {
                        activeFirst();
                        viewChange();
                      }}
                    />{" "}
                    <GiPlayButton
                      className="nextButton"
                      onClick={() => {
                        activeThird();
                        viewChange();
                      }}
                    />
                  </div>
                </div>
              ) : (
                ""
              )}
              {active3 ? (
                <div className="GuideLine_content">
                  <h2>북마크 기능</h2>
                  <div className="guide_content_box">
                    <img
                      className="review1"
                      src={require("./image/그림4.png")}
                    />
                    <p className="guide_content_p1">
                      차트에서 원하는 영역 드래그
                    </p>
                    <img
                      className="review2"
                      src={require("./image/그림5.png")}
                    />
                    <p className="guide_content_p2">
                      컷 만들기 버튼을 누르거나 단축키(ctrl+shift+S) 입력 시 컷
                      저장
                    </p>
                  </div>
                  <div className="guide_button_box">
                    <GiPlayButton
                      className="previousButton"
                      onClick={activeSecond}
                    />{" "}
                    <GiPlayButton className="nextButton" onClick={activeZero} />
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>
            {/* 우하단 내용 컨테이너 */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;