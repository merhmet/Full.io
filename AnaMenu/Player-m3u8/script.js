const channels = [
  {
    channelName: "Bein 4",
    src: "https://playhdnew5.buzz/yayinb4.m3u8",
  },


  {
    channelName: "Kanal 8",
    src: "https://playhdnew5.buzz/yayintv8.m3u8",
  },


  {
    channelName: "Atv",
    src: "https://playhdnew5.buzz/yayinatv.m3u8",
  },



  {
    channelName: "Kanal 8,5",
    src: "https://playhdnew5.buzz/yayintv85.m3u8",
  },
  {
    channelName: "Smart",
    src: "https://playhdnew5.buzz/yayinsmarts.m3u8",
  },


  {
    channelName: "Kanal 24",
    src: "https://mn-nl.mncdn.com/kanal24/smil:kanal24.smil/playlist.m3u8",
  },








  {
    channelName: "360 Tv",
    src: "https://turkmedya-live.ercdn.net/tv360/tv360.m3u8",
  },

  {
    channelName: "Kemal Sunal",
    src: "https://ythls.armelin.one/video/hfx8H7YrmTw.m3u8",
  },




  {
    channelName: "Yol Tv",
    src: "https://stream.yol.tv:9443/medialive/yol.m3u8",
  },
  {
    channelName: "Turis Tv",
    src: "https://ciner-live.daioncdn.net/showtv/showtv.m3u8",
  },

  {
    channelName: "Kanal D",
    src: "https://demiroren-live.daioncdn.net/kanald/kanald.m3u8",
  },
  {
    channelName: "Kardelen Tv",
    src: "https://edge1.socialsmart.tv/kardelentv/bant1/playlist.m3u8",
  },
  {
    channelName: "Kral Pop",
    src: "https://dogus-live.daioncdn.net/kralpoptv/playlist.m3u8",
  },
  {
    channelName: "Miljon Tv",
    src: "https://sosyoapp-live.cdnnew.com/sosyo/buraya-bir-isim-verin.m3u8",
  },
  {
    channelName: "Ntv",
    src: "https://dogus-live.daioncdn.net/ntv/ntv.m3u8",
  },
  {
    channelName: "Power Love",
    src: "https://livetv.powerapp.com.tr/plove/love.smil/playlist.m3u8",
  },
  {
    channelName: "Power Dance",
    src: "https://dmitnthvll.cdn.mangomolo.com/dubaisports/smil:dubaisports.smil/index.m3u8",
  },
  {
    channelName: "Power Turk",
    src: "https://livetv.powerapp.com.tr/powerturkTV/powerturkhd.smil/playlist.m3u8",
  },
  {
    channelName: "Power Akustik",
    src: "https://livetv.powerapp.com.tr/pturkakustik/akustik.smil/playlist.m3u8",
  },
  {
    channelName: "Power Slow",
    src: "https://livetv.powerapp.com.tr/pturkslow/slow.smil/playlist.m3u8",
  },

  {
    channelName: "Trt Muzik",
    src: "https://tv-trtmuzik.medya.trt.com.tr/master_480.m3u8",
  },
  {
    channelName: "Power Turk Taptaze",
    src: "https://listen.powerapp.com.tr/pturktaptaze/taptaze.smil/playlist.m3u8",
  },
  {
    channelName: "Sila Tv",
    src: "https://yayin.santraltr.com/hls/silatv.m3u8",
  },

  {
    channelName: "Nr One Damar",
    src: "https://b01c02nl.mediatriple.net/videoonlylive/mtkgeuihrlfwlive/broadcast_5c9e19877b340.smil/playlist.m3u8",
  },
  {
    channelName: "Tempo Tv",
    src: "https://live.artidijitalmedya.com/artidijital_tempotv/tempotv/chunks.m3u8",
  },

  {
    channelName: "Flash Tv",
    src: "https://stream.guventechnology.com:19360/flashtv/flashtv.m3u8",
  },
  {

   channelName: "90 Plus",
    src: "https://euro90tv-live.cdnnew.com/euro90tv/e9090.m3u8",
  },
  {

   channelName: "Tv 4 ",
    src: "https://turkmedya-live.ercdn.net/tv4/tv4_720p.m3u8",
  },
  {

   channelName: "Az Star Tv",
    src: "https://live.livestreamtv.ca/azstar/smil:azstar.smil/chunklist_w995405358_b3000000_slen.m3u8",
  },
  {

   channelName: "Ty",
    src: "https://live.artidijitalmedya.com/artidijital_tempotv/tempotv/chunks.m3u8",
  },
  {

   channelName: "Afyon Türk",
    src: "https://tv.digitalbox.xyz:19360/afyonturktv/afyonturktv.m3u8",
  },
  {

   channelName: "Tatlises Tv",
    src: "https://live.artidijitalmedya.com/artidijital_tatlisestv/tatlisestv/chunks.m3u8",
  },
  {

   channelName: "Tokat Tv",
    src: "https://cdn-tokattvwebtv.yayin.com.tr/tokattvwebtv/tokattvwebtv/chunklist_w2077365738.m3u8",
  },
  {
    channelName: "Damar Kutusu",
    src: "https://b01c02nl.mediatriple.net/videoonlylive/mtkgeuihrlfwlive/u_stream_5c9e198784bdc_1/playlist.m3u8",
  },

  {
    channelName: "Kanal 19",
    src: "https://vdo.digitalbox.xyz:3644/live/kanal19tvlive.m3u8",
  },

  {
    channelName: "Power Slow",
    src: "https://livetv.powerapp.com.tr/dance/dance.smil/playlist.m3u8",
  },
];

const jwtConfigSetup = {
  file: channels.find((c) => c.channelName === "Turis Tv").src,
  width: "100%",
  height: "100%",
  skin: "glow",
  autostart: true,
  primary: "flash",
  fallback: "false",
  abouttext: "",
  aboutlink: "",
  displaytitle: "false",
  ga: "{}",
};

const getPlayerWrapper = () =>
  document.querySelector("#content #player-wrapper #jwplayer-wrapper");
const getBbcArabicIframe = () => document.querySelector("#bbc-iframe");

const getElementByDataSrc = (dataSrc) =>
  document.querySelector(`[data-src="${dataSrc}"]`);

let currentlyPlayingSrc = null;
const handleHighlightingSelectedChannel = (_src, channelsList) => {
  const currentElement = getElementByDataSrc(_src);
  if (currentElement) {
    [...channelsList.children].forEach((el) => {
      const _el =
        el.querySelector(".channel-name") || el.querySelector(".bbc-arabic");
      if (_el?.getAttribute("id")?.includes("selected-channel-indicator")) {
        _el.setAttribute(
          "id",
          _el.getAttribute("id").replace("selected-channel-indicator", "")
        );
      }
    });
    currentElement.setAttribute("id", "selected-channel-indicator");
  }
  if (_src) {
    currentlyPlayingSrc = _src;
  }
};

const stopBBCPlayer = () => {
  setTimeout(() => {
    getBbcArabicIframe().style.display = "none";
    const iframeSrc = getBbcArabicIframe().src;
    getBbcArabicIframe().src = iframeSrc;
  }, 0);
};

function main() {
  loadContent();
}

function loadContent() {
  const jwpInstance = jwplayer("jwplayer-wrapper");
  jwpInstance.setup(jwtConfigSetup);

  const getSrcElement = () => document.querySelector("#player-src");
  const channelsList = document.querySelector("#channels-list");
  const inputWrapper = document.querySelector("#input-wrapper");

  const bbcArabicButton = document.querySelector(".bbc-arabic");
  bbcArabicButton.addEventListener("click", () => {
    setTimeout(() => {
      getPlayerWrapper().style.display = "none";
    }, 0);
    getBbcArabicIframe().style.display = "block";
    // .stop is not available in the free version, workaround: setting the file will stop playback
    jwpInstance.setup({
      ...jwtConfigSetup,
      file: channels.find((c) => c.channelName === "DUBAI ONE").src,
    });
  });

  const showHideSidebar = document.querySelector(".show-hide-sidebar");
  showHideSidebar.addEventListener("click", () => {
    // User closed the sidebar : User opened the sidebar
    channelsList.style.display =
      channelsList.style.display !== "none" ? "none" : "flex";
  });

  const showHideInput = document.querySelector(".show-hide-input");
  showHideInput.addEventListener("click", () => {
    if (!inputWrapper.style.display) {
      inputWrapper.style.display = "none";
    }
    // User closed the input : User opened the input
    inputWrapper.style.display =
      inputWrapper.style.display !== "none" ? "none" : "flex";
  });

  const createChannelItemAndAppendToList = ({ src, channelName }) => {
    const channelItem = document.createElement("li");
    channelItem.classList.add("channel-item");
    channelItem.innerHTML = `<p class="channel-name" data-src="${src}">${channelName}</p>`;
    channelsList.appendChild(channelItem);
  };

  function onLoad() {
    channels.forEach((channelName) => {
      createChannelItemAndAppendToList(channelName);
    });
  }

  onLoad();

  function play(_src, channelName) {
    const playButton = document.querySelector("#play-button");
    const setupJWPInstance = () => {
      const src = _src || getSrcElement().value.trim();
      if (src) {
        jwpInstance.setup({ ...jwtConfigSetup, file: src });
        // .play is not available in the free version of jwplayer
        // jwpInstance.play();

        document.title = channelName || "m3u8 player";
      }
    };
    _src
      ? setupJWPInstance()
      : playButton.addEventListener("click", setupJWPInstance);
    if (getPlayerWrapper().style.display === "none") {
      getPlayerWrapper().style.display = "block";
    }
    if (_src !== "bbc-arabic") {
      stopBBCPlayer();
    }

    handleHighlightingSelectedChannel(_src, channelsList);
  }

  play();

  function playChannel() {
    channelsList.addEventListener("click", (event) => {
      if (event.target.closest(".turn-off")) {
        const channelsList = document.querySelector("#channels-list");
        jwpInstance.setup({
          ...jwtConfigSetup,
          file:
            currentlyPlayingSrc ||
            channels.find((c) => c.channelName === "DUBAI ONE").src,
        });
        handleHighlightingSelectedChannel("", channelsList);
        stopBBCPlayer();
        setTimeout(() => {
          getPlayerWrapper().style.display = "none";
        }, 0);
      } else if (event.target.getAttribute("data-src")) {
        play(event.target.getAttribute("data-src"), event.target.textContent);
      }
    });
  }

  playChannel();
}

main();