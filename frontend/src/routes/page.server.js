import * as api from '../api.js';

/** @type {import('./$types').PageServerLoad} */
export async function load({ locals, url }) {
    const tab = url.searchParams.get('tab') || 'all';
    const tag = url.searchParams.get('tag');
    const page = +(url.searchParams.get('page') ?? '1');

    const endpoint = tab === 'feed' ? 'articles/feed' : 'articles';

    const q = new URLSearchParams();

    if (tag) q.set('tag', tag);

    const [{ articles, articlesCount }, { tags }] = await Promise.all([
        api.get(`${endpoint}?${q}`, locals.user?.token),
        api.get('tags')
    ]);

    return {
        articles,
        tags
    };
}