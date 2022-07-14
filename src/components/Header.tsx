import {interpolate, useCurrentFrame} from 'remotion';

type HeaderProps = {
	content: string;
};

export const Header: React.FC<HeaderProps> = ({content}) => {
	const frame = useCurrentFrame();

	const opacity = interpolate(frame, [0, 50], [0, 1], {
		extrapolateRight: 'clamp',
	});

	return (
		<div className="text-6xl font-semibold text-amber-600" style={{opacity}}>
			{content}
		</div>
	);
};
