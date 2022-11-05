import { useEffect, useState } from "react"

export default function HomePage() {
    //object for posts

    
    const Posts = {
        post1: {
            title: "Project 1: Simple Note Taker",
            content:
                "This simple CRUD app implements pocketbase for the database and Next.JS 13 for the front end. It is a simple note taker that allows you to create, read, update, and delete notes. Each user has their own notes and can only access their own notes. Each users notes is front to end encrypted. The app is hosted on Vercel.",
            link: "./P1-SimpleNotes",
        },
        post2: {
            title: "Post 2",
            content: "This is the content for post 2",
            link: "tbd",
        },
    };
    return (
        <>
            <div id="Blog-Info">
                <h1>My Hundred Day Blog Next.JS 13 Challenge</h1>
                <div>

                    This is a blog that I will be updating every day for 100 days. The plan is to write a program a day for 100 days. Some Programs might be more then one day so i can learn the methodology aswell as implement it.
                    <div>
                        <div>
                            The Github For this Projesct can be found here:
                        </div>
                        <a href="github>">Github</a>
                        <div>
                            Check Github Readme For File structure notes
                        </div>
                    </div>
                </div>
            </div>
            <div id="Blog-Posts">
                <h1>Posts</h1>
                <div id="Post-1">
                    <h2>- {Posts.post1.title}</h2>
                    <p>- {Posts.post1.content}</p>
                    <ul>
                        <li> Started 11/4/2022 </li>
                        <li> Simple CRUD App completed 11/5/2022</li>
                    </ul>
                    <a href={Posts.post1.link}>Project Link</a>
                </div>
                <div id="Post-2">
                    <h2>- {Posts.post2.title}</h2>
                    <p>- {Posts.post2.content}</p>
                    <a href={Posts.post2.link}>Project Link</a>
                </div>
            </div>
        </>
    );
}
