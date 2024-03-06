import React from "react";
import { Table } from "antd";

import { Card } from "antd";

const { Meta } = Card;


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
      "Conducting user research to understand the needs, preferences, and behaviors of the target audience.  Keeping up-to-date with the latest design trends, tools, and technologies in the field of UI/UX design.  Creating wireframes and prototypes to visualize and iterate on the design ideas.Translating visual and interaction designs into HTML, CSS, and JavaScript code",
  },
  {
    key: "2",
    name: "EDI",
    tools: "Figma, Sktch, Adobe XD, React JS, Node Js",
    experience:
      "Conducting user research to understand the needs, preferences, and behaviors of the target audience.  Keeping up-to-date with the latest design trends, tools, and technologies in the field of UI/UX design.  Creating wireframes and prototypes to visualize and iterate on the design ideas.Translating visual and interaction designs into HTML, CSS, and JavaScript code",
  },
  {
    key: "3",
    name: "UI/UX Site",
    tools: "Figma, Sktch, Adobe XD, React JS, Node Js",
    experience:
      "Conducting user research to understand the needs, preferences, and behaviors of the target audience.  Keeping up-to-date with the latest design trends, tools, and technologies in the field of UI/UX design.  Creating wireframes and prototypes to visualize and iterate on the design ideas.Translating visual and interaction designs into HTML, CSS, and JavaScript code",
  },
];

function Performance() {
  const performance = "Project Experience.";
  return (
    <div className="main-card">
      <div className="welcome"> {performance} </div>
      <div className="section1">
      <div className="sub-card2">
          <img
            className="img1"
            src="https://th.bing.com/th/id/OIP.gBBaWg6UcGE2Z1wP1MJTXAHaEk?rs=1&pid=ImgDetMain"
            alt="learning"
          />
        </div>
        <div className="sub-card2">
          <img
            className="img1"
            src="https://th.bing.com/th/id/OIP.gBBaWg6UcGE2Z1wP1MJTXAHaEk?rs=1&pid=ImgDetMain"
            alt="learning"
          />
        </div>
        <div className="sub-card2">
          <img
            className="img1"
            src="https://th.bing.com/th/id/OIP.gBBaWg6UcGE2Z1wP1MJTXAHaEk?rs=1&pid=ImgDetMain"
            alt="learning"
          />
        </div>
      </div>
      <div className="performance-section">
      <Table columns={columns} dataSource={data} size="middle" />
      </div>
    </div>
  );
}

export default Performance;
