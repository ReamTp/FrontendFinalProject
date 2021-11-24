import City from "../../interfaces/City";

const isCity = (object: any): object is City => {
    return 'id' in object;
}

export default isCity;