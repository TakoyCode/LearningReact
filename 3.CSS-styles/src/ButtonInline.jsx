function ButtonInline() {
    const styles = {
        backgroundColor: "hsl(150, 100%, 50%)",
        color: "white",
        padding: "10px 20px",
        borderRadius: "5px",
        border: "none",
        cursor: "pointer",
    }

    return (
        <>
            <button style={styles}>Inlined styled button</button>
        </>
    );
}

export default ButtonInline