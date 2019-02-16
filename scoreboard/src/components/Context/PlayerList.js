import React from 'react';
import PropTypes from 'prop-types';
import { Consumer } from "./Context";
import Player from './Player';

const PlayerList = () => {
    return (
        <Consumer>
            {context => (
                <React.Fragment>
                    {context.map( (player, index) =>
                        <Player
                            {...player}
                            key={player.id.toString()}
                            index={index}
                            changeScore={context.changeScore}
                            removePlayer={context.removePlayer}
                        />
                    )}
                </React.Fragment>
            )}


        </Consumer>
    );
}

PlayerList.propTypes = {
    players: PropTypes.arrayOf(PropTypes.object),
    changeScore: PropTypes.func.isRequired,
    removePlayer: PropTypes.func.isRequired
};

export default PlayerList;