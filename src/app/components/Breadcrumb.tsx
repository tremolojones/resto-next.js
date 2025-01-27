import React from 'react';
import Link from 'next/link';
import './breadcrumb.css';

export default function Breadcrumb({ page} : { page: string }) {
  return (
  <section className='breadcrumbs'>
    <div className='container'>
      <h2 className='d-flex justify-content-center'>
        {page}</h2>
       <ol>
        <li>
         <Link href="/">
         <i className='bi bi-house-door-fill'></i>
         </Link>            
        </li>
        <li>{page}</li>
       </ol>

    </div>

  </section>
  )
}
