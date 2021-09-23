import React from 'react'

function SearchField(props) {

	const handleInputChange = event => {
		// call setQuery in App.js via the prop
		props.setQueryProp(event.target.value);
        // console.log(event.target.value);
	}

    return (
        <div>
            <input type="text" onChange={handleInputChange} />
        </div>
    )
}

export default SearchField


