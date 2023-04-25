import React, { useState } from 'react';
import ReactCalendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import moment from 'moment/moment';
import "./calendar.css";

function Calendar() {
  const dateSet=new Set();
  const [value,setValue] = useState(new Date());
  const [mark, setMark]=useState(dateSet);
  const onClickDay=(v,event)=>{
    const val=moment(v).format("YYYY-MM-DD");
    if(mark.has(val)){
      if(val===moment(new Date()).format("YYYY-MM-DD")){
        event.currentTarget.style.background='rgb(255,196,14)';
      }
      else{
        event.currentTarget.style.background='white';
      }
      event.currentTarget.style.color="black";
      setMark(prevMark=>{
        prevMark.delete(val);
        return prevMark;
      });
    }
    else{
      event.currentTarget.style.background='lightGreen';
      event.currentTarget.style.color="white";
      event.currentTarget.style.fontWeight='normal';
      setMark(prevMark=>{
        prevMark.add(val);
        return prevMark;
    });}
  }
  return (
    <div>
      <ReactCalendar onChange={setValue} value={value} onClickDay={onClickDay} tileContent={({date,view})=>{
       if (mark.size>0 && mark.has(moment(date).format("YYYY-MM-DD"))) {
        return (
         <>
           <div style={{height:"100%", width:"100%"}}></div>
         </>
       );
      }}}/>
    </div>
  );
}
export default Calendar;
