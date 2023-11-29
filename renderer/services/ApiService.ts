export class ApiService{

  static api: string = 'https://pr.staging.gcirisk.com.br'

  public static async getUser(token: string){

    const options = {
      headers: { authorization: (token as string) }
    }

    const res = await fetch(`/api/user`, options)

    if(res.ok){
      const data = await res.json()
      localStorage.setItem('user', JSON.stringify(data))
    }

  }
}