import ApiService from './ApiService';

/**
 * URL base de la API.
 * @constant {string}
 */
const baseUrl = 'https://api.escuelajs.co/api/v1';

/**
 * Instancia de ApiService con la URL base configurada.
 * @constant {ApiService}
 */
const apiServiceInstance = new ApiService(baseUrl);

export default apiServiceInstance;
