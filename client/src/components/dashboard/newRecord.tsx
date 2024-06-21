import { NavLink } from "react-router-dom";
import { siteLogo } from "../../assets/images";
import { XpenseXplorerRecord } from "./xpense-xplorer-record";
import { XpenseXplorerList } from "./xpense-xplorer-list";
import { UserButton } from "@clerk/clerk-react";
import './new-record.css';

export const NewRecord = () => {
  return (
    <section className="flex w-[100vw] h-[100vh] bg-white">
      <nav className="flex flex-col justify-start items-start bg-black pt-4">
        <img src={siteLogo} alt="logo" width={300} height={150} />
        <ul className="flex flex-col w-full h-full items-start pt-10 pr-2">
          <NavLink
            to="/dashboard"
            className="text-[20px] font-montserrat text-white border rounded-[10px] hover:text-[#40f440] py-2 px-2 mb-4 w-full text-left"
          >
            Home
          </NavLink>
          <NavLink
            to="/dashboard/newRecord"
            className="text-[20px] font-montserrat text-white border rounded-[10px] hover:text-[#40f440] py-2 px-2 mb-4 w-full text-left"
          >
            Add or View Records
          </NavLink>
          <NavLink
            to=""
            className="text-[20px] font-montserrat text-white border rounded-[10px] hover:text-[#40f440] py-2 px-2 mb-4 w-full text-left"
          >
            <UserButton showName />
          </NavLink>
        </ul>
      </nav>
      <div className="records bg-[#eaeaea] w-full text-black  overflow-y-scroll">
        <div className="">
          <XpenseXplorerRecord />
        </div>
        <div className="">
          <XpenseXplorerList />
        </div>
      </div>
    </section>
  );
};
