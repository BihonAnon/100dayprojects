'use client';

import { useState } from "react";
import { useRouter } from 'next/navigation';

export default function CreateNote() {
    const [note_title, setTitle] = useState('');
    const [note, setContent] = useState('');

    const router = useRouter();

    const createNew = async() => {
        await fetch('http://127.0.0.1:8090/api/collections/notes/records', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                note_title,
                note,
            }),
        });
        setContent('');
        setTitle('');
        router.refresh();
    } 
    return (
        <form onSubmit={createNew}>
            <h3>New Note</h3>
            <input type='text' placeholder="Title" value={note_title} onChange={(e) => setTitle(e.target.value)}
            />
            <textarea placeholder="Content" value={note} onChange={(e)=>setContent(e.target.value)}
            />
            <button type="submit">
                CreateNote
            </button>
        </form>
    )
}