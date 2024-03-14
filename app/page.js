"use client";

import { Header } from "@/components/Header";
import { useEffect, useRef, useState } from "react";
export default function App() {
  const myRef = useRef();
  const myRefTitle = useRef();
  const [seein, setSeein] = useState(false);
  const [seeinTitle, setSeeinTitle] = useState(false);
  const [popup, setPopup] = useState(false);
  const [slide, setSlide] = useState(false);
  const [scrollBottom, setScrollBottom] = useState(true);
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
    if (scrollBottom) {
      const scrollButton = document.getElementById("click_dis");
      const scrollableContent = document.getElementById("container");

      // scrollButton.addEventListener("click", function () {
      //   window.scrollTo({
      //     top: scrollableContent.scrollHeight, // Target the bottom of the content
      //     behavior: "smooth", // Animate the scrolling for a smooth experience
      //   });
      // });
    }
  }, [scrollBottom]);
  function eventHandler() {
    setSlide(!slide);
  }
  console.log(slide);
  return (
    <div
      style={
        popup
          ? {
              transform: "scale(0.93)",
              transition: "all 500ms",
              overflow: "hidden",
            }
          : { transition: "all 500ms" }
      }
      className={"w-[100vw] h-[100vh] absolute scroll-smooth overflow-x-hidden"}
    >
      <Header slide={eventHandler} doTheThing={slide} />
      {popup ? (
        <div id="popup" className={"popup absolute top-[30vh]"}>
          hi
        </div>
      ) : null}
      {/* 1st div */}
      <div
        onClick={() => {
          if (popup) {
            document.getElementById("popup").style.animationName = "popdown";
            setTimeout(() => {
              setPopup(false);
            }, 1000);
          }
        }}
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
        className="exit ml-[-500px] overflow-hidden flex justify-center items-center h-[90vh] w-[100%] flex-col gap-5"
      >
        <h1 className="text-[30px] text-center">
          Best Paragraph used by Poppins
        </h1>
        <button
          className="button-86"
          onClick={() => setPopup(true)}
          role="button"
        >
          Button
        </button>
        <div className="absolute right-0 z-[9999] vid">
          <video
            className="rounded-[10px] "
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
      {/* <div className="absolute w-[100vw] flex justify-center">
        <svg
          onClick={() => {
            setScrollBottom(!scrollBottom);
          }}
          id="click_dis"
          className="hover:cursor-pointer "
          fill="#404040"
          width={40}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 384 512"
        >
          <path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
        </svg>
      </div> */}
      {/* 2nd div */}
      <div className="overflow-hidden  h-[140vh] w-[100vw] flex justify-evenly items-center flex-col gap-[30px]">
        <h1 className="text-[30px] relative top-0">About Us</h1>
        <div
          ref={myRef}
          style={
            seein
              ? {
                  transition: "all 1.5s",
                  opacity: 1,
                  transform: "translateX(0px)",
                }
              : { opacity: 0, marginLeft: "-500px" }
          }
          className="flex image_goes_here justify-center items-center gap-[20px] h-[30%]"
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
            <div className="flex w-[100%] justify-center gap-[20px]"></div>
          </div>
        </div>
      </div>
      {/* 3rd div */}
      {/* <div className="overflow-hidden h-[100vh] w-[100vw] flex justify-center items-center flex-col">
        hi
      </div> */}
    </div>
  );
}
{
  /* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--></svg> */
}
