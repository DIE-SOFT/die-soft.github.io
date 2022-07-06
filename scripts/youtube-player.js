var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

function createPlayer(element, youtubeID, width, height) {
    console.log(element, youtubeID, width, height);
    player = new YT.Player(element, {
        width: width,
        height: height,
        videoId: youtubeID,
        playerVars: {
            'playsinline': 1,
            'rel': 0,
            'modestbranding': 1,
        },
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });

    function onPlayerReady(event) {
        document.body.classList.add('ytvideo-playing');
        event.target.playVideo();
    }

    var done = false;
    function onPlayerStateChange(event) {
        // 0 = Done
        // 1 = Playing
        // 2 = Paused
        // 3 = Buffering
        if (event.data === 0) {
            document.body.classList.remove('ytvideo-playing');
            event.target.i.replaceWith(event.target.o);
        }
    }
}

function onYouTubeIframeAPIReady() {
    const collection = document.getElementsByClassName("ytplayer");
    for (let i = 0; i < collection.length; i++) {
        const target = collection[i];
        target.addEventListener('click', function(event) {
            createPlayer(target, target.dataset.ytid, target.clientWidth, target.clientHeight);
        });
    }
}

