import React,{Fragment} from 'react'

const Library = ({track}) =>{

    return (
        <Fragment>
                {track.map((song)=>{
                    const { title, author, time } = song;
                    

                    return (
                        <article className="cancion"  >
                            <div className="slotA"><h3 >{title}</h3></div>
                            <div className="slotB"><h4 >{author}</h4></div>
                            <div className="slotC">
                                <p > {time} min.</p>
                                <button className="btn"  >Delete</button>
                            </div>
                        </article>
                    )
                })}
        </Fragment>
    )
}

export default Library;