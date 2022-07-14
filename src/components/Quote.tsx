import {spring, useCurrentFrame, useVideoConfig} from 'remotion';

type QuoteProps = {
	quote: string;
};

export const Quote: React.FC<QuoteProps> = ({quote}) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();

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

	const fontSize = quote.length > 100 ? 'text-6xl' : 'text-8xl';

	return (
		<div
			className={`font-semibold text-center ${fontSize} leading-tight text-cyan-700 py-4`}
			style={{transform: `scale(${scale})`}}
		>
			{quote}
		</div>
	);
};
