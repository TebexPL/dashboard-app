import React, { useState } from 'react';
import Calendar from 'react-calendar';
import "./Calendar.css";


const style={
  margin:'10px',
  backgroundColor:'white',
  borderRadius: '5px',
  padding: '10px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}


export function MyCalendar(props) {
   const [value, onChange] = useState(new Date());
   const [singleDate, setSingleDate] = useState(false);

   const getFullDate = () => {
       return value.getDate() + ' ' + (value.getMonth() + 1) + ' ' + value.getFullYear();
   }

   const setDate = (value) => {
       onChange(value);
       setSingleDate(true);
       let date = new Date();
       date.setDate(value.getDate())
       date = date.toISOString().substr(0, 10);
       props.getData(date)
   }

   return (
       <div style={style}>

           <Calendar className='calendar'
               onChange={setDate}
               value={value}
           />

         {singleDate
              ?
              (
                <div style={{marginTop:'5px', display:'flex', flexDirection: 'column'}}>
                <div>{"Chosen date: "+getFullDate()}</div>
                <button type="button" className="btn btn-secondary"
                   onClick={() => {props.getAllData(); setSingleDate(false);}}>
                   Reset
                </button>
                </div>
              )
              :
              <div></div>
          }
       </div>
   );
}
