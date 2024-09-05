import propTypes from 'prop-types'

function UserGreetingIf(props) {
    if (props.isLoggedIn) {
        return (
            <h2 className="welcome-message">Welcome {props.username}</h2>
        );
    }
    else return (
        <h2 className="login-promt">Please log in to continue</h2>
    );
}

function UserGreetingTernerary1(props) {
    return (
        props.isLoggedIn ? <h2 className="welcome-message">Welcome {props.username}</h2> :
            <h2 className="login-promt">Please log in to continue</h2>
    );
}

function UserGreetingTernerary2(props) {
    const text = props.isLoggedIn ? `Welcome ${props.username}` : "Please log in to continue";
    const className = props.isLoggedIn ? "welcome-message" : "login-promt";
    return <h2 className={className}>{text}</h2>;
}

function UserGreetingTernerary3(props) {
    const welcomeMessage = <h2 className="welcome-message">Welcome {props.username}</h2>;
    const loginPrompt = <h2 className="login-promt">Please log in to continue</h2>;
    return props.isLoggedIn ? welcomeMessage : loginPrompt;
}

// Setting up proptypes for UserGreeting
const UserGreeting = UserGreetingTernerary1;

UserGreeting.propTypes = {
    username: propTypes.string,
    isLoggedIn: propTypes.bool,
}

UserGreeting.defaultProps = {
    username: "Guest",
    isLoggedIn: false,
}

export default UserGreeting