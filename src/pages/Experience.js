import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2018-2019"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Hwa Chong Institution, Singapore
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            A-Level Certificate
          </h4>
          <p>Distinction in H2 Maths and H2 Economics</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2020-2024"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Nanyang Technological University, Singapore
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
            Double Bachelor's Degree
          </h4>

          <p> Business and Computer Science, Business Analytics</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="May 2022 - July 2022"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Full Stack Web Developer Intern
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Aspri Group PTE. LTD. , Singapore
          </h4>
          <p>
            Built a Corporate Service Web Portal from scratch using C#, Blazor WASM, and MySQL in a team of 3 for client and staff use.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Dec 2022 - Jan 2023"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Frontend Web Developer Intern
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            InApps Tecchnology, Ho Chi Minh City, Vietnam
          </h4>
          <p>
           Frontend implementation of UI Design
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Feb 2023 - Mar 2023"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Software Engineer Intern
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Ultra Clean Technology, Singapore
          </h4>
          <p>
           Front End implementation of web pages and UI improvements
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="Apr - June 2023"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Drexel University, United States, Pennsylvania
          </h3>

          <p> Semester Exchange Program</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Aug 2023 - Current"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Product Manager Intern
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Shopee, Singapore
          </h4>
          <p>
          Support data product features UAT and review internal data products
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
      
    </div>
  );
}

export default Experience;