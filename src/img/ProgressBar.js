import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import { useContext, useEffect } from "react";
import UserContext from "../06.Shared/UserContext";

export default function Progressbar({ todaysHabit }) {
  const { setProgress, progress } = useContext(UserContext);

  useEffect(() => {
    if (todaysHabit !== undefined) {
      const filteredValue = todaysHabit.filter((value) => value.done);
      const totalProgress = Math.round(
        (filteredValue.length / todaysHabit.length) * 100
      );
      setProgress(totalProgress);
    }
  }, [todaysHabit, progress]);

  console.log(todaysHabit);
  console.log(progress);
  return (
    <div style={{ width: "91px", height: "91px", paddingBottom: "40px" }}>
      <CircularProgressbarWithChildren
        value={progress}
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
