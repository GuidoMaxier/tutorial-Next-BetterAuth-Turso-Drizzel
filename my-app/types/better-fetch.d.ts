declare module "better-fetch" {
    export function betterFetch<T>(url: string, options?: any): Promise<{ data: T; error: any }>;
}
