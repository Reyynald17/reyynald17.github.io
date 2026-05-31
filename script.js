$(document).ready(function() {
    const splash = $('#splash-container');
    
    function hilangkanSplash() {
        if (splash.length && !splash.hasClass('opacity-0')) {
            splash.addClass('opacity-0 pointer-events-none');
            setTimeout(function() {
                splash.remove();
            }, 700);
        }
    }

    const batasWaktuAman = setTimeout(hilangkanSplash, 2500);

    $('#splash-svg').on('load', function() {
        clearTimeout(batasWaktuAman);
        setTimeout(hilangkanSplash, 1500);
    });

    $('#night-toggle').on('click', function() {
        $('html').toggleClass('invert-mode');
    });

    const sections = $("section");
    $(window).on("scroll", function() {
        sections.each(function() {
            const top = $(window).scrollTop();
            const offset = $(this).offset().top - 400;
            if (top >= offset) {
                $(this).addClass("visible");
            }
        });
    });
    $(window).trigger("scroll");

    $('a[href^="#"]').on('click', function(event) {
        const target = $(this.getAttribute('href'));
        if (target.length) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top
            }, 800);
        }
    });

    const music = document.getElementById('bg-music');
    const btn = $('#music-toggle');
    const playIcon = $('#play-icon');
    const pauseIcon = $('#pause-icon');
    const nowPlaying = $('#now-playing');

    if (btn.length && music) {
        btn.on('click', function() {
            if (music.paused) {
                music.play();
                playIcon.addClass('hidden');
                pauseIcon.removeClass('hidden');
                btn.addClass('music-active');
                
                nowPlaying.removeClass('opacity-0 translate-y-2').addClass('opacity-100 translate-y-0');
                
                setTimeout(() => {
                    nowPlaying.addClass('opacity-0 translate-y-2').removeClass('opacity-100 translate-y-0');
                }, 4000);
            } else {
                music.pause();
                playIcon.removeClass('hidden');
                pauseIcon.addClass('hidden');
                btn.removeClass('music-active');
                nowPlaying.addClass('opacity-0 translate-y-2').removeClass('opacity-100 translate-y-0');
            }
        });
    }
});