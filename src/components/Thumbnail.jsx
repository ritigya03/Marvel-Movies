import { Navigate,useNavigate } from "react-router-dom"
function Thumbnail(props){
    let navigate = useNavigate()
    function movieDetailsHandler(){
        navigate(`/details/${props.id}`)
    }
    return(
        <>
        <div className="w-48">
            <img src={props.img} onClick = {movieDetailsHandler} className="w-full rounded-xl m-4" alt="" />
        </div>
        </>
    )
}
export default Thumbnail