import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useContext } from 'react';
import { happy } from './Api';


const TopPost = () => {

    const [data] = useContext(happy)

    const { cat } = useParams()

    return (
        <div>
            <p className='mainCategory'>Top Post</p>
            <hr className='mainCategoryHr' />
            <div>

                {data.filter((value) => value.id === 1 && value.name === cat).map((val) => (
                    <div>
                        <Link to={`/article/${val.name}/${val.id}`}>

                            <div className='LatestContainer'>
                                <img src={val.urlToImage} className='LatestImg' alt='' />
                                <div className='flexBox'>
                                    <div>
                                        <p className='blogTitle'>{val.title}</p>
                                        <p className='blogCategory'>{val.name}</p>
                                    </div>
                                    <p className='LatestId'>{val.id}</p>
                                </div>
                            </div>
                            <hr className='blogLine' />
                        </Link>
                    </div>
                ))}


                {data.filter((value) => value.id >= 1 && value.id <= 5 && value.name === cat).map((val) => (
                    <div>
                        <Link to={`/article/${val.name}/${val.id}`}>

                            <div className='SubContainer'>
                                <img src={val.urlToImage} className='SubImg' alt='' />
                                <div>
                                    <p className='blogTitle'>{val.title}</p>
                                    <p className='blogCategory'>{val.name}</p>
                                </div>
                                <p className='LatestId'>{val.id}</p>
                            </div>
                            <hr className='blogLine' />
                        </Link>

                    </div>
                ))}

            </div>

        </div>
    );
}

export default TopPost;