import { NavLink } from "react-router-dom";
import HeroImg from "../assets/images/hero1img.png";

export const HeroSection = () => {
  return (
    <section className="w-full flex justify-between pl-10 min-h-screen mt-24 gap-5 max-sm:flex max-sm:flex-col max-sm:justify-center max-md:pt-14 max-sm:pt-20 bg-black items-center max-md:flex max-md:flex-col max-md:justify-center max-lg:p-0 max-lg:flex max-lg:flex-row max-lg:pl-6">

      <div className="w-full xl:w-2/4 flex flex-col justify-center max-sm:items-center max-sm:w-full max-md:w-full  max-md:items-center max-lg:w-[50%]">
        <h2
          className="text-[45px] max-sm:text-[50px] max-sm:leading-[60px] max-md:text-[60px] max-md:text-center max-md:leading-[80px] max-lg:text-[30px] max-lg:leading-[40px] 
        font-bold text-left max-sm:text-center font-teko"
        >
          Empower Your Finances with Smart using <br />
          <span className="text-[#40f440] font-teko">
            {" "}
            AGF Xpense Xplorer
          </span>
        </h2>
        <p className="pt-4 pb-10 text-justify max-sm:text-center text-[30px] max-sm:text-[30px] max-sm:leading-[40px] max-md:text-[32px] max-md:text-center max-md:leading-[40px] max-md:pb-10 font-teko max-lg:text-[25px] max-lg:leading-7">
          Take control of your finances like never before with our innovative
          <span className="text-[#40f440]"> AGF Xpense Xplorer</span> app.
          Easily monitor your income, expense, weekly reports. monthly reports,
          and yearly reports. Simplify your money management and start your
          journey towards financial freedom today!
        </p>
        <NavLink
          to="/auth"
          className="w-[50%] flex font-teko justify-center items-center gap-2 px-4 py-4 border text-2xl leading-none max-md:w-[80%]
          max-xl:w-[80%] bg-[rgb(246,246,246)] rounded-[6px] text-black hover:bg-[#40f440] hover:text-black hover:shadow-md hover:shadow-[#76ff5e] hover:-translate-y-1 hover:transition-all"
        >
          Get Started with AGF Xpense Xplorer Today
        </NavLink>
      </div>
      <img
        src={HeroImg}
        alt=""
        className="w-[550px] max-2xl:w-
      [400px] max-lg:w-[350px]"
      />
    </section>
  );
};
