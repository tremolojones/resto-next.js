import React from 'react';
import './specialsItem.css';

export default function SpecialsItem({ item }: { item: {
  id: number;
  image: string;
  title: string;
  subtitle: string;
  content: string;
  active: boolean;
} }) {
  return (
    <div className={`tab-pane ${item.active ? 'active show' : ''}`} 
    id={`tab-${item.id.toString()}`}>
      <div className="row">
        <div className='col-lg-6 details order-2 order-lg-1'>
          <h3>{item.title}</h3>
          <p className='fst-italic'>{item.subtitle}</p>
          <p>{item.content}</p>
        </div>
        <div className='col-lg-6 text-center order-1 order-lg-2'>
          <img src={item.image} alt={item.title} className='img-fluid w-50 mx-auto d-block specials-img' />
        </div>
      </div>
    </div>
  );
}
