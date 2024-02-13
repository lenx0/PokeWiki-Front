class HttpClient {
  async getData(url, filter) {
    // Construindo a URL com os parâmetros de consulta
    const queryParams = new URLSearchParams({
        filter,
        option: {},
        page: 1,
        pageSize: 1000
    });
    const urlWithParams = `${url}?${queryParams.toString()}`;

    const response = await fetch(urlWithParams);
    return response.json();
}


  async getDataDetails(url, filter) {
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

    const response = await fetch(url, requestOptions)
    return response.json()
  }
}

export default new HttpClient()