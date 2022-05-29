import React from 'react';
import Intro from "./Intro"
import TheLatest from "./TheLatest"
import LatestArticles from "./LatestArticles"
import LatestStories from "./LatestStories"
import '../App.css';


const Home =() => {
    return (
       
        <div>
            <Intro />
            <TheLatest />
            <LatestArticles />
            <LatestStories />
        </div>
    
    );
}

export default Home;