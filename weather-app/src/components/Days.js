import React from 'react';
import '../styles/Days.css';
import '../components/App';

function Days({ getDataOfClickedDay }) {

    const weekDays = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
    ];

    const today = new Date();

    const currentAndFourNextDaysNames = [
        weekDays[today.getDay()],
        weekDays[(today.getDay()+1)>6 ? (today.getDay()+1)-7 : (today.getDay()+1)],
        weekDays[(today.getDay()+2)>6 ? (today.getDay()+2)-7 : (today.getDay()+2)],
        weekDays[(today.getDay()+3)>6 ? (today.getDay()+3)-7 : (today.getDay()+3)],
        weekDays[(today.getDay()+4)>6 ? (today.getDay()+4)-7 : (today.getDay()+4)]
    ];

    

  return (
    <div className="card-action">
        <a id="day-0" className='actual-day' onClick={() =>{getDataOfClickedDay(0, true)}}>{currentAndFourNextDaysNames[0]}</a>
        <a id="day-1" onClick={() =>{getDataOfClickedDay(1, false)}}>{currentAndFourNextDaysNames[1]}</a>
        <a id="day-2" onClick={() =>{getDataOfClickedDay(2, false)}}>{currentAndFourNextDaysNames[2]}</a>
        <a id="day-3" onClick={() =>{getDataOfClickedDay(3, false)}}>{currentAndFourNextDaysNames[3]}</a>
        <a id="day-4" onClick={() =>{getDataOfClickedDay(4, false)}}>{currentAndFourNextDaysNames[4]}</a>
    </div>
  )
}

export default Days