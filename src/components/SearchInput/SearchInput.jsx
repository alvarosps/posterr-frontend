import React, { useContext } from 'react';
import { TextField } from '@mui/material';
import { PostsContext } from '../../contexts/PostsContext';

const SearchInput = () => {
    const { setSearchTerm } = useContext(PostsContext);

    const handleSearchInputChange = (event) => {
        setSearchTerm(event.target.value);
    };

    return (
        <TextField
            label="Search"
            variant="outlined"
            size="small"
            onChange={handleSearchInputChange}
            sx={{
                width: '100%',
                padding: 2,
                '.MuiInputBase-root': {
                    width: '100%',
                    padding: 1,
                    border: '1px solid divider',
                    borderRadius: 'borderRadius',
                    fontFamily: 'typography.fontFamily',
                    fontSize: 'typography.fontSize',
                    color: 'text.primary',
                    transition: 'border-color 0.2s',
                    '&:focus': {
                        borderColor: 'primary.main',
                        outline: 'none',
                    },
                },
            }}
        />
    );
};

export default SearchInput;
