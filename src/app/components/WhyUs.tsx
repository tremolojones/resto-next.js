import React from 'react';
import './whyUs.css';
import WhyUsCard from './WhyUsCard';
import SectionTitle from './SectionTitle';

// Définition de l'interface pour les items
interface WhyUsItem {
  id: number;
  title: string;
  content: string;
}

async function getWhyUsData(): Promise<WhyUsItem[]> {
  try {
    const res = await fetch('http://localhost:3000/api/whyus');
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    return await res.json();
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
}

export default async function WhyUs() {
  const items: WhyUsItem[] = await getWhyUsData();

  return (
    <section id="why-us" className="why-us">
      <div className="container">
        <SectionTitle title="Why Us" subtitle="Why Choose Our Restaurant" />

        <div className="row">
          {items && items.length > 0 ? (
            items.map((item: WhyUsItem) => (
              <WhyUsCard key={item.id} item={item} />
            ))
          ) : (
            <p>No items available.</p> // Optionnel: pour afficher un message si items est vide
          )}
        </div>
      </div>
    </section>
  );
}
