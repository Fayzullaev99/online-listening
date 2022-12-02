import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const shazamCoreApi = createApi({
    reducerPath:"shazamCoreApi",
    baseQuery:fetchBaseQuery({
        baseUrl:"https://shazam-core.p.rapidapi.com/v1",
        prepareHeaders:(headers)=>{
            headers.set("X-RapidAPI-Key","e61d0a89f9msh709ef3f0a6db476p1c9170jsnb8c445071233");
        return headers;
        },
    }),
    endpoints:(builder)=>({
        getTopCharts:builder.query({query:()=>'/charts/world'}),
    }),
})

export const {
    useGetTopChartsQuery,
} = shazamCoreApi;