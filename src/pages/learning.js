import React from "react";
import { Carousel } from "antd";

function Learning() {
  const learning = "The more you learn, the more you grow.";
  const imgtitile1 = "Hands on Introduction: React";
  const imgtitile2 = "Javascript: Beginers to Advance";
  const imgtitile3 = "Css: Advance Training";
  const tutor = "By: Jeryluxshigan";
  return (
    <div className="main-card">
      <div className="learning-sec1">
        <Carousel autoplay>
          <div className="corousel">
            <div className=".corousel-img">
              <img
                className="img2"
                src="https://static.vecteezy.com/system/resources/previews/002/294/874/large_2x/e-learning-web-banner-design-students-take-online-tests-during-online-classes-online-education-digital-classroom-e-learning-concept-header-or-footer-banner-free-vector.jpg"
                alt="learning"
              />
            </div>
          </div>
          <div className="corousel">
            <div className=".corousel-img">
              <img
                className="img2"
                src="https://static.vecteezy.com/system/resources/previews/002/294/874/large_2x/e-learning-web-banner-design-students-take-online-tests-during-online-classes-online-education-digital-classroom-e-learning-concept-header-or-footer-banner-free-vector.jpg"
                alt="learning"
              />
            </div>
          </div>
          <div className="corousel">
            <div className=".corousel-img">
              <img
                className="img2"
                src="https://static.vecteezy.com/system/resources/previews/002/294/874/large_2x/e-learning-web-banner-design-students-take-online-tests-during-online-classes-online-education-digital-classroom-e-learning-concept-header-or-footer-banner-free-vector.jpg"
                alt="learning"
              />
            </div>
          </div>
        </Carousel>
      </div>
      <div className="welcome"> {learning} </div>
      <div className="section2">
        <div className="sub-card2">
          <img
            className="img1"
            src="https://i.ytimg.com/vi/B6NW5g0h7PA/maxresdefault.jpg"
            alt="learning"
          />
          <div className="sub-titles2"> {imgtitile1}</div>
          <div className="tutors"> {tutor} </div>
        </div>
        <div className="sub-card2">
          <img
            className="img1"
            src="https://i.ytimg.com/vi/mwQ6oJ28E8M/maxresdefault.jpg"
            alt="learning"
          />
          <div className="sub-titles2"> {imgtitile2}</div>
          <div className="tutors"> {tutor} </div>
        </div>
        <div className="sub-card2">
          <img
            className="img1"
            src="https://i.ytimg.com/vi/mwZtq-fv6TI/maxresdefault.jpg"
            alt="learning"
          />
          <div className="sub-titles2"> {imgtitile3}</div>
          <div className="tutors"> {tutor} </div>
        </div>
      </div>
      <div className="section2">
        <div className="sub-card2">
          <img
            className="img1"
            src="https://i.ytimg.com/vi/B6NW5g0h7PA/maxresdefault.jpg"
            alt="learning"
          />
          <div className="sub-titles2"> {imgtitile1}</div>
          <div className="tutors"> {tutor} </div>
        </div>
        <div className="sub-card2">
          <img
            className="img1"
            src="https://i.ytimg.com/vi/mwQ6oJ28E8M/maxresdefault.jpg"
            alt="learning"
          />
          <div className="sub-titles2"> {imgtitile2}</div>
          <div className="tutors"> {tutor} </div>
        </div>
        <div className="sub-card2">
          <img
            className="img1"
            src="https://i.ytimg.com/vi/mwZtq-fv6TI/maxresdefault.jpg"
            alt="learning"
          />
          <div className="sub-titles2"> {imgtitile3}</div>
          <div className="tutors"> {tutor} </div>
        </div>
      </div>
    </div>
  );
}

export default Learning;
