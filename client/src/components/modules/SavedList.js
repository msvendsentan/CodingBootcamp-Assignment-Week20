import React from "react";

const style = {
    container: {
        marginTop: "30px",
        borderRadius: "5px",
        padding: "15px"
    },
    header: {
        display: "block"
    },
    aside: {
        position: "relative",
        bottom: "25px"
    }
}

const SavedList = props => (
    <div className="container blue-grey lighten-5" style={style.container}>
        <h4>Saved Articles</h4>
        <ul className="collapsible">
            {props.saved.map( result => 
                <li key={result._id}>
                    <div className="collapsible-header teal lighten-3" style={style.header}>
                        <div>{result.title}</div>
                        <div className="right" style={style.aside}>
                            <a href={result.link} target="_blank"><i className="material-icons">open_in_new</i></a>
                            <a href="#" data-id={result._id} onClick={props.delete}><i className="material-icons" data-id={result._id}>delete</i></a>
                        </div>
                    </div>
                    <div className="collapsible-body">
                        <span>{result.summary}</span>
                    </div>
                </li>
            )}
        </ul>
    </div>
);

export default SavedList;