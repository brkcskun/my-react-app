import React from 'react'
import { useState } from 'react';

function FormDemoOld() {

    const [name, setName] = useState('Mehmet');
    const [surname, setSurname] = useState('Şen');
    const [friends, setFriends] = useState(["Ahmet", "Murat"]);
    const [address, setAddress] = useState({ title: "Istanbul", zip: 34756 });
    
    const ChangeName = (event) => setName(event.target.value);
    const ChangeSurname = (event) => setSurname(event.target.value);

    return (
        <>
            <h1>Merhaba {name}</h1>
            <button onClick={() => setName('Ahmet')}>İsim degiştir</button>

            <hr />
            <br />

            {friends.map((friend, index) => (
                <div>{friend}</div>
            ))}

            <button onClick={() => setFriends([...friends, "Ayşe"])}>İsim ekle</button>

            <hr />

            <h1>Adres</h1>
            <button onClick={() => setAddress({ ...address, title: "Ankara" })}>Değiştir</button>

            <br />
            <br />
            {address.title} {address.zip}

            <hr />

            <h1>Form</h1>
            <input value={name} onChange={ChangeName}></input>
            <br />
            <input value={surname} onChange={ChangeSurname}></input>
            <p>{name} {surname}</p></>
    )
}

export default FormDemoOld