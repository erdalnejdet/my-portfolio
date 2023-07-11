import React, { useEffect, useState } from 'react';
import './contact.scss';

const Contact = () => {



  return (
 <div className='contact'>
    <div className='container'>
        <h4><span>Contact</span></h4>
        <div className='row justify-content-center'>
           <div className='col-12 col-md-8'>
           <form>
                <div className='row'>
                <div className='col-12 col-md-6'>
                    <div className='form-group'>
                    <label for="Name"> Name</label>
                    <input type='text' placeholder=''/> 
                    </div>
                </div>
                <div className='col-12 col-md-6'>
                    <div className='form-group'>
                    <label for="Name"> Surname</label>
                    <input type='text' placeholder=''/> 
                    </div>
                </div>
                <div className='col-12 col-md-6'>
                    <div className='form-group'>
                    <label for="Name"> Phone</label>
                    <input type='text' placeholder=''/> 
                    </div>
                </div>
                <div className='col-12 col-md-6'>
                    <div className='form-group'>
                    <label for="Name"> Email</label>
                    <input type='text' placeholder=''/> 
                    </div>
                </div>
                <div className='col-12  '>
                    <div className='form-group'>
                    <label for="Name"> Message</label>
                    <textarea></textarea>
                    </div>
                </div>
                <div className='col-12'>
                    <button type='submit'>Send</button>
                </div>
                </div>
            </form>
           </div>
        </div>
    </div>
 </div>
  );
};

export default Contact;
