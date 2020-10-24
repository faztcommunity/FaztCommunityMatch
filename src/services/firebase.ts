import firebase from 'firebase/app'
import 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const config = {
  apiKey: 'AIzaSyCQU7Ei5-0GBIDurkx9CR2q5uDaVzaw3zQ',
  authDomain: 'faztmacht.firebaseapp.com',
  databaseURL: 'https://faztmacht.firebaseio.com',
  projectId: 'faztmacht',
  storageBucket: 'faztmacht.appspot.com',
  messagingSenderId: '436079141447',
  appId: '1:436079141447:web:57ed68839f4c5a8b41c762',
  measurementId: 'G-JPJ98Y01J3'
}

if (!firebase.apps.length) {
  firebase.initializeApp(config)
}

export default firebase
