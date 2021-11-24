import { MutableRefObject, useEffect, useState } from "react";

const useElementWidth = (element: MutableRefObject<HTMLDivElement>, element2?: MutableRefObject<HTMLDivElement>) => {
    const [width, setWidth] = useState(0);

    useEffect(() => {
        const val1 = element != null && element.current != null ? element.current.clientHeight : 0;
        const val2 = element2 != null && element2.current != null ? element2.current.clientHeight : 0;

        setWidth(val1 + val2);
    }, [element, element2]);

    return width;
}

export default useElementWidth;
