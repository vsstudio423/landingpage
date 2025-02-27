import { FaDiscord } from 'react-icons/fa';
import './Banner.css';

const Banner = ({title = "Title", text="text", link={title:"Unirme", link:""}}) => {
	return (
		<div className='bannerSection'>
 			<h2>{title}</h2>
			<p>{text}</p>
			{link != null && (
				<a href={link.link} target="_blank" rel="noopener noreferrer">
                    {link.title} <FaDiscord className='icon' />
                </a>
			)}
 		</div>
	);
};

Banner.propTypes = {};

export default Banner;