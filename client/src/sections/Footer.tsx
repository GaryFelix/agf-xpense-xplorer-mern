// import { NavLink } from "react-router-dom";
import { siteLogo } from "../assets/images/index";
import { SignUpButton, SignedOut } from "@clerk/clerk-react";

export const Footer = () => {
  return (
    <footer className="px-10 pt-8">
      <div className="flex justify-between items-start flex-wrap max-lg:flex-col">
        <div className="flex flex-col items-start">
          <a href="/">
            <img
              src={siteLogo}
              alt="footerLogo"
              width={200}
              height={46}
              draggable="false"
            />
          </a>
          <p className="mt-6 text-left text-[16px] font-montserrat text-white-400 sm:max-w-sm">
            Master your finances effortlessly with the innovative AGF Xpense
            Xplorer app. Seamlessly track your income, expenses, and generate
            detailed weekly, monthly, and yearly reports.
          </p>
        </div>
        <div className="flex flex-col justify-center">
          <h3 className="text-[30px] font-teko">
            Haven't reached the AGF Xpense Xplorer Dashboard yet?
          </h3>
          <SignedOut>
            {/* <SignInButton mode="modal" /> */}
            <SignUpButton mode="modal">
              Get Started with AGF Xpense Xplorer Today
            </SignUpButton>
          </SignedOut>
        </div>
      </div>
      <div className="flex justify-center items-center text-white-400  mt-10 max-sm:flex-col max-sm:items-center">
        <div className="flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer">
          <p className="w-full">
            © 2024 AGF Xpense Xplorer Inc. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};
