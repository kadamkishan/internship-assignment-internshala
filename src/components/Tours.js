import Card from "./Card";

function Tours({tours,removeTour}){
    return(
        <div className="container">
            <div className="title">
                <h2>Course with Love</h2>
            </div>   
            <div className="cards">
                {
                    tours.map((tour)=>{
                        return <Card key={tour.id} {...tour} removeTour={removeTour}></Card>
                    })
                }
            </div> 
        </div>
    );
}

export default Tours;