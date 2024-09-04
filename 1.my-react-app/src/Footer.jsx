function Footer() {
    return (
        <footer>
            <p>&copy; {getYear()} Big Bingus</p>
        </footer>
    );
}

function getYear() {
    return new Date().getFullYear()
}

export default Footer