import React, { Component } from 'react';
import './SearchBar.css';



class SearchBar extends Component {
    constructor(props){
        super(props);

        this.state = { term: '', location: '', sortBy: 'best_match'};

        this.handleTermChange = this.handleTermChange.bind(this);
        this.handeLocationChange = this.handeLocationChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);

        this.sortByOptions = {
            'Best Match': 'best_match',
            'Highest Rated': 'rating',
            'Most Reviewed': 'review_count'
        };
    }

    getSortByClass(sortByOption){
        if(this.state.sortBy === sortByOption){
            return 'active';
        }else{
            return '';
        }
    }

    handleSortByChange(sortByOption){
        this.setState({ sortBy: sortByOption });
    }

    handleTermChange(event){
        this.setState({ term: event.target.value })
    }

    handeLocationChange(event){
        this.setState({ location: event.target.value })
    }

    handleSearch(event){
        this.props.searchYelp(this.state.term, this.state.location, this.state.sortBy);
        event.preventDefault();
    }

    renderSortByOptions(){
        return Object.keys(this.sortByOptions).map(sortByOption => {
            let sortByOptionValue = this.sortByOptions[sortByOption];
            return <li className={this.getSortByClass(sortByOptionValue)} 
            key={sortByOptionValue} 
            onClick={this.handleSortByChange.bind(this, sortByOptionValue)}>
                {sortByOption}</li>;
        });
    }
    render() {
        return (
            <div className="SearchBar" searchYelp={this.searchYelp}>
                <div className="SearchBar-sort-options">
                    <ul>
                        {this.renderSortByOptions()}
                    </ul>
                </div>
                <div className="SearchBar-fields">
                    <input placeholder="Search Businesses" onChange={this.handleTermChange}/>
                    <input placeholder="Where?" onChange={this.handeLocationChange}/>
                </div>
                <div className="SearchBar-submit">
                    <a href="www.#.com" onClick={this.handleSearch}>Let's Go</a>
                </div>
            </div>
        )
    }
}

export default SearchBar;