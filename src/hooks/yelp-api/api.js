import {API_BASE_URL} from './config';
import queryString from 'query-string'


export function get(path, queryParams) {

    const { REACT_APP_BEARER_TOKEN } = process.env;
    const query = queryString.stringify(queryParams);
    return fetch(`${API_BASE_URL}/${path}?${query}`, {
        headers: {
            'Authorization': `Bearer ${REACT_APP_BEARER_TOKEN }`,
            'Content-Type':'application/json',
        }
    });

}

