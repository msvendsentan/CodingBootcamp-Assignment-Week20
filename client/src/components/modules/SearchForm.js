import React from "react";

const style = {
    container: {
        marginTop: "30px",
        borderRadius: "5px",
        padding: "15px"
    }
}

const SearchForm = props => (
    <div className="container blue-grey lighten-5" style={style.container}>
        <h4>Search for a Topic</h4>
        <form>
            <div className="row">
                <div className="input-field col s12">
                    <input id="search_terms" type="text" name="query" value={props.search.query} onChange={props.handleInputChange}></input>
                    <label htmlFor="search_terms">Search Term(s)</label>
                </div>
            </div>
            <div className="row">
                <div className="input-field col s12">
                    <input id="begin_date" type="date" name="begin_date" value={props.search.begin_date} onChange={props.handleInputChange}></input>
                    <label htmlFor="begin_date">Start Date (optional)</label>
                </div>
            </div>
            <div className="row">
                <div className="input-field col s12">
                    <input id="end_date" type="date" name="end_date" value={props.search.end_date} onChange={props.handleInputChange}></input>
                    <label htmlFor="end_date">End Date (optional)</label>
                </div>
            </div>
            <button className={props.search.query ? "btn waves-effect waves-light" : "btn waves-effect waves-light disabled"} type="submit" onClick={props.handleFormSubmit}>Submit
                <i className="material-icons right">send</i>
            </button>
        </form>
    </div>
);

export default SearchForm;