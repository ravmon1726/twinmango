

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
        container.innerHTML += '<p style="color:green; font-size: 16px;text-align: center;">' + line.trim() + '</p>';
        line = '';
      }

      i++;
    }, 3); // Change the delay (in milliseconds) between each word display if desired
  }

  function getLyrics(songId) {
    var lyricsData = {
      song3: `I got  the words I love you
Sitting on the tip of my tongue
At your house again
Are we more than friends
There is so much that I wanna say
There is so much I wan a do
You got to  hold me down
Lie me on a back
You just ride me all the way

You can give me all in your style
I can take it all you reach me sky
When you make me fall in your love
It is hard to catch my breath
We go round and round
I feel it slipping
So stay me down
Under you
Stay me down down down under

I got the words I love you
Sitting on the tip of my tongue
Oh  I feel like as soon as they leave my mouth
I am just feeling the sugar
In my blood stream

You know we connect
More than night and moon
When you get me in
You can  set my  world on fire
You are putting out your fuel
And I am holding the lighter
We can burn brighter than the sun


You can give me all in your style
I can take it all you reach me sky
We go round and round
I feel it slipping
So stay me down
Under you
Stay me down  down down under
You have to push me down under
All the way
All the way
All the way


I got the words I love you
Sitting on the tip of my tongue
Oh  I feel like as soon as they leave my mouth
I am just feeling the sugar
In my blood stream

`,
      // Add more song lyrics as needed
    };

    return lyricsData[songId];
  }
});