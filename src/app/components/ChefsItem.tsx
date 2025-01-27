import React from 'react';
import  './chefsItem.css';

export default function ChefsItem({
  item,
}: {
  item: {
    id: number;
    name: string;
    photo: string; // Utilisation de 'photo' uniquement
    position: string;
    delay: string;
  };
}) {
  return (
    <div className="col-lg-3 col-md-6">
      <div className="chef-member" data-aos="fade-up" data-aos-delay={item.delay}>
        {/* Image du chef */}
        <img src={item.photo} className="img-fluid" alt={`${item.name} - ${item.position}`} />
        
        {/* Informations du chef */}
        <div className="member-info">
          <h4>{item.name}</h4>
          <span>{item.position}</span>
        </div>
        
        {/* Icônes des réseaux sociaux */}
        <div className="social">
          <a href="#" aria-label="Twitter">
            <i className="bi bi-twitter"></i>
          </a>
          <a href="#" aria-label="Facebook">
            <i className="bi bi-facebook"></i>
          </a>
          <a href="#" aria-label="Instagram">
            <i className="bi bi-instagram"></i>
          </a>
          <a href="#" aria-label="LinkedIn">
            <i className="bi bi-linkedin"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
