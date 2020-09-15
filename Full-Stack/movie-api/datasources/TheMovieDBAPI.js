const { RESTDataSource } = require('apollo-datasource-rest');


class TheMovieDBAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://api.themoviedb.org/3/'
  }

  async getMovieDetails(id) {
    return this.get(
      `movie/${id}`,
      { 
        api_key: process.env.THE_MOVIE_DB_KEY
      }
    )
  }
}

module.exports = TheMovieDBAPI;
