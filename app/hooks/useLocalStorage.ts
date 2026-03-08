import { useState, useEffect } from "react";

export function useLocalStorage(key: string, defaultValue: string | null) {
    const [value, setValue] = useState(defaultValue);

    useEffect(() => {
        const stored = localStorage.getItem(key);
        if (stored) setValue(stored);
    }, [key]);

    return [value, setValue] as const;
}