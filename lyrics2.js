

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
        container.innerHTML += '<p style="color:blue; font-size: 16px;text-align: center;">' + line.trim() + '</p>';
        line = '';
      }

      i++;
    }, 3); // Change the delay (in milliseconds) between each word display if desired
  }

  function getLyrics(songId) {
    var lyricsData = {
      song2: `Far beyond any reason
This is  the season for pleasing
Am I loud and clear
Is it okay with you dear

Rolling on a  bed lock me for  drive till I black out
Floating  on the ceiling sink into the feeling I am  spinning out
Crumbling down  of you all the space between us just melt away
The sweetest dreams are waiting stalking my temptation to your Milky Way

Waiting for that night which will get me higher  than a  space flight
I took a oneway ticket  never to return back
Mission to paradise
I will be  getting higher than a star
I made a good decision baby now I am  starting to feel alright

Get left or get right
Seatbelt on  prepare to take flight
You are  the captain here  my dear
Just speed  just steer  through the air

It is  private flight
I am  cool with your planets
Atmosphere magical here
What a night what a year what a life
Sat me  down sat me  right
You can get it I have the ticket right
All day afternoon  we can kick it tonight
Yeah  you know I love this ride

Baby juicy butty wetty my booby

Waiting for that night which will get me  higher  than a space flight
I took a oneway ticket  never to return back
Mission to paradise
I will be  getting higher than a star
I made a good decision baby now I am  starting to feel alright

We can do it again  we can do it again
Floating over my body dont even try to stop me
Playing with your body  do you copy
Playing with  your body dont even try to stop me

We can do it again  we can do it again
Floating over my body dont even try to stop me
Playing with your  body  do you copy
Playing with your body dont even try to stop me

Waiting for that night which will get me  higher than a space flight
I took a oneway ticket  never to return back
Mission to paradise
I will be  getting higher than a star
I made a good decision baby now I am  starting to feel alright


`,
      // Add more song lyrics as needed
    };

    return lyricsData[songId];
  }
});