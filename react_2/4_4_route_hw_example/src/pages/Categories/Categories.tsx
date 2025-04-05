import { Link } from 'react-router-dom';

export function Categories() {
	return (
		<>
			<h2>Welcome to our website about the beloved series "Rick and Morty"!</h2>
			<p>Here you will find plenty of interesting materials dedicated to the characters of this amazing animated
				world, as well as various locations and episodes that we love and watch over and over again.</p>
			<p>
				<Link to="characters">Characters</Link> in "Rick and Morty" are not just figures, but true pop culture
				icons who have become favorites for generations of viewers. Rick, Morty, Summer, Jerry, and many
				others—each of them is unique and interesting in their own way, and we are excited to share all the
				information we have gathered about them.
			</p>
			<p>
				But characters cannot exist without their <Link to="location">locations</Link>—places where the most
				exciting and memorable events take place. Spaceships, dimensions, planets—each location in "Rick and
				Morty" is unique and essential to the story's development.
			</p>
			<p>
				And <Link to="episode">episodes</Link> are the reason we keep watching this series over and over again.
				We eagerly await new episodes and discuss the old ones, trying to uncover all the secrets and mysteries
				hidden in this incredible universe.
			</p>
			<p>
				We hope that our website will help you learn even more about the characters, locations, and episodes of
				"Rick and Morty" and share your thoughts with other fans of this amazing show. Welcome to the world of
				"Rick and Morty"!
			</p>
		</>
	);
}
