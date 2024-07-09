import React, { useState, useEffect } from "react";
import repositoryMyClients from "src/models/repositories/myClients.repository";
import { Client } from "src/types/clients";

export function useServicesProvided() {
  const [clients, setClients] = useState<Client[]>([]);

  async function fetchClients() {
    const clientsData = await repositoryMyClients.fetchMyClients();
    setClients(clientsData);
  }

  useEffect(() => {
    fetchClients();
  }, []);

  return {
    clients,
  };
}
