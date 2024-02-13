class HttpClient {
//   constructor() {
//     let myHeaders = new Headers()
//     myHeaders.append('Authorization', `Bearer ${hasCookie}`)
//     myHeaders.append('Content-Type', 'application/json')
//     myHeaders.append('ApiKey', process.env.NEXT_PUBLIC_API_KEY)
//     myHeaders.append('Access-Control-Allow-Origin', 'https://vendas.altogiro.net')
//     this.myHeaders = myHeaders
//   }

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
      method: 'POST',
      headers: this.myHeaders,
      body: raw,
      redirect: 'follow'
    }

    const response = await fetch(url, requestOptions)
    return response.json()
  }

  async createData(url, data) {
    let raw = JSON.stringify({
      ...data
    })

    let requestOptions = {
      method: 'POST',
      headers: this.myHeaders,
      body: raw,
      redirect: 'follow'
    }

    const response = await fetch(url, requestOptions)

    return response.json()
  }

  async getRefData(url, tableCode, refCode) {
    let raw = JSON.stringify({
      priceTableCode: tableCode,
      referenceCode: refCode
    })

    let requestOptions = {
      method: 'POST',
      headers: this.myHeaders,
      body: raw,
      redirect: 'follow'
    }

    const response = await fetch(url, requestOptions)

    return response.json()
  }

  async getRefDataQuickOrder(url, tableCode, refCode) {
    let raw = JSON.stringify({
      filter: {
        priceTableCodeList: [tableCode],
        exprList: [refCode]
      },
      option: {}
    })

    let requestOptions = {
      method: 'POST',
      headers: this.myHeaders,
      body: raw,
      redirect: 'follow'
    }

    const response = await fetch(url, requestOptions)

    return response.json()
  }

  async updateData(url, data) {
    let raw = JSON.stringify({
      ...data
    })

    let requestOptions = {
      method: 'POST',
      headers: this.myHeaders,
      body: raw,
      redirect: 'follow'
    }

    const response = await fetch(url, requestOptions)

    return response.json()
  }

  async createData(url, data) {
    let raw = JSON.stringify(data)

    let requestOptions = {
      method: 'POST',
      headers: this.myHeaders,
      body: raw,
      redirect: 'follow'
    }

    const response = await fetch(url, requestOptions)

    return response.json()
  }
}

export default new HttpClient()