class HttpClient {
  async getData(url, filter) {
    try {
      const queryParams = new URLSearchParams({
        filter,
        option: {},
        page: 1,
        pageSize: 1000
      });
      const urlWithParams = `${url}?${queryParams.toString()}`;
  
      const response = await fetch(urlWithParams);
  
      if (!response.ok) {
        throw new Error(`Erro ao obter os dados: ${response.status}`);
      }
  
      return response.json();
    } catch (error) {
      console.error('Erro ao realizar a requisição:', error);
      throw error; // Propaga o erro para que o chamador possa lidar com ele
    }
  }

  async getDataDetails(url, filter) {
    try {
      let raw = JSON.stringify({
        filter,
        option: {},
        page: 1,
        pageSize: 100
      })
  
      let requestOptions = {
        method: 'GET',
        body: raw,
        redirect: 'follow'
      }
  
      const response = await fetch(url, requestOptions);
  
      if (!response.ok) {
        throw new Error(`Erro ao obter os detalhes: ${response.status}`);
      }
  
      return response.json();
    } catch (error) {
      console.error('Erro ao realizar a requisição:', error);
      throw error;
    }
  }
}

export default new HttpClient();
