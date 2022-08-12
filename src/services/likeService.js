import * as request from "./requester";

const baseUrl = 'http://localhost:3030/data/likes';

export const create = (blogId, comment) =>
    request.post(baseUrl, { blogId, text: comment });

export const getByBlogId = (blogId) => {
    const relations = encodeURIComponent(`user=_ownerId:users`);
    const search = encodeURIComponent(`blogId="${blogId}"`);

    return request.get(`${baseUrl}?where=${search}&load=${relations}`);
}
