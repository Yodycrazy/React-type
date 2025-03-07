/**
 * Clase para manejar las solicitudes HTTP a una API.
 */
export default class ApiService {
    private baseUrl: string;

    /**
     * Crea una instancia de ApiService.
     * @param {string} baseUrl - La URL base de la API.
     */
    constructor(baseUrl: string) {
        this.baseUrl = baseUrl;
    }

    /**
     * Realiza una solicitud GET a la API.
     * @param {string} endpoint - El endpoint al que se hará la solicitud.
     * @returns {Promise} Respuesta de la API en formato JSON.
     */
    async get<T>(endpoint: string): Promise<T> {
        try {
            const response = await fetch(this.baseUrl + endpoint, { method: "GET" });
            const data: T = await response.json();
            return data;
        } catch (error) {
            throw new Error();
        }
    }

    /**
     * Realiza una solicitud GET a la API y devuelve un array de resultados.
     * @param {string} endpoint - El endpoint al que se hará la solicitud.
     * @returns {Promise} Array de resultados en formato JSON.
     */
    async getAll<T>(endpoint: string): Promise<T[]> {
        try {
            const response = await fetch(this.baseUrl + endpoint, { method: "GET" });
            const data: T[] = await response.json();
            return data;
        } catch (error) {
            throw new Error();
        }
    }

    /**
     * Realiza una solicitud POST a la API.
     * @param {string} endpoint - El endpoint al que se enviará la solicitud.
     * @param {Object} data - Datos a enviar en la solicitud.
     * @returns {Promise} Respuesta de la API en formato JSON.
     */
    async post<T>(endpoint: string, data: T): Promise<T> {
        try {
            const response = await fetch(this.baseUrl + endpoint, {
                method: "POST",
                headers: { "content-Type": "application/json" },
                body: JSON.stringify(data),
            });
            const dataPost: T = await response.json();
            return dataPost;
        } catch (error) {
            throw new Error();
        }
    }

    /**
     * Realiza una solicitud PUT a la API.
     * @param {string} endpoint - El endpoint al que se enviará la solicitud.
     * @param {Object} data - Datos a actualizar en la API.
     * @returns {Promise} Respuesta de la API en formato JSON.
     */
    async put<T>(endpoint: string, data: T): Promise<T> {
        try {
            const response = await fetch(this.baseUrl + endpoint, {
                method: "PUT",
                headers: { "content-Type": "application/json" },
                body: JSON.stringify(data),
            });
            const dataPost: T = await response.json();
            return dataPost;
        } catch (error) {
            throw new Error();
        }
    }

    /**
     * Realiza una solicitud DELETE a la API.
     * @param {string} endpoint - El endpoint del recurso a eliminar.
     * @returns {Promise} Respuesta de la API en formato JSON.
     */
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
