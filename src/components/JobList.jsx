import { useState } from "react";
import JobForm from "./JobForm";
import JobTable from "./JobTable";

export default function JobList() {
  const [jobs, setJobs] = useState([
    {
      name: "Nordia",
      link: "https://www.nordia.hr/jobs/zaposlenje-posao-web-developer",
      status: true,
      position: "Junior Frontend Developer",
      deadline: "1.2.2025.",
    },
    {
      name: "AVL",
      link: "https://jobs.avl.com/job/Zagreb-Front-end-Framework-Web-Developer-%28fm%29/1149427901/",
      status: true,
      position: "Front-end Framework Web Developer",
      deadline: "",
    },
    {
      name: "404",
      link: "https://www.404.agency/en/general-submission/",
      status: false,
      position: "Open Application",
      deadline: "",
    },
    {
      name: "Valere Margins",
      link: "https://www.linkedin.com/jobs/view/4042217928/?refId=cd4744fa-d8f6-4d41-89e4-8cc5300ed14a&trackingId=5h4CF6VYSR6WAUDvutlQIA%3D%3D",
      status: false,
      position: "Open Application",
      deadline: "",
    },
    {
      name: "Aplikacije.hr",
      link: "https://aplikacije.hr/wordpress-developer/",
      status: false,
      position: "Open Application",
      deadline: "",
    },
    {
      name: "Neuralab",
      link: "https://www.neuralab.net/about/careers/open-application/",
      status: false,
      position: "Open Application",
      deadline: "",
    },
    {
      name: "Degordian",
      link: "https://degordian.com/letter-of-interest/",
      status: false,
      position: "Open Application",
      deadline: "",
    },
    {
      name: "Human Interaction",
      link: "https://www.humaninteraction.com/people/open-position?name=Open-application",
      status: false,
      position: "Open Application",
      deadline: "",
    },
    {
      name: "Bornfight",
      link: "https://bornfight.talentlyft.com/jobs/open-application-bornfight-tKx",
      status: false,
      position: "Open Application",
      deadline: "",
    },
    {
      name: "Kala Presence",
      link: "https://kalapresence.hr/karijere/",
      status: false,
      position: "Open Application",
      deadline: "",
    },
  ]);

  return (
    <>
      <JobTable jobs={jobs} setJobs={setJobs} />
      <JobForm jobs={jobs} setJobs={setJobs} />
    </>
  );
}
