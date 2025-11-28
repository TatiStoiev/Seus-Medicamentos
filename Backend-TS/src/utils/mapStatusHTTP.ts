export default function mapStatusHTTP(status: string): number {
    const httpMap: Record<string, number> = {
        SUCCESSFUL: 200,
        CREATED: 201,
        INVALID_DATA: 400,
        UNAUTHORIZED: 401,
        NOT_FOUND: 404,
        INTERNAL_SERVER_ERROR: 500,        
    };

    return httpMap[status] ?? 500;
}