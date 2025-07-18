import React, {useEffect, useState} from 'react';
import {YOUTUBE_VIDEOS_API} from "../utils/constants.js";
import {Link} from "react-router-dom";
import VideoCard from "./VideoCard.jsx";

const VideoContainer = () => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        getVideos();
    }, []);

    const getVideos = async () => {
        const data = await fetch(YOUTUBE_VIDEOS_API);
        const json = await data.json();
        setVideos(json.items);
    };

    return (
        <div className="flex flex-wrap">
            {videos.map((video) => (
                <Link to={"/watch?v=" + video.id}>
                    <VideoCard key={video.id} info={video} />
                </Link>
            ))}
        </div>
    );
};

export default VideoContainer;