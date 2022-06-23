import React, { useEffect, useState } from 'react';
import HeaderBar from '../HeaderBar';

/**https://stackoverflow.com/questions/62497110/detect-scroll-direction-in-react-js */

function HeaderBarContainer() {

    // 0 = top of page
    // 1 = user scrolling down
    // 2 = user scrolling up
    const [scrollDir, setScrollDir] = useState(0);

    useEffect(() => {
        const threshold = 0;
        let lastScrollY = window.pageYOffset;
        let ticking = false;

        const updateScrollDir = () => {
            const scrollY = window.pageYOffset;

            if (Math.abs(scrollY - lastScrollY) < threshold) {
                ticking = false;
                return;
            }

            setScrollDir(scrollY > 1 ? (scrollY > lastScrollY ? 1 : 2) : 0);
            lastScrollY = scrollY > 0 ? scrollY : 0;
            ticking = false;
        };

        const onScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(updateScrollDir);
                ticking = true;
            }
        };

        window.addEventListener("scroll", onScroll);
        //console.log(scrollDir);

        return () => window.removeEventListener("scroll", onScroll);
    }, [scrollDir]);
    

    return(
        <HeaderBar scrollDir={scrollDir}/>
    );
}

export default HeaderBarContainer;