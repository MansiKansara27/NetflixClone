import React, { useState, useEffect, useRef } from 'react'
import { db, auth } from "./../firebase"
import SendMessage from "./SendMessage"
import { orderBy, limit, collection, query, getDocs, onSnapshot } from "firebase/firestore";
import defaultPic from "./../../src/assests/defaultPic.jpg"
import "../App.css"

const Chat = () => {
    const scroll = useRef()
    const [messages, setMessages] = useState([])

    const getMsgData = async () => {
        const q = query(collection(db, "messages"), orderBy("createdAt"), limit(50));
        console.log(q)
        const snapshot = await getDocs(q);
        setMessages(snapshot.docs.map(doc => doc.data()))
    }
    useEffect(() => {
        // getMsgData()

        const unsub = onSnapshot(query(collection(db, "messages"), orderBy("createdAt"), limit(50)), (doc) => {

            let temp = doc.docs.map((data, key) => {
                console.log(data.data())
               return data.data()
            })
            console.log(temp)
            setMessages(temp)
        })

    }, [])
    return (
        <div>
            <div className="msgs">

                {messages.map(({ text, photoURL, uid }, key) => (
                    <div key={key}>
                        <div className={`msg ${uid === auth.currentUser.uid ? 'sent' : 'received'}`}>
                            {photoURL ? <img className="imgChat" src={photoURL} alt="" /> : <img className="imgChat" src={defaultPic} alt="" />}
                            <p className="pChat">{text}</p>
                        </div>
                    </div>
                ))}
            </div>
            <SendMessage scroll={scroll} />
            <div ref={scroll}></div>
        </div>
    )
}

export default Chat
