import React from 'react'
import Header from '../components/Header'
import { useLocation, useNavigate } from 'react-router-dom'
import Blogs from '../components/Blogs';
import Pagination from '../components/Pagination';

const TagPage = () => {
    const navigation = useNavigate();
    const location = useLocation();
    const tag = location.pathname.split('/').at(-1);

    return (
        <div className="w-full h-full flex flex-col items-center justify-center gap-x-1">
            <Header />
            <div>
                <div className="backbutton ">
                    <button onClick={() => navigation(-1)}>Back</button>
                </div>
                <h2 className="heading2 mt-[80px] ">
                    Blog Tagged <span>#{tag}</span>
                </h2>
            </div>
            <Blogs />
            <Pagination />
        </div>
    )
}

export default TagPage