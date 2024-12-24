"use client";

import { useTheme } from "next-themes";
import { Divider } from "@nextui-org/react";
import Image from "next/image";

export default function Education() {
  const { theme } = useTheme(); // 拿到当前主题

  return (
    <div className="mb-12 px-4 w-full" id="education">
      <h1
        className="hover:text-shadow-3 m-0 font-heading text-[clamp(3rem,_10vw,_4.5rem)]
                   font-black tracking-[-0.2rem] transition-all duration-300"
      >
        Education
      </h1>

      {/* Columbia */}
      <div className="flex justify-between items-center mt-6 w-full">
        <div className="w-full mr-4">
          <div className="flex justify-between w-full items-center">
            <span className="text-2xl font-bold">Columbia University</span>
            <span className="text-xl">2024 - 2025</span>
          </div>
          <p className="text-lg">Master of Science - Business Analytics</p>
        </div>
        <Image
          src={theme === "dark" ? "/columbia-logo-dark.png" : "/columbia-logo-light.png"}
          alt="Columbia University Logo"
          width={60}
          height={60}
          className="object-contain"
        />
      </div>

      <Divider className="my-4" />

      {/* Zhejiang */}
      <div className="flex justify-between items-center w-full">
        <div className="w-full mr-4">
          <div className="flex justify-between w-full items-center">
            <span className="text-2xl font-bold">Zhejiang University</span>
            <span className="text-xl">2020 - 2024</span>
          </div>
          <p className="text-lg">Bachelor of Engineering - Chemical Engineering</p>
        </div>
        <Image
          src={theme === "dark" ? "/zju-logo-dark.png" : "/zju-logo-light.png"}
          alt="Zhejiang University Logo"
          width={60}
          height={60}
          className="object-contain"
        />
      </div>
    </div>
  );
}
