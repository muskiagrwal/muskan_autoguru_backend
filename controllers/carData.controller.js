const axios = require('axios');

exports.getMakes = async (req, res) => {
    try {
        // Fetching passenger car makes to keep the list relevant
        const response = await axios.get('https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json');

        if (response.data && response.data.Results) {
            const makes = response.data.Results.map(item => item.MakeName).sort();
            return res.status(200).json({ makes });
        } else {
            return res.status(500).json({ message: "Failed to fetch makes from external API" });
        }
    } catch (error) {
        console.error("Error fetching makes:", error.message);
        return res.status(500).json({ message: "Error fetching car makes", error: error.message });
    }
};

exports.getModels = async (req, res) => {
    try {
        const { make } = req.params;
        if (!make) {
            return res.status(400).json({ message: "Make is required" });
        }

        const response = await axios.get(`https://vpic.nhtsa.dot.gov/api/vehicles/getmodelsformake/${make}?format=json`);

        if (response.data && response.data.Results) {
            const models = response.data.Results.map(item => item.Model_Name).sort();
            return res.status(200).json({ models });
        } else {
            return res.status(404).json({ message: "No models found for this make" });
        }
    } catch (error) {
        console.error("Error fetching models:", error.message);
        return res.status(500).json({ message: "Error fetching car models", error: error.message });
    }
};
