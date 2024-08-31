import { getAllSongs } from "../model/song-Service.js";
import { addInPlayList } from "../utils/database/playlist-Crud.js";
import { signInWithGoogle } from "../utils/myOauth.js";


const playSong=async (singer='sonu nigam')=>{
  const songs=await getAllSongs.allSongs(singer);
  console.log(songs);
  for(let i=0;i<songs.length;i++){
    playSongs(songs[i]);
  }
}

const bindEvents=()=>{
  document.querySelector('#loginBtn').addEventListener('click',doLogin);
  const button=document.querySelector('#btn');
  button.addEventListener('click',doSearch);
}
const doLogin= async()=>{
  const user=await signInWithGoogle();
  document.querySelector('#userinfo').innerText =`Email ${user.email} Welcome ${user.displayName}`;
}

const doSearch=()=>{
  document.querySelector('#root').innerHTML='';
  const val=document.querySelector('#search').value;
  playSong(val);
}

window.addEventListener('load',bindEvents);

//Add to the playlist

const toggleToPlaylist=(currentSong)=>{
  const button=document.createElement('button');
  button.className='btn btn-success';
  button.innerText='Add to Playlist';
  button.addEventListener('click',()=>{
    addOrRemoveToPlaylist(currentSong);
  })
  return button;
}
const addOrRemoveToPlaylist=async (song)=>{
  const doc=await addInPlayList({id:song.id,title:song.title,artistName:song.artistName,audioUrl:song.audioUrl,imageUrl:song.imageUrl,isInPlaylist:song.isInPlaylist});
}

//Audio play or Stop logic

let previousSong;
const isPlaying=(event)=>{
  if(previousSong){
    previousSong.pause();
    previousSong.currentTime=0;
  }
  previousSong=event.target;
}

const playSongs=(currentSong)=>{

  const card=document.createElement('div');
  card.className='card';
  card.style.width='18rem';

  const image=document.createElement('img');
  image.className='card-img-top';
  image.src=currentSong.imageUrl;
  card.appendChild(image);

  const cardBody=document.createElement('div');
  cardBody.className='card-body';

  const h5=document.createElement('h5');
  h5.className='card-title';
  h5.innerText=currentSong.title;
  cardBody.appendChild(h5);

  const pTag=document.createElement('p');
  pTag.className='card-text';
  pTag.innerText=currentSong.artistName;
  cardBody.appendChild(pTag);

  const audio=document.createElement('audio');
  audio.controls=true;
  audio.src=currentSong.audioUrl;
  audio.addEventListener('play',isPlaying);
  audio.type='mpeg/audio';
  cardBody.appendChild(audio);

  cardBody.appendChild(toggleToPlaylist(currentSong));

  card.appendChild(cardBody);
  const div=document.querySelector('#root');
  div.appendChild(card);
}
playSong();