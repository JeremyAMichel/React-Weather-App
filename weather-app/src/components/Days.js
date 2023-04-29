import React from 'react';
import '../styles/Days.css';

function Days() {

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
        <a href="#" className='actual-day'>{currentAndFourNextDaysNames[0]}</a>
        <a href="#">{currentAndFourNextDaysNames[1]}</a>
        <a href="#">{currentAndFourNextDaysNames[2]}</a>
        <a href="#">{currentAndFourNextDaysNames[3]}</a>
        <a href="#">{currentAndFourNextDaysNames[4]}</a>
    </div>
  )
}

export default Days