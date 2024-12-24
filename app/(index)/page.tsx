'use client';

import { Card, CardBody, CardFooter, CardHeader, Divider, Image, Link } from "@nextui-org/react";
import NextImage from "next/image";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { Chip } from "@nextui-org/chip";
import SideMenu from "./components/side-menu";
import Education from "@/components/Education";

import PreviewIframe from "@/components/preview-iframe";
import useScreenSize from "@/hooks/useScreenSize";
import { useWindow } from "@/hooks/useWindow";
import { useTheme } from "next-themes";



export default function Home() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const technologies: Record<string, string[]> = {
    language: [
      "Mandarin (Native)",
      "English",
    ],
  
    programming: [
      "C",
      "VBA",
      "HTML",
      "Markdown",
      "LaTeX",
    ],

    others: [
      "Excel",
      "PowerPoint",
      "Photoshop",
      "Adobe Premiere Pro",
      "COMSOL",
      "AutoCAD",
    ],

    dataAnalytics: [
      "Python",
      "R",
      "SQL",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
      "Scikit-Learn",
      "XGBoost",
      "Machine Learning",
      "TensorFlow",
      "PyTorch",
      "Tableau",
      "Power BI",
      "Time Series Analysis",
      "A/B Testing",
    ],
  
    financial: [
      "Derivative Pricing",
      "Greeks Hedging",
      "Monte Carlo Simulation",
      "Black-Scholes Model",
      "Risk Management",
      "Markowitz", "CAPM",
      "Fixed Income Securities",
      "Quantitative Trading Strategies",
    ],
  
    
  };

  const chipTheme: ("default" | "primary" | "secondary" | "success" | "warning" | "danger")[] = ["primary", "secondary", "success", "warning", "danger", "default"]
  const chipVariants: ("solid" | "bordered" | "flat" | "faded" | "shadow")[] = ["solid", "bordered", "flat", "faded", "shadow"]

  const experienceList = [
    {
      title: "Part-Time Analyst Intern",
      company: "NLVC",
      time: "March 2024 - July 2024",
      desc: ["Produced two in-depth research reports, \"ARK: MCN in Fund Management\" and \"Technological Revolution and Financial Capital,\" both receiving high praise from partners.",
            "Authored 7 project recommendation briefs during research period, including basic project information and industry analysis; four of these recommendations were featured in weekly report presented to partners. "]
    },
    {
      title: "Demand Generation Rep Intern",
      company: "Amazon Web Services",
      time: "June 2023 - January 2024",
      desc: [
        "Conducted data cleaning and pivot table analysis on customer data to derive knowledge of market demand shifts, presenting findings to senior management in a PowerPoint presentation to inform business decision-making. ",
        "Utilized Python and the SARIMAX model to analyze two years of historical data, improving monthly MQL forecast accuracy by 50% and aiding the DGR team in strategizing marketing activities for optimal business opportunities."
      ]
          },
    {
      title: "Strategy Consulting Intern",
      company: "KPMG",
      time: "July 2022 - August 2022",
      desc: [
        "Analyzed user survey data leveraging Python, applying PCA and K-means clustering to identify patterns in consumption habits, contributing to a 10% improvement in client’s VIP program engagement. ",
        "Scraped and analyzed ESG data of 5 luxury conglomerates using BeautifulSoup, identifying 20+ best practices, and integrated findings into a benchmarking report for strategic recommendations."
      ]
          }
  ]

  const sideProjects = [
    {
      title: "Spotify Popularity Index Prediction",
      desc: "Built a machine learning pipeline integrating data scraping, audio embeddings, and neural networks to predict Spotify popularity with a 10x accuracy improvement, while also uncovering lyrical trends via genre and sentiment analysis.",
      preview: "https://docs.google.com/presentation/d/e/2PACX-1vRfICse7sySUUVkvQpmk8fowdBY8NtCJsQ92ZMcZp3zkdGRuzqFfmVQPO63qfBoTw/pub?start=false&loop=false&delayms=3000",
      github: "https://github.com/darcie12138/Spotify-Popularity-Index-Prediction",
      image: "/images/Spotify.png",
      iframe: `
        <iframe 
          src="https://docs.google.com/presentation/d/e/2PACX-1vRfICse7sySUUVkvQpmk8fowdBY8NtCJsQ92ZMcZp3zkdGRuzqFfmVQPO63qfBoTw/embed?start=false&loop=false&delayms=3000"
          frameborder="0"
          width="600"
          height="390"
          allowfullscreen="true"
          mozallowfullscreen="true"
          webkitallowfullscreen="true"
        ></iframe>
      `
    },
    {
      title: "Personal Website Building",
      desc: "`my-personal-website` is my own corner of the internet, built with Next.js and Tailwind CSS. It highlights my background, projects, and interests in a clean, modern layout, and it's easily accessible via GitHub Pages. This project is a fun way for me to showcase my work, experiment with new web technologies, and invite others to learn a bit more about who I am and what I do.",
      preview: "https://darcie12138.github.io/my-personal-website/",
      github: "https://github.com/darcie12138/my-personal-website"
    },
    {
      title: "Visualization of Global COVID-19 Vaccination",
      desc: "Developed a data pipeline that analyzed global COVID-19 vaccination trends and GDP correlations using Python, culminating in an interactive Tableau dashboard for exploring daily, total, and full vaccination metrics across countries and continents.",
      preview: "https://public.tableau.com/app/profile/yuwei.ding/viz/GlobalCOVID-19VaccinationAnalysis/WORLDCOVIDVACCINATION",
      github: "https://github.com/darcie12138/Global-COVID-19-Vaccination-Analysis?tab=readme-ov-file",
      image: "/images/covid_vaccination_dashboard.png"
    },
    // {
    //   title: "Personal Website",
    //   desc: "Folder to JSON is a web application utilizing the showDirectoryPicker API to enable users to select a folder on their local machine. It recursively retrieves subdirectories to generate a JSON tree structure representing the directory hierarchy.",
    //   preview: "https://folder2json.larryxue.dev/",
    //   github: "https://github.com/larry-xue/folder-to-json"
    // },
    // {
    //   title: "Vite Vue2 Starter Template",
    //   desc: "vite-vue2-starter is a template for quickly starting Vue.js 2 projects. Built on the Vite v5 build tool",
    //   preview: "",
    //   github: "https://github.com/larry-xue/vite-vue2-starter"
    // }
  ]

  const { isSmallScreen, showSideMenu } = useScreenSize();
  const _window = useWindow()

  return (
    <>
      {showSideMenu && <SideMenu />}
      <div style={{ backgroundColor: isDark ? "#000" : "#fff" }}></div>
        <div className="mx-auto w-full text-center mt-16 md:flex justify-center gap-12">
          <div className="avatar hover:scale-110 duration-300 flex justify-center items-center">
            <Image className="rounded-tl-lg rounded-br-lg" width={200} height={200} src="/avatar.png" alt="avatar" as={NextImage} />
          </div>
          <div>
            <h1
              className="hover:text-shadow-3 m-0 font-heading font-black transition-all duration-300 text-primary text-4xl md:text-5xl mt-4">
              Yuwei(Darcie) Ding</h1>
            <div className="flex flex-col gap-2 text-lg md:text-left mt-4">
              <p>Melton Fellow 🇺🇳</p>
              <p>Data Analyst 💻</p>
              {/* <p>Beginner UI/UX Designer 🤯</p> */}
            </div>
          </div>
        </div>
        <div className="px-4 mt-2">
          <h4 className="hover:text-shadow-3 m-0 font-heading text-lg font-black transition-all duration-300">A
            bit about me</h4>
          <p>Hey there! 👋 I'm Yuwei (Darcie), I am a graduate student at Columbia University, pursuing a Master's degree in Business Analytics. I received my Bachelor's degree in Chemical Engineering from Zhejiang University.
          I am passionate about leveraging data-driven insights for strategic decision-making. As a Melton Fellow, I am dedicated to fostering global citizenship and driving meaningful change through collaborative projects. I am also interest in boxing and maintaining an active fitness lifestyle.</p>
        </div>
        <div className="px-4 mt-4 w-full">
          <h4
            className="hover:text-shadow-3 m-0 font-heading text-lg font-black tracking-[-0.1rem] transition-all duration-300">
          </h4>

          <div className="px-4 mt-4 w-full">
            <h2 className="hover:text-shadow-3 m-0 font-heading text-2xl font-black mb-4 transition-all duration-300">
              Skills
            </h2>

            <div className="grid grid-cols-3 gap-8">
              {Object.keys(technologies).map((category) => (
                <div key={category}>
                  {/* 标题颜色改成 dark: 写法 */}
                  <h3
                    className="
                      text-xl
                      font-semibold
                      capitalize
                      mb-3
                      transition-colors
                      text-[#36487E]
                      dark:text-[#F2C79A]
                    "
                  >
                    {category}
                  </h3>

                  <div className="flex flex-wrap gap-2">
                    {technologies[category].map((tech) => (
                      <Chip
                        key={tech}
                        variant="flat"
                        /* 直接使用我们在 globals.css 里定义的类 */
                        className="my-skill-chip"
                      >
                        {tech}
                      </Chip>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
      </div>

      <div className="my-12 px-4 w-full" id="experience">
        <h1
          className="hover:text-shadow-3 m-0 font-heading text-[clamp(2.5rem,_6vw,_3.5rem)] font-black tracking-[-0.2rem] transition-all duration-300">
          Experience</h1>

        <Accordion selectionMode="multiple" defaultExpandedKeys={[]}>
          {experienceList.map((exp, idx) => (
            <AccordionItem
              title={
                <span className="font-bold">
                  {exp.title}
                  <br />
                  {exp.company}
                </span>
              }
              subtitle={
                <span>
                  {exp.time}
                </span>
              }
              key={exp.title}
              aria-label={exp.title}
            >
              <p className="mb-2 text-sm text-gray-500 dark:text-gray-400 leading-loose">
                {exp.desc}
              </p>
            </AccordionItem>
          ))}
        </Accordion>
      </div >


      <Education />



      <div className="mb-12 px-4" id="side-projects" >
        <h1
          className="hover:text-shadow-3 m-0 font-heading text-[clamp(2.5rem,_6vw,_3.5rem)] font-black tracking-[-0.2rem] transition-all duration-300">
          Projects</h1>
        <div className="flex flex-wrap gap-4">
          {
            sideProjects.map((project) => (
              <Card className="md:w-[300px] w-full" key={project.github}>
                <CardHeader className="flex gap-3">
                  <h2 className="text-md">{project.title}</h2>
                </CardHeader>
                <Divider />
                <CardBody>
                  {
                    // 先判断 project.tableauHtml
                    project.image ? (
                      <div className="flex gap-2 h-[400px]">
                        <p className="text-sm w-1/3 text-gray-500 dark:text-gray-400 leading-loose">
                          {project.desc}
                        </p>
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-2/3 object-contain rounded"
                        />
                      </div>
                    ) : project.iframe ? (
                      <div className="flex gap-2 h-[400px]">
                        <p className="text-sm w-1/3 text-gray-500 dark:text-gray-400 leading-loose">
                          {project.desc}
                        </p>
                        <div
                          className="w-2/3"
                          dangerouslySetInnerHTML={{ __html: project.iframe }}
                        />
                      </div>
                    ) : project.preview ? (
                      <div className="flex gap-2 h-[400px]">
                        <p className="text-sm w-1/3 text-gray-500 dark:text-gray-400 leading-loose">
                          {project.desc}
                        </p>
                        <PreviewIframe url={project.preview} />
                      </div>
                    ) : (
                      // 如果啥都没有，就只显示描述文字
                      <p className="text-sm text-gray-500 dark:text-gray-400 leading-loose">
                        {project.desc}
                      </p>
                    )
                  }

                </CardBody>
                <Divider />
                <CardFooter className="flex gap-3">
                  <Link
                    isExternal
                    showAnchorIcon
                    href={project.preview}
                    isDisabled={!project.preview}
                  >
                    Preview
                  </Link>
                  <Link
                    isExternal
                    showAnchorIcon
                    href={project.github}
                    isDisabled={!project.github}
                  >
                    GitHub
                  </Link>
                </CardFooter>
              </Card>
            ))
          }
        </div >
      </div >
    </ >
  );
}
