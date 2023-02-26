import './Footer.css';

const Footer =() => {
    const today = new Date ();

    return (
        <footer>
            
            <p>
            <ul class="nav">
            <li type="none" hover="white" class="nav-item"><a href="#" class="nav-link px-2 text-muted">Home</a></li>
            <li type="none" class="nav-item"><a href="#" class="nav-link px-2 text-muted">Features</a></li>
            <li type="none" class="nav-item"><a href="#" class="nav-link px-2 text-muted">Pricing</a></li>
            <li type="none"class="nav-item"><a href="#" class="nav-link px-2 text-muted">FAQs</a></li>
            <li type="none" class="nav-item"><a href="#" class="nav-link px-2 text-muted">About</a></li>
            </ul>

            <br/>
            <br/>
            Copyright &copy; {today.getFullYear ()}
            </p>
        </footer>
    )

}

export default Footer;