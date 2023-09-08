import { useState } from "react";
import Navbar from "./Navbar";
import { json, useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import Modal from 'react-modal';
import ToasterUi from 'toaster-ui';
import PuffLoader from 'react-spinners/PuffLoader'

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
     
    },
  };

const Bookticket = () => {
    let [loading, setLoading] = useState(true);
    let[bus , setBus] = useState(null);
    let[userdetails , setuserdetails] = useState({});
    let[seats , setSeats] = useState(1);
    let[Bookingdate, setBookingdate]=useState();
    let {busid} = useParams();
    let navigate=  useNavigate();
    const toaster = new ToasterUi();
   

  
    useEffect(()=>{
        setTimeout(() => {
            fetch("http://localhost:5000/bus/"+busid)
        .then((res)=>{return res.json()})
        .then((bus)=>{
            setBus(bus);
            setLoading(false);
        })
        }, 3000);
    

      let data= JSON.parse(localStorage.getItem("userdetails"));
        setuserdetails(data);

        let date = JSON.parse(localStorage.getItem("Bookingdate"));
        setBookingdate(date);
      
    } , [])

    let handlebooking=(()=>{

        // 1) add ticket obj to active_booking key in user obj  [PUT]
        let ticket = {
            busname: bus.busname ,
            busnumber:bus.busnumber,
            seats: seats ,
            from: bus.from ,
            to:bus.to,
            start:bus.start,
            end:bus.end,
            journey_time: bus.journey_time,
            price:bus.price * seats,
            date: Bookingdate


        } 

            let UpdatedData = {
                                ...userdetails ,
                                active_bookings : [ ...userdetails.active_bookings ,ticket]
                    }

            let config = {
            method : "PUT",
            headers : {"Content-Type":"application/json"},
            body : JSON.stringify( UpdatedData )
            }

            fetch("http://localhost:5001/users/"+userdetails.id , config)
            .then(()=>{
                localStorage.setItem("userdetails", JSON.stringify(UpdatedData));
            })
             // 2) increament the booked_seats value to prv + booked seats of current user [PUT]

        let updatedBusdata = {...bus , booked_seats : Number(bus.booked_seats) + Number(seats) }

        let busConfig = {
            method : "PUT",
            headers : {"Content-Type":"application/json"},
            body : JSON.stringify( updatedBusdata )
        }

        fetch("http://localhost:5000/bus/"+busid , busConfig)
        .then(()=>{
            toaster.addToast("Ticket confirme, verify once in profile ","success", { autoClose: true });
            closeModal();
            navigate('/profile');
        })



            } )

    let subtitle;
  const [modalIsOpen, setIsOpen] =useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }
    return (  <div >
        <Navbar/>
       
        {loading && <PuffLoader color="crimson" />}
         
        <div id="mainpage">
            
        {bus && 
            <div>
                <div>
                <h1>Journey from <span>{bus.from}</span> to <span>{bus.to}</span> </h1>
                <h2>{bus.busname}  {bus.type}</h2>
                <p>{bus.busnumber}</p>
                <p>Total capacity : {bus.seats} </p>
                <p>Available Seats: {bus.seats - bus.booked_seats} </p>
                <p>Boarding : <span>{bus.from} - {bus.start}</span></p>
                <p>Destination : <span>{bus.to} - {bus.end}</span></p>
                <p className="price">{bus.price} Rupees  / ticket  </p><br />
                <input id="num" type="number" min="1" max={bus.seats - bus.booked_seats}
                value={seats} onChange={(e)=>{setSeats(e.target.value)}}/>
                <h2>Total Price - <span>{seats * bus.price}</span>  </h2>
                <button className="ticket-btn" onClick={openModal} >Book ticket</button>
                </div>
                <div className="bus">
                </div>    
            </div>
            }


            <div>
            <fieldset  > 

                <legend>Booking details</legend>


            <div id="sub">
                <fieldset>
                    <legend>LEFT    </legend>
                    <div id="right">
                        <div>
                        <input type="checkbox" name="" id="" /> <input type="checkbox" name="" id="" />
                        </div>
                        <div>
                        <input type="checkbox" name="" id="" /> <input type="checkbox" name="" id="" />
                        </div>
                        <div>
                        <input type="checkbox" name="" id="" /> <input type="checkbox" name="" id="" />
                        </div>
                        <div>
                        <input type="checkbox" name="" id="" /> <input type="checkbox" name="" id="" />
                        </div>
                        <div>
                        <input type="checkbox" name="" id="" /> <input type="checkbox" name="" id="" />
                        </div>
                        <div>
                        <input type="checkbox" name="" id="" /> <input type="checkbox" name="" id="" />
                        </div>
                        <div>
                        <input type="checkbox" name="" id="" /> <input type="checkbox" name="" id="" />
                        </div>
                        <div>
                        <input type="checkbox" name="" id="" /> <input type="checkbox" name="" id="" />
                        </div>
                        
                   
                   
                    </div> 
                </fieldset>
              
                <fieldset>
                    <legend>RIGHT    </legend>
                    <div id="right">
                        <div>
                        <input type="checkbox" name="" id="" /> <input type="checkbox" name="" id="" /><input type="checkbox" name="" id="" />
                        </div>
                        <div>
                        <input type="checkbox" name="" id="" /> <input type="checkbox" name="" id="" /><input type="checkbox" name="" id="" />
                        </div>
                        <div>
                        <input type="checkbox" name="" id="" /> <input type="checkbox" name="" id="" /><input type="checkbox" name="" id="" />
                        </div>
                        <div>
                        <input type="checkbox" name="" id="" /> <input type="checkbox" name="" id="" /><input type="checkbox" name="" id="" />
                        </div>
                        <div>
                        <input type="checkbox" name="" id="" /> <input type="checkbox" name="" id="" /><input type="checkbox" name="" id="" />
                        </div>
                        <div>
                        <input type="checkbox" name="" id="" /> <input type="checkbox" name="" id="" /><input type="checkbox" name="" id="" />
                        </div>  <div>
                        <input type="checkbox" name="" id="" /> <input type="checkbox" name="" id="" /><input type="checkbox" name="" id="" />
                        </div>
                        <div>
                        <input type="checkbox" name="" id="" /> <input type="checkbox" name="" id="" /><input type="checkbox" name="" id="" />
                        </div>
                        
                    </div>
                </fieldset>
            </div> <br /><br />
            <div id="total">
            <input type="number" name="number" id="" min="1" max="30" /> 
            <input type="text" placeholder="Total amount" /> <br />
            <button>Payment</button>
            </div>
            
            </fieldset> 
            </div>
            </div>

           {bus&& <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal">
                <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Pasangername:{userdetails.name}</h2>
                <p>PHNO :{userdetails.number}</p>
                <p>{bus.busname}  - {bus.busnumber}</p>
                <p>Date:{Bookingdate}</p>
                <p>{bus.from} - {bus.start} to {bus.to} - {bus.end} </p>
                <p>Seats selected :{seats}  Total Amount :{seats*bus.price}, &#8377;</p>
                <input type="number" placeholder="Enter the number in rupes" />



                <button onClick={handlebooking}>Pay</button>
                
                    
               
            </Modal>}
        

    </div> );
}
 
export default Bookticket;