import { Component } from 'react';
import { toast } from 'react-toastify';

import { SearchBar, SearchForm, SearchButton, SearchButtonLabel, SearchInput } from './Searchbar.module';

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
        this.setState({searchQuery: ''})
    }

    queryChange = ({currnetTarget : {value} }) => {
        this.setState({ searchQuery: value.toLowerCase()})
    }

    render() {
        const {searchQuery} = this.state
        return (
            <SearchBar class="searchbar">
    <SearchForm class="form">
    <SearchButton type="submit" class="button">
        <SearchButtonLabel class="button-label">Search</SearchButtonLabel>
    </SearchButton>

    <SearchInput
        class="input"
        type="text"
        autocomplete="off"
        autofocus
        placeholder="Search images and photos"
    />
    </SearchForm>
</SearchBar>
        )
    }

}
    

