import { useState, useEffect } from "react";
import { tabs } from "../data/programmingLanguageData";
import hljs from "highlight.js/lib/core"
import kotlin from "highlight.js/lib/languages/kotlin"


export function useHighlight() {
    hljs.registerLanguage("kotlin", kotlin);
    const [activeIndex, setActiveIndex] = useState(0);
    const [highlighted, setHighlighted] = useState("");

    useEffect(() => {
        setActiveIndex(Math.floor(Math.random() * tabs.length));
    }, []);

    useEffect(() => {
        const result = hljs.highlight(tabs[activeIndex].code, {
            language: "kotlin",
        });

        setHighlighted(result.value);
    }, [activeIndex]);

    return { highlighted, activeIndex, setActiveIndex };
}