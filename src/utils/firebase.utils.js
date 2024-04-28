import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';

import {
  getFirestore,
  collection,
  doc,
  getDoc,
  setDoc,
  writeBatch,
} from 'firebase/firestore';

import productsData from '../SHOP_DATA';

//FB Config

const firebaseConfig = {
  apiKey: 'AIzaSyDdyXa0z_5xabo8gJzX76z7JXt-YnlsenY',
  authDomain: 'crwn-project-90042.firebaseapp.com',
  projectId: 'crwn-project-90042',
  storageBucket: 'crwn-project-90042.appspot.com',
  messagingSenderId: '480371448615',
  appId: '1:480371448615:web:bd0d802f86326a66d82702',
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

//Instantiate authentication
const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: 'select_account',
});

//Initialize auth
export const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, provider);

// Instanciate firestore

export const db = getFirestore();

export const createUserDocuementFromAuth = async (userAuth, additionalInfo) => {
  const userDocRef = doc(db, 'users', userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { email, displayName } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInfo,
      });
    } catch (error) {
      console.log('error creating the user ', error);
    }
  }
  return userDocRef;
};

// email and password creating auth
export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};

// email and password siging in
export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};

//sign out
export const signOutUser = async () => await signOut(auth);

//State observer

export const onAuthStateChangedListener = callback =>
  onAuthStateChanged(auth, callback);

// migrating products to firebase
export const addCollectionsAndDocuments = async (
  collectionsKey,
  objectsToAdd
) => {
  const productDocRef = await collection(db, collectionsKey);
  try {
    await setDoc(productDocRef, objectsToAdd);
  } catch (error) {
    console.log('error creating the products ', error);
  }

  return productDocRef;
};
