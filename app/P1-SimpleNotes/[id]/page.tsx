
async function getNote(noteId: string) {
    const res = await fetch(`http://127.0.0.1:8090/api/collections/notes/records/${noteId}`,
    //incremental static recaching (ISR) - https://nextjs.org/docs/basic-features/data-fetching#incremental-static-regeneration
    {
        next: { revalidate: 10 },
    });
    const data = await res.json();
    return data as any;
}
export default async function SimpleNotesPage({ params }: any) {
    const note = await getNote(params.id);

    return (
        <div>
            <h1>notes/{note.id}</h1>
            <div className="notes">
                <h3>{note.title}</h3>
                <div>{note.completed_bool}</div>
                <div>{note.note}</div>
                <div className="createdat">Created At: {note.created}</div>
            </div>
        </div>
    );
}