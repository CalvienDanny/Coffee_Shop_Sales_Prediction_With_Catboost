import React from 'react';
import {BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, 
  BsListCheck, BsMenuButtonWideFill, BsFillGearFill}
 from 'react-icons/bs';
import { Link } from 'react-router-dom';

function Sidebar({openSidebarToggle, OpenSidebar}) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
        <div className='sidebar-title'>
            <div className='sidebar-brand'>
                <BsCart3  className='icon_header'/> KopiCast
            </div>
            <span className='icon close_icon' onClick={OpenSidebar}>X</span>
        </div>

        <ul className='sidebar-list'>
            <li className='sidebar-list-item'>
                <Link to="/">
                    <BsGrid1X2Fill className='icon'/> Home
                </Link>
            </li>
            <li className='sidebar-list-item'>
                <Link to="/recomendation">
                    <BsFillArchiveFill className='icon'/> Recommendation
                </Link>
            </li>
            <li className='sidebar-list-item'>
                <Link to="/kalender">
                    <BsFillGrid3X3GapFill className='icon'/> Calendar
                </Link>
            </li>
            <li className='sidebar-list-item'>
                <a href="http://localhost:3000/">
                    <BsPeopleFill className='icon'/> Prediction
                </a>
            </li>
            <li className='sidebar-list-item'>
                <Link to="/aboutus">
                    <BsListCheck className='icon'/> About Us
                </Link>
            </li>
            <li className='sidebar-list-item'>
                <Link to="/report">
                    <BsMenuButtonWideFill className='icon'/> Reports
                </Link>
            </li>
            <li className='sidebar-list-item'>
                <Link to="/setting">
                    <BsFillGrid3X3GapFill className='icon'/> Settings
                </Link>
            </li>
        </ul>
    </aside>
  )
}

export default Sidebar