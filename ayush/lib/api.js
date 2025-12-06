const API_BASE_URL = "http://localhost:5000";

const apiFetch = async (url, method = "GET", body = null) => {
    const headers = {
        "Content-Type": "application/json",
    };

    const token = localStorage.getItem("token");

    if (token) {
        headers["Authorization"] = `Bearer ${token}`;
    }

    const response = await fetch(`${API_BASE_URL}${url}`, {
        method,
        headers,
        body: body ? JSON.stringify(body) : null,
    });

    const data = await response.json();
    if (!response.ok) {
        throw new Error(data.message || "API Error");
    }

    return data;
};


export const authApi = {

    async login(body) {
        const data = await apiFetch("/api/auth/login", "POST", body);
        if (data.token) {
            localStorage.setItem("token", data.token);
        }
        return data;
    },

    async signup(body) {
        const data = await apiFetch("/api/auth/signup", "POST", body);
        if (data.token) {
            localStorage.setItem("token", data.token);
        }
        return data;
    },

    async logout() {
        localStorage.removeItem("token");
        return apiFetch("/api/auth/logout", "POST");
    },

    async getCurrentUser() {
        return apiFetch("/api/auth/profile", "GET");
    },

    async forgotPassword(body) {
        return apiFetch("/api/auth/forgot-password", "POST", body);
    },

    async resetPassword(body) {
        return apiFetch("/api/auth/reset-password", "POST", body);
    },

    async changePassword(body) {
        return apiFetch("/api/auth/change-password", "POST", body);
    },

    async verifyOtp(body) {
        return apiFetch("/api/auth/verify-otp", "POST", body);
    },

    async resendOtp(body) {
        return apiFetch("/api/auth/resend-otp", "POST", body);
    },

    async updateProfile(body) {
        return apiFetch("/api/auth/update-profile", "POST", body);
    },

    async updatePassword(body) {
        return apiFetch("/api/auth/update-password", "POST", body);
    },

    async updateEmail(body) {
        return apiFetch("/api/auth/update-email", "POST", body);
    },

    async updateProfile(body) {
        return apiFetch("/api/auth/update-profile", "POST", body);
    },

}


export const vehicleApi = {

    async getVehicles() {
        return apiFetch("/api/vehicle", "GET");
    },

    async lookupByRego(state, rego) {

        await new Promise(resolve => setTimeout(resolve, 1000));

        return {
            id: 'mock-vehicle-id',
            name: 'Holden Commodore',
            details: '2018 Petrol Automatic 3.6 Litres ZB'
        };
    },

    async getAllVehicles() {
        return apiFetch("/api/vehicle", "GET");
    },

    async getVehicleById(id) {
        return apiFetch(`/api/vehicle/${id}`, "GET");
    },

    async createVehicle(body) {
        return apiFetch("/api/vehicle", "POST", body);
    },

    async updateVehicle(id, body) {
        return apiFetch(`/api/vehicle/${id}`, "PUT", body);
    },

    async deleteVehicle(id) {
        return apiFetch(`/api/vehicle/${id}`, "DELETE");
    },

}


export const bookingApi = {

    async getBookings() {
        return apiFetch("/api/booking", "GET");
    },

    async getBookingById(id) {
        return apiFetch(`/api/booking/${id}`, "GET");
    },

    async createBooking(body) {
        return apiFetch("/api/booking", "POST", body);
    },

    async updateBooking(id, body) {
        return apiFetch(`/api/booking/${id}`, "PUT", body);
    },

    async deleteBooking(id) {
        return apiFetch(`/api/booking/${id}`, "DELETE");
    },

    async bookingHistory() {
        return apiFetch("/api/booking/history", "GET");
    },
}

export const contactApi = {
    async getAllInquiries() {
        return apiFetch("/api/contact", "GET");
    },

    async sendContactForm(body) {
        return apiFetch("/api/contact/", "POST", body);
    },
}

export const homeServiceApi = {
    async createHomeService(body) {
        return apiFetch("/api/home-service", "POST", body);
    },

    async getAllHomeServices() {
        return apiFetch("/api/home-service", "GET");
    },

    async getHomeServiceById(id) {
        return apiFetch(`/api/home-service/${id}`, "GET");
    },

    async updateHomeService(id, body) {
        return apiFetch(`/api/home-service/${id}`, "PUT", body);
    },

    async deleteHomeService(id) {
        return apiFetch(`/api/home-service/${id}`, "DELETE");
    },
}

export const mechanicApi = {
    async getAllMechanics() {
        return apiFetch("/api/mechanic", "GET");
    },

    async getMechanicById(id) {
        return apiFetch(`/api/mechanic/${id}`, "GET");
    },

    async getMechanicReviews(id) {
        return apiFetch(`/api/mechanic/${id}/reviews`, "GET");
    },

    async registerMechanic(body) {
        return apiFetch("/api/mechanic", "POST", body);
    },

    async updateMechanic(id, body) {
        return apiFetch(`/api/mechanic/${id}`, "PUT", body);
    },
}

export const quoteApi = {
    async requestQuote(body) {
        return apiFetch("/api/quote", "POST", body);
    },

    async getUserQuotes() {
        return apiFetch("/api/quote/user", "GET");
    },

    async getMechanicQuotes() {
        return apiFetch("/api/quote/mechanic", "GET");
    },

    async respondToQuote(id, body) {
        return apiFetch(`/api/quote/${id}/respond`, "PUT", body);
    },

    async acceptQuote(id) {
        return apiFetch(`/api/quote/${id}/accept`, "PUT");
    },

    async rejectQuote(id) {
        return apiFetch(`/api/quote/${id}/reject`, "PUT");
    },
}

export const reviewApi = {
    async getAllReviews() {
        return apiFetch("/api/review", "GET");
    },

    async getReviewsByMechanic(mechanicId) {
        return apiFetch(`/api/review/mechanic/${mechanicId}`, "GET");
    },

    async createReview(body) {
        return apiFetch("/api/review", "POST", body);
    },

    async getUserReviews() {
        return apiFetch("/api/review/user", "GET");
    },

    async mechanicResponse(id, body) {
        return apiFetch(`/api/review/${id}/respond`, "POST", body);
    },
}

export const carServiceApi = {
    async getAllServices() {
        return apiFetch("/api/car-services", "GET");
    },

    async getServiceBySlug(slug) {
        return apiFetch(`/api/car-services/${slug}`, "GET");
    },

    async createService(body) {
        return apiFetch("/api/car-services", "POST", body);
    },

    async updateService(id, body) {
        return apiFetch(`/api/car-services/${id}`, "PUT", body);
    },

    async deleteService(id) {
        return apiFetch(`/api/car-services/${id}`, "DELETE");
    },
}

export const b2bApi = {
    async register(body) {
        return apiFetch("/api/b2b/register", "POST", body);
    }
}
