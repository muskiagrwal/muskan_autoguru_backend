/**
 * Admin Signup Testing Script
 * Tests the secure admin registration endpoint
 * 
 * Tests:
 * 1. Regular signup rejects admin role assignment
 * 2. First admin creation with setup secret
 * 3. Admin creation fails without proper authentication
 * 4. Subsequent admin creation by existing admin
 */

const axios = require('axios');

const BASE_URL = 'http://localhost:5000/api';
const ADMIN_SETUP_SECRET = process.env.ADMIN_SETUP_SECRET || 'your-secure-admin-setup-secret';

// Test data
const testAdminData = {
    firstName: 'Admin',
    lastName: 'User',
    email: 'admin@autoguru.com',
    password: 'AdminPass123!'
};

const secondAdminData = {
    firstName: 'Second',
    lastName: 'Admin',
    email: 'admin2@autoguru.com',
    password: 'AdminPass456!'
};

const regularUserData = {
    firstName: 'Regular',
    lastName: 'User',
    email: 'user@autoguru.com',
    password: 'UserPass123!',
    role: 'admin' // Attempt to set admin role (should fail)
};

let adminToken = '';

/**
 * Test 1: Verify regular signup rejects admin role
 */
async function testRegularSignupRejectsAdmin() {
    console.log('\n🧪 Test 1: Regular signup should reject admin role assignment');
    try {
        const response = await axios.post(`${BASE_URL}/auth/signup`, regularUserData);
        console.log('❌ FAILED: Regular signup allowed admin role (should have been rejected)');
        return false;
    } catch (error) {
        if (error.response && error.response.status === 403) {
            console.log('✅ PASSED: Regular signup correctly rejected admin role');
            console.log('   Message:', error.response.data.message);
            return true;
        } else {
            console.log('❌ FAILED: Unexpected error:', error.response?.data?.message || error.message);
            return false;
        }
    }
}

/**
 * Test 2: Create first admin with setup secret
 */
async function testFirstAdminCreation() {
    console.log('\n🧪 Test 2: Create first admin with setup secret');
    try {
        const response = await axios.post(
            `${BASE_URL}/auth/admin/signup`,
            testAdminData,
            {
                headers: {
                    'x-admin-setup-secret': ADMIN_SETUP_SECRET
                }
            }
        );

        if (response.status === 201 && response.data.success) {
            console.log('✅ PASSED: First admin created successfully');
            console.log('   Admin Email:', response.data.user.email);
            console.log('   Admin Role:', response.data.user.role);
            return true;
        } else {
            console.log('❌ FAILED: Unexpected response:', response.data);
            return false;
        }
    } catch (error) {
        if (error.response?.data?.message?.includes('already exists')) {
            console.log('⚠️  SKIPPED: Admin already exists (clear database to run this test)');
            return true; // Not a failure if admin already exists
        }
        console.log('❌ FAILED:', error.response?.data?.message || error.message);
        return false;
    }
}

/**
 * Test 3: Admin creation without proper authentication should fail
 */
async function testAdminCreationWithoutAuth() {
    console.log('\n🧪 Test 3: Admin creation without authentication should fail');
    try {
        const response = await axios.post(
            `${BASE_URL}/auth/admin/signup`,
            {
                firstName: 'Unauthorized',
                lastName: 'Admin',
                email: 'unauthorized@autoguru.com',
                password: 'Pass123!'
            }
        );
        console.log('❌ FAILED: Admin creation succeeded without authentication');
        return false;
    } catch (error) {
        if (error.response && error.response.status === 403) {
            console.log('✅ PASSED: Admin creation correctly rejected without authentication');
            console.log('   Message:', error.response.data.message);
            return true;
        } else {
            console.log('❌ FAILED: Unexpected error:', error.response?.data?.message || error.message);
            return false;
        }
    }
}

/**
 * Test 4: Admin creation with invalid setup secret should fail
 */
async function testAdminCreationWithInvalidSecret() {
    console.log('\n🧪 Test 4: Admin creation with invalid setup secret should fail');
    try {
        const response = await axios.post(
            `${BASE_URL}/auth/admin/signup`,
            secondAdminData,
            {
                headers: {
                    'x-admin-setup-secret': 'wrong-secret'
                }
            }
        );
        console.log('❌ FAILED: Admin creation succeeded with invalid secret');
        return false;
    } catch (error) {
        if (error.response && error.response.status === 403) {
            console.log('✅ PASSED: Admin creation correctly rejected with invalid secret');
            console.log('   Message:', error.response.data.message);
            return true;
        } else {
            console.log('❌ FAILED: Unexpected error:', error.response?.data?.message || error.message);
            return false;
        }
    }
}

/**
 * Test 5: Login as admin to get token
 */
async function testAdminLogin() {
    console.log('\n🧪 Test 5: Login as admin to get authentication token');
    try {
        const response = await axios.post(`${BASE_URL}/auth/login`, {
            email: testAdminData.email,
            password: testAdminData.password
        });

        if (response.data.success && response.data.token) {
            adminToken = response.data.token;
            console.log('✅ PASSED: Admin login successful');
            console.log('   Admin Role:', response.data.user.role);
            return true;
        } else {
            console.log('❌ FAILED: Login response missing token');
            return false;
        }
    } catch (error) {
        console.log('❌ FAILED:', error.response?.data?.message || error.message);
        return false;
    }
}

/**
 * Test 6: Create second admin while authenticated as first admin
 */
async function testSecondAdminCreation() {
    console.log('\n🧪 Test 6: Create second admin while authenticated as first admin');

    if (!adminToken) {
        console.log('⚠️  SKIPPED: No admin token available (login test may have failed)');
        return false;
    }

    try {
        const response = await axios.post(
            `${BASE_URL}/auth/admin/signup`,
            secondAdminData,
            {
                headers: {
                    'Authorization': `Bearer ${adminToken}`
                }
            }
        );

        if (response.status === 201 && response.data.success) {
            console.log('✅ PASSED: Second admin created successfully by existing admin');
            console.log('   Admin Email:', response.data.user.email);
            console.log('   Admin Role:', response.data.user.role);
            return true;
        } else {
            console.log('❌ FAILED: Unexpected response:', response.data);
            return false;
        }
    } catch (error) {
        if (error.response?.data?.message?.includes('already exists')) {
            console.log('⚠️  SKIPPED: Second admin already exists (test already passed previously)');
            return true;
        }
        console.log('❌ FAILED:', error.response?.data?.message || error.message);
        return false;
    }
}

/**
 * Run all tests
 */
async function runAllTests() {
    console.log('═══════════════════════════════════════════════════════');
    console.log('  ADMIN REGISTRATION SECURITY TESTS');
    console.log('═══════════════════════════════════════════════════════');
    console.log('Base URL:', BASE_URL);
    console.log('Setup Secret:', ADMIN_SETUP_SECRET ? '✓ Configured' : '✗ Not configured');

    const results = [];

    // Run tests in sequence
    results.push(await testRegularSignupRejectsAdmin());
    results.push(await testFirstAdminCreation());
    results.push(await testAdminCreationWithoutAuth());
    results.push(await testAdminCreationWithInvalidSecret());
    results.push(await testAdminLogin());
    results.push(await testSecondAdminCreation());

    // Summary
    console.log('\n═══════════════════════════════════════════════════════');
    console.log('  TEST SUMMARY');
    console.log('═══════════════════════════════════════════════════════');
    const passed = results.filter(r => r).length;
    const total = results.length;
    console.log(`Total Tests: ${total}`);
    console.log(`Passed: ${passed}`);
    console.log(`Failed: ${total - passed}`);
    console.log(`Success Rate: ${((passed / total) * 100).toFixed(1)}%`);

    if (passed === total) {
        console.log('\n🎉 All tests passed! Admin registration is secure.');
    } else {
        console.log('\n⚠️  Some tests failed. Please review the implementation.');
    }
}

// Run tests
runAllTests().catch(error => {
    console.error('\n💥 Test suite error:', error.message);
    console.error('Make sure the server is running on', BASE_URL);
});
