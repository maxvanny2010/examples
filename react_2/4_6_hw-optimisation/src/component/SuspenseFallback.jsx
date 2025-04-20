import styled from 'styled-components';
import { HeaderPage } from './header-page';
import { TITLE } from '../constants';

const Wrapper = styled.div`
	padding-top: 50px;
`;

export const SuspenseFallback = () => (
	<Wrapper>
		<HeaderPage title={TITLE.LOADING} />
	</Wrapper>
);
