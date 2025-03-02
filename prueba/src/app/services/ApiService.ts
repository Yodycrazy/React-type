
export default class ApiService <T> {
    private baseUrl: string;

    constructor(baseUrl: string) {
        this.baseUrl = baseUrl;

    }

    async get<T>(endpoint: string): Promise<T> {
        try {
            const response = await fetch(this.baseUrl + endpoint, {method: "GET"});
            const data: T = await response.json();
            return data;

        } catch (error) {
            throw new Error();

        }
    }

    async getAll<T>(endpoint: string): Promise<T[]> {
        try {
            const response = await fetch(this.baseUrl + endpoint, {method: "GET"});
            const data: T[] = await response.json();
            return data;

        } catch (error) {
            throw new Error();

        }
    }

    async post<T>(endpoint: string, data: T): Promise<T> {
        try {
            const response = await fetch(this.baseUrl + endpoint, {
                method: "POST", 
                headers: { "content-Type": "application/json"},
                body: JSON.stringify(data),
            });
            const dataPost: T = await response.json();
            return dataPost;

        } catch (error) {
            throw new Error();

        }
    }

    async put<T>(endpoint: string, data:T): Promise<T> {
        try {
            const response = await fetch(this.baseUrl + endpoint, {
                method: "PUT", 
                headers: { "content-Type": "application/json"},
                body: JSON.stringify(data),
            });
            const dataPost: T = await response.json();
            return dataPost;

        } catch (error) {
            throw new Error();

        }
    }
    async delete<T>(endpoint: string): Promise<T> {
        try {
            const response = await fetch(this.baseUrl + endpoint, {
                method: "DELETE", 
                                
            });
            return await response.json();

        } catch (error) {
            throw new Error();

        }
    }
}

