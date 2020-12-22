export default {
  nav: {
    logo: {
      title: "Logo TN",
      img: process.env.PUBLIC_URL + "/assets/logo/logoTN-aqua.png",
    },
    links: [
      { text: "About", to: "myAbout" },
      { text: "Experience", to: "myExp" },
      { text: "Skills", to: "mySkills" },
      { text: "Education", to: "myEdu" },
      { text: "Portfolios", to: "myPort" },
    ],
  },
  header: {
    img: process.env.PUBLIC_URL + "/assets/avatar.png",
    text: ["Hi!", "I'm "],
    typical: ["Nguyen Duc Thai.", 2000, "a front-end developer.", 2000],
    btnText: "Discover More",
  },
  about: {
    title: "About Me",
    img: process.env.PUBLIC_URL + "/assets/avatar.png",
    desc:
      "I am a Front-end Developer. I want to create good websites for users.",
    infos: [
      {
        th: "Adress",
        td: "Xuan Dinh street, Bac Tu Liem district, Ha Noi",
      },
      {
        th: "Date of birth",
        td: "1993",
      },
      {
        th: "Website",
        td: "www.nguyenducthai.com",
        action: "https://www.nguyenducthai.com/",
      },
      {
        th: "Email",
        td: "ducthaind127@gmail.com",
        action: "mailto:ducthaind127@gmail.com",
      },
      {
        th: "Phone",
        td: "0977 377 127",
        action: "tel: 0977 377 127",
      },
    ],
    socials: [
      {
        href: "https://www.facebook.com/thaibeo127/",
        alt: "facebook",
        img: process.env.PUBLIC_URL + "/assets/facebook.png",
      },
      {
        href: "https://www.linkedin.com/in/thai-nguyen-0a8805198/",
        alt: "linkedin",
        img: process.env.PUBLIC_URL + "/assets/linkedin.png",
      },
    ],
  },
  exp: {
    title: "Work Experience",
    jobs: [
      {
        company: "Viivue Web Design Company",
        time: "02/2019 - 10/2020",
        position: "Fresher Front-end Developer",
        desc: "Skills used in real projects:",
        details: [
          "HTML/CSS skill: the design file into website.",
          "JS libraries: sliders, scrolls, animations (slick, aos, gsap)...",
          "Wordpress - PHP: create elements in Visual Composer...",
          "Tool: Adobe PSD, XD",
          "EDI: PHP Storm, Visual Studio Code.",
          "Version control systems: Git.",
          "Manage Task: Trello.",
        ],
        projects: [
          {
            href: "https://www.etonhousethaodien.com/",
            alt: "Eton House",
          },
          {
            href: "https://www.theanimaldoctors.org/",
            alt: "Animal Doctors",
          },
          {
            href: "https://www.florakitchen.vn/",
            alt: "Flora Kitchen",
          },
          {
            href: "http://viivue.mochisandbox.com/alphapack/",
            alt: "Alpha Pack",
          },
          {
            href: "http://viivue.mochisandbox.com/thenestsaigon/",
            alt: "The Nest Sai Gon",
          },
        ],
      },
      {
        company: "CyberSoft Academy",
        time: "12/2018 - 01/2019",
        position: "Intern Front-end Developer",
        desc: "Skills used in the exercises:",
        details: [
          "Create templates CV with: html, scss, css, javascript/jquery.",
          "Create staff management page and center management page with: webpack, js/ES6, typescript, ajax.",
          "Create some small projects on course with: reactJS, nodeJS, mongoDB.",
        ],
      },
      {
        company: "TRICC-SGN",
        time: "10/2016 - 07/2018",
        position: "Civil Engineer",
        desc: 'I have been working as "Civil Engineer" for almost 2 years.',
      },
    ],
  },
  stack: {
    title: "Stack",
    tech: [
      {
        img: process.env.PUBLIC_URL + "/assets/mongo.png",
        alt: "mongodb",
      },
      {
        img: process.env.PUBLIC_URL + "/assets/react.svg",
        alt: "react",
      },
      {
        img: process.env.PUBLIC_URL + "/assets/express.png",
        alt: "express",
      },
      {
        img: process.env.PUBLIC_URL + "/assets/node.png",
        alt: "node",
      },
    ],
    desc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only`,
  },
};
