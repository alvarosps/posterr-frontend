import React, { useContext } from 'react';
import { ButtonGroup, Button } from '@mui/material';
import { PostsContext } from '../../contexts/PostsContext';

const SortOptions = () => {
    const { setSortOption } = useContext(PostsContext);

    const handleSortOptionChange = (option) => {
        setSortOption(option);
    };

    return (
        <ButtonGroup
            variant="contained"
            aria-label="sort options"
            sx={{
                display: 'flex',
                justifyContent: 'center',
                gap: 2,
                marginTop: 2,
                marginBottom: 2,
                '.MuiButton-root': {
                    padding: '8px 16px',
                    borderRadius: 'borderRadius',
                    fontSize: 'typography.fontSize',
                    fontWeight: 'typography.fontWeightBold',
                    color: 'common.white',
                    transition: 'background-color 0.2s',
                    '&:hover': {
                        backgroundColor: 'primary.dark',
                    },
                },
            }}
        >
            <Button
                color="primary"
                onClick={() => handleSortOptionChange('latest')}
            >
                Latest
            </Button>
            <Button
                color="secondary"
                onClick={() => handleSortOptionChange('trending')}
            >
                Trending
            </Button>
        </ButtonGroup>
    );
};

export default SortOptions;
