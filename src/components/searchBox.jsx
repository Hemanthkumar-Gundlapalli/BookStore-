import React, {Component} from 'react';

class Search extends Component {
    constructor(value,onChange){
        super(value, onChange)
        this.state = {  searchQuery:"" }
        this.handleSearch = query => {
            this.setState({searchQuery: query})
          };
    }
    render() { 
        return ( <input text="text" name="query" className="form-control my-3" placeholder="search..." value={this.props.value} onChange={e => onchange(e.currentTarget.value)} />
        
        );
    }
}
 
export default Search;

