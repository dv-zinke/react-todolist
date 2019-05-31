import * as firebase from "firebase/app"
import "firebase/firestore"

const firebaseConfig: any = {
  apiKey: "AIzaSyAz1sxA6vGwyJtT-CBXuxDQm4k8r7GfpOM",
  authDomain: "todolist-reacttypescript.firebaseapp.com",
  databaseURL: "https://todolist-reacttypescript.firebaseio.com",
  projectId: "todolist-reacttypescript",
  storageBucket: "todolist-reacttypescript.appspot.com",
  messagingSenderId: "806686623281",
  appId: "1:806686623281:web:ddd40c107ebeb560"
}

firebase.initializeApp(firebaseConfig)

const firestore = firebase.firestore()

export { firestore }
