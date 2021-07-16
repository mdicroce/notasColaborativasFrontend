import React,  { useState } from 'react'



const Notes = (props)  => {
    const notas = <Note item = {props.fullNote} users = {props.fullNote.room.users} setNote={props.setFullNote}/>
    const moreNotes = props.fullNote.moreNotes.map((actualNote) => <MoreNotes key={actualNote.title} item = {actualNote}/>)
    return (
        <div>
            {notas}
            {moreNotes}
        </div>
    )
}

const Note = (props) => {
    const [showcomment, setShowComment] = useState(false)
    const item = props.item;
    
        return (
            <div style={{'margin':'10px'}}>
                <div key={item.id}>
                    <div><h2>Title: <span>{item.title}</span></h2>
                        <h3>Owner: <span>{item.owner.username}</span></h3>
                        <p>Responsable: <span>{item.owner.username}</span></p>
                        <p>Fecha: <span>{item.date}</span></p>
                    </div>
                    <textarea value={item.content}></textarea>
                    <button onClick={()=>setShowComment(true)}>add comment</button>
                    { showcomment && <Comment key="props" users= {props.users} setNote={props.setNote} note={item} />}
                </div>
            </div>
        )
}

const Comment = ({users, setNote, note}) => {
    const [comment, setComment] = useState({})
    const mappedUsers  = users.map((actual)=> {
        return (<option key={actual.username} value={JSON.stringify(actual)}>{actual.username}</option>)
    })
    return (
        <div>
            <form onSubmit={(e)=>{
                e.preventDefault()
                setNote({...note , "moreNotes" : note.moreNotes.concat(comment)})
                console.log(note)
            }}>
                <input type="text" onChange={(e)=>{
                    const tl = {...comment, 'title':e.target.value}
                    setComment(tl)
                }} value={comment.title?comment.title:""}></input>
                <textarea onChange={(e)=>{
                    const cnt = {...comment, 'content':e.target.value}
                    setComment(cnt)
                    }} value={comment.content}></textarea>
                <select onChange={(e)=>{
                    
                    const selected = {...comment, 'owner':JSON.parse(e.target.valuen)}
                    setComment(selected)
                }}>
                    {mappedUsers}
                </select>
                <button type="submit">Add Comment</button>
            </form>
        </div>
    )
}

const MoreNotes = ({item}) =>{

    return (
            <div style={{'margin':'10px'}}>
                <div key={item.id}>
                    <div><h2>Title: <span>{item.title}</span></h2>
                        <h3>Owner: <span>{item.owner.username}</span></h3>
                        <p>Responsable: <span>{item.owner.username}</span></p>
                        <p>Fecha: <span>{item.date}</span></p>
                    </div>
                    <textarea value={item.content}></textarea>
                </div>
            </div>
        )
}
export default Notes