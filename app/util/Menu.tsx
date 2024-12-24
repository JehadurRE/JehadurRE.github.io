import { useState } from "react";
import { MenuButton } from "../components/Buttons/MenuButton";



export const Menu = (props: any) => {
    const { onSectionChange } = props;
    const [isOpen, setIsOpen] = useState(false);


    return (
        <>
        <MenuButton isOpen = {isOpen} setIsOpen={setIsOpen} />

        <div className={`fixed top-0 right-0 h-screen w-80 bg-gray-800 z-10 transform ${isOpen ? "translate-x-0" : "translate-x-full"} transition-transform duration-500 ease-in-out`}>
            <ul className="flex flex-col items-center justify-center h-full">
                <li className="text-white text-2xl font-bold py-4">Home</li>
                <li className="text-white text-2xl font-bold py-4">About</li>
                <li className="text-white text-2xl font-bold py-4">Portfolio</li>
                <li className="text-white text-2xl font-bold py-4">Clients</li>
                <li className="text-white text-2xl font-bold py-4">Blogs</li>
                <li className="text-white text-2xl font-bold py-4">Contact</li>
            </ul>
        </div>
        </>
    )
}