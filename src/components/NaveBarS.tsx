'use client'

import React from 'react';
import NaveBarItem from './NaveBarItem';

export default function NaveBarS() {
    return (
		<div className="flex flex-col flex-wrap items-center justify-center bg-amber-100 p-4 dark:bg-gray-600 sm:flex-row lg:text-lg">
			<h1>SERIES</h1>
			<NaveBarItem title="Trending" param="fetchTrending" />
			<NaveBarItem title="Popular" param="fetchseriesPopular" />
			<NaveBarItem title="Top Rated" param="fetchseriesTopRated" />
			<NaveBarItem title="Netflix" param="fetchNetflixOriginals" />
			<NaveBarItem title="Family" param="fetchseriesFamily" />
			<NaveBarItem title="Reality" param="fetchseriesReality" />
			<NaveBarItem title="Action" param="fetchseriesAction" />
			<NaveBarItem title="War" param="fetchseriesWar" />
			<NaveBarItem title="Comedy" param="fetchseriesComedy" />
			<NaveBarItem title="Crime" param="fetchseriesCrime" />
			<NaveBarItem title="Documentary" param="fetchseriesDocumentary" />
			<NaveBarItem title="Drama" param="fetchseriesDrama" />
			<NaveBarItem title="Mystery" param="fetchseriesMystery" />
			<NaveBarItem title="Fantasy" param="fetchseriesFantasy" />
			<NaveBarItem title="Western" param="fetchseriesWestern" />
		</div>
    );
}