import { NavLink } from "react-router-dom";
import Logo from "../../assets/logo/site-logo.png";

export const NavbarComponent = () => {
  return <header className="pr-10 flex justify-between items-center h-auto absolute top-0 left-0 w-full bg-[#31313190]">
    <div className="logo flex justify-center items-center">
        <img src={Logo} width={250} height={150} />
    </div>  
    <nav>
        <NavLink to="/auth" className="p-2 border rounded cursor-pointer text-[white] hover:bg-[white] hover:text-[black]">Get Started</NavLink>
    </nav>
  </header>;
};
