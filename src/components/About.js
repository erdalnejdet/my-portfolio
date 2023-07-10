import React, { useEffect, useState } from 'react';
import './about.scss';

const About = () => {
  const [typedText, setTypedText] = useState('');
  const texts = ['Nejdet', 'Front-End Developer', ''];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setTypedText((prevText) => {
        if (!isDeleting) {
          // Yazma aşaması
          if (prevText === texts[currentIndex]) {
            setIsDeleting(true); // Silme aşamasına geçiş
            return prevText;
          } else {
            return texts[currentIndex].substring(0, prevText.length + 1);
          }
        } else {
          // Silme aşaması
          if (prevText === '') {
            setIsDeleting(false); // Yazma aşamasına geçiş
            setCurrentIndex((prevIndex) =>
              prevIndex === texts.length - 1 ? 0 : prevIndex + 1
            ); // Son kelimeye geldiğinde başa dönme
            return '';
          } else {
            return prevText.substring(0, prevText.length - 1);
          }
        }
      });
    }, 150); // Yazma ve silme hızını istediğiniz gibi ayarlayabilirsiniz

    return () => clearInterval(interval);
  }, [currentIndex, isDeleting, texts]);

  return (
    <div className="about">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 col-lg-6">
            <img src="./images/main.jpg" alt="" />
          </div>
          <div className="col-12 col-md-6 col-lg-6">
            <div className='about-main'>
            <h1>Hi I'M Nejdet <br/><span></span></h1><br></br>
             <p>
             Hello, my name is Nejdet. I am graduated from the department of Computer Programming in Namık Kemal University. I am in the process to develop myself in the field of Front-end developer. The languages which I am using at the present time are Html css js jquery scss boostrap, Reactjs vuejs. I am continuing to develop myself.
             </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
