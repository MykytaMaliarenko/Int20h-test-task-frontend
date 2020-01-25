import ApiService from "./index";

export const GuessMusicAPI = {
    makeGuess(type, data) {
        const formData = new FormData();
        formData.append('type', type);
        formData.append('data', data);
        return ApiService.post("/guessMusic", formData);
    },
};