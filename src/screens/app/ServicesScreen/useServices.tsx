import React from "react";

export function useServices() {
  const servicesData = [
    { id: 1, stars: '4.8 (87)', service: "AC Check-Up", description: 'Starts From', value: '$128' },
    { id: 2, stars: '4.8 (87)', service: "AC Check-Up", description: 'Starts From', value: '$128' },
    { id: 3, stars: '4.8 (87)', service: "AC Check-Up", description: 'Starts From', value: '$128' },
    { id: 4, stars: '4.8 (87)', service: "AC Check-Up", description: 'Starts From', value: '$128' },
    { id: 5, stars: '4.8 (87)', service: "AC Check-Up", description: 'Starts From', value: '$128' },
  ];

  return {
    servicesData
  }
}