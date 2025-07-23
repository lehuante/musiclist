import React,{Fragment} from 'react'

const SearchResults = ({titulo, handleClick}) =>{
    return (
        <Fragment>
                {titulo.map((cancion)=>{
                    const { key, title, author, time } = cancion;
                    

                    return (
                        <article className="cancion" key={key}  >
                            <div className="slotA"><h3 >{title}</h3></div>
                            <div className="slotB"><h4 >{author}</h4></div>
                            <div className="slotC">
                                <p > {time} min.</p>
                                <button className="btn" onClick={(e) => handleClick(e, cancion)} >Add to Library</button>
                            </div>
                        </article>
                    )
                })}
        </Fragment>
    )
}

export default SearchResults;