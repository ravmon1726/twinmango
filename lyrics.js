

 $(document).ready(function() {
  $('.song-link').on('click', function(e) {
    e.preventDefault();
    var songId = $(this).data('lyrics');
    openLyricsWindow(songId);
  });

  function openLyricsWindow(songId) {
    var lyrics = getLyrics(songId);
    if (lyrics) {
      var newWindow = window.open("", "_blank");
      newWindow.document.open();
      newWindow.document.write('<html><head><title>Song Lyrics</title></head><body><div id="lyrics-container"></div></body></html>');
      newWindow.document.close();

      displayLyricsWordByWord(lyrics, newWindow);
    } else {
      console.log('Failed to load lyrics.');
    }
  }

  function displayLyricsWordByWord(lyrics, targetWindow) {
    var words = lyrics.split(' ');
    var container = targetWindow.document.getElementById('lyrics-container');
    var line = '';

    var i = 0;

    var intervalId = setInterval(function() {
      if (i >= words.length) {
        clearInterval(intervalId);
        return;
      }

      line += words[i] + ' ';

      if ((i + 1) % 7 === 0 || i === words.length - 1) {
        container.innerHTML += '<p style="color:red; font-size: 16px;text-align: center;">' + line.trim() + '</p>';
        line = '';
      }

      i++;
    }, 3); // Change the delay (in milliseconds) between each word display if desired
  }

  function getLyrics(songId) {
    var lyricsData = {
      song1: `The heart is on
Feel the fire burn in me
The heart is on
It is my passion my belief
The heart is on
I will be the legend I was born to be
The heart is on
My story remain incomplete

Chasing up in mind for motion
Flying through bouncing waves across your ocean
Feel the rush sweat and mess of your potion
Driving me through dark you my rider
Empty walls are echoing louder
Loaded with your guns

The heart is on
Driving and speeding
Adrenaline raising
I will take all your bullets in time
I can fight every battle
Valleys to temple
Hero you need
I am your man
Times have changed
Winds of change have arrived
It is call of my soul
It has brought my purpose my mission

My purpose my mission
My purpose my mission

Chasing up in mind for motion
Flying through bouncing waves across your ocean
Feel the rush sweat and mess of your potion
Driving me through dark you my rider
Empty walls are echoing louder
Loaded with your guns

The heart is on
The heart is on

Driving and speeding
Adrenaline raising
I will take all your bullets in time
I can fight every battle
Valleys to temple
Hero you need
I am your man

The heart is on
The heart is on

I am chasing again
Chasing again
I am chasing again
Chasing again
The heart is on
`,
      // Add more song lyrics as needed
    };

    return lyricsData[songId];
  }
});