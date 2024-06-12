import './style.css'

export function Header() {
  return (
    <header>
        <img src="src\assets\0.jpg" alt="logo do evento AnimeConnect" />
        
        <nav>
            <ul>
                <li> <a href="#section-hero">Home</a> </li>
                <li> <a href="#section-sobre">Sobre</a> </li>
                <li> <a href="#section-horario">Cronograma</a> </li>
                <li> <a href="#section-tickets">Ingressos</a> </li>
                <li> <a href="#section-location">Localização</a> </li>
                <li> <a href="#section-form">Newsletter</a> </li>
                <li> <a href="#section-contato">Contato</a> </li>
            </ul>
        </nav>
    </header>
  )
}

export default Header