"use client";

export function Header(props) {
  return (
    <div
      className={
        "absolute w-[100vw] h-[8vh] flex gap-[20px] justify-end items-center ml-[-35px]"
      }
    >
      <button onClick={props.slide} className="down">
        About
      </button>
      <button className="down">Documentation</button>
      <button className="down">Sign</button>
    </div>
  );
}
