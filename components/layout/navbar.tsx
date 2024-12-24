"use client";

import React from "react";
import { Tabs, Tab } from "@nextui-org/react";
import { usePathname } from "next/navigation";
import { ThemeSwitcher } from "../theme-switcher";

const ExternalLinkIcon = ({ title }: { title: string }) => {
  return <span>
    <span className="pr-1">{title}</span>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 inline-block">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
    </svg>
  </span>

}

export default function Navbar() {
  const pathname = usePathname();

  return (
    <div className="w-screen h-auto fixed top-4 flex justify-center items-center light-green z-50">
      <Tabs aria-label="menu" selectedKey={pathname} defaultSelectedKey="/" color="default" radius="full">
        <Tab key="/" href="/" title="Home" />
        <Tab key="/#side-projects" href="/#side-projects" title="Projects" />
        {/* <Tab key="/blog" href="https://blog.larryxue.dev" target="_blank" title={<ExternalLinkIcon title="Blog" />} /> */}
        <Tab key="/about" href="/about"  title='About Me' />
        <Tab key="/contact" href="/contact" title="Contact" />
        <Tab key="theme" className="p-0" title={<ThemeSwitcher />} />
      </Tabs>
    </div>
  );
}
