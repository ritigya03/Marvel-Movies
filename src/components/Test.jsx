function Test(data){
    return(
        <>
        <div className="border rounded-xl m-3 w-[300px]">
        <h1 className="text-2xl font-bold">{data.title}</h1>
        <p className="text-red-800">{data.plot}</p>
        </div>

        </>
    )
}
export default Test