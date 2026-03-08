import { useState, useEffect } from "react";
import { tabs } from "../data/programmingLanguageData";


export function useHighlight(initialIndex : number) {
    const [activeIndex, setActiveIndex] = useState(initialIndex);
    const [highlighted, setHighlighted] = useState("");


    
    useEffect(() => {
        async function highlight() {
            const hljs = (await import("highlight.js/lib/core")).default;
            const kotlin = (await import("highlight.js/lib/languages/kotlin")).default;

            hljs.registerLanguage("kotlin", kotlin);

            const result = hljs.highlight(tabs[activeIndex].code, {
                language: "kotlin",
            });

            setHighlighted(result.value);
        }

        highlight();
    }, [activeIndex]);

    return {highlighted, activeIndex, setActiveIndex}
}