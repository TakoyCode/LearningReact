import propTypes from 'prop-types';

function List(props) {
    const category = props.category;
    const itemList = props.items;

    const FruitslistItems = itemList.map((i) => <li key={i.id}>
        {i.name}: &nbsp;
        <strong>{i.calories}</strong></li>);
    return (
        <>
            <h3 className="list-category"><strong>{category}</strong></h3>
            <ul className="list-items">
                {FruitslistItems}
            </ul>
        </>
    );
}

List.propTypes = {
    category: propTypes.string,
    items: propTypes.arrayOf(propTypes.shape(
        {
            id: propTypes.number,
            name: propTypes.string,
            calories: propTypes.number,
        },
    )),
}

List.defaultProps = {
    category: "Placeholder",
    items: [],
}

export default List