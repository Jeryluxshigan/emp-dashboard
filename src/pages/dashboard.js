import React from "react";


function Dashboard() {
  const welcome = "Hi Jerry, Good Afternoon.";
  const courses = "Courses Assigned For You";
  const subtitle1 = "Weekly Goals";
  const subtitle2 = "Weekly Meetings";
  const subtitle3 = "Pending Task";
  const subtitle4 = "Pending Leeve";
  const subcontent1 = "Need To Finish : 03";
  const subcontent2 = "Total Meetings : 07";
  const subcontent3 = "Pending Tasks : 01";
  const subcontent4 = "Pending Leeves : 12";
  const imgtitile1 = "Hands on Introduction: React";
  const imgtitile2 = "Javascript: Beginers to Advance";
  const imgtitile3 = "Css: Advance Training";
  const tutor = "By: Jeryluxshigan";
  return (
    <div className="main-card ">
      <div className="welcome"> {welcome} </div>
      <div className="section1">
        <div className="sub-card">
          <div className="sub-titles">{subtitle1}</div>
          <div className="sub-content">{subcontent1}</div>
        </div>
        <div className="sub-card">
          <div className="sub-titles">{subtitle2}</div>
          <div className="sub-content">{subcontent2}</div>
        </div>
        <div className="sub-card">
          <div className="sub-titles">{subtitle3}</div>
          <div className="sub-content">{subcontent3}</div>
        </div>
        <div className="sub-card">
          <div className="sub-titles">{subtitle4}</div>
          <div className="sub-content">{subcontent4}</div>
        </div>
      </div>
      <div className="welcome"> {courses} </div>
      <div className="section2">
        <div className="sub-card2">
          <img
            className="img1"
            src="https://i.ytimg.com/vi/B6NW5g0h7PA/maxresdefault.jpg"
          />
          <div className="sub-titles2"> {imgtitile1}</div>
          <div className="tutors"> {tutor} </div>
        </div>
        <div className="sub-card2">
          <img
            className="img1"
            src="https://i.ytimg.com/vi/mwQ6oJ28E8M/maxresdefault.jpg"
          />
          <div className="sub-titles2"> {imgtitile2}</div>
          <div className="tutors"> {tutor} </div>
        </div>
        <div className="sub-card2">
          <img
            className="img1"
            src="https://i.ytimg.com/vi/mwZtq-fv6TI/maxresdefault.jpg"
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
          />
          <div className="sub-titles2"> {imgtitile1}</div>
          <div className="tutors"> {tutor} </div>
        </div>
        <div className="sub-card2">
          <img
            className="img1"
            src="https://i.ytimg.com/vi/mwQ6oJ28E8M/maxresdefault.jpg"
          />
          <div className="sub-titles2"> {imgtitile2}</div>
          <div className="tutors"> {tutor} </div>
        </div>
        <div className="sub-card2">
          <img
            className="img1"
            src="https://i.ytimg.com/vi/mwZtq-fv6TI/maxresdefault.jpg"
          />
          <div className="sub-titles2"> {imgtitile3}</div>
          <div className="tutors"> {tutor} </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
