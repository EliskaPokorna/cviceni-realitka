import './estate.css'

export const Estate = ({title, photo, text, price, name, email, phone}) => {
    return (
        <div className="house-container">
            <h1 className="house-title">{title}</h1>
            <img className="house-image" src={photo} alt="Rodinný dům"/>
            <p className="house-description">{text}</p>
            <p className="house-price"><strong>Cena: </strong>{price} Kč</p>
            <ul className="house-contact">
                <li><strong>Jméno: </strong>{name}</li>
                <li><strong>E-mail: </strong>{email}</li>
                <li><strong>Telefon: </strong>{phone}</li>
            </ul>
            <button className="contact-button">Kontaktovat realitního makléře</button>
        </div>
    )
}