// import contentful inits and getEntry, etc.
import aiBots from '$nm/ai.robots.txt/robots.json' with {type: "json"};
import { error as errorPage } from '@sveltejs/kit';

const _aiBots = Object.keys(aiBots);

export const checkRobots = (request: Request) => {
    const ua = request.headers.get('user-agent');
	if (ua && _aiBots.includes(ua)){
        errorPage(401, 'Not authorized');
    }
};

