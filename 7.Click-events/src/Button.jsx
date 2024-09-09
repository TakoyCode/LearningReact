function Button() {

    const handleClickBasic = () => console.log("Bing");

    const handleClickParams = (name) => console.log(`${name} is binging the bong`);

    let count = 0;
    const handleClickConditions = (name) => {
        if (count < 3) {
            count++;
            console.log(`${name} you clicked me ${count} time/s`)
        }
        else {
            console.log(`${name} stop clicking me!`)
        }
    };


    const handleClick = (event) => event.target.textContent = "Ouch 😢";

    return (
        <>
            <button onClick={(e) => handleClick(e)}>Click me</button>
            <br />
            <br />
            <button onDoubleClick={(e) => handleClick(e)}>Double click me</button>
        </>
    );
}

export default Button;