"use client";

import { Header } from "@/components/Header";
import { useEffect, useRef, useState } from "react";
export default function App() {
  const myRef = useRef();
  const myRefTitle = useRef();
  const [seein, setSeein] = useState(false);
  const [seeinTitle, setSeeinTitle] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver((e) => {
      const entry = e[0];
      if (entry.isIntersecting) {
        setSeein(true);
      } else {
        setSeein(false);
      }
    });
    observer.observe(myRef.current);
    const observerTitle = new IntersectionObserver((e) => {
      const entry = e[0];
      if (entry.isIntersecting) {
        setSeeinTitle(true);
      } else {
        setSeeinTitle(false);
      }
    });
    observerTitle.observe(myRefTitle.current);
  }, []);

  return (
    <div className="overflow-hidden">
      <Header />
      <div
        ref={myRefTitle}
        style={
          seeinTitle
            ? {
                transition: "all 2s",
                opacity: 1,
                transform: "translateX(200px)",
              }
            : { opacity: 0 }
        }
        className="ml-[-500px] overflow-hidden flex justify-center items-center h-[100vh] w-[100%] flex-col gap-5"
      >
        <h1 className="text-[30px]">Best Paragraph used by Poppins</h1>
        <button className="button-86" role="button">
          Button
        </button>
        <div className="absolute right-0">
          <video
            className="rounded-[10px]"
            muted
            width={600}
            controls={false}
            autoPlay={true}
            loop={true}
          >
            <source src="/hutao.mp4"></source>
          </video>
        </div>
      </div>

      <div
        style={
          seein
            ? {
                transition: "all 2s",
                opacity: 1,
                transform: "translateY(40px)",
              }
            : { opacity: 0, transform: "translateY(-40px)" }
        }
        className="overflow-hidden h-[100vh] w-[100vw] flex justify-center items-center gap-[30px]"
      >
        <h1 className="text-[30px]">About Us</h1>
        <div className="flex justify-center items-center gap-[20px] h-[30%]">
          <div className="projects" ref={myRef}>
            <p className="aboutText">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              id libero augue.
            </p>
            <div className="ag-courses-item_bg"></div>
            <img
              className="rounded-[10px] relative"
              alt="ppl"
              src="/chisato.jpg"
              width={250}
            ></img>
            <h1 className="h1">Chisato</h1>
            <p>about Chisato</p>
            <p className="aboutText"></p>
          </div>
          <div className="projects" ref={myRef}>
            <p className="aboutText">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              id libero augue.
            </p>
            <div className="ag-courses-item_bg"></div>
            <img
              width={250}
              className="rounded-[10px]"
              alt="ppl"
              src="/hutao.jpg"
            ></img>
            <h1 className="h1">Hu Tao</h1>
            <p>about hu tao</p>
          </div>
          <div className="projects" ref={myRef}>
            <p className="aboutText">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              id libero augue.
            </p>
            <div className="ag-courses-item_bg"></div>

            <img
              width={250}
              className="rounded-[10px]"
              alt="ppl"
              src="/furina.jpg"
            ></img>
            <h1 className="h1">Furina</h1>
            <p>about Furina</p>
            <p className="aboutText"></p>
          </div>
        </div>
      </div>
      <div className="overflow-hidden h-[100vh] w-[100vw] flex justify-center items-center flex-col">
        hi
      </div>
    </div>
  );
}
