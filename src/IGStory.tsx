import {useCallback, useEffect, useState} from 'react';
import {AbsoluteFill, continueRender, delayRender} from 'remotion';

import {Background} from './components/Background';
import {Header} from './components/Header';
import {Quote} from './components/Quote';
import {Author} from './components/Author';
import {Footer} from './components/Footer';
import {Curtain} from './components/Curtain';

import type {QuoteType} from './types';

export const IGStory: React.FC = () => {
	const [handle] = useState(() => delayRender());

	const [quote, setQuote] = useState<QuoteType>();

	const fetchQuote = useCallback(async () => {
		const response = await fetch('https://api.quotable.io/random');
		const json = await response.json();
		setQuote(json);
		continueRender(handle);
	}, [handle]);

	useEffect(() => {
		fetchQuote();
	}, [fetchQuote]);

	if (!quote) {
		return null;
	}

	return (
		<AbsoluteFill>
			<Background />
			<AbsoluteFill className="p-52">
				<Header content="@13ogrammer" />
				<div className="flex-1 flex flex-col items-center justify-center">
					<Quote quote={quote.content} />
					<Author name={quote.author} />
				</div>
				<Footer>
					<div className="grid grid-cols-1 gap-4">
						<p className="font-semibold">Video built using Remotion</p>
						<p>Source: quotable.io</p>
					</div>
				</Footer>
			</AbsoluteFill>
			<Curtain />
		</AbsoluteFill>
	);
};
