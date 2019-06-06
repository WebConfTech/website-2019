import { deferred } from './deferred';

let apiDeferred = null;
let api = null;
const playerDefaults = {
  autoplay: 0,
  autohide: 1,
  modestbranding: 0,
  rel: 0,
  showinfo: 0,
  controls: 0,
  disablekb: 1,
  enablejsapi: 0,
  iv_load_policy: 3
};

const isReady = () => {
  api = global.YT;
  apiDeferred.resolve(api);
  apiDeferred = null;
};

export const getYouTubeAPI = () => {
  let result;
  if (api) {
    result = Promise.resolve(api);
  } else {
    if (!apiDeferred) {
      apiDeferred = deferred();
    }

    const tag = global.document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    const [firstScriptTag] = global.document.getElementsByTagName('script');
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    result = apiDeferred.promise;
  }

  return result;
};

export const loadYouTubeVideo = (
  elementId,
  videoSettings,
  playerSettings = {},
  options = { activeClass: 'active' }
) =>
  getYouTubeAPI()
    .then(() => {
      const player = new api.Player(
        elementId,
        Object.assign({}, playerDefaults, playerSettings, {
          events: {
            onReady() {
              player.loadVideoById(videoSettings);
              player.mute();
            },
            onStateChange(event) {
              const el = global.document.querySelector(`#${elementId}`);
              if (el) {
                if (event.data === 1) {
                  el.classList.add(options.activeClass);
                } else if (event.data === 2 || event.data === api.PlayerState.ENDED) {
                  el.classList.remove(options.activeClass);
                  player.loadVideoById(videoSettings);
                  player.seekTo(videoSettings.startSeconds);
                }
              }
            },
            onError(error) {
              console.warn('Unable to load the YouTube video', error);
            }
          }
        })
      );

      return player;
    })
    .catch(err => {
      console.log('!!!');
      debugger;
      return Promise.reject(err);
    });

global.onYouTubePlayerAPIReady = () => isReady();
