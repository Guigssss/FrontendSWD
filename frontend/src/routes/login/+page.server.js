import { fail, redirect } from '@sveltejs/kit';
import * as api from '../../api.js';

/** @type {import('./$types').PageServerLoad} */
export async function load({ parent }) {
    const { utilisateur } = await parent();
    if (utilisateur) throw redirect(307, '/');
}

/** @type {import('./$types').Actions} */
export const actions = {
    default: async ({ cookies, request }) => {
        const data = await request.formData();

        const utilisateur = {
            username: data.get('username'),
            password: data.get('password')
        };

        const body = await api.post('users/login', utilisateur);

        if (body.errors) {
            return fail(401, body);
        }
        const value = body.jwt;
        cookies.set('jwt', value, { path: '/' });

        throw redirect(307, '/');
    }
};