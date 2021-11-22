export async function getData<T>(resource: string, params: any = {page: 1, perPage: 15}): Promise<T> {
    const req = await fetch(resource);
    return req.json();
}
