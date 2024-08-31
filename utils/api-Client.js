const songsAPI=async(singer)=>{
  const URL=`https://itunes.apple.com/search?term=${singer} &limit=10`;
  const response=await fetch(URL);
  const object=await response.json();
  const songs=object['results'];
  return songs;
}
export default songsAPI;
