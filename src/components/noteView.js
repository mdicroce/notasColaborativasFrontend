import React,  { useState } from 'react'



const Notes = (props)  => {
    const notas = <Note item = {props.fullNote} users = {props.fullNote.room.users} setNote={props.setFullNote}/>
    const moreNotes = props.fullNote.moreNotes.map((actualNote) => <MoreNotes key={actualNote.title} users={props.fullNote.room.users} item = {actualNote} notes={props.fullNote} setNote = {props.setFullNote}/>)
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
    //RECORDAR poner el usuario loggeado como creador de la nota
    const onSubmitForm = (e)=>{
        e.preventDefault()
        setNote({...note , "moreNotes" : note.moreNotes.concat(comment)})
        console.log(comment)
        console.log(note)
    }
    const [comment, setComment] = useState({'owner':users[0], 'responsable': JSON.parse(window.localStorage.getItem('loggedUser')).username})
    const mappedUsers  = users.map((actual)=> {
        return (<option key={actual.username} value={JSON.stringify(actual)}>{actual.username}</option>)
    })
    return (
        <div>
            <form onSubmit={onSubmitForm}>
                <input type="text" onChange={(e)=>{
                    const tl = {...comment, 'title':e.target.value}
                    setComment(tl)
                }} value={comment.title?comment.title:""}></input>
                <textarea onChange={(e)=>{
                    const cnt = {...comment, 'content':e.target.value}
                    setComment(cnt)
                    }} value={comment.content}></textarea>
                <select onChange={(e)=>{
                    
                    const selected = {...comment, 'owner':JSON.parse(e.target.value)}
                    setComment(selected)
                }}>
                    {mappedUsers}
                </select>
                <button type="submit">Add Comment</button>
            </form>
        </div>
    )
}

const EditNote = ({users, setNote, note, noteToEdit}) => {
    //RECORDAR poner el usuario loggeado como creador de la nota
    const onSubmitForm = (e)=>{
        e.preventDefault()
        const mNote = [...note.moreNotes]
        let copiedNote = {...note, "moreNotes" :[...mNote]}
        if(note === noteToEdit)
        {
            copiedNote = {'title':comment.title, 'content': comment.content, 'owner': comment.owner, "moreNotes":[...mNote]}
        }
        else
        {
            const noteIndex = note.findIndex((noteActual) => noteActual === noteToEdit)
            mNote[noteIndex] = comment;
        }
        setNote({...copiedNote, "moreNotes" : [...mNote]})
    }
    const [comment, setComment] = useState({...noteToEdit})
    const mappedUsers  = users.map((actual)=> {
        return (<option key={actual.username} value={JSON.stringify(actual)}>{actual.username}</option>)
    })
    return (
        <div>
            <form onSubmit={onSubmitForm}>
                <input type="text" onChange={(e)=>{
                    const tl = {...comment, 'title':e.target.value}
                    setComment(tl)
                }} value={comment.title}></input>
                <textarea onChange={(e)=>{
                    const cnt = {...comment, 'content':e.target.value}
                    setComment(cnt)
                    }} value={comment.content}></textarea>
                <select onChange={(e)=>{
                    
                    const selected = {...comment, 'owner':JSON.parse(e.target.value)}
                    setComment(selected)
                }}>
                    {mappedUsers}
                </select>
                <button type="submit">Add Comment</button>
            </form>
        </div>
    )
}
const MoreNotes = ({users,item, notes, setNote}) =>{
    const [edit, setEdit] = useState(false)
    const showButton = JSON.parse(window.localStorage.getItem('loggedUser')).username === item.owner
    return (
            <div style={{'margin':'10px'}}>
                <div>
                    { showButton ?  <button onClick={(e)=>{
                        e.preventDefault()
                        setEdit(!edit);
                    }}>EDIT</button>: ""}
                    {edit && <EditNote users={users} setNote={setNote} note={notes} noteToEdit={item}/>}
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