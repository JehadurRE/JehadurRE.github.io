import { useEffect, useState } from "react";
import { MenuButton } from "../components/Buttons/MenuButton";

export const Menu = (props: any) => {
  const { section,onSectionChange } = props;
  const [isOpen, setIsOpen] = useState(false);

  console.log(section);

  useEffect(() => {
    setIsOpen(false);
  }, [section]);





  return (
    <>
      <MenuButton isOpen={isOpen} setIsOpen={setIsOpen} />

      <div
        className={`fixed top-0 right-0 h-screen w-80 bg-gray-800 z-10 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-500 ease-in-out`}
      >
        <ul className="flex flex-col items-center justify-center h-full">
            <SingleMenuLabel label="Home" onClick={() => onSectionChange(0)} />
            <SingleMenuLabel label="About" onClick={() => onSectionChange(1)} />
            <SingleMenuLabel label="Portfolio" onClick={() => onSectionChange(2)} />
            <SingleMenuLabel label="Clients" onClick={() => onSectionChange(3)} />
            <SingleMenuLabel label="Blogs" onClick={() => onSectionChange(4)} />
            <SingleMenuLabel label="Contact" onClick={() => onSectionChange(5)} />
        </ul>
      </div>
    </>
  );
};

const SingleMenuLabel = (props: any) => {
  const { label, onClick } = props;
  return (
    // TODO: Dynmic mouse cursor
    <li className="text-white text-2xl font-bold py-4 hover:text-white/20 cursor-pointer" onClick={onClick}>
      {label}
    </li>
  );
};
