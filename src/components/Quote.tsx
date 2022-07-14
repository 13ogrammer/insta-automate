import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';

type QuoteProps = {
	quote: string;
};

export const Quote: React.FC<QuoteProps> = ({quote}) => {
	const frame = useCurrentFrame();
	const {fps, durationInFrames} = useVideoConfig();

	const opacity = interpolate(
		frame,
		[50, durationInFrames - 60, durationInFrames],
		[1, 1, 0],
		{extrapolateRight: 'clamp'}
	);

	const scale = spring({
		frame: frame - 50,
		fps,
		from: 0,
		to: 1,
		config: {
			damping: 200,
		},
		durationInFrames: 40,
	});

	return (
		<div
			className="font-semibold text-center text-8xl leading-tight text-cyan-700 py-4"
			style={{transform: `scale(${scale})`, opacity}}
		>
			{quote}
		</div>
	);
};
