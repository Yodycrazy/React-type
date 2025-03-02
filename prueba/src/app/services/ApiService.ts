import { Category } from "../interfaces/Categories.interface";
import { Product } from "../interfaces/Products.interface";

export default class ApiService {
    private baseUrl: string;

    constructor(baseUrl: string) {
        this.baseUrl = baseUrl;

    }

    async get<T>(endpoint: string): Promise<T> {
        try {
            const response = await fetch(this.baseUrl + endpoint, {method: "GET"});
            return await response.json();

        } catch (error) {
            throw new Error();

        }
    }

    async post<T>(endpoint: string, data:Category|Product): Promise<T> {
        try {
            const response = await fetch(this.baseUrl + endpoint, {
                method: "POST", 
                headers: { "content-Type": "application/json"},
                body: JSON.stringify(data),
            });
            return await response.json();

        } catch (error) {
            throw new Error();

        }
    }

    async put<T>(endpoint: string, data:Category|Product): Promise<T> {
        try {
            const response = await fetch(this.baseUrl + endpoint, {
                method: "PUT", 
                headers: { "content-Type": "application/json"},
                body: JSON.stringify(data),
            });
            return await response.json();

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

