import { ChangeEventHandler } from "react";

const isChangeEventHandler = (object: any): object is ChangeEventHandler => {
    return 'target' in object;
}
export default isChangeEventHandler;