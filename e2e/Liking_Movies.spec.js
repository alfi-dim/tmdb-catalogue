/* eslint-disable no-undef */
Feature('Liking Movies');

Before(({ I }) => {
  I.amOnPage('/#/like');
});
Scenario('showing empty liked movie', ({ I }) => {
  I.seeElement('#query');
  I.see('Tidak ada film untuk ditampilkan', '.movie-item__not__found');
});

Scenario('Liking one movie', ({ I }) => {
  I.see('tidak ada film untuk ditampilkan', '.movie-item__not__found');

  I.amOnPage('/');
});
