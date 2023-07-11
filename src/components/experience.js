import React, { useEffect, useState } from 'react';
import './experience.scss';

const Experience = () => {



  return (
 <div className='experince'>
    <div className='container'>
        <h2>
            <span>Experience</span>
        </h2>
        <div className='row'>
        <div className='col-12 col-md-6 col-lg-5 '>
            <div className='experince-main right'>
                <h4>
                    Vatansoft
                </h4>
                <p>
                    Stajyer
                </p>
                <span>
                    4 ay
                </span>
            </div>
        </div>
       

        </div>
        <div className='row justify-content-end '>
        <div className='col-12 col-md-6 col-lg-5 '>
        <div className='experince-main left'>
                <h4>
                    Arina Digital 
                </h4>
                <p>
                    Tamam zamanlı
                </p>
                <span>
                    Devam Ediyor
                </span>
            </div>
        </div>
        </div>
    </div>
 </div>
  );
};

export default Experience;
