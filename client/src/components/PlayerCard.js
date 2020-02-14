import React from 'react';

const PlayerCard = props => {

    return (

        <div>
            {props.playerData.map(player => (
                <div>
                    <p>{player.name}</p>
                    <p>{player.country}</p>
                    <p>{player.searches}</p>
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