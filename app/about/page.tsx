"use client";

import React from "react";

export default function AboutPage() {

  const photos = [
    {
      src: "/images/melton1.png",
      alt: "Me with Melton #1",
      caption: "Melton Fellows at Chile #1",
    },
    {
      src: "/images/melton2.png",
      alt: "Me with Melton #2",
      caption: "Melton Fellows at Chile #2",
    },
    {
      src: "/images/melton3.png",
      alt: "Me with Melton #3",
      caption: "Melton Fellows Gathering",
    },
    {
      src: "/images/melton4.png",
      alt: "Me with Melton #4",
      caption: "Memorable moment with Melton Fellows",
    },
    {
      src: "/images/melton5.png",
      alt: "Me with Melton #5",
      caption: "Group photo of Melton Fellows",
    },
    {
      src: "/images/teaching.png",
      alt: "Support Education #1",
      caption: "Support Education at Lishui #1",
    },
    {
      src: "/images/teaching2.png",
      alt: "Support Education #2",
      caption: "Support Education at Lishui #2",
    },
    {
      src: "/images/sea.png",
      alt: "At sea",
      caption: "Me at Seaside",
    },
    {
      src: "/images/debating.png",
      alt: "Debating",
      caption: "Debating Competition",
    },
  ];

  return (
    <div className="px-4 mt-12 max-w-[800px] mx-auto">
      <h1 className="text-4xl font-bold mb-4">About Me</h1>

      {/* 段落 1 */}
      <p className="mb-4">
        My name is{" "}
        <span className="my-code-block">
          Yuwei Ding
        </span>{" "}
        but also go by Darcie. I am a graduate student at{" "}
        <span className="my-code-block">
          Columbia University
        </span>
        , pursuing a Master's degree in{" "}
        <span className="my-code-block">
          Business Analytics
        </span>
        . I received my Bachelor's degree in Chemical Engineering from Zhejiang
        University. I was born in a coastal city Ningbo, China and currently live
        in New York City, United States.
      </p>

      {/* 段落 2 */}
      <p className="mb-4">
        My undergraduate degree was in Chemical Engineering at Zhejiang
        University. Driven by a fascination with data-informed decision-making, I
        pursued a master’s degree in Business Analytics — a choice that often
        makes people do a double-take when they first hear about my academic
        background. But honestly, this isn’t some wild, last-minute plot twist.
        Since my undergrad, I’ve always had my eyes set on the business world.
        Columbia’s MSBA feels like the perfect way to bring together the
        problem-solving mindset from engineering and the excitement of uncovering
        insights with data.
      </p>

      {/* 段落 3 */}
      <p className="mb-4">
        As a{" "}
        <span className="my-code-block">
          Melton Fellow
        </span>
        , I am dedicated to fostering global citizenship and driving meaningful
        change through collaborative projects. I am also interest in{" "}
        <span className="my-code-block">
          boxing
        </span>{" "}
        and maintaining an active fitness lifestyle.
      </p>

      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Photo Gallery</h2>
        
        <div className="grid grid-cols-3 gap-6">
          {photos.map((photo) => (
            <div key={photo.src} className="flex flex-col items-center">
              <img
                src={photo.src}
                alt={photo.alt}
                className="rounded-xl w-full h-auto"
              />
              <p className="text-sm text-gray-600 mt-2 text-center">
                {photo.caption}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}