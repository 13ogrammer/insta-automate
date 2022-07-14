import {interpolate, useCurrentFrame, useVideoConfig} from 'remotion';

type AuthorProps = {
	name: string;
};

export const Author: React.FC<AuthorProps> = ({name}) => {
	const frame = useCurrentFrame();
	const {durationInFrames} = useVideoConfig();

	const opacity = interpolate(
		frame,
		[60, 70, durationInFrames - 60, durationInFrames],
		[0, 1, 1, 0],
		{
			extrapolateRight: 'clamp',
		}
	);

	return (
		<div className="text-5xl text-cyan-800/70 py-4" style={{opacity}}>
			{name}
		</div>
	);
};
