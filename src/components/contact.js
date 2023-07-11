import React, { useEffect, useState } from 'react';
import './contact.scss';

const Contact = () => {



  return (
 <div className='contact'>
    <div className='container'>
        <div className='row justify-content-center'>
            <form>
                <div className='col-12 col-md-6'>
                    <div className='form-group'>
                    <label for="Name"> Name</label>
                    <input type='text' placeholder=''/> 
                    </div>
                </div>
            </form>
        </div>
    </div>
 </div>
  );
};

export default Contact;
