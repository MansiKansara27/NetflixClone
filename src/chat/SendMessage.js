import React, { useState } from 'react'
import { db, auth } from './../firebase'
import { Timestamp, collection, addDoc } from "firebase/firestore";

import { Input, Button } from '@material-ui/core'

function SendMessage({ scroll }) {
    const [msg, setMsg] = useState('')

    async function sendMessage(e) {
        e.preventDefault()
        const { uid, photoURL } = auth.currentUser

        const msgColRef = await collection(db, 'messages');
        addDoc(msgColRef, {
            text: msg,
            photoURL,
            uid,
            createdAt: Timestamp.fromDate(new Date())
        }, { merge: true })
            .then((res) => {
                console.log(res);
                console.log(msg);
            })
            .catch((error) => {
                console.log(error);
            })

        setMsg('')
        scroll.current.scrollIntoView({ behavior: 'smooth' })
    }
    return (
        <div>
            <form onSubmit={sendMessage}>
                <div className="sendMsg">
                    <Input style={{ width: '78%', fontSize: '15px', fontWeight: '550', marginLeft: '5px', marginBottom: '-3px' }} placeholder='Message...' type="text" value={msg} onChange={e => setMsg(e.target.value)} />
                    <Button style={{ width: '18%', fontSize: '15px', fontWeight: '550', margin: '4px 5% -13px 5%', maxWidth: '200px' }} type="submit">Send</Button>
                </div>
            </form>
        </div>
    )
}

export default SendMessage
