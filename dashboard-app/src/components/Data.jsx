import React from 'react';
import {useEffect, useState} from "react";

const styles = {
   backgroundColor: '#FFF',
   color: 'black',
   float: 'left',
   width: '320px',
   margin: '10px',
   borderRadius: '5px'
};

export default function Data(props) {

   return (<div className="container-fluid" >
       <div className="row">
           <div className="col-3" style={styles}>
               <h1>Current state:</h1>
               <ul>
                   <li>Temp: {props.data==null?"Unknown":props.data.temp}</li>
                   <li>Humidity: {props.data==null?"Unknown":props.data.humidity}</li>
                   <li>Pressure: {props.data==null?"Unknown":props.data.pressure}</li>
               </ul>
           </div>
       </div>
   </div>);
}
