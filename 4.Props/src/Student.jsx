// Need to import it to use propTypes
import propTypes from 'prop-types';

function Student(props) {
    return (
        <div className="student">
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Student: {props.isStudent ? "True" : "False"}</p>
        </div>
    );
}

// propTypes = a mechanism that ensures that the passed value is of the correct datatype.
// f.eks: age: PropTypes.number

// If a propTypes check fails, the code will still run.
// But you will get an error in the console.

// Good pratice to include propTypes if you are using props,
// using propTypes makes it easier to spot erros.

// Minner mye om hvordan node rammeverket joi er satt opp
Student.propTypes = {
    name: propTypes.string,
    age: propTypes.number,
    isStudent: propTypes.bool,
}

// defaultProps = default values for props in case they are not
//                passed form the parent component
//                f.eks: name: "Guest"
Student.defaultProps = {
    name: "Guest",
    age: 0,
    isStudent: false,
}

// Tried to user default paramets for it, but for now couldn't find out how to do it
function StudentDefaultParameters(props = { name: "Test", age: 0, isStudent: false, }) {
    console.log(props);
    return (
        <div className="student">
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Student: {props.isStudent ? "True" : "False"}</p>
        </div>
    );
}


export default Student