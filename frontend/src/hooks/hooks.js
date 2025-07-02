import { useEffect, useState } from "react";

export function useLocalStorage(key) {
    const [value, setValue] = useState(() => {
        return JSON.parse(localStorage.getItem(key)) || [];
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);

    return [value, setValue];

}

export function selectionSize() {
    const [selectSize, setSelectSize] = useState("");
    const isSizeSelected = selectSize !== "";

    return {
        selectSize,
        setSelectSize,
        isSizeSelected
    };

}