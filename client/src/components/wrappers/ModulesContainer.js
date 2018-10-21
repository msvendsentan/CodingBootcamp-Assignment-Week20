import React, { Component } from "react";
import SearchForm from "../modules/SearchForm";
import ResultsList from "../modules/ResultsList";
import SavedList from "../modules/SavedList";
import API from "../../utils/API";

class ModulesContainer extends Component {
    state = {
        search: {
            query: "",
            begin_date: "",
            end_date: "",
        },
        results: [],
        saved: []
    }

    componentDidMount() {
        this.loadArticles();
    };

    loadArticles = () => {
        API.populate()
            .then(res => {
                console.log(res.data);
                let newArticles = res.data.filter(article => article.saved === false);
                let savedArticles = res.data.filter(article => article.saved === true);
                this.setState({
                    results: newArticles,
                    saved: savedArticles 
                });
            })
            .catch(err => console.log(err));
    };

    searchNews = search => {
        API.search(search)
            .then(res => this.loadArticles())
            .catch(err => console.log(err));
    };

    convertDate = date => {
        return date = date.replace(/-/g, "");
    };

    saveArticle = event => {
        API.save(event.target.getAttribute("data-id"))
            .then(res => this.loadArticles())
            .catch(err => console.log(err));
    };

    deleteArticle = event => {
        API.delete(event.target.getAttribute("data-id"))
            .then(res => this.loadArticles())
            .catch(err => console.log(err));
    };

    handleFormSubmit = event => {
        event.preventDefault();
        console.log({
            query: this.state.search.query,
            begin_date: this.convertDate(this.state.search.begin_date),
            end_date: this.convertDate(this.state.search.end_date)
        });
        this.searchNews({
            query: this.state.search.query,
            begin_date: this.convertDate(this.state.search.begin_date),
            end_date: this.convertDate(this.state.search.end_date)
        });
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState(prevState => ({
            search: {
                ...prevState.search,
                [name]: value
            }
        }));
    };

    render() {
        return (
            <div>
                <SearchForm 
                    handleFormSubmit={this.handleFormSubmit}
                    handleInputChange={this.handleInputChange}
                    search={this.state.search}
                />
                <ResultsList 
                    results={this.state.results}
                    save={this.saveArticle}
                />
                <SavedList 
                    saved={this.state.saved}
                    delete={this.deleteArticle}
                />
            </div>
        )
    }
}

export default ModulesContainer;