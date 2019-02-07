var library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             }
}

// FUNCTIONS TO IMPLEMENT:

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks

function printplaylists() {
  for(var plist in library.playlists) {
         var plistname = library.playlists[plist];
         var trackname = library.playlists[plist].name;
         var numberoftracks = library.playlists[plist].tracks.length;
         console.log(plist + ": " + trackname + " - " + numberoftracks + " tracks")
  }
}
printplaylists();

// prints a list of all tracks, in the form:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)

function printtracks() {
  for(var tlist in library.tracks) {
         var tracknumber = library.tracks[tlist];
         var trackname = library.tracks[tlist].name;
         var trackartist = library.tracks[tlist].artist;
         var trackalbum = library.tracks[tlist].album;
         console.log(tlist + ": " + trackname + " by " + trackartist + " (" + trackalbum + ")")
  }
}
printtracks();


// prints a list of tracks for a given playlist, in the form:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)

function pplistId(playlistId) {
var theplaylist = library.playlists[playlistId];
  console.log(playlistId + ": " + theplaylist.name + " - " + theplaylist.tracks.length + " tracks");
    for(i = 0; i < theplaylist.tracks.length; i++) {
           var tracksid = theplaylist.tracks[i]
         var loopytracks = library.tracks[tracksid];
         console.log(loopytracks.id + ": " + loopytracks.name + " by " + loopytracks.artist + " (" + loopytracks.album + ")");
    }
  }
  pplistId("p01");


// adds an existing track to an existing playlist

function addtrack(trackId, playlistId) {
 var newtrack = trackId;
 var changedplist = playlistId;
 var elplaylist = library.playlists[changedplist].tracks;
  elplaylist.push(newtrack);
  console.log(elplaylist);
}
addtrack("t06", "p01");

// generates a unique id
// (use this for addTrack and addPlaylist)

function uId() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}

// adds a track to the library

function addTrack(name, artist, album) {
 var newestID = uId();
 var newesttrack = (library.tracks[newestID] = {id: newestID, name: name, artist: artist, album: album});
//  console.log(newesttrack);
 console.log(library.tracks);
}
addTrack("Track-Daniels", "El Chupacabra", "Letters from my Ninos")

// adds a playlist to the library

function addPlaylist(name) {
var newerID = uId();
var newerPlist = (library.playlists[newerID] = {id: newerID, name: name, tracks: []})
// console.log(newerPlist);
console.log(library.playlists);
}
addPlaylist("MoonBeats")

// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri") 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

var printSearchResults = function(query) {

} 