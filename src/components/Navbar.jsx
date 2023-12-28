import { useState } from "react";
import clsx from "clsx";
import { IoClose } from "react-icons/io5";
import { FiMenu } from "react-icons/fi";
import { Link } from "react-scroll";
import logo from '../assets/image_prev_ui.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setIsOpen(false);
  };

  const navItems = (
    <div
      className={clsx(
        "flex flex-col md:flex-row md:justify-between gap-5 p-[5%] md:p-0 shadow-md md:shadow-none absolute md:static left-0 w-full md:w-auto duration-500 md:duration-0 ease-linear nav-items  navbar-for-mob ",
        isOpen ? "top-[10vh]" : "-top-[100vh]"
      )}
    >
      <Link
        to="hero"
        spy={true}
        smooth={true}
        offset={-100}
        duration={500}
        onClick={() => handleLinkClick("home")}
        className={
          activeLink === "home"
            ? "text-black md:border-b-2 md:border-purple-700"
            : ""
        }
      >
        Home
      </Link>

      <Link
        to="floor-plans"
        spy={true}
        smooth={true}
        offset={-40}
        duration={500}
        onClick={() => handleLinkClick("floor-plans")}
        className={
          activeLink === "floor-plans"
            ? "text-black md:border-b-2 md:border-purple-700"
            : ""
        }
      >
        Land Plans
      </Link>

      <Link
        to="about"
        spy={true}
        smooth={true}
        offset={-40}
        duration={500}
        onClick={() => handleLinkClick("about")}
        className={
          activeLink === "about"
            ? "text-black md:border-b-2 md:border-purple-700"
            : ""
        }
      >
        About
      </Link>

      {/* <Link
        to="video-tour"
        spy={true}
        smooth={true}
        offset={-40}
        duration={500}
        onClick={() => handleLinkClick("video-tour")}
        className={
          activeLink === "video-tour"
            ? "text-black md:border-b-2 md:border-purple-700"
            : ""
        }
      >
        Video Tour
      </Link> */}

      <Link
        to="gallery"
        spy={true}
        smooth={true}
        offset={-40}
        duration={500}
        onClick={() => handleLinkClick("gallery")}
        className={
          activeLink === "gallery"
            ? "text-black md:border-b-2 md:border-purple-700"
            : ""
        }
      >
        Gallery
      </Link>

      <Link
        to="contact"
        spy={true}
        smooth={true}
        offset={-40}
        duration={500}
        onClick={() => handleLinkClick("contact")}
        className={
          activeLink === "contact"
            ? "text-black md:border-b-2 md:border-purple-700"
            : ""
        }
      >
        Contact
      </Link>
    </div>
  );

  return (
    <nav className="shadow-xl fixed top-0 left-0 right-0 z-20 bg-[#ed14a4]">
      <div className="wrapper h-[10vh] flex items-center justify-between">
        {/* title */}
        
        <h1 className="text-xl font-bold">
          {/* <img src={logo} alt="Floor Plan" width={'125px'} /> */}
        Dream House</h1>

        {/* toggle nav */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="absolute right-[5%] md:hidden text-2xl"
        >
          {isOpen ? <IoClose /> : <FiMenu />}
        </button>

        {/* links */}
        <>{navItems}</>
      </div>
    </nav>
  );
};

export default Navbar;
