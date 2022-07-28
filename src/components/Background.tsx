import {AbsoluteFill, random} from 'remotion';

const backgrounds = [
	'from-emerald-100 to-amber-400',
	// 'from-orange-100 via-red-700 to-yellow-600',
	'from-emerald-600 to-amber-500',
];

const randIdx = Math.floor(random(null) * backgrounds.length);
console.log(randIdx);
const bg = backgrounds[randIdx];

export const Background: React.FC = () => {
	return (
		<AbsoluteFill className={`p-24 bg-gradient-to-bl ${bg}`}>
			<div className="flex-1 bg-white rounded-3xl shadow-lg" />
		</AbsoluteFill>
	);
};
