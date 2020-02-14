import React from 'react';

const PlayerCard = props => {

    return (

        <div>
            {props.playerData.map(player => (
                <div>
                    <p>Name: {player.name}</p>
                    <p>Country: {player.country}</p>
                    <p>Searches: {player.searches}</p>
                </div>
            ))}
        </div>


        // <div>
        //     <p>{props.playerData.name}</p>
        //     <p>{props.playerData.country}</p>
        //     <p>{props.playerData.searches}</p>
        // </div>


    );


};

export default PlayerCard;