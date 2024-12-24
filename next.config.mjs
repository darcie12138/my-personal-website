import mdx from "@next/mdx";

const withMDX = mdx();

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["mdx", "ts", "tsx"],
  
  // ① 在这里添加 output: "export"
  output: "export",

  // 如果你想把站点部署到子路径（例如 /my-personal-website/）可加上：
  // basePath: "/my-personal-website",
  // trailingSlash: true,
};

export default withMDX(nextConfig);
