import clock from "../images/clock.png";
import profile from "../images/profile.png";
import calendar from "../images/calendar.png";
import "../App.css";

export default function ButtonMenu() {
  return (
    <div>
      <div className=" bg-[#0737F6] fixed w-full bottom-0">
        <div className="container max-w-sm mx-auto flex justify-between items-center py-4 px-1">
          <div className="activeBtnMenu flex justify-center items-center rounded-full w-[64px] h-[64px] p-4">
            <img src={clock} alt="Home " />
          </div>
          <div className=" flex  justify-center items-center rounded-full w-[64px] h-[64px] p-4">
            <img src={profile} alt="Home " />
          </div>
          <div className=" flex justify-center items-center rounded-full w-[64px] h-[64px] p-4">
            <img src={calendar} alt="Home " />
          </div>
        </div>
      </div>
    </div>
  );
}
