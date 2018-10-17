import React from "react";
import SearchForm from "../modules/SearchForm";
import ResultsList from "../modules/ResultsList";
import SavedList from "../modules/SavedList";

const ModulesContainer = () => (
    <div>
        <SearchForm />
        <ResultsList />
        <SavedList />
    </div>
);

export default ModulesContainer;