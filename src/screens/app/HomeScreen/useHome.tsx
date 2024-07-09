import { useState } from 'react';

export function useHome() {
  const data = [
    { titleOffer: 'Get 25%', categorie: 'Offer AC Service', color: '#6A9B7E50' },
    { titleOffer: 'Get 15%', categorie: 'Offer Beauty', color: '#83C1DE50' },
    { titleOffer: 'Get 24%', categorie: 'Offer AC Service', color: '#CABDFF50' },
    { titleOffer: 'Get 24%', categorie: 'Offer Applice', color: '#FFD88D50' },
    { titleOffer: 'Get 24%', categorie: 'Offer AC Service', color: '#6A9B7E50' },
  ]

  return {
    data,
  };
}
