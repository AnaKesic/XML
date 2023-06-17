import React, { Component } from 'react';
import axios from 'axios'
import classes from '../Flights/allFights/Flight.module.css'
import { format, parse } from 'date-fns';
import { connect } from 'react-redux';
 class Tickets extends Component {
    state={

        
        flights:[]
     }

     componentDidMount() {
      var id= localStorage.userId;
      console.log(id);
      axios.get('http://localhost:8082/api/Ticket/allByUser',{
        params: {
            user:id
        },
    })
        .then(res => {
          const fli=res.data;
          this.setState({flights:fli})
          //this.state.flights=res.data;
          console.log(this.state)
        });

        

        }
   

   
  
  

    render() {
     const { flights} = this.state;
    
            
                    
     return(    
    
      <React.Fragment>

     
       
      {flights.map(user => {
             const { airportDeparture,airportDestination,arrivalTime,capacity,deleted, departureTime,duration,id,ticketPrice}=user;
             var d1= new Date(arrivalTime);
             const datearr= format(d1,"dd.MM.yyyy");
             const timearr=format(d1,"hh:mm");

             var d2=new Date(departureTime);
             const datedep= format(d2,"dd.MM.yyyy");
             const timedep=format(d2,"hh:mm");
     return(<div className={classes.flightcard}>
     
      <div className={classes.flightcardcontent}>
        <div className={classes.flightrow}>
          <div className={classes.flightfrom}>
            <span className={classes.fromcode}>{airportDeparture.name}</span>
            <span className={classes.fromcity}>Departure date: {datearr}</span>
            <span className={classes.fromcity}>Departure time: {timedep}</span>
          </div>
          <div className={classes.plane}>
            <img src="https://cdn.onlinewebfonts.com/svg/img_537856.svg" alt=""/>
          </div>
          <div className={classes.flightto}>
            <span className={classes.tocode}>{airportDestination.name}</span>
            <span className={classes.tocity}>Arrival date: {datearr}</span>
            <span className={classes.tocity}>Arrival time: {timearr}</span>
          </div>
        </div>
        
        <div className={classes.flightdetailsrow}>
                    <div className={classes.flightoperator}>
                           <span className={classes.title}></span>
                          
                    </div>
                    <div className={classes.flightnumber}>
                           <span className={classes.title}>Price: {ticketPrice}</span>
                           {/* <span className={classes.detail}>{ticketPrice}</span> */}
                    </div>
                    <div className={classes.flightclass}>
                     {(this.props.isAuthenticated && this.props.isUser)?  <button className={classes.btnn} onClick={() => this.handleAdd(user)}>Buy ticket</button> :null }
                          
                    </div>
                    
       
     
 </div> 
 </div>
 </div>

) })}
 </React.Fragment>
 
);

                     
                    


            
              
  
   }



}

export default (Tickets)
