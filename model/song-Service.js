import songsAPI from "../utils/api-Client.js"
import SongModel from "./model.js";

export const getAllSongs={
  musicSongs:[],
  allSongs:async function(singerName){
    const songs=await songsAPI(singerName);
    const mySongs=songs.map(song=>{
      const finalSongs=new SongModel(song.trackId,song.trackCensoredName,song.artistName,song.previewUrl,song.artworkUrl100);
      return finalSongs;
    });
    this.musicSongs=mySongs;
    return mySongs;
  }
}