import { getAuth, signInWithPopup, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";

export const signInWithGoogle=async()=>{
  const provider = new GoogleAuthProvider();
  try{
    const auth = getAuth();
    const result=signInWithPopup(auth, provider);
  
  const credential = GoogleAuthProvider.credentialFromResult(result);
  const token = credential.accessToken;
  const user = result.user;
  const {displayName, email, photoURL} = user;
  return {displayName, email, photoURL};
  }
  catch(err){
    console.log('Fail to login with Google ',err);
  }
}
