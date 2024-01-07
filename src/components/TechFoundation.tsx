
import React from "react";
// import ProgressBar from 'react-bootstrap/ProgressBar';


interface Skill {
  title: string;


}

interface SkillCategory {
  readonly skillsTitle: string;
  readonly skills: readonly Skill[];
}

interface TechFoundationProps {
  skillsData: readonly SkillCategory[];
  theme: "dark" | "light";
}

const TechFoundation: React.FC<TechFoundationProps> = ({ skillsData, theme }) => {


  return (
    <article
      className={`h-auto rounded-2xl  p-16 pt-32  relative z-10 max-lg:w-full max-lg:grid-cols-2 max-lg:p-8  max-lg:pt-32 ${theme === "dark"
        ? "bg-[--blackblue] dark-mode-shadow"
        : "bg-[--icewhite] dark-shadow"
        }`}
    >
      <div
        className={`absolute top-10 left-1/2  flex justify-center transform -translate-x-1/2 px-4 py-2  rounded-t-xl `}
      >
        <p className="font-black text-4xl   ">
          <span className="text-[--orange]">&lt;</span>
          {skillsData[0].skillsTitle}
          <span className="text-[--orange]">/&gt;</span>
        </p>
      </div>
      {/* skill progress  */}

      <div className="flex justify-center flex-wrap gap-6 pt-6">
        {
          skillsData[0].skills.map((skill, index) => (

            <div key={index} className=" flex item-center justify-center">
              <div  className={`skill-item cursor-pointer flex flex-col gap-6 flex-wrap  rounded-2xl p-4 border-solid border-[0.25rem] text-2xl text-center max-lg:items-center    ${theme === "dark" ? "bg-[--darkblue]" : "bg-[--icewhite]"
                }`} >
                {skill.title}

              </div>



            </div>
          ))
        }

      </div>










    </article>

  );
};

export default TechFoundation;
