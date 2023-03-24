"use client";

import React from 'react'

const SearchBar = () => {
    return (
        <div className='flex justify-center'>
            <input
                /* value={search} */
                /* onChange={(e) => setSearch(e.target.value)} */
                type="text"
                placeholder="Search Coin..."
                className="w-[500px] mx-[20px] md:mx-[0px] bg-[#0F0F0F] h-12 md:h-14 rounded-sm p-5 mt-[30px] placeholder-white outline-none "
            />
        </div>
    )
}

export default SearchBar