import React from 'react'

export const ListItem = () => {
    const categories = [
        "All", "Music", "React routers", "Computer programming", "Reverberation", "Movie musicals", "India national cricket team", "News", "Mixes", "1990s", "Telugu cinema", "Live", "Dramedy", "Dubbing", "Indian soap opera", "Cricket", "Football", "Learn Coding",
    ];
    return (
        <div className="flex hover:overflow-x-scroll px-4 scrollbar-none">
            <div className="flex space-x-4 flex-nowrap">
                {categories.map((category) => {
                    return (
                        <div
                            key={category}
                            className="mb-4 flex-none bg-gray-200 hover:bg-gray-300 duration-300 rounded-xl px-4 py-2 font-medium text-gray-700 cursor-pointer text-[14px]"
                        >
                            {category}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};