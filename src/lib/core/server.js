const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || '';

export const serverFetch = async(path) => {
    try {
        const res = await fetch(`${baseUrl}${path}`);

        // 1. Handle HTTP error statuses gracefully
        if (!res.ok) {
            console.error(`Fetch failed for ${path} with status: ${res.status}`);
            // You can handle 401, 403, 404 redirection or custom logic here
            return null;
        }

        // 2. Read raw text first to protect against empty bodies
        const text = await res.text();
        return text ? JSON.parse(text) : null;

    } catch (error) {
        console.error(`Network or Parsing Error in serverFetch for ${path}:`, error);
        return null;
    }
}

export const serverMutation = async(path, data) => {
    try {
        const res = await fetch(`${baseUrl}${path}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (!res.ok) {
            console.error(`Mutation failed for ${path} with status: ${res.status}`);
            return null;
        }

        const text = await res.text();
        return text ? JSON.parse(text) : null;

    } catch (error) {
        console.error(`Network or Parsing Error in serverMutation for ${path}:`, error);
        return null;
    }
}