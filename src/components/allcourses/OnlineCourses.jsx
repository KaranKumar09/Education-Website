// // import React from "react";
// import "./courses.css";
// import { online } from "../../dummydata";
// import Heading from "../common/heading/Heading";

// const OnlineCourses = () => {
//   return (
//     <>
//       <section className="online">
//         <div className="container">
//           <Heading subtitle="COURSES" title="Browse Our Online Courses" />
//           <div className="content grid3">
//             {online.map((val, index) => (
//               <a
//                 key={index}
//                 href={val.link} // Assuming `link` exists in your `online` data
//                 className="box"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <div className="img">
//                   <img src={val.cover} alt={val.courseName} />
//                   <img src={val.hoverCover} alt={val.courseName} className="show" />
//                 </div>
//                 <h1>{val.courseName}</h1>
//                 <span>{val.course}</span>
//               </a>
//             ))}
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default OnlineCourses;
import React from "react";
import "./courses.css";
import { online } from "../../dummydata";
import Heading from "../common/heading/Heading";

const OnlineCourses = () => {
  const handleBackToWebsite = () => {
    window.location.href = "/"; // Replace "/" with your website's homepage URL
  };

  return (
    <>
      <section className="online">
        <div className="container">
          <Heading subtitle="COURSES" title="Browse Our Online Courses" />
          <div className="content grid3">
            {online.map((val, index) => (
              <div key={index} className="box">
                <a
                  href={val.link} // Assuming `link` exists in your `online` data
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="img">
                    <img src={val.cover} alt={val.courseName} />
                    <img src={val.hoverCover} alt={val.courseName} className="show" />
                  </div>
                  <h1>{val.courseName}</h1>
                  <span>{val.course}</span>
                </a>
                <div className="back-to-website">
                  <button onClick={handleBackToWebsite}>Back to Website</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default OnlineCourses;
