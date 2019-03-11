var library = {
  randomID: function uId() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  },

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

  printTracks: function printtracks() {
    for(var tlist in library.tracks) {
           var tracknumber = library.tracks[tlist];
           var trackname = library.tracks[tlist].name;
           var trackartist = library.tracks[tlist].artist;
           var trackalbum = library.tracks[tlist].album;
           console.log(tlist + ": " + trackname + " by " + trackartist + " (" + trackalbum + ")")
    }
  },

  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
  },

  printplaylist: function printplaylists() {
    for(var plist in library.playlists) {
           var plistname = library.playlists[plist];
           var trackname = library.playlists[plist].name;
           var numberoftracks = library.playlists[plist].tracks.length;
           console.log(plist + ": " + trackname + " - " + numberoftracks + " tracks")
    }
  },

  printPlaylistID: function pplistId(playlistId) {
    var theplaylist = library.playlists[playlistId];
      console.log(playlistId + ": " + theplaylist.name + " - " + theplaylist.tracks.length + " tracks");
        for(i = 0; i < theplaylist.tracks.length; i++) {
               var tracksid = theplaylist.tracks[i]
             var loopytracks = library.tracks[tracksid];
             console.log(loopytracks.id + ": " + loopytracks.name + " by " + loopytracks.artist + " (" + loopytracks.album + ")");
        }
      },

  addTracktoPlaylist: function addtrack(trackId, playlistId) {
    var newtrack = trackId;
    var changedplist = playlistId;
    var elplaylist = library.playlists[changedplist].tracks;
     elplaylist.push(newtrack);
     console.log(elplaylist);
   },

  addTrack: function addTrack(name, artist, album) {
    var newestID = uId();
    var newesttrack = (library.tracks[newestID] = {id: newestID, name: name, artist: artist, album: album});
   //  console.log(newesttrack);
    console.log(library.tracks);
   },

   addPlaylist: function addPlaylist(name) {
    var newerID = uId();
    var newerPlist = (library.playlists[newerID] = {id: newerID, name: name, tracks: []})
    // console.log(newerPlist);
    console.log(library.playlists);
    }
}