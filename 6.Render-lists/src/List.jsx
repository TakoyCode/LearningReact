function List(props) {

    const category = props.category;
    const itemList = props.items;

    const FruitslistItems = itemList.map((i) => <li key={i.id}>
        {i.name}: &nbsp;
        <strong>{i.calories}</strong></li>);
    return (
        <>
            <ul>
                <div><strong>{category}</strong></div>
                {FruitslistItems}
            </ul>
        </>
    );
}

export default List