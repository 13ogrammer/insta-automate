import {useCallback, useEffect, useState} from 'react';
import {AbsoluteFill, continueRender, delayRender} from 'remotion';

import {Background} from './components/Background';
import {Header} from './components/Header';
import {Quote} from './components/Quote';
import {Author} from './components/Author';
import {Footer} from './components/Footer';

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
				<Header content="@13ography" />
				<div className="flex-1 flex flex-col items-center justify-center">
					<Quote quote={quote.content} />
					<Author name={quote.author} />
				</div>
				<Footer content="quotes by quotable.io" />
			</AbsoluteFill>
		</AbsoluteFill>
	);
};
