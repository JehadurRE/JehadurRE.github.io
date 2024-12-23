interface MenuProps {
    onSectionChange: (section:number) => void;
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
}

export const Menu = (props: MenuProps) => {
    const { onSectionChange, isOpen, setIsOpen } = props;
    return (
        <div className="fixed top-0 left-0 w-screen h-screen bg-background flex justify-center items-center">
            <button onClick={() => setIsOpen(!isOpen)}>
                Close
            </button>
            <ul className="flex flex-col items-center justify-center">
                <li onClick={() => onSectionChange(0)}>Home</li>
                <li onClick={() => onSectionChange(1)}>About</li>
                <li onClick={() => onSectionChange(2)}>Skills</li>
                <li onClick={() => onSectionChange(3)}>Projects</li>
                <li onClick={() => onSectionChange(4)}>Clients</li>
                <li onClick={() => onSectionChange(5)}>Contact</li>
            </ul>

            
        </div>
    )
}