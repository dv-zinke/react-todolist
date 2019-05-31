import * as firebase from "firebase/app"
import "firebase/firestore"

const firebaseConfig: any = {

}

firebase.initializeApp(firebaseConfig)

const firestore = firebase.firestore()

export { firestore }
