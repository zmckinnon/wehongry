export const config: WeHongryConfiguration = {
    weHongryApiBaseEndpoint: import.meta.env.VITE_APP_WE_HONGRY_API_BASE_ENDPOINT,
}

type WeHongryConfiguration = {
    weHongryApiBaseEndpoint: string;
};
