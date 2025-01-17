import React from "react";
import HighlightText from "./HighlightText";
import know_your_progress from "../../../assets/Images/Know_your_progress.png";
import compare_with_others from "../../../assets/Images/Compare_with_others.png";
import plan_your_lessons from "../../../assets/Images/Plan_your_lessons.png";
import CTAButton from "./CTAButton";

const LearningLanguageSection = () => {
  return (
    <div className=" flex flex-col lg1:gap-14">
      <div className=" flex flex-col gap-5 items-center justify-center">
        <div className=" text-4xl font-semibold text-center">
          Your swiss knife for learning any language{" "}
          <HighlightText text={"Coding Skills"} />
        </div>
        <div className=" text-center text-richblack-500 mx-auto text-base w-[70%]">
          Using spin making learning multiple languages easy. with 20+ languages
          realistic voice-over, progress tracking, custom schedule and more.
        </div>
        <div className=" flex items-center flex-col mx-auto justify-center mt-5 lg1:ml-10 lg1:w-full lg1:flex-row lg1:justify-evenly">
          <img
            src={know_your_progress}
            alt=""
            className=" object-contain -mr-32"
          />
          <img src={compare_with_others} alt="" className=" object-contain" />
          <img
            src={plan_your_lessons}
            alt=""
            className=" object-contain -ml-36"
          />
        </div>
        <div>
          <CTAButton active={true} linkto={"/signup"}>
            Learn More
          </CTAButton>
        </div>
      </div>
    </div>
  );
};

export default LearningLanguageSection;
