export function getMySkillsData() {
  const tempArrayDefault = [
    {
      title: "HTML",
      description:
        "I create well-structured web pages optimized for accessibility and SEO.",
      image: require("@/assets/imagesSkills/HTML.webp"),
    },
    {
      title: "CSS",
      description:
        "I design responsive and visually appealing layouts using advanced styling techniques.",
      image: require("@/assets/imagesSkills/CSS.webp"),
    },
    {
      title: "BOOSTRAP 5",
      description:
        "I build fast and responsive interfaces using the Bootstrap 5 framework.",
      image: require("@/assets/imagesSkills/BOOSTRAP.png"),
    },
    {
      title: "JS ES6",
      description:
        "I develop dynamic and interactive functionalities using modern JavaScript concepts.",
      image: require("@/assets/imagesSkills/JS.webp"),
    },
    {
      title: "VUE 2 / VUE 3",
      description:
        " I develop scalable front-end applications with Vue.js, leveraging both older and newer versions.",
      image: require("@/assets/imagesSkills/VUE.png"),
    },
    {
      title: "C# .NET MVC",
      description:
        "I build robust and secure applications using the MVC architecture in C#.",
      image: require("@/assets/imagesSkills/dotnettwo.png"),
    },
    {
      title: "SQL & Oracle DBEaver",
      description:
        " I manage complex databases and optimize SQL queries for better performance.",
      image: require("@/assets/imagesSkills/ORACLE.png"),
    },
    {
      title: "JSON",
      description:
        "I integrate and manipulate data in JSON format for seamless server-client communication.",
      image: require("@/assets/imagesSkills/JSON.png"),
    },
    {
      title: "GitHub, Git Bash & GitLens",
      description:
        "I efficiently collaborate on projects using version control and code management tools.",
      image: require("@/assets/imagesSkills/GIT.png"),
    },
    {
      title: "VSCode & Visual Studio",
      description:
        "I utilize modern development environments for coding and debugging.",
      image: require("@/assets/imagesSkills/VSCODE.png"),
    },
    {
      title: "XML",
      description:
        "I structure and process data using XML for information exchange.",
      image: require("@/assets/imagesSkills/XML.png"),
    },
    {
      title: "API",
      description:
        "I integrate and develop REST APIs for seamless communication between services and applications.",
      image: require("@/assets/imagesSkills/API.png"),
    },
  ];

  const tempArray = JSON.parse(JSON.stringify(tempArrayDefault));

  return tempArray;
}

export function getMyLanguages() {
  const arraySkillsDefault = [
    {
      category: [
        {
          columnParent: "UNDERSTANDING",
          columnChild: [
            { subCategory: "Listening", level: "Mother tongue" },
            { subCategory: "Reading", level: "Mother tongue" },
          ],
        },
      ],
    },
    {
      category: [
        {
          columnParent: "SPEAKING",
          columnChild: [
            { subCategory: "Spoken production", level: "Advanced" },
            { subCategory: "Spoken interaction", level: "Intermediate" },
          ],
        },
      ],
    },
    {
      category: [
        {
          columnParent: "WRITING",
          columnChild: [{ subCategory: " ", level: "Advanced" }],
        },
      ],
    },
  ];
  const arrayLanguagesDefault = [
    {
      language: "ROMANIAN",
    },
    {
      language: "ENGLISH",
    },
    {
      language: "RUSSIAN",
    },
    {
      language: "FRENCH",
    },
  ];
  const arraySkills = JSON.parse(JSON.stringify(arraySkillsDefault));
  const arrayLanguages = JSON.parse(JSON.stringify(arrayLanguagesDefault));

  return {
    arraySkills,
    arrayLanguages,
  };
}
