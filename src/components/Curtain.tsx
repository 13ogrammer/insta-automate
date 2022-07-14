import {AbsoluteFill, spring, useCurrentFrame, useVideoConfig} from 'remotion';

export const Curtain: React.FC = () => {
	const frame = useCurrentFrame();
	const {fps, durationInFrames} = useVideoConfig();

	const scale = spring({
		frame: frame - (durationInFrames - 20),
		fps,
		from: 0,
		to: 1,
		config: {
			damping: 200,
		},
	});

	return (
		<AbsoluteFill
			className="p-24 origin-top h-0"
			style={{transform: `scaleY(${scale})`}}
		>
			<div className="flex-1 bg-white" />
		</AbsoluteFill>
	);
};
