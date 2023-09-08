import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";

const ActiveBooking = () => {

   
    let[userdetails , setuserdetails] = useState(null);
    
    
   
 
    useEffect(()=>{
        
        let userdetail = JSON.parse(localStorage.getItem("userdetails"));
        setuserdetails(userdetail)
        
          
       
    },[])

    return ( <div className="main"> 
        <Navbar/>
      <h1>Active ticket</h1>
      {userdetails &&  <div>
                        <h1>{userdetails.username}</h1>
                      <div id="activeuser">
                        {
                            userdetails.active_bookings.map((active , i)=>{
                                return(
                                    <div id="name">
                                        <p>{i +1}</p>
                                        <p>{active.busname} - {active.busnumber} </p> 
                                        <p>{active.date}</p>
                                        <p>{active.from}:{active.start} - {active.to}:{active.end}</p>
                                        <p>{active.seats}</p>
                                        <p>{active.journey_time}</p>
                                        
                                    </div>
                                )
                            })

                        }
                      </div>
                      
                       
                    
                        
                       </div>}

    </div> );
}
 
export default ActiveBooking;