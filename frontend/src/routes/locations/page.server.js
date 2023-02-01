import { redirect, fail } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load({ locals,request,response }) {
    console.log(locals.user);
    if(!locals.user?.token){
        redirect(307,"/login");
    }
}