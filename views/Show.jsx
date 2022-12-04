const h1 = {
    color: '#ffffff',
    backgroundColor: '#44c4d1',
    padding: '10px'
};


const React = require("react");

class Show extends React.Component {
    render() {
        const { name, img } = this.props;    // destructure the pokemon array
        return (
            <div>
                <h1 style={h1}>Gotta Catch 'Em All!</h1>
                <a href="/pokemon">Pokemon Index Page</a>
                <h2>{name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()}</h2>
                {/* <a href="/pokemon"><img src={img + ".jpg"} alt={name}></img></a> */}
                <a href="/pokemon"><img src={`${img}.jpg`} alt={name}></img></a>
            </div>
        )
    }
}

module.exports = Show