const axios = require('axios');

const BASE_URL = 'http://localhost:5000/api';

/**
 * Test Rate Limiting
 */
async function testRateLimiting() {
    console.log('🧪 Testing Rate Limiting\n');
    console.log('='.repeat(60));

    try {
        // Test 1: General API Rate Limit (100 requests/15min)
        console.log('\n📊 Test 1: General API Rate Limit (100/15min)');
        console.log('-'.repeat(60));
        console.log('Making 5 requests to /api/bookings...');

        for (let i = 1; i <= 5; i++) {
            try {
                await axios.get(`${BASE_URL}/bookings`);
                console.log(`   Request ${i}: ✅ Success`);
            } catch (error) {
                if (error.response?.status === 429) {
                    console.log(`   Request ${i}: ❌ Rate limited!`);
                } else {
                    console.log(`   Request ${i}: ⚠️  ${error.response?.status || 'Error'}`);
                }
            }
        }

        // Test 2: Auth Rate Limit (5 requests/15min)
        console.log('\n🔐 Test 2: Auth Rate Limit (5/15min)');
        console.log('-'.repeat(60));
        console.log('Making 6 login attempts...');

        for (let i = 1; i <= 6; i++) {
            try {
                await axios.post(`${BASE_URL}/auth/login`, {
                    email: 'test@example.com',
                    password: 'wrongpassword'
                });
                console.log(`   Attempt ${i}: ✅ Request accepted`);
            } catch (error) {
                if (error.response?.status === 429) {
                    console.log(`   Attempt ${i}: ❌ RATE LIMITED! (Expected after 5 attempts)`);
                    console.log(`   Message: ${error.response.data.message}`);
                } else {
                    console.log(`   Attempt ${i}: ⚠️  ${error.response?.status} - ${error.response?.data?.message || 'Error'}`);
                }
            }
            // Small delay between requests
            await new Promise(resolve => setTimeout(resolve, 100));
        }

        // Test 3: Password Reset Rate Limit (3 requests/15min)
        console.log('\n🔑 Test 3: Password Reset Rate Limit (3/15min)');
        console.log('-'.repeat(60));
        console.log('Making 4 password reset requests...');

        for (let i = 1; i <= 4; i++) {
            try {
                await axios.post(`${BASE_URL}/auth/forgot-password-enhanced`, {
                    email: 'test@example.com'
                });
                console.log(`   Request ${i}: ✅ Request accepted`);
            } catch (error) {
                if (error.response?.status === 429) {
                    console.log(`   Request ${i}: ❌ RATE LIMITED! (Expected after 3 requests)`);
                    console.log(`   Message: ${error.response.data.message}`);
                } else {
                    console.log(`   Request ${i}: ⚠️  ${error.response?.status}`);
                }
            }
            await new Promise(resolve => setTimeout(resolve, 100));
        }

        console.log('\n' + '='.repeat(60));
        console.log('✅ Rate limiting tests completed!');
        console.log('\n📋 Rate Limits:');
        console.log('   General API: 100 requests / 15 minutes');
        console.log('   Auth (login/signup): 5 requests / 15 minutes');
        console.log('   Password Reset: 3 requests / 15 minutes');
        console.log('   Email Verification: 3 requests / 15 minutes');
        console.log('='.repeat(60));

    } catch (error) {
        console.error('\n❌ Test failed:', error.message);
    }
}

/**
 * Test Pagination
 */
async function testPagination() {
    console.log('\n\n🧪 Testing Pagination\n');
    console.log('='.repeat(60));

    try {
        // Test 1: Default pagination
        console.log('\n📄 Test 1: Default Pagination');
        console.log('-'.repeat(60));
        const response1 = await axios.get(`${BASE_URL}/auth/users`, {
            headers: { Authorization: 'Bearer dummy-token' }
        }).catch(e => e.response);

        if (response1?.data?.pagination) {
            console.log('✅ Pagination metadata present');
            console.log(`   Page: ${response1.data.pagination.page}`);
            console.log(`   Limit: ${response1.data.pagination.limit}`);
            console.log(`   Total: ${response1.data.pagination.total}`);
        } else {
            console.log('⚠️  Response:', response1?.status);
        }

        // Test 2: Custom page and limit
        console.log('\n📄 Test 2: Custom Pagination (page=2, limit=5)');
        console.log('-'.repeat(60));
        const response2 = await axios.get(`${BASE_URL}/auth/users?page=2&limit=5`, {
            headers: { Authorization: 'Bearer dummy-token' }
        }).catch(e => e.response);

        if (response2?.data?.pagination) {
            console.log('✅ Custom pagination working');
            console.log(`   Page: ${response2.data.pagination.page}`);
            console.log(`   Limit: ${response2.data.pagination.limit}`);
            console.log(`   Has Next: ${response2.data.pagination.hasNext}`);
            console.log(`   Has Prev: ${response2.data.pagination.hasPrev}`);
        }

        // Test 3: Invalid pagination
        console.log('\n📄 Test 3: Invalid Pagination (page=-1, limit=1000)');
        console.log('-'.repeat(60));
        const response3 = await axios.get(`${BASE_URL}/auth/users?page=-1&limit=1000`, {
            headers: { Authorization: 'Bearer dummy-token' }
        }).catch(e => e.response);

        if (response3?.data?.pagination) {
            console.log('✅ Invalid params handled gracefully');
            console.log(`   Corrected Page: ${response3.data.pagination.page} (min: 1)`);
            console.log(`   Corrected Limit: ${response3.data.pagination.limit} (max: 100)`);
        }

        console.log('\n' + '='.repeat(60));
        console.log('✅ Pagination tests completed!');
        console.log('\n📋 Pagination Features:');
        console.log('   Default: page=1, limit=10');
        console.log('   Max limit: 100');
        console.log('   Query params: ?page=1&limit=10&sort=createdAt&order=desc');
        console.log('='.repeat(60));

    } catch (error) {
        console.error('\n❌ Test failed:', error.message);
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

    await testRateLimiting();
    await testPagination();
})();
