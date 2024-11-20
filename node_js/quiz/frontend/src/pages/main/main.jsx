import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Button, HistoryTests } from '../../components/index.jsx';
import { getDataFromStoreSession } from '../../utils/index.jsx';

const MainComponent = ({ className }) => {
	const history = getDataFromStoreSession();

	return (
		<div className={className}>

			<div className="buttons">
				<Link to={'/start'}><Button>{`Start test`}</Button></Link>
				<Link to={'/edit'}><Button>{`Edit test`}</Button></Link>
			</div>
			<hr />
			<div className="title">{`History of process`}</div>
			<hr />
			{
				history && <div className="history-list">
					{history.map(({ id, date, results, success }) => (
						<HistoryTests key={id}
									  date={date}
									  results={results}
									  success={success}
						/>
					))
					}
				</div>
			}
		</div>
	);
};
export const Main = styled(MainComponent)`

	& .buttons {
		display: flex;
		flex-direction: column;
		gap: 10px;
		margin-top: 10px;
		margin-bottom: 10px;
	}

	& .history-list {
		display: flex;
		flex-direction: column;
	}

	& .title {
		text-align: center;
		color: #535bf2;
	}
`;
MainComponent.propTypes = {
	className: PropTypes.string,
};
