export type PostsViewModelType = {
    pagesCount: number
    page: number
    pageSize: number
    totalCount: number
    items: PostsView[]
}

export type PostsView = {
    id: string,
    title: string,
    shortDescription: string,
    content: string,
    blogId: string,
    blogName: string,
    createdAt: string,
    _id?: string;
}
export type QueryPostRequestType = {
    sortBy?: string
    sortDirection?: "asc" | "desc"
    pageNumber?: number
    pageSize?: number
}

export type SortPostRepositoryType = {
    sortBy: string
    sortDirection: "asc" | "desc"
    pageNumber: number
    pageSize: number
}
export type ParamsId = {
    id:string
}