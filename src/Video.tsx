import {Composition} from 'remotion';
import {IGStory} from './IGStory';
import './style.css';

export const RemotionVideo: React.FC = () => {
	return (
		<>
			<Composition
				id="IGStory"
				component={IGStory}
				durationInFrames={10 * 30}
				fps={30}
				width={1080}
				height={1920}
			/>
		</>
	);
};
