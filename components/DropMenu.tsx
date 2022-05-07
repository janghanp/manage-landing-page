import { useContext } from "react";
import { useSpring, animated } from "react-spring";
import { DropdownContext } from "../stores/dropdownContext";

const Dropmenu = () => {
  const { isOpen: globalIsOpen, toggle: gloablToggle } =
    useContext(DropdownContext);

  const menuApper = useSpring({
    transform: globalIsOpen ? "translate3D(0,0,0)" : "translate3D(0, -40px,0)",
    opacity: globalIsOpen ? 1 : 0,
  });

  return (
    <>
      {globalIsOpen && (
        <animated.div
          className="absolute top-32 bg-white z-20 w-11/12 mx-auto px-5 py-10 rounded-sm shadow-md"
          style={menuApper}
        >
          <ul className="flex flex-col justify-center items-center gap-y-7">
            <li className="text-darkBlue font-bold">Pricing</li>
            <li className="text-darkBlue font-bold">Product</li>
            <li className="text-darkBlue font-bold">About Us</li>
            <li className="text-darkBlue font-bold">Careers</li>
            <li className="text-darkBlue font-bold">Community</li>
          </ul>
        </animated.div>
      )}
      {globalIsOpen && (
        <div
          className="fixed inset-0 bg-gradient-to-b from-white/25 via-black/60 to-black/80 z-10"
          onClick={() => gloablToggle(!globalIsOpen)}
        ></div>
      )}
    </>
  );
};

export default Dropmenu;
