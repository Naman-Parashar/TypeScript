import { useState } from "react";

interface FetchState<T>{
    data: T | null;
    loding: boolean;
    error: string | null;
}

export function useFetch<T>(url:string): FetchState<T> {
    const [state] = useState<FetchState<T>>({
        data: null,
        loding: true,
        error: null,
    });

    // useEffect to make fetch request
    console.log(url);
    return state;
}