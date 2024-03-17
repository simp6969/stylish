"use client";

import { useEffect, useRef, useState } from "react";
export default function App() {
  const myRef = useRef();
  const myRefTitle = useRef();
  const [seein, setSeein] = useState(false);
  const [seeinTitle, setSeeinTitle] = useState(false);
  const [popup, setPopup] = useState(false);
  const [slide, setSlide] = useState(false);
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

  function handleFirstPageStyleIssue() {
    if (popup) {
      return {
        transform: "scale(0.93)",
        transition: "all 500ms",
        overflow: "hidden",
      };
    }
    if (!popup) {
      return { transition: "all 500ms" };
    }
  }
  return (
    <div className={"w-[200vw] h-[100vh] flex"}>
      <div
        style={handleFirstPageStyleIssue()}
        className={
          "transition-all duration-300 w-[50%] h-[100%] scroll-smooth overflow-x-hidden " +
          slide
            ? +"translate-x-[100vw]"
            : +""
        }
      >
        <div
          className={
            "absolute w-[100vw] h-[8vh] flex gap-[20px] justify-end items-center ml-[-35px]"
          }
        >
          <button
            onClick={() => {
              setSlide(!slide);
            }}
            className="down"
          >
            About
          </button>
          <button className="down">Documentation</button>
          <button className="down">Sign</button>
        </div>
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
          className="exit ml-[-500px] overflow-hidden flex justify-center items-center h-[100vh] w-[100%] flex-col gap-5"
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

        {/* 2nd div */}
        <div className="overflow-hidden  h-[100vh] w-[100vw] flex justify-center items-center flex-col gap-[30px]">
          <h1 className="text-[30px] relative top-0 ">About Us</h1>
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
            className="flex gap-[20px]  w-[auto]"
          >
            <div className="projects" ref={myRef}>
              <p className="aboutText">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur id libero augue.
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur id libero augue.
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur id libero augue.
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
      </div>
      <div
        style={slide ? { transform: "translateX(-100vw)" } : {}}
        className="p-0 bg-[white] transition-all duration-300 flex justify-center items-center w-[50%] h-[100%]"
      >
        <button
          onClick={() => {
            setSlide(!slide);
          }}
          className="p-[20px] text-[white] rounded-[10px] border-2 border-[black] "
        >
          slide back
        </button>
      </div>
    </div>
  );
}
