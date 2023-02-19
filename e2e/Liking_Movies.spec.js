/* eslint-disable no-undef */

const assert = require('assert');

Feature('Liking Movies');

Before(({ I }) => {
  I.amOnPage('/#/like');
});
Scenario('showing empty liked movie', ({ I }) => {
  I.seeElement('#query');
  I.see('Tidak ada film untuk ditampilkan', '.movie-item__not__found');
});

Scenario('Liking one movie', async ({ I }) => {
  I.see('Tidak ada film untuk ditampilkan', '.movie-item__not__found');

  I.amOnPage('/');

  I.waitForElement('.movie__title a', 10);

  I.seeElement('.movie__title a');
  const firstFilm = locate('.movie__title a').first();
  const firstFilmTitle = await I.grabTextFrom(firstFilm);
  I.click(firstFilm);

  I.waitForElement('#likeButton', 10);
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/like');
  I.seeElement('.movie-item');
  const likedFilmTitle = await I.grabTextFrom('.movie__title');
  assert.strictEqual(firstFilmTitle, likedFilmTitle);
});
