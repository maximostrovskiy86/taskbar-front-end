import React from 'react';
import {StyleContainer} from './Container.styled';

const Container = ({children}) => {
	return (
		<StyleContainer className="container">
			{children}
		</StyleContainer>
	);
}

export default Container;
