import { Api } from "@services/api";
import { ApiResponse, Client } from "src/types/clients";

const repositoryMyClients = {
  fetchMyClients: async (): Promise<Client[]> => {
    try {
      const url = `https://randomuser.me/api/?results=20`;
      const response = await Api.get<ApiResponse>(url);

      if (response.data && response.data.results) {
        return response.data.results;
      } else {
        console.log("Nenhum resultado encontrado");
        return [];
      }
    } catch (error) {
      console.error("Erro ao buscar clientes:", error);
      return [];
    }
  },
};

export default repositoryMyClients;
