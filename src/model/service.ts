import { HTTPClient } from 'koajax';

const GithubToken = process.env.GITHUB_TOKEN;

export const service = new HTTPClient({
    baseURI: 'https://api.github.com/',
    responseType: 'json'
}).use(({ request }, next) => {
    if (GithubToken)
        request.headers = {
            ...request.headers,
            Authorization: `Bearer ${GithubToken}`
        };
    return next();
});
