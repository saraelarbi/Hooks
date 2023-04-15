import React from 'react';

const Details = ({ match, mvlst }) => {
    const movie = mvlst.find((elt) => elt.id.toString() === match.params.id);
    return (
        <div>
            {movie.description}
        </div>
    )
}

export default Details