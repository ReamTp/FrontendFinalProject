import { ChangeEvent } from "react";

const isChangeEvent = (object: any): object is ChangeEvent => {
    return 'target' in object;
}

export default isChangeEvent;