export default {
  nav: {
    logo: {
      img:
        "https://www.nguyenducthai.com/wp-content/uploads/2020/12/logoTN-aqua.png",
      alt: "Logo",
    },
    links: [
      { text: "About", to: "myAbout" },
      { text: "Experience", to: "myExp" },
      { text: "Skills", to: "mySkills" },
      { text: "Education", to: "myEdu" },
      { text: "Portfolio", to: "myPort" },
    ],
  },
  header: {
    img: "https://www.nguyenducthai.com/wp-content/uploads/2020/12/avatar.png",
    alt: "Avatar",
    text: ["Hi!", "I'm "],
    typical: ["Nguyen Duc Thai.", 2000, "a front-end developer.", 2000],
    btnScroll: "Discover More",
    btnToCvPDF: {
      text: "CV PDF",
      href:
        "https://drive.google.com/file/d/1d4u0864zuXdsIZopjwuFRdKWnKBnE1OJ/view?usp=sharing",
    },
  },
  about: {
    title: "About Me",
    img: "https://www.nguyenducthai.com/wp-content/uploads/2020/12/avatar.png",
    alt: "Avatar",
    desc:
      "I am a Front-end Developer. I love making good and fancy websites for users. So I'm looking forward to working more with today's trending UI frameworks, especially with ReactJS. I hope to have the opportunity to work and learn from you in the future.",
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
        img:
          "https://www.nguyenducthai.com/wp-content/uploads/2020/12/facebook.png",
      },
      {
        href: "https://www.linkedin.com/in/thai-nguyen-0a8805198/",
        alt: "linkedin",
        img:
          "https://www.nguyenducthai.com/wp-content/uploads/2020/12/linkedin.png",
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
          "Tool: Adobe PSD, XD.",
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
          "Created templates CV with: html, scss, css, javascript/jquery.",
          "Created staff management page with: webpack, js/ES6, typescript, ajax.",
          "Created some small projects on course with: reactJS, nodeJS, mongoDB.",
        ],
        projects: [
          {
            href: "http://thai-clone-trello.surge.sh/",
            alt: "React - Clone Trello",
          },
          {
            href: "http://nguyenducthai-cv.surge.sh/",
            alt: "React - My CV",
          },
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
  skill: {
    title: "Skills",
    skills: [
      "Good communication and teamwork, basic English.",
      "HTML5, CSS3, BOOTSTRAP, SCSS, Responsive, Wordpress.",
      "Javascript/Jquery/ES6, basic Typescript, basic PHP.",
      "ReactJS & some packages: axios, redux, react-hooks...",
      "EDI: PHP Storm, Visual Studio Code.",
      "Tool: Adobe PSD/XD, UI/UX, Git, Trello.",
    ],
  },
  edu: {
    title: "Education",
    courses: [
      {
        school: "CyberSoft Academy",
        time: "08/2018 - 05/2019",
        position: "Web Developer",
        desc:
          'I have found IT very interesting and have a strong future. So I decided to find a new direction. "CyberSoft Academy" taught me basic programming knowledge, front-end web programming skills and fullstack course on NodeJS and MongoDB.',
      },
      {
        school: "University Of Transport And Communications Ha Noi",
        time: "09/2011 - 01/2016",
        position: "Civil Engineer",
        desc: 'I studied "Civil Engineer" for 4.5 years at UTC Ha Noi.',
      },
    ],
  },
  portfolio: {
    title: "Portfolio",
    projects: [
      {
        img:
          "https://www.nguyenducthai.com/wp-content/uploads/2020/12/alphapack.jpg",
        href: "http://viivue.mochisandbox.com/alphapack/",
        alt: "Alpha Pack",
      },
      {
        img:
          "https://www.nguyenducthai.com/wp-content/uploads/2020/12/etonhousethaodien.jpg",
        href: "https://www.etonhousethaodien.com/",
        alt: "Eton House",
      },
      {
        img:
          "https://www.nguyenducthai.com/wp-content/uploads/2020/12/florakitchen.jpg",
        href: "https://www.florakitchen.vn/",
        alt: "Flora Kitchen",
      },
      {
        img:
          "https://www.nguyenducthai.com/wp-content/uploads/2020/12/theanimaldoctors.jpg",
        href: "https://www.theanimaldoctors.org/",
        alt: "Animal Doctors",
      },
      {
        img:
          "https://www.nguyenducthai.com/wp-content/uploads/2020/12/thenestsaigon.jpg",
        href: "http://viivue.mochisandbox.com/thenestsaigon/",
        alt: "The Nest Sai Gon",
      },
      {
        img:
          "https://www.nguyenducthai.com/wp-content/uploads/2020/12/thai-clone-trello.jpg",
        href: "http://thai-clone-trello.surge.sh/",
        alt: "React - Clone Trello",
      },
      {
        img:
          "https://www.nguyenducthai.com/wp-content/uploads/2020/12/nguyenducthai-cv.png",
        href: "http://nguyenducthai-cv.surge.sh/",
        alt: "React - My CV",
      },
    ],
  },
};
