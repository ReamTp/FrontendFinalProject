import { MutableRefObject, useEffect, useState } from "react";

const useElementHeight = (element: MutableRefObject<HTMLDivElement>, element2?: MutableRefObject<HTMLDivElement>) => {
    const [height, setHeight] = useState(0);

    useEffect(() => {
        const val1 = element != null && element.current != null ? element.current.clientHeight : 0;
        const val2 = element2 != null && element2.current != null ? element2.current.clientHeight : 0;

        console.log("Value1: " + val1, "Value2:" + val2);
        setHeight(val1 + val2);
    }, [element, element2]);


    return height;
}

export default useElementHeight;
