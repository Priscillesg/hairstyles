import {useState, useEffect} from 'react';
import * as api from './api';

export function useBusinessSearch(term, location) {
    const [businesses, setBusinesses] = useState([]);
    const [amountResults, setAmountResults] = useState();
    const [searchParams, setSearchParams] = useState({term, location});

    useEffect(() => {
        setBusinesses([]);
        const fetchData = async () => {
            try {
                const rawData = await api.get('api_list/', searchParams);
                const resp = await rawData.json();
                setBusinesses(resp);
                setAmountResults(resp.total);
            } catch(e) {
                console.error(e);
            }
        };
        fetchData();
    }, [searchParams]);
    console.log(businesses)
    return [businesses, amountResults, searchParams, setSearchParams];
}