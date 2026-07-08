import apiClient from "./api";

export interface ValidationResponse {
  exists?: boolean;
  error?: string;
}

export const validateWord = async (word: string): Promise<ValidationResponse> => {
    try {
        const response = await apiClient.get<ValidationResponse>("/api/validate", {params: { word },});
        return response.data;
    } catch (error: any) {
        return error.response?.data || { error: "API request failed" };
    }
};