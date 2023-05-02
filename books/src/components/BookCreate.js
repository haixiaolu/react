import { useState } from "react";


function BookCreate({onCreate}){

    const[title, setTitle] = useState('');

    const handleChagne = (event) =>{
        setTitle(event.target.value);
    }

    const handleSubmit =  (event) =>{
        event.preventDefault();
        onCreate(title);
        setTitle('');
    }
    return(
         <div className="book-create">
            <h3>Add a Book</h3>
            <form onSubmit={handleSubmit}>
                <label>Title</label>
                <input className="input" value={title} onChange={handleChagne} />
                <button className="button">Create!</button>
            </form>
        </div>

    )
}

export default BookCreate;