import { useEffect, useState } from "react";

export const useFetching = (asyncFunction) => {
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
                console.log(errors);
                setErrors(error.message);
            } finally {
                setIsLoading(false);
            }
        })();
    }, []);

    return { response, isLoading, errors };
};
