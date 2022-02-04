import { useEffect, useState } from "react";

export const useFetching = (asyncFunction, addiction) => {
    const [response, setResponse] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [errors, setErrors] = useState(null);

    useEffect(() => {
        (async () => {
            try {
                setIsLoading(true);
                const { data } = await asyncFunction();
                setResponse(data);
            } catch (error) {
                setErrors(error.message);
            } finally {
                setIsLoading(false);
            }
        })();
    }, [addiction]);

    return { response, isLoading, errors };
};
