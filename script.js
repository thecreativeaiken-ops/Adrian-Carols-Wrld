/* ==========================================
   CAROL ❤️ ADRIAN
   Romantic Surprise
   Developed by Aikens Wrld
========================================== */


/* ==========================================
   SECRET CODE
========================================== */

/*
    CHANGE THIS IF YOU WANT
    A DIFFERENT SECRET CODE.

    CURRENT CODE:
    9999
*/

const SECRET_CODE = "9999";


/* ==========================================
   ELEMENTS
========================================== */

const lockScreen =
    document.getElementById("lockScreen");

const surprise =
    document.getElementById("surprise");

const secretCode =
    document.getElementById("secretCode");

const unlockBtn =
    document.getElementById("unlockBtn");

const wrongCode =
    document.getElementById("wrongCode");

const music =
    document.getElementById("loveMusic");

const musicBtn =
    document.getElementById("musicBtn");

const musicText =
    document.getElementById("musicText");


/* ==========================================
   PAGE STARTS LOCKED
========================================== */

document.body.classList.add("locked");


/* ==========================================
   UNLOCK
========================================== */

unlockBtn.addEventListener(
    "click",
    unlockSurprise
);


secretCode.addEventListener(
    "keydown",
    function(event) {

        if (event.key === "Enter") {

            unlockSurprise();

        }

    }
);


function unlockSurprise() {

    const entered =
        secretCode.value.trim();


    /* WRONG CODE */

    if (entered !== SECRET_CODE) {

        wrongCode.textContent =
            "That's not the secret... try again ❤️";


        secretCode.value = "";


        secretCode.animate(

            [
                {
                    transform: "translateX(0)"
                },

                {
                    transform: "translateX(-10px)"
                },

                {
                    transform: "translateX(10px)"
                },

                {
                    transform: "translateX(-8px)"
                },

                {
                    transform: "translateX(8px)"
                },

                {
                    transform: "translateX(0)"
                }
            ],

            {
                duration: 500
            }

        );

        return;
    }


    /* CORRECT CODE */

    wrongCode.textContent =
        "Welcome, Carol... ❤️";


    unlockBtn.textContent =
        "Opening your surprise...";


    unlockBtn.disabled = true;

    secretCode.disabled = true;


    /* Try to start the music */

    music.volume = 0.65;

    music.play()
        .then(() => {

            musicText.textContent =
                "Playing our song";

        })
        .catch(() => {

            musicText.textContent =
                "Play our song";

        });


    /*
        Small delay makes the unlock
        feel cinematic.
    */

    setTimeout(
        function() {

            lockScreen.classList.add(
                "unlocked"
            );

            surprise.classList.add(
                "visible"
            );

            document.body.classList.remove(
                "locked"
            );

            window.scrollTo(
                0,
                0
            );

        },

        1000
    );

}


/* ==========================================
   MUSIC BUTTON
========================================== */

let playing = false;


musicBtn.addEventListener(
    "click",
    function() {

        if (music.paused) {

            music.play()
                .then(() => {

                    playing = true;

                    musicText.textContent =
                        "Playing our song";

                });

        } else {

            music.pause();

            playing = false;

            musicText.textContent =
                "Our song";

        }

    }
);


/* ==========================================
   AUTOMATIC MUSIC STATE
========================================== */

music.addEventListener(
    "play",
    function() {

        playing = true;

        musicText.textContent =
            "Playing our song";

    }
);


music.addEventListener(
    "pause",
    function() {

        playing = false;

        musicText.textContent =
            "Our song";

    }
);


/* ==========================================
   PARALLAX EFFECT
========================================== */

const photoImages =
    document.querySelectorAll(
        ".memory-photo img, .full-image img"
    );


window.addEventListener(
    "scroll",
    function() {

        const scroll =
            window.scrollY;


        photoImages.forEach(
            function(image) {

                const rect =
                    image.parentElement
                        .getBoundingClientRect();


                const center =
                    rect.top +
                    rect.height / 2;


                const distance =
                    center -
                    window.innerHeight / 2;


                if (
                    Math.abs(distance) <
                    window.innerHeight
                ) {

                    const move =
                        distance * -0.025;


                    image.style.transform =
                        `scale(1.03)
                         translateY(${move}px)`;

                }

            }
        );

    }
);


/* ==========================================
   SUBTLE HEARTS
========================================== */

function createHeart() {

    if (
        document.body.classList.contains(
            "locked"
        )
    ) {
        return;
    }


    const heart =
        document.createElement("span");


    heart.textContent =
        Math.random() > .5
            ? "♥"
            : "♡";


    heart.style.position =
        "fixed";


    heart.style.left =
        Math.random() * 100 + "vw";


    heart.style.bottom =
        "-30px";


    heart.style.zIndex =
        "20";


    heart.style.pointerEvents =
        "none";


    heart.style.color =
        `rgba(
            ${210 + Math.random() * 45},
            ${75 + Math.random() * 50},
            ${100 + Math.random() * 50},
            ${.15 + Math.random() * .3}
        )`;


    heart.style.fontSize =
        10 + Math.random() * 18 + "px";


    const duration =
        7000 + Math.random() * 7000;


    document.body.appendChild(
        heart
    );


    heart.animate(

        [
            {
                transform:
                    "translateY(0) rotate(0deg)",

                opacity: 0
            },

            {
                opacity: 1
            },

            {
                transform:
                    `translateY(-110vh)
                     rotate(${180 + Math.random() * 180}deg)`,

                opacity: 0
            }
        ],

        {
            duration: duration,

            easing:
                "linear"
        }

    );


    setTimeout(
        () => heart.remove(),
        duration
    );

}


setInterval(
    createHeart,
    1300
);
/* =========================================================
   ROMANTIC FLOATING PARTICLES
   ADD TO BOTTOM OF script.js
========================================================= */

(function romanticParticles() {

    const symbols = ["♥", "♡", "✦", "❦", "❤"];

    function createParticle() {

        const particle = document.createElement("div");

        particle.className = "romantic-particle";

        particle.textContent =
            symbols[Math.floor(Math.random() * symbols.length)];

        particle.style.left =
            Math.random() * 100 + "vw";

        particle.style.animationDuration =
            (7 + Math.random() * 7) + "s";

        particle.style.fontSize =
            (10 + Math.random() * 10) + "px";

        particle.style.opacity =
            .35 + Math.random() * .45;

        document.body.appendChild(particle);

        setTimeout(() => {
            particle.remove();
        }, 15000);
    }

    setInterval(createParticle, 900);

})();
/* =========================================================
   PHOTO HEART ANIMATION
========================================================= */

const photoHeartStyle = document.createElement("style");

photoHeartStyle.textContent = `

@keyframes photoHeartFloat {

    0% {
        opacity: 0;
        transform:
            translateY(10px)
            scale(.5);
    }

    20% {
        opacity: 1;
    }

    100% {
        opacity: 0;
        transform:
            translateY(-100px)
            translateX(25px)
            scale(1.3);
    }

}

.photo-touched img {
    transform: scale(1.05) !important;
}

`;

document.head.appendChild(photoHeartStyle);
/* =========================================================
   ROMANTIC MUSIC PLAYER
   ADD TO BOTTOM OF script.js
========================================================= */

(function romanticMusicPlayer() {

    const audio = document.querySelector("audio");

    if (!audio) return;

    /* Create player */

    const player = document.createElement("div");

    player.className = "romantic-player";

   player.innerHTML = `
    <button class="music-play" aria-label="Toggle music">
        ▶
    </button>

    <div class="music-info">
        <div class="music-title">
            Her Love ♡
        </div>

        <div class="music-subtitle">
            <span class="music-status">Play our song</span>
        </div>
    </div>

    <div class="music-bars">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
    </div>
`;

    document.body.appendChild(player);

    const playButton =
        player.querySelector(".music-play");

    /* Hide the old browser audio controls */

    audio.controls = false;

    audio.style.display = "none";

    /* Show player after surprise opens */

    function showMusicPlayer() {

        player.classList.add("music-visible");

    }

    /*
       Try to start music after the user's
       unlock button has been clicked.
    */

    document.addEventListener("click", function(event) {

        const unlockButton =
            event.target.closest("#unlockBtn");

        if (!unlockButton) return;

        showMusicPlayer();

        setTimeout(() => {

            audio.play()
                .then(() => {

                    player.classList.add("playing");

                    playButton.textContent = "❚❚";

                })
                .catch(() => {

                    /* Browser may require another tap */

                    playButton.textContent = "▶";

                });

        }, 700);

    });

    /* Play / pause */

    playButton.addEventListener("click", async () => {

        if (audio.paused) {

            try {

                await audio.play();

                player.classList.add("playing");

                playButton.textContent = "❚❚";

            } catch (error) {

                playButton.textContent = "▶";

            }

        } else {

            audio.pause();

            player.classList.remove("playing");

            playButton.textContent = "▶";

        }

    });

    /* Keep button synchronized */

    audio.addEventListener("play", () => {

        player.classList.add("playing");

        playButton.textContent = "❚❚";

    });

    audio.addEventListener("pause", () => {

        player.classList.remove("playing");

        playButton.textContent = "▶";

    });

})();
/* =========================================================
   LOVE LETTER HEART ANIMATION
========================================================= */

const letterHeartAnimation =
    document.createElement("style");

letterHeartAnimation.textContent = `

@keyframes letterHeartRise {

    0% {
        opacity: 0;
        transform:
            translateY(20px)
            scale(.5)
            rotate(0deg);
    }

    20% {
        opacity: 1;
    }

    100% {
        opacity: 0;
        transform:
            translateY(-180px)
            translateX(40px)
            scale(1.2)
            rotate(25deg);
    }

}

`;

document.head.appendChild(letterHeartAnimation);
/* =========================================================
   REASONS I LOVE YOU
   ADD TO BOTTOM OF script.js
========================================================= */

(function reasonsIChooseYou() {

    const hearts =
        document.querySelectorAll(".reason-heart");

    const message =
        document.getElementById("reasonText");

    if (!hearts.length || !message) return;

    hearts.forEach((heart) => {

        heart.addEventListener("click", () => {

            hearts.forEach((item) => {
                item.classList.remove("active");
            });

            heart.classList.add("active");

            message.classList.remove("showing");

            void message.offsetWidth;

            message.textContent =
                heart.dataset.message;

            message.classList.add("showing");

        });

    });

})();
/* =========================================================
   GRAND FINALE INTERACTION
   ADD TO BOTTOM OF script.js
========================================================= */

(function grandFinale() {

    const button =
        document.getElementById("finalRevealBtn");

    const message =
        document.getElementById("finalMessage");

    if (!button || !message) return;

    button.addEventListener("click", function () {

        message.classList.add("revealed");

        button.style.opacity = "0";

        button.style.pointerEvents = "none";

        /* Heart explosion */

        for (let i = 0; i < 35; i++) {

            const particle =
                document.createElement("span");

            particle.className =
                "finale-particle";

            particle.textContent =
                Math.random() > .35
                    ? "♥"
                    : "♡";

            particle.style.left =
                "50vw";

            particle.style.top =
                "50vh";

            const angle =
                Math.random() * Math.PI * 2;

            const distance =
                100 + Math.random() * 300;

            particle.style.setProperty(
                "--x",
                Math.cos(angle) * distance + "px"
            );

            particle.style.setProperty(
                "--y",
                Math.sin(angle) * distance + "px"
            );

            particle.style.setProperty(
                "--rotate",
                (Math.random() * 360) + "deg"
            );

            particle.style.animationDelay =
                (Math.random() * .35) + "s";

            document.body.appendChild(
                particle
            );

            setTimeout(() => {

                particle.remove();

            }, 2600);

        }

        /* Scroll gently to the message */

        setTimeout(() => {

            message.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });

        }, 500);

    });

})();
/* =========================================================
   MOBILE FLOATING HEARTS
   ADD TO BOTTOM OF script.js
========================================================= */

(function mobileRomanticHearts() {

    function createMobileHeart() {

        const heart =
            document.createElement("div");

        heart.className =
            "mobile-romance-heart";

        const symbols = [
            "♥",
            "♡",
            "✦",
            "❦"
        ];

        heart.textContent =
            symbols[
                Math.floor(
                    Math.random() *
                    symbols.length
                )
            ];

        heart.style.left =
            Math.random() * 100 + "vw";

        heart.style.setProperty(
            "--duration",
            (8 + Math.random() * 7) + "s"
        );

        heart.style.setProperty(
            "--drift",
            (-35 + Math.random() * 70) + "px"
        );

        heart.style.setProperty(
            "--drift2",
            (-60 + Math.random() * 120) + "px"
        );

        heart.style.fontSize =
            (9 + Math.random() * 12) + "px";

        document.body.appendChild(heart);

        setTimeout(() => {

            heart.remove();

        }, 16000);

    }


    /* More particles on phones,
       but kept lightweight */

    if (window.innerWidth <= 750) {

        setInterval(
            createMobileHeart,
            1100
        );

    } else {

        setInterval(
            createMobileHeart,
            1800
        );

    }

})();
/* =========================================================
   SECRET SURPRISE BUTTON
   ADD TO BOTTOM OF script.js
========================================================= */

(function secretSurprise() {

    const button =
        document.getElementById(
            "secretSurpriseBtn"
        );

    const message =
        document.getElementById(
            "secretSurpriseMessage"
        );

    if (!button || !message) return;

    button.addEventListener("click", function () {

        /* Open message */

        message.classList.add("revealed");

        /* Hide button */

        button.style.transition =
            "opacity .6s ease";

        button.style.opacity = "0";

        button.style.pointerEvents =
            "none";


        /* Romantic heart explosion */

        for (let i = 0; i < 30; i++) {

            const particle =
                document.createElement("span");

            particle.className =
                "secret-particle";

            particle.textContent =
                Math.random() > .25
                    ? "♥"
                    : "♡";

            particle.style.left =
                "50vw";

            particle.style.top =
                "50vh";

            const angle =
                Math.random() *
                Math.PI *
                2;

            const distance =
                80 +
                Math.random() * 300;

            particle.style.setProperty(
                "--secret-x",
                Math.cos(angle) *
                distance +
                "px"
            );

            particle.style.setProperty(
                "--secret-y",
                Math.sin(angle) *
                distance +
                "px"
            );

            particle.style.setProperty(
                "--secret-r",
                (Math.random() * 360) +
                "deg"
            );

            document.body.appendChild(
                particle
            );

            setTimeout(() => {

                particle.remove();

            }, 2800);

        }


        /* Bring the surprise into view */

        setTimeout(() => {

            message.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });

        }, 400);

    });

})();
/* =========================================================
   MOBILE PIN UNLOCK FIX
   ADD THIS AT THE VERY BOTTOM OF script.js
========================================================= */

(function mobileUnlockFix() {

    const lockScreen =
        document.querySelector(".lock-screen");

    const surprise =
        document.querySelector(".surprise");

    const secretInput =
        document.getElementById("secretCode");

    const unlockButton =
        document.getElementById("unlockBtn");

    if (!lockScreen || !surprise || !secretInput || !unlockButton) {
        return;
    }

    /*
       IMPORTANT:
       Change this number to your actual PIN.
    */

    const CORRECT_PIN = "9999";


    function openSurprise() {

        /* Unlock the page */

        lockScreen.classList.add("unlocked");

        surprise.classList.add("visible");

        document.body.classList.remove("locked");

        /* Make absolutely sure mobile can scroll */

        document.documentElement.style.overflowY = "auto";

        document.body.style.overflowY = "auto";

        document.body.style.overflowX = "hidden";

        /* Remove the lock screen after animation */

        setTimeout(function () {

            lockScreen.style.display = "none";

        }, 1600);

        /* Start music if your audio exists */

        const audio =
            document.querySelector("audio");

        if (audio) {

            audio.play().catch(function () {
                /*
                   Mobile browsers may require
                   the first play to happen directly
                   from the user's tap.
                */
            });

        }

        /* Move to the beginning of the surprise */

        setTimeout(function () {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        }, 100);

    }


    function checkPin() {

        const entered =
            secretInput.value.trim();

        if (entered === CORRECT_PIN) {

            openSurprise();

        } else {

            secretInput.classList.add("wrong");

            setTimeout(function () {

                secretInput.classList.remove("wrong");

            }, 500);

            secretInput.value = "";

            secretInput.focus();

        }

    }


    /* Button */

    unlockButton.addEventListener(
        "click",
        checkPin
    );


    /* Enter key on phone keyboard */

    secretInput.addEventListener(
        "keydown",
        function (event) {

            if (event.key === "Enter") {

                event.preventDefault();

                checkPin();

            }

        }
    );


    /* Prevent accidental form submission */

    secretInput.addEventListener(
        "input",
        function () {

            secretInput.value =
                secretInput.value.replace(
                    /\D/g,
                    ""
                );

        }
    );


})();
/* =========================================================
   UNIVERSAL BUTTON SURPRISE SYSTEM
========================================================= */

(function universalButtonSurprises() {

    const popup =
        document.getElementById(
            "universalSurprise"
        );

    const closeButton =
        document.getElementById(
            "closeUniversalSurprise"
        );

    const title =
        document.getElementById(
            "universalTitle"
        );

    const text =
        document.getElementById(
            "universalText"
        );

    if (!popup || !closeButton || !title || !text) {
        return;
    }


    /* =====================================================
       MESSAGES
    ===================================================== */

    const messages = [

        {
            title: "You are special ♥",
            text:
                "Carol, there is something about you " +
                "that makes ordinary moments feel " +
                "like memories I want to keep forever."
        },

        {
            title: "A little reminder...",
            text:
                "No matter how many times you hear it, " +
                "I hope you never forget how deeply " +
                "you are appreciated and loved."
        },

        {
            title: "If you are smiling...",
            text:
                "Then this little surprise has already " +
                "done exactly what I wanted it to do."
        },

        {
            title: "My favorite person",
            text:
                "Out of all the people in this world, " +
                "somehow my heart keeps choosing you."
        },

        {
            title: "One more thing...",
            text:
                "I could fill an entire website with " +
                "reasons to love you and still have " +
                "more left to say."
        },

        {
            title: "Always remember",
            text:
                "You don't need a special occasion " +
                "to know that you mean something " +
                "incredibly special to me."
        }

    ];


    /* =====================================================
       OPEN POPUP
    ===================================================== */

    function openPopup(customTitle, customText) {

        const randomMessage =
            messages[
                Math.floor(
                    Math.random() *
                    messages.length
                )
            ];

        title.textContent =
            customTitle || randomMessage.title;

        text.textContent =
            customText || randomMessage.text;

        popup.classList.add("open");

        document.body.style.overflow =
            "hidden";

        createParticles();

    }


    /* =====================================================
       CLOSE POPUP
    ===================================================== */

    function closePopup() {

        popup.classList.remove("open");

        document.body.style.overflow =
            "";

    }


    /* =====================================================
       CLOSE BUTTON
    ===================================================== */

    closeButton.addEventListener(
        "click",
        closePopup
    );


    /* =====================================================
       TAP OUTSIDE CARD TO CLOSE
    ===================================================== */

    popup.addEventListener(
        "click",
        function(event) {

            if (
                event.target === popup
            ) {

                closePopup();

            }

        }
    );


    /* =====================================================
       ESC KEY
    ===================================================== */

    document.addEventListener(
        "keydown",
        function(event) {

            if (
                event.key === "Escape"
            ) {

                closePopup();

            }

        }
    );


    /* =====================================================
       ALL BUTTONS
    ===================================================== */

    document.addEventListener(
        "click",
        function(event) {

            const button =
                event.target.closest(
                    "button"
                );

            if (!button) return;

            /*
               Don't hijack the popup close button.
            */

            if (
                button === closeButton
            ) {
                return;
            }

            /*
               Don't hijack the PIN unlock button.
               The PIN system must handle that.
            */

            if (
                button.id === "unlockBtn"
            ) {
                return;
            }


            /*
               Don't hijack music controls.
            */

            if (
                button.classList.contains(
                    "music-btn"
                )
            ) {
                return;
            }


            /*
               Don't hijack buttons that are
               already designed to reveal content.
            */

            if (
                button.id ===
                "finalRevealBtn"
            ) {
                return;
            }

            if (
                button.id ===
                "secretSurpriseBtn"
            ) {
                return;
            }


            /*
               Don't hijack reason hearts.
               Their existing messages should work.
            */

            if (
                button.classList.contains(
                    "reason-heart"
                )
            ) {
                return;
            }


            /* Open universal surprise */

            openPopup();

        }
    );


    /* =====================================================
       CREATE HEART EXPLOSION
    ===================================================== */

    function createParticles() {

        for (
            let i = 0;
            i < 28;
            i++
        ) {

            const particle =
                document.createElement(
                    "span"
                );

            particle.className =
                "universal-particle";

            particle.textContent =
                Math.random() > .25
                    ? "♥"
                    : "♡";

            particle.style.left =
                "50vw";

            particle.style.top =
                "50vh";

            const angle =
                Math.random() *
                Math.PI *
                2;

            const distance =
                80 +
                Math.random() *
                280;

            particle.style.setProperty(
                "--particle-x",
                Math.cos(angle) *
                distance +
                "px"
            );

            particle.style.setProperty(
                "--particle-y",
                Math.sin(angle) *
                distance +
                "px"
            );

            particle.style.setProperty(
                "--particle-r",
                Math.random() *
                360 +
                "deg"
            );

            document.body.appendChild(
                particle
            );

            setTimeout(
                function() {

                    particle.remove();

                },
                2200
            );

        }

    }

})();
/* =========================================================
   ONE LAST SECRET INTERACTION
========================================================= */

(function lastSecretReveal() {

    const button =
        document.getElementById("lastSecretBtn");

    const message =
        document.getElementById("lastSecretMessage");

    if (!button || !message) return;


    button.addEventListener("click", function () {

        message.classList.add("revealed");

        button.style.opacity = "0";
        button.style.transform = "scale(.8)";
        button.style.pointerEvents = "none";


        /* HEART EXPLOSION */

        for (let i = 0; i < 35; i++) {

            const heart =
                document.createElement("span");

            heart.className =
                "last-secret-particle";

            heart.textContent =
                Math.random() > .25
                    ? "♥"
                    : "♡";

            const angle =
                Math.random() *
                Math.PI *
                2;

            const distance =
                100 +
                Math.random() * 300;

            heart.style.setProperty(
                "--secret-x",
                Math.cos(angle) * distance + "px"
            );

            heart.style.setProperty(
                "--secret-y",
                Math.sin(angle) * distance + "px"
            );

            heart.style.setProperty(
                "--secret-r",
                Math.random() * 360 + "deg"
            );

            document.body.appendChild(heart);

            setTimeout(() => {
                heart.remove();
            }, 2200);
        }


        /* Gently bring the message into view */

        setTimeout(() => {

            message.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });

        }, 350);

    });

})();
