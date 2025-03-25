import React from "react";

const Spinner: React.FC<{ className?: string }> = ({}) => {
  return (
    <div
      style={{
        display: "block",
        boxSizing: "border-box",
        width: "25px",
        height: "25px",
        padding: "0 0 0 0",
        margin: "0 0 0 0",
      }}
    >
      <div className="w-full h-full relative left-1/2 top-1/2">
        {[...Array(12)].map((_, index) => (
          <span
            key={index}
            className="absolute top-[-3.9%] left-[-10%] w-[24%] h-[8%] rounded bg-red-500"
            style={{
              animation: "spinner 1.2s linear 0s infinite normal none running",
              animationDelay: `-${(12 - index) * 0.1}s`,
              transform: `rotate(${index * 30}deg) translate(146%)`,
            }}
          />
        ))}

        <style jsx>{`
          @keyframes spinner {
            0% {
              opacity: 1;
            }
            100% {
              opacity: 0.15;
            }
          }
        `}</style>
      </div>
    </div>
  );
};

export default Spinner;
