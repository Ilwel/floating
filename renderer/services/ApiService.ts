export class ApiService{

  static api: string = 'https://pr.staging.gcirisk.com.br/api'

  public static async getUser(token: string){

    const options = {
      headers: { authorization: (token as string) }
    }

    const res = await fetch(`${this.api}/users/usuario_logado`, options)

    if(res.ok){
      const data = await res.json()
      localStorage.setItem('user', JSON.stringify(data))
    }

  }

  public static async listVehicles(token:string, plate: string){
    
    const options = {
      headers: { authorization: (token as string) }
    }

    const res = await fetch(`${this.api}/veiculos?_search=false&nd=1698927680302&rows=5&page=1&sidx=id&sord=asc&placa=${plate}`, options)

    if(res.ok){
      const data = await res.json()
      return data.rows
    }
  
  }
}