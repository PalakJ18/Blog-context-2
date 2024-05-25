import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Blogs from '../components/Blogs';
import Pagination from '../components/Pagination';
import Header from '../components/Header';
const CategoryPage = () => {
    const location = useLocation();
    const navigation = useNavigate();
    const category = location.pathname.split('/').at(-1);
    return (
        <div className="w-full h-full flex flex-col items-center justify-center gap-x-1">
            <Header />
            <div>
                <div className="backbutton">
                    <button onClick={() => navigation(-1)}>Back</button>
                </div>
                <h2 className="heading2 mt-[30%]">
                    Blogs On <span>{category}</span>
                </h2>
            </div>
            <Blogs />
            <Pagination />
        </div>
    )
}

export default CategoryPage