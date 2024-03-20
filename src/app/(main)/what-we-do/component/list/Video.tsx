import React from "react";

interface VideoProps {
	link: string;
}

const Video = ({ link }: VideoProps) => {
	return (
		<div style={{ position: "relative", paddingBottom: "100%" }}>
			<iframe
				src={link}
				style={{
					width: "100%",
					height: "100%",
					position: "absolute",
					left: 0,
					top: 0,
				}}
				frameBorder="0"
				allowFullScreen
				loading="lazy"
			></iframe>
		</div>
	);
};

export default Video;
