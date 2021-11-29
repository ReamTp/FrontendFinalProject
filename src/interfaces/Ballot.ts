import { User } from ".";

export default interface Ballot {
    id: number;
    user: User;
    date: string;
    total: number;
}