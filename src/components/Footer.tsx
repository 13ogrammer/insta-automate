import {interpolate, useCurrentFrame} from 'remotion';

type FooterProps = {
	content?: string;
	children?: React.ReactNode;
};

export const Footer: React.FC<FooterProps> = ({content, children}) => {
	const frame = useCurrentFrame();

	const opacity = interpolate(frame, [100, 200], [0, 1], {
		extrapolateRight: 'clamp',
	});

	return (
		<div className="text-4xl text-slate-500" style={{opacity}}>
			{content || children}
		</div>
	);
};
