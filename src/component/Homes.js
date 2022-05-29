import React from 'react';
import { useContext, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Advertisement from './Advertisement';
import TopPost from './TopPost';
import { happy } from './Api';


const Homes = () => {

    const [data] = useContext(happy)

    const { cat } = useParams()

    const [load, setLoad] = useState(true)

    return (

        <div className='blogBody'>
            <div>
                <p className='mainCategory'>{cat}</p>
                <hr className='mainCategoryHr' />

                {data.filter((value) => (load ? (value.id <= 4) : (value.id <= 5)) && value.name === cat).map((val) => (

                    <div>
                        <Link to={`/article/${val.name}/${val.id}`}>

                            <div className='blogContainer'>
                                <img src={val.urlToImage} className='blogImg' alt='' />
                                <div className='blogContent'>
                                    <p className='blogTitle'>{val.title}</p>
                                    <p className='blogDetail'>{val.description.substring(0, 150)}...</p>
                                    <p className='blogCategory'>{val.name}</p>
                                </div>
                            </div>
                        </Link>

                        <hr className='blogLine' />
                    </div>

                ))}

                <div className='btn'>
                    <button onClick={() => setLoad(!load)} className='btn'>{(load ? "Load More" : "View Less")}</button>
                </div>

            </div>

            <div>
                <TopPost />
                <Advertisement />
            </div>

        </div>
    );

}

export default Homes;