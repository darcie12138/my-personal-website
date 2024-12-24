// import React from "react";
// import { Link } from "@nextui-org/react";

// export default function Contact() {
//   const contacts = [
//     {
//       title: "Email",
//       desc: "yuweidinn@gmail.com",
//       link: "mailto:yuweidinn@gmail.com",
//     },
//     {
//       title: "GitHub",
//       link: "https://github.com/darcie12138",
//       desc: "darcie12138",
//       showAnchorIcon: true
//     },
//     {
//       title: "LinkedIn",
//       link: "https://www.linkedin.com/in/yuwei-ding/",
//       desc: "yuwei-ding",
//       showAnchorIcon: true
//     }
//   ]
//   return <div className="my-12 px-4">
//     <h1
//       className="hover:text-shadow-3 m-0 font-heading text-[clamp(3rem,_10vw,_4.5rem)] font-black tracking-[-0.2rem] transition-all duration-300">
//       Contact Me</h1>
//     <div>
//       {contacts.map((contact) => (
//         <div className="mb-4" key={contact.desc}>
//           <h3 className="text-2xl font-bold">{contact.title}</h3>
//           <Link href={contact.link} target="_blank" isExternal showAnchorIcon={contact.showAnchorIcon}>{contact.desc}</Link>
//         </div>
//       ))}
//     </div >
//   </div >;
// }
import React from "react";
import { Link } from "@nextui-org/react";

export default function Contact() {
  const contacts = [
    {
      title: "Email",
      desc: "yuweidinn@gmail.com",
      link: "mailto:yuweidinn@gmail.com",
      iconLight: "/icons/mail-light.png",
      iconDark: "/icons/mail-dark.png",
    },
    {
      title: "GitHub",
      desc: "darcie12138",
      link: "https://github.com/darcie12138",
      iconLight: "/icons/github-light.png",
      iconDark: "/icons/github-dark.png",
      showAnchorIcon: true,
    },
    {
      title: "LinkedIn",
      desc: "yuwei-ding",
      link: "https://www.linkedin.com/in/yuwei-ding/",
      iconLight: "/icons/linkedin-light.png",
      iconDark: "/icons/linkedin-dark.png",
      showAnchorIcon: true,
    },
  ];

  return (
    <div className="my-12 px-4">
      <h1 className="text-4xl font-bold mb-4">Contact Me</h1>

      <div className="flex flex-row gap-8 justify-center items-center mt-8">
        {contacts.map((contact) => (
          <div key={contact.desc} className="flex flex-col items-center">
            
            {/* 1. 亮色图标：默认显示，dark:hidden */}
            <img
              src={contact.iconLight} // e.g. "/icons/mail-light.png"
              alt={contact.title}
              className="w-12 h-12 mb-2 dark:hidden"
            />
            {/* 2. 暗色图标：默认隐藏，dark:block */}
            <img
              src={contact.iconDark}  // e.g. "/icons/mail-dark.png"
              alt={contact.title}
              className="w-12 h-12 mb-2 hidden dark:block"
            />

            <h3 className="text-xl font-bold">{contact.title}</h3>
            <Link
              href={contact.link}
              target="_blank"
              isExternal
              showAnchorIcon={contact.showAnchorIcon}
              className="mt-1 text-base text-blue-600 hover:underline"
            >
              {contact.desc}
            </Link>
          </div>
        ))}
      </div>
    </div>

  );
}
