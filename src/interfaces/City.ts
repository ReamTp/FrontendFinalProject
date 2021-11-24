import Department from "./Department";

export default interface City {
    id: number,
    name: string,
    state: boolean,
    department: Department
}