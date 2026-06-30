window.addEventListener("load", () => {

    const marker = document.getElementById("marker");
    const instructions = document.getElementById("instructions");
    const audioEntity = document.getElementById("audioEntity");

    let audioStarted = false;


    const img = document.getElementById("planeImage");
    const plane = document.getElementById("imagePlane");

    img.addEventListener("load", () => {

        const aspect =
            img.naturalWidth /
            img.naturalHeight;

        const markerWidth = 1;

        const scale = 2;

        plane.setAttribute(
            "width",
            markerWidth * scale
        );
        
        plane.setAttribute(
            "height",
            (markerWidth / aspect) * scale
        );

        console.warn(
            "Aspect:",
            aspect,
            "Width:",
            markerWidth,
            "Height:",
            markerWidth / aspect
        );
    });


    marker.addEventListener("markerFound", () => {

        instructions.style.display = "none";

        if (!audioStarted) {

            audioEntity.components.sound.playSound();

            audioStarted = true;
        }
        else {

            const audio =
                audioEntity.components.sound.pool.children[0];

            audio.play();
        }
    });

    marker.addEventListener("markerLost", () => {

        const audio =
            audioEntity.components.sound.pool.children[0];

        audio.pause();
    });

});

const img = document.getElementById("planeImage");
const plane = document.getElementById("imagePlane");

img.onload = () => {

    const aspect =
        img.naturalWidth /
        img.naturalHeight;

    const markerWidth = 1;

    plane.setAttribute(
        "width",
        markerWidth
    );

    plane.setAttribute(
        "height",
        markerWidth / aspect
    );
};