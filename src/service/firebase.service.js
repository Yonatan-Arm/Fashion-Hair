import { getFirestore, collection, getDocs, addDoc, query, where, getDoc, doc, setDoc, limit, startAfter, orderBy, deleteDoc, onSnapshot }
    from "https://www.gstatic.com/firebasejs/9.1.2/firebase-firestore.js"
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.2/firebase-app.js"

const pageSize = 8;
var gLastDocForPaging = null


export const firebaseService = {
    initFirebase,
    getDocuments,
    getDocument,
    addDocument,
    saveDocument,
    subscribe
}

async function initFirebase() {
    // Get from Firebase
    const firebaseConfig = {
      };
    

    // Initialize Firebase
    const app = initializeApp(firebaseConfig)


    // debug:
    window.tsayriliApp = app
}

async function addDocument(collectionName, document) {
    const db = getFirestore()
    try {
        const docRef = await addDoc(collection(db, collectionName), document)
        return docRef
    } catch (err) {
        console.error("Error adding document: ", err)
        throw err
    }
}

async function getDocument(collectionName, id) {
    const db = getFirestore()
    const snap = await getDoc(doc(db, collectionName, id))
    if (!snap.exists()) {
        return null
    }
    const docToReturn = snap.data()
    docToReturn.id = id
    return docToReturn;
}


async function saveDocument(collectionName, document, id) {
    const db = getFirestore()
    // returns undefined
    await setDoc(doc(db, collectionName, id), document, { merge: true })
}

async function getDocuments(collectionName, filterBy) {

    const db = getFirestore()
    var collectionRef = collection(db, collectionName)
    var orderByParams = []

    if (filterBy.byUserId) {
        collectionRef = query(collectionRef, where('byUser.id', '==', filterBy.byUserId))
    }


    const querySnapshot = await getDocs(collectionRef)
    gLastDocForPaging = querySnapshot.docs[querySnapshot.docs.length - 1]
    const docs = []
    querySnapshot.forEach((doc) => {
        docs.push({ id: doc.id, ...doc.data() })
    })
    return docs
}


// Does not work
function subscribe(collectionName, cb) {
    const db = getFirestore()
    const docs = []
    const unsub = onSnapshot(collection(db, collectionName), (querySnapshot) => {
        querySnapshot.forEach((doc) => {
            docs.push({ id: doc.id, ...doc.data() })
        })        
        cb(docs)
    });

}
