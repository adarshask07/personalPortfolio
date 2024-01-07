

const SkillProgress = (props) => {
    return (
        <div >
            <div className= {`skill-item cursor-pointer flex flex-col gap-6 flex-wrap  rounded-2xl p-8 border-solid border-[0.25rem]  text-center max-lg:items-center    ${props.theme === "white" ? "bg-[--darkblue]" : "bg-[--icewhite]"
            }`} >
                {props.skilltitle}
                {console.log(props.theme)}
            </div>
            


        </div>
    );
}

export default SkillProgress;
