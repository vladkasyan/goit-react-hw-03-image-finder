import { Component } from 'react';
import { toast } from 'react-toastify';

import { SearchBars, SearchForm, SearchButton, SearchButtonLabel, SearchInput } from './Searchbar.module';

export default class SearchBar extends Component {
    state = {
        searchQuery: ``
    };

    SubmitForm = event => {
        const searchQuery = this.state.searchQuery.trim()
        event.preventDefault()


        if (searchQuery.trim() === "") {
            toast.info('Please, enter search word!');
            return
        }

        this.props.onSubmit(searchQuery);
    
        this.setState({ searchQuery: '', galleryPage: 1, galleryItems: [], isButtonShow: false });
    }

    handleQueryChange = ({ currentTarget: { value } }) => {
        this.setState({ searchQuery: value.toLowerCase() });
      };

    render() {
        const {searchQuery} = this.state
        return (
            <SearchBars>
    <SearchForm onSubmit={this.SubmitForm}>
    <SearchButton type="submit">
        <SearchButtonLabel>Search</SearchButtonLabel>
    </SearchButton>

    <SearchInput
        type="text"
        autocomplete="off"
        autoFocus
        placeholder="Search images and photos"
        onChange={this.handleQueryChange}
        name="searchQuery"
        value={searchQuery}
    />
    </SearchForm>
</SearchBars>
        )
    }

}
    

