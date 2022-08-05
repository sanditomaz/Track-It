import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";

export default function Progressbar() {
  let percentage = 60;
  return (
    <div style={{ width: "91px", height: "91px", paddingBottom: "40px" }}>
      <CircularProgressbarWithChildren
        value={percentage}
        background
        backgroundPadding={6}
        styles={buildStyles({
          backgroundColor: "#3e98c7",
          textColor: "#FFFFFF",
          pathColor: "#FFFFFF",
          trailColor: "transparent",
          textSize: "18px",
          strokeLinecap: "round",
          pathTransitionDuration: 0.5,
        })}
      >
        <div style={{ fontSize: 18, color: "#FFFFFF", marginTop: -5 }}>
          Hoje
        </div>
      </CircularProgressbarWithChildren>
    </div>
  );
}
