'use client'

import React from 'react';
import NaveBarItem from './NaveBarItem';

export default function NaveBarS() {
    return (
		<div className="flex flex-col flex-wrap items-center justify-center bg-amber-100 p-4 dark:bg-gray-600 sm:flex-row lg:text-lg">
			<h1>SERIES</h1>
			<NaveBarItem title="Trending" param="fetchTrending" />
			<NaveBarItem title="Netflix" param="fetchNetflixOriginals" />
			<NaveBarItem title="Series" param="fetchseriesOriginals" />
		</div>
    );
}