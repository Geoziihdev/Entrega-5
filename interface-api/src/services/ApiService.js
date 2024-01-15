// ApiService.js
const ApiService = {
    getDestinations: async () => {
      try {
        const response = await fetch('url_da_sua_api/destinations');
        const data = await response.json();
        return data;
      } catch (error) {
        console.error('Erro ao buscar destinos de viagens:', error);
        throw error; // Lançar o erro novamente para que seja tratado onde a função for chamada
      }
    },
    // Adicione mais métodos conforme necessário
  };
  
  export default ApiService;
  
