// import { NavLink, Navigate } from "react-router-dom";
import Logo from "../../assets/logo/site-logo.png";
import { SignUpButton, SignedOut } from "@clerk/clerk-react";

export const NavbarComponent = () => {
  return (
    <header className="pr-10 flex justify-between items-center h-auto absolute top-0 left-0 w-full bg-[#31313190]">
      <div className="logo flex justify-center items-center">
        <img src={Logo} width={250} height={150} draggable="false" />
      </div>
      {/* <nav>
        <NavLink to="/auth" className="p-2 border rounded cursor-pointer text-[white] hover:bg-[white] hover:text-[black]">Get Started</NavLink>
    </nav> */}
      <div className="flex justify-center items-center gap-4">
        <SignedOut>
          {/* <SignInButton mode="modal" /> */}
          <SignUpButton mode="modal" />
        </SignedOut>
      </div>
    </header>
  );
};
