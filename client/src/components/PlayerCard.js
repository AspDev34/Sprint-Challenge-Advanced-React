import React from 'react';

const PlayerCard = props => {

    return (

        <div>
            <p>{props.playerData.name}</p>
            <p>{props.playerData.country}</p>
            <p>{props.playerData.searches}</p>
        </div>


    );


};

export default PlayerCard;