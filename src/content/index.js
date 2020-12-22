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
      { text: "Work", to: "myWork" },
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
    socials: [
      {
        href: "https://www.facebook.com/thaibeo127/",
        alt: "facebook",
        img: process.env.PUBLIC_URL + "/assets/facebook.png",
      },
      {
        href: "https://www.linkedin.com/in/thai-nguyen-0a8805198/",
        alt: "link",
        img: process.env.PUBLIC_URL + "/assets/link.png",
      },
      // {
      //   href: "tel: 0977 377 127",
      //   alt: "0977 377 127",
      // },
      // {
      //   href: "javascript:sendEmail(['ducthaind127','gmail.com'].join('@'))",
      //   alt: "ducthaind127@gmail.com",
      // },
    ],
  },
  work: {
    title: "Projects",
    img: process.env.PUBLIC_URL + "/assets/project-mobile.png",
    imgPlaceholder:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAA9hAAAPYQGoP6dpAAAAB3RJTUUH5AoTBgYsKRKkMwAABZhJREFUSMd1lltoXdcRhr+ZWeemu205kixZiuoUJ7Wb1E2cCENrIuI0hbZQKPShuFEgGAoN7UMf2hJcYoQTl+KGPuTBDyF5Kb1CwIZeQkubQBPLTmxHaWpHkaUEJ3Ksu85NZ5+91+rD0bF0LOeHxdp77TXz739mzewt3AZ3P3iAeLXUOfDwt37X2rNzOASEEEiqEYXZT2nr3oEPgRBABF/4ePqVyb/8/vHcls7C+xff2uTP3brwt/0jPDr2Q44c+vWB+KHhh9oH7xYfJ3ifEOIq2wrvICs3mM7uI9XWgVnQ4uT/Du4bnzxwcmLk1b/v/3P42rmXGnxa/eIPu77Hkd0PICptH/ae+3EOGy1+afe23bOXqBZXkN4Bhlrf5ttNv+XC+RvMtn+Z0vIK6hyp5cWmoUsfPLLQccWhMv79vn2Vb2b28MfFcQAU4PTeJ+jszmAm21XleVRGnUhPt1/g0Kf/ZGDiX3SwxJ3XXmPmwjLtc9dYev9d5q5OUVzO433AqfRgMqoqz5vJ9s7uDKf3PrEertatigitwXMiwIgGRBXUjEo2w7nJAltWKoy/HRNNJLz3cZEb3Vdxd+wkiWKqPsZrwBDnYUQAUX7UulXyAO714Sdp35pmeT76QRAO156DGmSoEu7o4b6OvbQYnJ0LXHxriu6+nTy8ZyczUYZSElNNYhIJmAoCAhwW4XL7tvQvXx9+EmcmFJar+9TkqboyBcxB3jIs9Ozlu/cOY6rc1/E4Hx3cT0tLOyslTyGC/8wXuJYvok4wVYRQj9BTheXqq2ZyweWanESVZCRAX/0QKOAsMNO0gzNxlqk33+UbQ19k15130dPVy8LCAp+MnePDa58w2NrMUrlE2lldSR19AiPpjF103ofPmdPHNh45BUwS4ighHuznUrFASz7whTaQRJiPlaqmyC29x+zlGbKZz5N1DqeC30gDX/c+/MaZyVCAgVtJFCGuVInyZdSleWM5ZrwC5pXllQxbSmUONZf4q6SZLKfwFuFMSWrhqqNfYMiZ0/uBzCYlePAeX41IIkgqyqoZIkKlEpORDJcXmpm551G6Ui3Ia//AUoKEBiUZ4H7nUtKg4iaJX9scqJF5D9UECBgw33cvY9t3EVq20nb1Cs3pFM4JfnOXGnDOae72JHqTYx3rd5LKEKeziCgCOCeY01p1NyLnzEnx1lUTsFhIGWQNgkAIoAI+gIigAkkIxEAiYE5wKcGHTSRF51IyvVmJoEFIm9DTpDiEShLwQFqFyAeaHQjK9YowDzinOKd4NrFMO3N6XmAVyDbUSag5nluNwXtUAgEIa0c0H0EchJI3BDCrK2lI/GqA886cnBWYAu5ZD5egXjCBnAuEBGTN1tdpAnhf6yGshcucIqFByVSAs3rpzYVpc3qmLtc5rRlYLb7lqlCKoRQL5VgoV2tzIVYKkdZyVFfihEY/euadscVp9+DB7QAvi/AdYBBqCTYTkiAUE0MDxLc5mw15NMGcIGGDisDL+7/SiZoJTS3uv2Zy0pxE5gRnipqsxUjQtTl8xkBqyq0eBSeRmZxc84u2PXeCuOoRlRfV5JSZeHWCGWSkRFbyWCiS0yJNnzEyslojqQ2vJqdE5cW46ml77sR6Nyv/4mcAHSIcM5EjE+WVzNxXC/QO5Ah+rQwD1C3qhqLC9JUSA2Nt9OdaKj6EUyFwFFjKPfMssOFHIvfMs0THfr4E/NSpXkbin+xIzw72px3BQ6kqzJUMH2rF2tUak7baF66SjkFaplKmv6p6/xJQSh893tBBbiJ99DhqUpKnR1/40/QHRyZnykuLKwmL+YRyOSFDRJaINBH5omcxn7CwnDB5vXT99PT0YXl69AU1aSDYqLoB/bvuIl9MWh7Ykz3etS31yK0vsxEhhGRmtvrKv8+vHuvtSlU+mpzYtOf/aHJKEOMikqoAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjAtMTAtMTlUMDY6MDY6NDQtMDQ6MDC342kQAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIwLTEwLTE5VDA2OjA2OjQ0LTA0OjAwxr7RrAAAAABJRU5ErkJggg==",
    projectName: "Sleeping",
    desc:
      "peaceful, and tranquil mean quiet and free from disturbance. calm is used when someone is not excited or upset even when there is cause for it. They stayed calm during the fire. peaceful is used when someone or something has reached a quiet state after some period of disturbance.",
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
