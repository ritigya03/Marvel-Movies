import data from '../data.js'
import Thumbnail from '../components/Thumbnail.jsx'
import Marvel from '../assets/marvel.png'
import LogoMarvel from '../assets/logomarvel.webp'
function Home(){
    return(
        <>
        <div className='flex flex-wrap'>
          <div>
          <img className='w-[300px] h-[330px] ml-10  lg:justify-center' src={LogoMarvel} alt="" />
          <img className='w-[300px] h-[300px] ml-10' src={Marvel} alt="" />
          </div>
       
          <div className='flex flex-wrap gap-5 w-[1100px] my-12 mx-auto justify-center'>
    {
         data.map((movie)=>{
          return <Thumbnail title = {movie.name} plot = {movie.plot} img = {movie.poster} id={movie.id} />
        })
      }
    </div>
        </div>

        </>
    )
}
export default Home