import React, {Component} from 'react';

// const AddPlayerForm = ({ addPlayer }) => {
//
//     let playerInput = React.createRef();
//     let handleSubmit = (e) => {
//         e.preventDefault();
//         addPlayer(playerInput.current.value);
//         e.currentTarget.reset();
//     }
//
//     return (
//         <form onSubmit={handleSubmit}>
//             <input
//                 type="text"
//                 ref={playerInput}
//                 placeholder="Enter a player's name"
//             />
//
//             <input
//                 type="submit"
//                 value="Add Player"
//             />
//         </form>
//     );
// }







class AddPlayerForm extends Component {



    playerInput = React.createRef();


    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addPlayer(this.playerInput.current.value);
        e.currentTarget.reset();

    }

    render() {
        console.log(this.playerInput);
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    ref={this.playerInput}
                    placeholder="Enter a players name"
            />
                <input
                    type="submit"
                    value="Add Player"
                    />

            </form>

        );

    }}

    export default AddPlayerForm;
