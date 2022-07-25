interface IModalOverlay {
	errorHandler: () => void;
}

const ModalBackdrop = ({ errorHandler }: IModalOverlay) => {
	return <div className="backdrop" onClick={errorHandler}></div>;
};

export default ModalBackdrop;
