import { default as PopupComponent } from "reactjs-popup";

const Popup = ({ childrenArray, width = 200, title = "Action", ...props }) => {
	return (
		<PopupComponent {...props} contentStyle={{ width, zIndex: 1050 }} overlayStyle={{ zIndex: 1049 }}>
			{childrenArray?.map((child, index) => {
				if (child === null) return null;
				if (child?.hasOwnProperty("childrenArray")) {
					return <Popup key={index} {...child} />;
				} else {
					return (
						<div className="popup-option" key={index} onClick={child?.onClick}>
							{child?.text}
						</div>
					);
				}
			})}
		</PopupComponent>
	);
};

export default Popup;
