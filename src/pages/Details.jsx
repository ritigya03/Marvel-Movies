import data from '../data'
import ReactPlayer from 'react-player/youtube';
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import InfoHandler from '../components/info';
import { useState } from 'react';

function Details(){
    let { movieId } = useParams();
    let navigate = useNavigate();
    let movieDetails = data.find((movie) => movie.id == movieId);
    let [open, setOpen] = useState(false);

    function backHandler(){
        navigate('/')
    }
    
    return(
        <>
        <div className='w-full h-screen mx-auto md:flex justify-center items-center'>
            <h1 className=' text-3xl lg:text-6xl md:text-6xl font-bolder text-white mt-5 left-[130px] lg:left-[170px] sm:left-20 absolute'>{movieDetails.name}</h1>
            <ReactPlayer width='100vw' height='100vh' playing className='rounded-xl' url={movieDetails.youtubeTrailer}></ReactPlayer>
            <button className='text-white rounded-lg bg-red-600 py-3 px-6 absolute top-[70px] lg:left-[170px]  left-[120px] lg:top-[420px] sm:left-20 sm:top-[370px]' onClick={backHandler}>Back to Home</button>
            <button className='text-white rounded-lg bg-neutral-400 py-3 px-6 absolute top-[130px] lg:left-[330px]  left-[135px] lg:top-[420px] sm:left-[250px] sm:top-[370px]' onClick={() => setOpen(true)}>More info</button>
        </div>
        <InfoHandler open={open} setOpen={setOpen} />
        </>
    )
}

export default Details;
