jQuery(document).ready(function (a) {

    a("#jquery_jplayer_audio_1").jPlayer({
        ready: function () {
            console.log('ok');
            a(this).jPlayer("setMedia", {
                title: "ANDRE TAJCHMAN – SMOKE – SINGLE",
                mp3: "http://audio.xmcdn.com/group9/M0A/A2/6B/wKgDZld0qxejyvGKABwo20R-bQE828.m4a"
            }).jPlayer('player');
        },
        play: function () {
            a('.bar').animate({ 'top': "0px", opacity: 0.8 });
            a(this).jPlayer("pauseOthers")
        },
        pause: function () {
            a('.play-me').removeClass('fa-pause');
            a('.bar').animate({ 'top': "10px", opacity: 0 });
        },
        
        swfPath: "js",
        supplied: "mp3,m4a",
        cssSelectorAncestor: "#demo",
        wrapper: "#demo",
        cssSelector: {
            videoPlay: ".video-play",
            play: ".play",
            pause: ".pause",
            stop: ".stop",
            seekBar: ".seek-bar",
            playBar: ".play-bar",
            mute: ".mute",
            unmute: ".unmute",
            volumeBar: ".volume-bar",
            volumeBarValue: ".volume-bar-value",
            volumeMax: ".volume-max",
            playbackRateBar: ".playback-rate-bar",
            playbackRateBarValue: ".playback-rate-bar-value",
            currentTime: ".current-time",
            duration: ".duration",
            title: ".title",
            fullScreen: ".full-screen",
            restoreScreen: ".restore-screen",
            repeat: ".repeat",
            repeatOff: ".repeat-off",
            gui: ".gui",
            noSolution: ".no-solution"
        },
        stateClass: {
            playing: "state-playing",
            seeking: "state-seeking",
            muted: "state-muted",
            looped: "state-looped",
            fullScreen: "state-full-screen",
            noVolume: "state-no-volume"
        },
        useStateClassSkin: true,
        autoBlur: !1,
        smoothPlayBar: !0,
        remainingDuration: !0,
        keyEnabled: !0,
        keyBindings: {
            loop: null,
            muted: null,
            volumeUp: null,
            volumeDown: null
        },
        wmode: "window"
    });

    jQuery(".play-me").click(function () {
        $postID = a(this).attr("data-id");
        a('.play-me').removeClass('fa-pause');
        a(this).toggleClass('fa-pause');
        a.ajax({
            type: "GET",
            url: "/wp-admin/admin-ajax.php?action=get_media&id=" + $postID,
            dataType: "json",
            success: function (data) {
                a("#jquery_jplayer_audio_1").jPlayer("setMedia", {
                    title: data['title'],
                    mp3: data['mp3']
                }).jPlayer('play')
            }
        });
    });
});
