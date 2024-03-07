import React from "react";
import { Carousel } from "antd";
import { Calendar, theme } from "antd";
import { ClockCircleOutlined } from "@ant-design/icons";
import { Timeline } from "antd";
const onPanelChange = (value, mode) => {
  console.log(value.format("YYYY-MM-DD"), mode);
};

function Learning() {
  const learning = "The more you learn, the more you grow.";
  const timeline = "Learning Timeline.";
  const imgtitile1 = "Hands on Introduction: React";
  const imgtitile2 = "Javascript: Beginers to Advance";
  const tutor = "By: Jeryluxshigan";
  const { token } = theme.useToken();
  const wrapperStyle = {
    width: 300,
    border: `1px solid ${token.colorBorderSecondary}`,
    borderRadius: token.borderRadiusLG,
  };
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
      <div className="section">
        <div className="img-card">
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
        </div>
        <div className="img-card">
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
        </div>
        <div className="datepicker">
          <div style={wrapperStyle}>
            <Calendar fullscreen={false} onPanelChange={onPanelChange} />
          </div>
          <div className="timeline-title "> {timeline} </div>
          <Timeline
            className="timeline"
            items={[
              {
                children: "Create a services site 2015-09-01",
              },
              {
                children: "Solve initial network problems 2015-09-01",
              },
              {
                children: "Network problems being solved 2015-09-01",
              },
              {
                children: "Network problems being solved 2015-09-01",
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
}

export default Learning;
