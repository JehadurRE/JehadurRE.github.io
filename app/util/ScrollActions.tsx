import { useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import gsap from "gsap";
import { useEffect, useRef } from "react";


interface ScrollActionsProps {
    section: number;
    onSectionChange: (newPage: number) => void;
}

export const ScrollActions = (props: ScrollActionsProps) => {
    const { section, onSectionChange } = props;

    // getting the scroll data from hook
    const data = useScroll();
    // getting the scroll position
    const lastScroll = useRef(0);
    // set it by default false 
    const isAnimating = useRef(false);

    data.fill.classList.add("top-0");
    data.fill.classList.add("absolute");


    // useEffect to implicitly triger the scroll event
    useEffect(() => {
        // trigger gsap animation
        gsap.to(data.el, {
            duration: 1,
            scrollTop: section * data.el.clientHeight,
            onStart: () => {
                isAnimating.current = true;
            },
            onComplete: () => {
                isAnimating.current = false;
            }


    })}, [section]);


    useFrame(() => {
        // if is animating true it will return nothing 
        if (isAnimating.current) {
            // but asssign the lastscroll from current scroll
            lastScroll.current = data.offset;
            return;}


            // check what section we are in
            const currectSection = Math.floor(data.offset*data.pages );
            // console.log(currectSection);
            // console.log("offset:" + data.offset);

            // check if the user is scrolling down and current section is 0 

            if (data.offset > lastScroll.current && currectSection === 0) {
                // if it is then return nothing 
                onSectionChange(1);
            }

            // check if the user is scrolling up and current section is 1
            if (data.offset < lastScroll.current && data.offset < 1/(data.pages-1)) {
                // if it is then return nothing 
                onSectionChange(0);
            }

            // set the lastscroll to current scroll
            lastScroll.current = data.offset;

    });

    return null;
}
