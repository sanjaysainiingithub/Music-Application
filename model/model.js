class SongModel{
  constructor(id,title="",artistName="",audioUrl="",imageUrl=""){
    this.id=id;
    this.title=title;
    this.artistName=artistName;
    this.audioUrl=audioUrl;
    this.imageUrl=imageUrl;
    this.isInPlaylist=false;
  }
}
export default SongModel;