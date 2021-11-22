export interface PageableResponse<T> {
    items: T[],
    totalItems: number,
    totalPages: number
}
