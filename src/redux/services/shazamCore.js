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
        getSongDetails:builder.query({query:({songid})=>`/tracks/details?track_id=${songid}`}),
        getSongRelated:builder.query({query:({songid})=>`/tracks/related?track_id=${songid}`}),
        getArtistDetails:builder.query({query:(artistid)=>`/artists/details?artist_id=${artistid}`}),
        getSongsByCountry:builder.query({query:(country)=>`/charts/country?country_code=${country}`}),
    }),
})

export const {
    useGetTopChartsQuery,
    useGetSongDetailsQuery,
    useGetSongRelatedQuery,
    useGetArtistDetailsQuery,
    useGetSongsByCountryQuery,
} = shazamCoreApi;