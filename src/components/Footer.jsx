import instagram from "/assets/instagram.png"
import whatsapp from "/assets/whatsapp.png"
import gmail from "/assets/gmail.png"

export default function Footer(){
    return (
        <footer>
            <h2 className="footer-title">Our Socials</h2>
            <div className="contacts">
                <a href="mailto:johanesalbertosiahaan15092003@gmail.com" target="_blank"><img src={gmail} alt="" /></a>
                <a href="https://www.instagram.com/johanesalberto/" target="_blank"><img src={instagram} alt="" /></a>
                <a href="https://wa.me/1XXXXXXXXXX" target="_blank"><img src={whatsapp} alt="" /></a>
            </div>
            <p>Know Foods With Us | &copy; All Right Reserved</p>
        </footer>
    )
}