import { useState } from "react";

const useProductModal = () => {
    const [open, setOpen] = useState<boolean>(false);
    const [cant, setCant] = useState<number>(1);

    const isOpen = () => {
        setOpen(!open);
        setCant(1);
    }

    const addCant = () => {
        setCant(cant + 1);
    }

    const removeCant = () => {
        cant > 1 && setCant(cant - 1);
    }

    return [open, isOpen, cant, addCant, removeCant] as const;
}

export default useProductModal;
