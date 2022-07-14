import {AbsoluteFill} from 'remotion';

export const Background: React.FC = () => {
	return (
		<AbsoluteFill className="p-24 bg-gradient-to-bl from-orange-100 via-red-700 to-yellow-600">
			<div className="flex-1 bg-white rounded-3xl shadow-lg" />
		</AbsoluteFill>
	);
};
