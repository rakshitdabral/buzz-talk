import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../../styles";
import { navLinks } from "../../constants/navLinks";
import close from "../../assets/close.svg";
import menu from "../../assets/menu.svg";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    if (toggle === true) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [toggle]);
  return (
    <nav
      className={`${styles.paddingNav} w-full flex item-center py-5  top-0 z-20 bg-[#e7b1fcff]`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl sm:mx-auto sm:px-0 px-6">
        <h1 className="font-bold text-2xl mx-3 my-3 text-white">BuzzTalk</h1>

        <ul className="hidden flex-row lg:flex items-center  justify-center   gap-10 list-none">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className="hover:underline text-white text-[18px] font-medium cursor-pointer"
            >
              {link.title}
            </li>
          ))}
          <Link to="/login">
          <button className="bg-white  lg:items-center justify-center flex hover:text-[#3C096C] hover:drop-shadow-3xl text-black text-sm    py-2  w-[180px] font-bold border rounded-full">
            Login
          </button>
          </Link>
        </ul>

        <div className="lg:hidden  flex gap-10 justify-end items-start">
          <Link to="/login">
            <button className="bg-white lg:items-center justify-center hidden sm:flex hover:text-[#3C096C] hover:drop-shadow-3xl text-black text-sm    py-2  w-[180px] font-bold border rounded-full">
              Login
            </button>
          </Link>
          <img
            src={toggle ? close : menu}
            onClick={() => {
              setToggle(!toggle);
            }}
            alt="menu"
            className={`${
              toggle ? "mr-[10px]" : ""
            }w-[28px] h-[28px]  object-contain cursor-pointer z-50`}
          ></img>

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6  bg-white absolute top-[-2px] pt-[24px] pr-[48px] pb-[120px] pl-[24px]  right-0 h-[100vh] overflowy-auto min-w-[330px] z-10 rounded-l-xl`}
          >
            <ul className="flex flex-col justify-start mt-[80px] items-start gap-4 list-none">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  onClick={() => {
                    setActive(link.title);
                    setToggle(!toggle);
                  }}
                  className={`${
                    active === link.title ? "text-white " : "text-black"
                  }  text-[18px] font-poppins font-medium cursor-pointer`}
                >
                  <a
                    className="hover:text-sky-500 hover:underline"
                    href={`#${link.id}`}
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
