// import Card from './components/Card';
import Card from "./Card";
function Tours({tours, removeTour}){

    return(
       <div className="container">

         <div>   <h2 className="title">Plan With Love</h2> </div>

        
        

        <div className="cards">
            {
                tours.map((tour)=>{

                    //  jab bhi map wale fun use karo to ek key ko pass karna hai- best  practice
                    return <Card {...tour} key={tour.id} removeTour={removeTour}></Card>
                })
                
            }
        </div>




       </div>
    )




}














export default Tours;