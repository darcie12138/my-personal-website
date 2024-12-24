"use client";

import { Divider } from "@nextui-org/react";
import Image from "next/image";

export default function Education() {

  return (
    <div className="mb-12 px-4 w-full" id="education">
      <h1
        className="hover:text-shadow-3 m-0 font-heading text-[clamp(2.5rem,_6vw,_3.5rem)]
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
        {/* 同一个位置放两张图：亮色默认显示、暗色隐藏；暗色显示、亮色隐藏 */}
        <div className="relative w-[60px] h-[60px]">
          {/* 亮色图标：.dark:hidden */}
          <Image
            src="/columbia-logo-light.png"
            alt="Columbia University Logo"
            fill
            className="object-contain dark:hidden"
          />
          {/* 暗色图标：.hidden dark:block */}
          <Image
            src="/columbia-logo-dark.png"
            alt="Columbia University Logo Dark"
            fill
            className="object-contain hidden dark:block"
          />
        </div>
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
        <div className="relative w-[60px] h-[60px]">
          {/* 亮色图标 */}
          <Image
            src="/zju-logo-light.png"
            alt="Zhejiang University Logo"
            fill
            className="object-contain dark:hidden"
          />
          {/* 暗色图标 */}
          <Image
            src="/zju-logo-dark.png"
            alt="Zhejiang University Logo Dark"
            fill
            className="object-contain hidden dark:block"
          />
        </div>
      </div>
    </div>
  );
}