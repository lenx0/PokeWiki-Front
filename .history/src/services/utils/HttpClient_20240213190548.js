class HttpClient {

  async getData(url, filter) {
    let raw = JSON.stringify({
      filter,
      option: {},
      page: 1,
      pageSize: 1000
    })

    let requestOptions = {
      method: 'GET',
      body: raw,
      redirect: 'follow'
    }

    const response = await fetch(url, requestOptions)
    return response.json()
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