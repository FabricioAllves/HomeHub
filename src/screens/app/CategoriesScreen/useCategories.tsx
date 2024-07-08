import { IconName } from "@components";
import React from "react";

type CategoryData = {
  id: number,
  name: string,
  icon: IconName,
  color: string
}[];

export function useCategories() {
  const categoriesData: CategoryData = [
    { id: 1, name: "AC Repair", icon: "AcRepair", color: '#FFBC99' },
    { id: 2, name: "Beauty", icon: "Categorie1", color: '#CABDFF' },
    { id: 3, name: "Appliance", icon: "Categorie2", color: '#B1E5FC' },
    { id: 4, name: "Painting", icon: "Categorie3", color: '#B5EBCD' },
    { id: 5, name: "Cleaning", icon: "Categorie4", color: '#FFD88D' },
    { id: 6, name: "Plumbing", icon: "Categorie5", color: '#CBEBA4' },
    { id: 7, name: "Electronics", icon: "Categorie6", color: '#FB9B9B' },
    { id: 8, name: "Shifting", icon: "Categorie7", color: '#F8B0ED' },
    { id: 9, name: "Men's Salon", icon: "Categorie8", color: '#AFC6FF' },
  ];

  return {
    categoriesData
  }
}