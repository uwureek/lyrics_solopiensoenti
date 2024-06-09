document.addEventListener('DOMContentLoaded', (event) => {
    const playBtn = document.querySelector('.play-btn');
    const body = document.querySelector('.body');
    const lyricsContainer = document.getElementById('lyrics');
    const audio = document.getElementById('audio');
    const lyrics = [
        { text: "Quiero decirle, que me hace falta", delay: 0.10 },
        { text: "Ya no solo un finde, si no toa la semana", delay: 0.08 },
        { text: "Es increíble cómo me mata", delay: 0.1 },
        { text: "Cómo me puede solo con su mirada", delay: 0.08 },
        { text: "Ella no sueña con un castillo", delay: 0.05 },
        { text: "Sueña con algo má' complicado", delay: 0.05 },
        { text: "Ver pelis y comer mil Doritos", delay: 0.05 },
        { text: "Con un hombre que no sea un tarado", delay: 0.05 },
        { text: "Por eso me vine a su lado", delay: 0.05 },
        { text: "A pesar de ser un desconfiado", delay: 0.05 },
        { text: "Porque sé que ella también pasó", delay: 0.04 },
        { text: "Por lo mismo que me había pasado", delay: 0.04 }
    ];

    const delays = [0.3, 0.23, 0.6, 1.8, 0.2, 0.1, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2];

    async function displayLyrics() {
        for (let i = 0; i < lyrics.length; i++) {
            let line = lyrics[i].text;
            let charDelay = lyrics[i].delay;
            for (let char of line) { 
                lyricsContainer.innerHTML += char;
                await new Promise(resolve => setTimeout(resolve, charDelay * 1000));
            }
            await new Promise(resolve => setTimeout(resolve, delays[i] * 1000));
            lyricsContainer.innerHTML += '\n';
            lyricsContainer.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
        }
    }

    playBtn.addEventListener('click', () => {
        playBtn.style.display = 'none';
        audio.play(); // Reproduce la canción
        // Create a new div for the background animation
        const backgroundFade = document.createElement('div');
        backgroundFade.className = 'background-fade';
        backgroundFade.style.backgroundImage = 'url("./images/sadCat.jpg")';
        body.appendChild(backgroundFade);

        displayLyrics();
    });
});