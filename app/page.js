"use client";

import { Header } from "@/components/Header";
import { useEffect, useRef, useState } from "react";
export default function App() {
  const myRef = useRef();
  const myRefTitle = useRef();
  const [seein, setSeein] = useState(false);
  const [seeinTitle, setSeeinTitle] = useState(false);
  const [play, setPlay] = useState(false);

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
      {/* 1st div */}
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
      {/* 2nd div */}
      <div className="overflow-hidden h-[100vh] w-[100vw] flex justify-evenly items-center flex-col gap-[30px]">
        <h1 className="text-[30px] relative top-0">About Us</h1>
        <div
          style={
            seein
              ? {
                  transition: "all 1.5s",
                  opacity: 1,
                  transform: "translateX(-200px)",
                }
              : { opacity: 0, marginX: "200px" }
          }
          className="flex justify-center items-center gap-[20px] h-[30%]"
        >
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
          <div className="relative left-[120px] flex flex-col gap-[20px] items-center">
            <div
              id="anime"
              className="cover bg-[url(/theme2.jpg)] bg-cover h-[150px] w-[150px] rounded-[50%]"
            ></div>
            <p>Hu tao Cover song</p>
            <audio id="audio" controls={false}>
              <source src="/themeSong.mp3" type="audio/mpeg"></source>
            </audio>

            <div className="flex w-[100%] justify-center gap-[20px]">
              <svg
                onClick={() => {
                  setPlay(!play);
                  if (!play) {
                    document.getElementById("anime").style.animationName =
                      "rotate";
                  } else
                    document.getElementById("anime").style.animationName =
                      "null";
                }}
                className="hover:cursor-pointer"
                height={40}
                fill="#8c8c8c"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
              >
                {play ? (
                  <path
                    onClick={() => {
                      document.getElementById("audio").pause();
                    }}
                    d="M48 64C21.5 64 0 85.5 0 112V400c0 26.5 21.5 48 48 48H80c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H48zm192 0c-26.5 0-48 21.5-48 48V400c0 26.5 21.5 48 48 48h32c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H240z"
                  />
                ) : (
                  <path
                    onClick={() => {
                      document.getElementById("audio").play();
                    }}
                    d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"
                  />
                )}
              </svg>
            </div>
          </div>
        </div>
      </div>
      {/* 3rd div */}
      <div className="overflow-hidden h-[100vh] w-[100vw] flex justify-center items-center flex-col">
        hi
      </div>
    </div>
  );
}
{
  /* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--></svg> */
}
