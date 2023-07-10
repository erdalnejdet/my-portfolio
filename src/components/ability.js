import React, { useEffect, useState } from 'react';
import './skils.scss';

const Skils = () => {
  const [skills, setSkills] = useState([
    { name: 'HTML', percentage: 100 },
    { name: 'CSS/SCSS', percentage: 100 },
    { name: 'JAVASCRİPT', percentage: 85 },
    { name: 'Boostrap', percentage: 85 },
    { name: 'React', percentage: 85 },
    { name: 'Wordpress', percentage: 85 }
  ]);

  useEffect(() => {
    const bars = document.querySelectorAll('.skils-box-bar');
    bars.forEach((bar, index) => {
      const percentage = skills[index].percentage;
      bar.style.width = `${percentage}%`;
      bar.innerHTML = `${percentage}%`;
    });
  }, [skills]);

  return (
    <div className="skils">
      <div className="container">
        <h2><span>abilities</span></h2>
        <div className="row">
          {skills.map((skill, index) => (
            <div key={index} className="col-6 col-md-6 col-lg-4">
              <div className='skils-box'>
                <h3>{skill.name}</h3>
                <div className='skils-box-bar'></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skils;
