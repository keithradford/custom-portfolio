import { Project } from "./types";

export const projects: Project[] = [
  {
    name: "uvic-course-scraper",
    slogan:
      "a Node.js scraper library for UVic course and schedule information",
    languages: ["Node.js", "TypeScript"],
    links: [
      {
        name: "github",
        link: "https://github.com/VikeLabs/uvic-course-scraper",
      },
      {
        name: "npm page",
        link: "https://www.npmjs.com/package/@vikelabs/uvic-course-scraper",
      },
    ],
    description:
      "uvic-course-scraper is an NPM package developed by a team of UVic students with the goal of scraping UVic course data into a clean program-friendly format. Developed using the package Cheerio, we were able to parse UVic's HTML and expose to users of the package easy-to-use functions which provide various different types of data regarding courses.",
  },
  {
    name: "clockwork",
    languages: ["React", "TypeScript", "Firebase", "Chakra UI"],
    slogan:
      "simplify the experience of searching courses and building timetables",
    links: [
      {
        name: "github",
        link: "https://github.com/VikeLabs/clockwork",
      },
      {
        name: "website",
        link: "https://clockwork.vikelabs.dev/",
      },
    ],
    description:
      "clockwork is a website developed by a team of UVic students to improve the flow of viewing course information and building timetables for UVic. As it stands, students must visit three separate pages to view all the relevant information for a given course and it's sections. We built a simplified single-page view for every course at UVic which quickly displays students the information they want to see. The website acted as a way for us to gain experience in full-stack development, the importance of UI and UX, and working as a team using project management tools, participating in code review, and more.",
  },
  {
    name: "Terminal Chess",
    languages: ["Java"],
    slogan: "chess played through the command line",
    links: [
      {
        name: "github",
        link: "https://github.com/keithradford/terminal-chess",
      },
    ],
    description:
      'Chess is a timeless game which also makes for a great project to work on to flesh out programming skills. So that\'s what I did! After I initially learned how to code in Java I set out to develop the game "Snake" played solely through the command line. While I was happy with what I produced and learned in the process, the game was a bit too complex for the environment I was looking to have it run in. However, instead of letting the code fade to obscurity I transformed it into chess instead! A much simpler, turn-based game, ended up working much better and proved to be a great challenge despite my proficiency in programming having increased between the development of the two.',
  },
];
