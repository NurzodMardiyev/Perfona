import { Link } from "react-router-dom";
import courseImg from "../images/course.png";

export default function Courses() {
  return (
    <div>
      <div className="relative mt-4">
        <img
          src={courseImg}
          alt="Course name"
          className="rounded-xl w-full h-[217px] object-cover"
        />
        <div className="w-full absolute top-0 left-0 h-full bg-gradient-to-t from-[#1601ffde] to-[#8d88d537] rounded-xl"></div>
        <div className="flex items-center justify-around px-6 absolute w-full bottom-4">
          <Link
            to="/subscribe"
            className="py-[8px] px-[23px] italic rounded-full bg-gradient-to-t from-[#717476] to-[#F9FAF7] w-[140px] flex items-center justify-center shadow-xl font-semibold "
          >
            Obuna bo{`'`}lish
          </Link>
          <Link
            to="/purchase"
            className="py-[8px] px-[23px] italic rounded-full bg-gradient-to-t from-[#36DDFF] to-[#0024AF] w-[140px] flex items-center justify-center text-white shadow-xl font-semibold "
          >
            Sotib olish
          </Link>
        </div>
      </div>
    </div>
  );
}
