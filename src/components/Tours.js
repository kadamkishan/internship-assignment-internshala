import Card from "./Card";

function Tours({tours,removeTour}){
    return(
        <div className="container">
            <div className="title">
                <h5>Course with Love</h5>
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