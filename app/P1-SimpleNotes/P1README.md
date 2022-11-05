# Project 1: Simple Note Taker ==> NEXTJS 13 EDITION

Refactor of Simple Note Taker 

[link](github.)
## PocketBase -- My New Favorite Toy
### This Things Great, Super Simple To Set Up.

Ill be using other databases aswell in this project but wanted to start simple

## NextJS Thigns I Learned

getStaticProps is now handled in an intelegent manor. 
Since Everythihns ServerSide unlike react Simply
For Basic Use
```ts
async function getNotes() {
    const res = await fetch("http://127.0.0.1:8090/api/collections/notes/records?page=1&perPage=30",
    {cache: "no-store"}
    );
    const data = await res.json();
    return data?.items as any[];
}
```
For ISR
```ts
async function getNote(noteId: string) {
    const res = await fetch(`http://127.0.0.1:8090/api/collections/notes/records/${noteId}`,
    //incremental static recaching (ISR) - https://nextjs.org/docs/basic-features/data-fetching#incremental-static-regeneration
    {
        next: { revalidate: 10 },
    });
    const data = await res.json();
    return data as any;
}
```

## Next.js (As A Front End)

components [loading.tsx] and [error.tsx] speed up the page beacuse next can stream data directly into the component rather than waiting for it to load when fetching data from server

TO GET DATA, NEED CLINT REDERED COMPONENT [CreateNote.tsx]
