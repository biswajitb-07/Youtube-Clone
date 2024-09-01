import React, { useEffect, useState } from 'react'
import Avatar from 'react-avatar';

import { AiOutlineMenu } from 'react-icons/ai';
import { CiSearch } from 'react-icons/ci';
import { FaMicrophone } from "react-icons/fa";
import { IoIosSearch } from 'react-icons/io';
import { IoArrowBack } from 'react-icons/io5';
import { RiVideoAddLine } from 'react-icons/ri';
import { AiOutlineBell } from 'react-icons/ai';

import logo from "../../public/logo.png";
import profile from "../../public/profile_logo.png";
import { useNavigate } from 'react-router-dom';
import { useUtils } from '../context/UtilsContext';

export const Navbar = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const { isSidebar, setIsSidebar, mobileShow, setMobileShow } = useUtils();
    const [searchbar, setSearchbar] = useState(false);

    useEffect(() => {
        console.log(isSidebar, mobileShow);

    }, [isSidebar])

    const navigate = useNavigate();

    const searchQueryHandler = (event) => {
        if (
            (event?.key === "Enter" || event === "searchButton") &&
            searchQuery?.length > 0
        ) {
            navigate(`/search/${searchQuery}`);
            setSearchQuery("");
        }
    };

    const handleSidebar = () => {
        if (window.innerWidth <= 1280) {
            setIsSidebar(!isSidebar);
            setMobileShow(!mobileShow);
        }

        setIsSidebar(!isSidebar);
    };

    if (searchbar) {
        return <div className='flex justify-between px-6 py-2 items-center'>
            <IoArrowBack size={20} onClick={() => setSearchbar(!searchbar)}/>
            <div className='flex flex-grow items-center mx-4'>
                <div className='w-[100%] px-4 py-2 border border-gray-400 rounded-l-full'>
                    <input type="text" placeholder='Search' className='outline-none w-full'
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onKeyUp={searchQueryHandler}
                        value={searchQuery}
                    />
                </div>
                <button className='px-4 py-2 border border-gray-400 bg-gray-100 rounded-r-full'
                    onClick={(e) => searchQueryHandler("searchButton")}
                >
                    <CiSearch size={"24px"} />
                </button>
            </div>
            <FaMicrophone size={"33px"} className='ml-3 border rounded-full p-2 cursor-pointer hover:bg-gray-100 duration-200' />
        </div>
    }

    return (
        <div className='flex justify-between px-6 py-2'>
            <div className='flex items-center space-x-4'>
                <AiOutlineMenu className='text-xl cursor-pointer' onClick={handleSidebar} />
                <img src={logo} alt="logo" className='w-28 cursor-pointer' />
            </div>
            <div className='hidden md:flex w-[35%] items-center'>
                <div className='w-[100%] px-4 py-2 border border-gray-400 rounded-l-full'>
                    <input type="text" placeholder='Search' className='outline-none w-full'
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onKeyUp={searchQueryHandler}
                        value={searchQuery}
                    />
                </div>
                <button className='px-4 py-2 border border-gray-400 bg-gray-100 rounded-r-full'
                    onClick={(e) => searchQueryHandler("searchButton")}
                >
                    <CiSearch size={"24px"} />
                </button>
                <FaMicrophone size={"33px"} className='ml-3 border rounded-full p-2 cursor-pointer hover:bg-gray-100 duration-200' />
            </div>
            <div className='flex items-center space-x-5'>
                <IoIosSearch className='text-2xl md:hidden' onClick={() => setSearchbar(!searchbar)} />
                <RiVideoAddLine className='text-2xl' />
                <AiOutlineBell className='text-2xl' />
                <Avatar size='32' round={true} src={profile} alt="" />
            </div>
        </div>
    );
};