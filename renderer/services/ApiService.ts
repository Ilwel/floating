export class ApiService{

  public static async getUser(token: string){

    const options = {
      headers: { 'Authorization': (token as string) }
    }

    const res = await fetch(`${process.env.ENDPOINT}/api/users/usuario_logado`, options)
    console.log(res)

  }
}