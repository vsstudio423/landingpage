import { FaTiktok } from 'react-icons/fa';
import './Footer.css';

const Footer = ({ }) => {
	return (
		<footer className='footer'>
			<h2>VS Studio</h2>
			<p className='paragraph'><b>¿Eres un fanático del anime y te encanta la idea de dar vida a tus personajes favoritos?</b> ¡Estás en el lugar correcto! En nuestra comunidad, te invitamos a unirte a un espacio donde la pasión por el anime y la creatividad se encuentran.</p>
			<hr />
			<div className="footer__links">
				<p>©2025. Todos los derechos reservados</p>
				<div className="social-media">
					<FaTiktok />
				</div>
			</div>
		</footer>
	);
};


export default Footer;