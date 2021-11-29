import { ChangeEvent, useState } from "react";

const useSeeker = () => {
    const [search, setSearch] = useState<string>('');

    const formSearch = {
        search
    }

    const resetSearch = () => {
        setSearch('');
    }

    const onChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        console.log("onChangeSearch:", value);
        setSearch(value);
    }

    return [formSearch, onChangeSearch, resetSearch] as const;
};

export default useSeeker;