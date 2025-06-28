import {CSSTransition} from 'react-transition-group'

const Animate = ({children, nodeRef, show, className}) => {
	return (
		<CSSTransition
			in={show}
			nodeRef={nodeRef}
			timeout={300}
			unmountOnExit
			classNames={className}
		>
			{children}
		</CSSTransition>
	)
}

export default Animate;