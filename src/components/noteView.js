import React from 'react'



const Notes = (props)  => {
    const notas = <Note item = {props.notes}/>
    return (
        <div>
            {notas}
        </div>
    )
}

const Note = ({item}) => {
    let moreNotes = []
    console.log(item)
    if(item.moreNotes.length > 0)
    {
        moreNotes = item.moreNotes.map((actual) => {
            return <Note item={actual} />
        })
    }
        return (
            <div>
                <div key={item.id}>
                    <div><h2>Title: <span>{item.title}</span></h2>
                        <h3>Owner: <span>{item.owner.username}</span></h3>
                        <p>Responsable: <span>{item.owner.username}</span></p>
                        <p>Fecha: <span>{item.date}</span></p>
                    </div>
                    <textarea>{item.content}</textarea>

                </div>
                <div className= "comments">
                    {moreNotes}
                </div>
            </div>
        )
}
export default Notes