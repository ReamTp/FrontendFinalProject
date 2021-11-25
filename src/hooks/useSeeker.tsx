import { ChangeEvent, useState } from "react";

const useSeeker = () => {
    const [search, setSearch] = useState<string>('');

    const formSearch = {
        search
    }

    const onChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setSearch(value);
    }

    return [formSearch, onChangeSearch] as const;
};

export default useSeeker;