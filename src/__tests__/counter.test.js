/**
 * @jest-environment jsdom
 */

import movieCounter from '../modules/movieCounter.js';
import { displayMovies } from '../modules/display.js';
import { getAllMovies } from '../modules/utils.js';

const data = [{
  score: 0.90897137,
  show: {
    id: 139,
    url: 'https://www.tvmaze.com/shows/139/girls',
    name: 'Girls',
    type: 'Scripted',
    language: 'English',
    genres: ['Drama', 'Romance'],
    status: 'Ended',
    runtime: 30,
    averageRuntime: 30,
    premiered: '2012-04-15',
    ended: '2017-04-16',
    officialSite: 'http://www.hbo.com/girls',
    schedule: { time: '22:00', days: ['Sunday'] },
    rating: { average: 6.7 },
    weight: 97,
    network: {
      id: 8, name: 'HBO', country: { name: 'United States', code: 'US', timezone: 'America/New_York' }, officialSite: 'https://www.hbo.com/',
    },
    webChannel: null,
    dvdCountry: null,
    externals: { tvrage: 30124, thetvdb: 220411, imdb: 'tt1723816' },
    image: { medium: 'https://static.tvmaze.com/uploads/images/medium_portrait/31/78286.jpg', original: 'https://static.tvmaze.com/uploads/images/original_untouched/31/78286.jpg' },
    summary: '<p>This Emmy winning series is a comic look at the assorted humiliations and rare triumphs of a group of girls in their 20s.</p>',
    updated: 1611310521,
    _links: { self: { href: 'https://api.tvmaze.com/shows/139' }, previousepisode: { href: 'https://api.tvmaze.com/episodes/1079686' } },
  },
}, {
  score: 0.8865483,
  show: {
    id: 41734,
    url: 'https://www.tvmaze.com/shows/41734/girls',
    name: 'GIRLS',
    type: 'Scripted',
    language: 'Mongolian',
    genres: ['Comedy'],
    status: 'Ended',
    runtime: 41,
    averageRuntime: null,
    premiered: null,
    ended: null,
    officialSite: null,
    schedule: { time: '', days: ['Thursday'] },
    rating: { average: null },
    weight: 49,
    network: {
      id: 1672, name: 'UBS', country: { name: 'Mongolia', code: 'MN', timezone: 'Asia/Ulaanbaatar' }, officialSite: null,
    },
    webChannel: null,
    dvdCountry: null,
    externals: { tvrage: null, thetvdb: null, imdb: 'tt8709752' },
    image: { medium: 'https://static.tvmaze.com/uploads/images/medium_portrait/191/478539.jpg', original: 'https://static.tvmaze.com/uploads/images/original_untouched/191/478539.jpg' },
    summary: null,
    updated: 1632080861,
    _links: { self: { href: 'https://api.tvmaze.com/shows/41734' } },
  },
}, {
  score: 0.70194256,
  show: {
    id: 49334,
    url: 'https://www.tvmaze.com/shows/49334/shining-girls',
    name: 'Shining Girls',
    type: 'Scripted',
    language: 'English',
    genres: ['Crime', 'Thriller', 'Supernatural'],
    status: 'To Be Determined',
    runtime: null,
    averageRuntime: 49,
    premiered: '2022-04-29',
    ended: null,
    officialSite: 'https://tv.apple.com/show/shining-girls/umc.cmc.22xs4xobsimzy5qqdif0rhmdy',
    schedule: { time: '', days: ['Friday'] },
    rating: { average: 7.6 },
    weight: 98,
    network: null,
    webChannel: {
      id: 310, name: 'Apple TV+', country: null, officialSite: 'https://tv.apple.com/',
    },
    dvdCountry: null,
    externals: { tvrage: null, thetvdb: 385810, imdb: 'tt2953250' },
    image: { medium: 'https://static.tvmaze.com/uploads/images/medium_portrait/406/1015813.jpg', original: 'https://static.tvmaze.com/uploads/images/original_untouched/406/1015813.jpg' },
    summary: '<p><b>Shining Girls</b> is a metaphysical thriller, which follows a Chicago reporter who survived a brutal assault only to find her reality shifting as she hunts down her attacker.</p>',
    updated: 1654448061,
    _links: { self: { href: 'https://api.tvmaze.com/shows/49334' }, previousepisode: { href: 'https://api.tvmaze.com/episodes/2272289' } },
  },
}, {
  score: 0.70178646,
  show: {
    id: 23542,
    url: 'https://www.tvmaze.com/shows/23542/good-girls',
    name: 'Good Girls',
    type: 'Scripted',
    language: 'English',
    genres: ['Drama', 'Comedy', 'Crime'],
    status: 'Ended',
    runtime: 60,
    averageRuntime: 60,
    premiered: '2018-02-26',
    ended: '2021-07-22',
    officialSite: 'https://www.nbc.com/good-girls',
    schedule: { time: '21:00', days: ['Thursday'] },
    rating: { average: 7.2 },
    weight: 97,
    network: {
      id: 1, name: 'NBC', country: { name: 'United States', code: 'US', timezone: 'America/New_York' }, officialSite: 'https://www.nbc.com/',
    },
    webChannel: null,
    dvdCountry: null,
    externals: { tvrage: null, thetvdb: 328577, imdb: 'tt6474378' },
    image: { medium: 'https://static.tvmaze.com/uploads/images/medium_portrait/297/744253.jpg', original: 'https://static.tvmaze.com/uploads/images/original_untouched/297/744253.jpg' },
    summary: '<p><b>Good Girls</b> follows three "good girl" suburban wives and mothers who suddenly find themselves in desperate circumstances and decide to stop playing it safe, and risk everything to take their power back.</p>',
    updated: 1669208118,
    _links: { self: { href: 'https://api.tvmaze.com/shows/23542' }, previousepisode: { href: 'https://api.tvmaze.com/episodes/2108575' } },
  },
}, {
  score: 0.701708,
  show: {
    id: 525,
    url: 'https://www.tvmaze.com/shows/525/gilmore-girls',
    name: 'Gilmore Girls',
    type: 'Scripted',
    language: 'English',
    genres: ['Drama', 'Comedy', 'Romance'],
    status: 'Ended',
    runtime: 60,
    averageRuntime: 60,
    premiered: '2000-10-05',
    ended: '2007-05-15',
    officialSite: null,
    schedule: { time: '21:00', days: ['Tuesday'] },
    rating: { average: 8.3 },
    weight: 97,
    network: {
      id: 5, name: 'The CW', country: { name: 'United States', code: 'US', timezone: 'America/New_York' }, officialSite: 'https://www.cwtv.com/',
    },
    webChannel: null,
    dvdCountry: null,
    externals: { tvrage: 3683, thetvdb: 76568, imdb: 'tt0238784' },
    image: { medium: 'https://static.tvmaze.com/uploads/images/medium_portrait/4/11308.jpg', original: 'https://static.tvmaze.com/uploads/images/original_untouched/4/11308.jpg' },
    summary: '<p><b>Gilmore Girls</b> is a drama centering around the relationship between a thirtysomething single mother and her teen daughter living in Stars Hollow, Connecticut.</p>',
    updated: 1618158592,
    _links: { self: { href: 'https://api.tvmaze.com/shows/525' }, previousepisode: { href: 'https://api.tvmaze.com/episodes/47639' } },
  },
}, {
  score: 0.69991565,
  show: {
    id: 42986,
    url: 'https://www.tvmaze.com/shows/42986/paper-girls',
    name: 'Paper Girls',
    type: 'Scripted',
    language: 'English',
    genres: ['Drama', 'Science-Fiction'],
    status: 'Ended',
    runtime: null,
    averageRuntime: 44,
    premiered: '2022-07-29',
    ended: '2022-07-29',
    officialSite: 'https://www.primevideo.com/detail/0SXAIJ5V3UWT5NQ8O0DV44N2F4/',
    schedule: { time: '', days: [] },
    rating: { average: 6.7 },
    weight: 92,
    network: null,
    webChannel: {
      id: 3, name: 'Prime Video', country: null, officialSite: 'https://www.primevideo.com',
    },
    dvdCountry: null,
    externals: { tvrage: null, thetvdb: 368187, imdb: 'tt10623646' },
    image: { medium: 'https://static.tvmaze.com/uploads/images/medium_portrait/417/1043587.jpg', original: 'https://static.tvmaze.com/uploads/images/original_untouched/417/1043587.jpg' },
    summary: '<p><b>Paper Girls </b>follows four young girls who, while out delivering papers on the morning after Halloween in 1988, become unwittingly caught in a conflict between warring factions of time-travelers, sending them on an adventure through time that will save the world. As they travel between our present, the past, and the future — they encounter future versions of themselves and now must choose to embrace or reject their fate. An emotional adventure in which the girls and the women they eventually become are tough, their friendships are authentic, and their journey through time is epic.</p>',
    updated: 1663799366,
    _links: { self: { href: 'https://api.tvmaze.com/shows/42986' }, previousepisode: { href: 'https://api.tvmaze.com/episodes/2342540' } },
  },
}, {
  score: 0.69843686,
  show: {
    id: 33320,
    url: 'https://www.tvmaze.com/shows/33320/derry-girls',
    name: 'Derry Girls',
    type: 'Scripted',
    language: 'English',
    genres: ['Comedy'],
    status: 'Ended',
    runtime: null,
    averageRuntime: 33,
    premiered: '2018-01-04',
    ended: '2022-05-18',
    officialSite: 'http://www.channel4.com/programmes/derry-girls',
    schedule: { time: '', days: [] },
    rating: { average: 8.2 },
    weight: 89,
    network: {
      id: 45, name: 'Channel 4', country: { name: 'United Kingdom', code: 'GB', timezone: 'Europe/London' }, officialSite: 'https://www.channel4.com/',
    },
    webChannel: null,
    dvdCountry: null,
    externals: { tvrage: null, thetvdb: 338903, imdb: 'tt7120662' },
    image: { medium: 'https://static.tvmaze.com/uploads/images/medium_portrait/402/1007479.jpg', original: 'https://static.tvmaze.com/uploads/images/original_untouched/402/1007479.jpg' },
    summary: "<p>16-year-old Erin Quinn lives with her uncompromising mother, her long-suffering father and the fearsome ‘Granda Joe', a man whose love for his daughters and granddaughters is surpassed only by his contempt for his son-in-law.</p><p>It's the early 90s, and Erin is used to seeing her country on the nightly news and speaking in acronyms (The IRA, The UDA, The RUC). This is a time of armed police in armoured Land Rovers and British Army check points. But it's also the time of Murder She Wrote, The Cranberries, MJ and Lisa Marie, Doc Martens, bomber jackets, The X Files, Nirvana and Wayne's World. And while The Troubles may hang over her home town, Erin has troubles of her own</p>",
    updated: 1673933058,
    _links: { self: { href: 'https://api.tvmaze.com/shows/33320' }, previousepisode: { href: 'https://api.tvmaze.com/episodes/2323336' } },
  },
}, {
  score: 0.69724566,
  show: {
    id: 59431,
    url: 'https://www.tvmaze.com/shows/59431/surfside-girls',
    name: 'Surfside Girls',
    type: 'Scripted',
    language: 'English',
    genres: ['Drama', 'Children', 'Family'],
    status: 'To Be Determined',
    runtime: null,
    averageRuntime: 24,
    premiered: '2022-08-19',
    ended: null,
    officialSite: 'https://tv.apple.com/show/surfside-girls/umc.cmc.4371g2xacdr0wfs071dm3q30x',
    schedule: { time: '', days: [] },
    rating: { average: null },
    weight: 87,
    network: null,
    webChannel: {
      id: 310, name: 'Apple TV+', country: null, officialSite: 'https://tv.apple.com/',
    },
    dvdCountry: null,
    externals: { tvrage: null, thetvdb: 414549, imdb: 'tt16390162' },
    image: { medium: 'https://static.tvmaze.com/uploads/images/medium_portrait/418/1047231.jpg', original: 'https://static.tvmaze.com/uploads/images/original_untouched/418/1047231.jpg' },
    summary: "<p>Sam and Jade are psyched to spend their summer riding the waves and catching the rays. That is until they meet a ghost. The girls dive head-first into a mystery about a pirate ship and the cursed treasure that allegedly lies beneath Surfside's beloved Danger Point bluff. After meeting a pirate ghost named Remi, Sam wants to help him break the curse while Jade is determined to find a scientific explanation for the existence of ghosts. To solve the mystery, Sam and Jade will need to combine their very different approaches of logic and imagination. Together, they are determined to connect the clues, solve the mystery and save Surfside... and maybe they'll help a couple of pirate ghosts along the way.</p>",
    updated: 1676106229,
    _links: { self: { href: 'https://api.tvmaze.com/shows/59431' }, previousepisode: { href: 'https://api.tvmaze.com/episodes/2376047' } },
  },
}, {
  score: 0.6958998,
  show: {
    id: 27894,
    url: 'https://www.tvmaze.com/shows/27894/three-girls',
    name: 'Three Girls',
    type: 'Scripted',
    language: 'English',
    genres: ['Drama'],
    status: 'Ended',
    runtime: 60,
    averageRuntime: 60,
    premiered: '2017-05-16',
    ended: '2017-05-18',
    officialSite: 'http://www.bbc.co.uk/programmes/b08rgd5n',
    schedule: { time: '21:00', days: ['Tuesday', 'Wednesday', 'Thursday'] },
    rating: { average: 7.7 },
    weight: 72,
    network: {
      id: 12, name: 'BBC One', country: { name: 'United Kingdom', code: 'GB', timezone: 'Europe/London' }, officialSite: 'https://www.bbc.co.uk/bbcone',
    },
    webChannel: null,
    dvdCountry: null,
    externals: { tvrage: null, thetvdb: 327999, imdb: 'tt6835252' },
    image: { medium: 'https://static.tvmaze.com/uploads/images/medium_portrait/138/347202.jpg', original: 'https://static.tvmaze.com/uploads/images/original_untouched/138/347202.jpg' },
    summary: "<p><b>Three Girls</b> tells the true story of three of the children who were victims in the 2012 grooming and sex trafficking case in Rochdale.</p><p>Holly is new to Rochdale and keen to make friends and fit in. She finds herself drawn into a world she cannot escape, despite her pleas for help. It's a world that is all too familiar to sexual health worker Sara, who has been recording and reporting cases of child abuse for years.</p>",
    updated: 1513509678,
    _links: { self: { href: 'https://api.tvmaze.com/shows/27894' }, previousepisode: { href: 'https://api.tvmaze.com/episodes/1164038' } },
  },
}, {
  score: 0.6939594,
  show: {
    id: 35096,
    url: 'https://www.tvmaze.com/shows/35096/girls-incarcerated',
    name: 'Girls Incarcerated',
    type: 'Documentary',
    language: 'English',
    genres: ['Crime'],
    status: 'To Be Determined',
    runtime: null,
    averageRuntime: 43,
    premiered: '2018-03-02',
    ended: null,
    officialSite: 'https://www.netflix.com/title/80185178',
    schedule: { time: '', days: [] },
    rating: { average: null },
    weight: 80,
    network: null,
    webChannel: {
      id: 1, name: 'Netflix', country: null, officialSite: 'https://www.netflix.com/',
    },
    dvdCountry: null,
    externals: { tvrage: null, thetvdb: null, imdb: null },
    image: { medium: 'https://static.tvmaze.com/uploads/images/medium_portrait/147/368834.jpg', original: 'https://static.tvmaze.com/uploads/images/original_untouched/147/368834.jpg' },
    summary: '<p>At Madison Juvenile Correctional Facility in Indiana, teen girls struggle with conflict and heartbreak as they try to turn their lives around. Fights, friendships, dating, rules. Teenage life is full of drama. But behind bars, the stakes are so much higher.</p>',
    updated: 1628178752,
    _links: { self: { href: 'https://api.tvmaze.com/shows/35096' }, previousepisode: { href: 'https://api.tvmaze.com/episodes/1673379' } },
  },
}];

global.fetch = jest.fn(() => Promise.resolve({
  json: () => Promise.resolve({ data }),
}));

test('commentsCounter', async () => {
  document.body.innerHTML = `<nav>
                              <div class="nav-logo">
                                  EventBryt
                              </div>
                              <ul class="nav-links">
                                  <li><a href="#" class="active" id="movie_count"></a></li>
                                  <li><a href="#">Planets</a></li>
                                  <li><a href="#">Races</a></li>
                              </ul>
                            </nav>
                            <main>
                              <ul id="events">

                              </ul>
                            </main>
                            <footer>
                              <h3>Created by Microverse under CC license </h3>
                            </footer>`;
  const events = document.querySelector('ul#events');
  const movies = await getAllMovies();
  displayMovies(movies.data, events);
  const movieList = document.querySelectorAll('.movie-list');
  expect(movieList.length).toBe(10);
});

it('returns the correct number of movies', () => {
  document.innerHTML = `<ul id="events">
   <li class="movie-list"></li>
   <li class="movie-list"></li>
   <li class="movie-list"></li>
   <li class="movie-list"></li>
   <li class="movie-list"></li>
   <li class="movie-list"></li>
   <li class="movie-list"></li>
   <li class="movie-list"></li>
   <li class="movie-list"></li>
   <li class="movie-list"></li>
  </ul>`;
  const counts = movieCounter();
  expect(counts).toBe(10);
});
