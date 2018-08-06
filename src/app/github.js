class Github {

  constructor(clientId, clientSecret) {
    this.clientId = clientId
    this.clientSecret = clientSecret
    this.repos_count = 7
    this.repos_sort = "created: asc"
  }

  async fetchUser(user) {
    const userDataRequest = await fetch(`https://api.github.com/users/${user}?client_id=${this.clientId}&client_secret=${this.clientSecret}`)
    const repositoriesRequest = await 
    fetch(`https://api.github.com/users/${user}/repos?client_id=${this.clientId}&client_secret=${this.clientSecret}&per_page=${this.repos_count}&sort=${this.repos_sort}`)
    const repositories = await repositoriesRequest.json()
    const userData = await userDataRequest.json()
    return {
      repositories,
      userData
    }
  }

}

module.exports = Github