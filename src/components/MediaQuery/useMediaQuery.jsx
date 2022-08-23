import { useState } from "react";
import { useEffect } from "react";

function useMediaQuery(query, defaultMatches = window.matchMedia(query)) {
    const [matches , setMatches] = useState(defaultMatches)

    useEffect(() => {
        let media = window.matchMedia(query)

        if (media.matches !== matches) setMatches(media.matches)
        const listener = () => setMatches(media.matches)
        media.addListener(listener)
        return () => media.removeListener(listener)
    }, [query, matches]);

    return matches;
}

export default useMediaQuery;