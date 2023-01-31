import TheMovieDbSource from '../../data/themoviedb-soruce';
import { createMovieItemTemplate } from '../templates/template-creator';

const NowPlaying = {
  async render() {
    return `
            <div class="content">
              <h2 class="content_heading">Now Playing</h2>
              <div id="movies" class="movies">
              </div>
            </div>
        `;
  },

  async afterRender() {
    const movies = await TheMovieDbSource.nowPlayingMovies();
    const moviesContainer = document.querySelector('#movies');
    movies.forEach((movie) => {
      moviesContainer.innerHTML += createMovieItemTemplate(movie);
    });
  },
};

export default NowPlaying;
