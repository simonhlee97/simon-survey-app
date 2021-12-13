import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
function Header({ bgColor, textColor }) {
	const navbar = {
		display: 'flex',
		justifyContent: 'center',
		backgroundColor: bgColor,
		color: '#f5f5f5',
	}

	return (
		<header>
			<nav style={navbar} className="navbar-container">
				<Link className="navlink" to="/">
					FeedBacker
				</Link>
				<Link className="navlink" to="/about">
					About
				</Link>
				<Link className="navlink" to="/polls">
					PollMaker
				</Link>
			</nav>
		</header>
	)
}

Header.defaultProps = {
	bgColor: 'rgba(0,0,0,0.4)',
	textColor: '#ff6a95',
}

Header.propTypes = {
	text: PropTypes.string,
	bgColor: PropTypes.string,
	textColor: PropTypes.string,
}

export default Header
