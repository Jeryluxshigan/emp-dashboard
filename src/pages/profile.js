import React from "react";
import { Col, Row } from "antd";
import { Table } from "antd";
import { Button } from 'antd';

const columns = [
  {
    title: "Project Name",
    dataIndex: "name",
  },
  {
    title: "Tools",
    dataIndex: "tools",
  },
  {
    title: "Experience",
    dataIndex: "experience",
  },
];
const data = [
  {
    key: "1",
    name: "Rapid",
    tools: "Figma, Sktch, Adobe XD, React JS, Node Js",
    experience:
      "Conducting user research to understand the needs, preferences, and behaviors of the target audience. ",
  },
  {
    key: "2",
    name: "EDI",
    tools: "Figma, Sktch, Adobe XD, React JS, Node Js",
    experience:
      "Conducting user research to understand the needs, preferences, and behaviors of the target audience. ",
  },
  {
    key: "3",
    name: "UI/UX Site",
    tools: "Figma, Sktch, Adobe XD, React JS, Node Js",
    experience:
      "Conducting user research to understand the needs, preferences, and behaviors of the target audience.",
  },
  
];

function Profile() {
  const name = "John Dhanushan";
  const content1 = "Experience";
  const position = "Software Engineer";
  const skills = "Expert Skills"
  const about = "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using making it look like readable English"
  return (
    <div className="main-card">
      <Row>
        <Col span={18} push={6}>
          <div className="profile-content">
            <div className="content-1">
            <div className="experience"> {content1} </div>
            <div className="section4">
      <div className="sub-card3">
          <img
            className="img1"
            src="https://th.bing.com/th/id/OIP.gBBaWg6UcGE2Z1wP1MJTXAHaEk?rs=1&pid=ImgDetMain"
            alt="learning"
          />
        </div>
        <div className="sub-card3">
          <img
            className="img1"
            src="https://th.bing.com/th/id/OIP.gBBaWg6UcGE2Z1wP1MJTXAHaEk?rs=1&pid=ImgDetMain"
            alt="learning"
          />
        </div>
        <div className="sub-card3">
          <img
            className="img1"
            src="https://th.bing.com/th/id/OIP.gBBaWg6UcGE2Z1wP1MJTXAHaEk?rs=1&pid=ImgDetMain"
            alt="learning"
          />
        </div>
      </div>
            <Table columns={columns} dataSource={data} size="middle" />
            <div className="btn">
            <Button className="edit">Edit Experience</Button>
            </div>
            </div>
          </div>
        </Col>
        <Col span={6} pull={18}>
          <div className="profile-card">
            <div className="profile-img">
              <img
                className="profile-img"
                src="https://th.bing.com/th/id/OIF.rgAjuhcChzjGf3oSEzKBTA?rs=1&pid=ImgDetMain"
                alt="learning"
              />
            </div>
            <div className="profile-name"> {name} </div>
            <div className="position"> {position} </div>
            <div className="about"> {about} </div>
            <div className="skills"> {skills} </div>
            <div className="skills-set">
              <div className="skill-name">
                Anglar JS
              </div>
              <div className="skill-name">
                React JS
              </div>
            </div>
            <div className="skills-set">
              <div className="skill-name">
               Html
              </div>
              <div className="skill-name">
                Sass
              </div>
              <div className="skill-name">
                css
              </div>
            </div>
            <div className="skills-set">
              <div className="skill-name">
               UX Design
              </div>
              <div className="skill-name">
                UI Design
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Profile;
