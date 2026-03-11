import { useEffect, useMemo, useState } from "react";
import hljs from "highlight.js/lib/core";
import kotlin from "highlight.js/lib/languages/kotlin";

import type { Tab } from "../data/dataTypes";

hljs.registerLanguage("kotlin", kotlin);

export function useHighlight(tabs: Tab[]) {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        if (tabs.length === 0) return;
        const randomIndex = Math.floor(Math.random() * tabs.length);
        setActiveIndex(randomIndex);
    }, [tabs.length]);

    const highlighted = useMemo(() => {
        const code = tabs[activeIndex]?.code ?? "";
        return hljs.highlight(code, { language: "kotlin" }).value;
    }, [tabs, activeIndex]);

    return { highlighted, activeIndex, setActiveIndex };
}
