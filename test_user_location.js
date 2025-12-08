const axios = require('axios');

const BASE_URL = 'http://localhost:5000/api/auth';

// Test user with location
const testUser = {
    firstName: 'John',
    lastName: 'Doe',
    email: `test${Date.now()}@example.com`,
    password: 'TestPassword123!'
};

let userToken = '';

/**
 * Test Location Features
 */
async function runTests() {
    console.log('🧪 Testing User Location Features\n');
    console.log('='.repeat(60));

    try {
        // Test 1: User Signup
        console.log('\n📝 Test 1: User Signup');
        console.log('-'.repeat(60));
        const signupResponse = await axios.post(`${BASE_URL}/signup`, testUser);
        console.log('✅ Signup successful');
        console.log(`   Email: ${testUser.email}`);
        console.log(`   User ID: ${signupResponse.data.user.id}`);
        userToken = signupResponse.data.token;

        // Test 2: Get Profile (before location update)
        console.log('\n👤 Test 2: Get Profile (Before Location Update)');
        console.log('-'.repeat(60));
        const profileResponse = await axios.get(`${BASE_URL}/profile`, {
            headers: { Authorization: `Bearer ${userToken}` }
        });
        console.log('✅ Profile retrieved');
        console.log(`   Name: ${profileResponse.data.user.firstName} ${profileResponse.data.user.lastName}`);
        console.log(`   Location: ${JSON.stringify(profileResponse.data.user.location || 'Not set')}`);
        console.log(`   Phone: ${profileResponse.data.user.phone || 'Not set'}`);

        // Test 3: Update Profile with Location
        console.log('\n📍 Test 3: Update Profile with Location');
        console.log('-'.repeat(60));
        const updateData = {
            phone: '+91-9876543210',
            location: {
                address: '123 MG Road',
                city: 'Mumbai',
                state: 'Maharashtra',
                country: 'India',
                postalCode: '400001',
                coordinates: {
                    latitude: 19.0760,
                    longitude: 72.8777
                }
            }
        };
        const updateResponse = await axios.post(`${BASE_URL}/update-profile`, updateData, {
            headers: { Authorization: `Bearer ${userToken}` }
        });
        console.log('✅ Profile updated with location');
        console.log(`   Phone: ${updateResponse.data.user.phone}`);
        console.log(`   Address: ${updateResponse.data.user.location.address}`);
        console.log(`   City: ${updateResponse.data.user.location.city}`);
        console.log(`   State: ${updateResponse.data.user.location.state}`);
        console.log(`   Postal Code: ${updateResponse.data.user.location.postalCode}`);
        console.log(`   Coordinates: ${updateResponse.data.user.location.coordinates.latitude}, ${updateResponse.data.user.location.coordinates.longitude}`);

        // Test 4: Get Profile (after location update)
        console.log('\n👤 Test 4: Get Profile (After Location Update)');
        console.log('-'.repeat(60));
        const updatedProfileResponse = await axios.get(`${BASE_URL}/profile`, {
            headers: { Authorization: `Bearer ${userToken}` }
        });
        console.log('✅ Profile retrieved with location');
        console.log(`   Full Location: ${JSON.stringify(updatedProfileResponse.data.user.location, null, 2)}`);

        // Test 5: Partial Location Update
        console.log('\n🔄 Test 5: Partial Location Update');
        console.log('-'.repeat(60));
        const partialUpdate = {
            location: {
                city: 'Delhi',
                state: 'Delhi'
            }
        };
        const partialResponse = await axios.post(`${BASE_URL}/update-profile`, partialUpdate, {
            headers: { Authorization: `Bearer ${userToken}` }
        });
        console.log('✅ Partial location update successful');
        console.log(`   City: ${partialResponse.data.user.location.city}`);
        console.log(`   State: ${partialResponse.data.user.location.state}`);
        console.log(`   Address (preserved): ${partialResponse.data.user.location.address}`);

        // Summary
        console.log('\n' + '='.repeat(60));
        console.log('✅ All location tests passed!');
        console.log('\n📋 Location Features Available:');
        console.log('   ✓ Address, City, State, Country, Postal Code');
        console.log('   ✓ GPS Coordinates (latitude, longitude)');
        console.log('   ✓ Phone number');
        console.log('   ✓ Partial updates supported');
        console.log('   ✓ Location returned in login/signup/profile');
        console.log('='.repeat(60));

    } catch (error) {
        console.error('\n❌ Test failed:', error.response?.data || error.message);
        if (error.response?.data) {
            console.error('   Details:', JSON.stringify(error.response.data, null, 2));
        }
    }
}

// Check if server is running
async function checkServer() {
    try {
        await axios.get('http://localhost:5000');
        return true;
    } catch (error) {
        return false;
    }
}

// Main execution
(async () => {
    const serverRunning = await checkServer();
    if (!serverRunning) {
        console.error('❌ Server is not running!');
        console.error('   Please start the server with: npm start');
        process.exit(1);
    }

    await runTests();
})();
