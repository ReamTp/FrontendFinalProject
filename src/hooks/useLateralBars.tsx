import { useState } from 'react'

const useLateralBars = () => {
    const [open, setOpen] = useState<boolean>(false)

    function isOpen() {
        setOpen(!open)
    }

    return [open, isOpen] as const;
}

export default useLateralBars;
