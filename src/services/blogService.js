import * as request from "./requester";

const baseUrl = 'http://localhost:3030/data/blogs';

export const getAll = () => request.get(baseUrl);

export const getOne = (blogId) => request.get(`${baseUrl}/${blogId}`);

export const create = (blogData) => request.post(baseUrl, blogData);

export const edit = (blogId, blogData) => request.put(`${baseUrl}/${blogId}`, blogData);

export const remove = (blogId) => request.del(`${baseUrl}/${blogId}`);
