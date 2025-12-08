const axios = require('axios');

const BASE_URL = 'http://localhost:5000/api/auth';

// Test configuration
const testUser = {
    firstName: 'Test',
    lastName: 'User',
    email: `test${Date.now()}@example.com`,
    password: 'TestPassword123!'
};

let verificationToken = '';
let userToken = '';

/**
 * Test Email Verification Flow
 */
async function runTests() {
    console.log('🧪 Testing Email Verification & Password Reset Features\n');
    console.log('='.repeat(60));

    try {
        // Test 1: User Signup (should send verification email)
        console.log('\n📝 Test 1: User Signup');
        console.log('-'.repeat(60));
        const signupResponse = await axios.post(`${BASE_URL}/signup`, testUser);
        console.log('✅ Signup successful');
        console.log(`   Email: ${testUser.email}`);
        console.log(`   Verified: ${signupResponse.data.user.isEmailVerified}`);
        console.log(`   Message: ${signupResponse.data.message}`);
        userToken = signupResponse.data.token;

        // Note: In a real test, you would extract the token from the email
        // For this test, we'll simulate having the token
        console.log('\n⚠️  Note: Check your email for the verification link');
        console.log('   The verification token would be in the email URL');

        // Test 2: Resend Verification Email
        console.log('\n📧 Test 2: Resend Verification Email');
        console.log('-'.repeat(60));
        const resendResponse = await axios.post(`${BASE_URL}/resend-verification`, {
            email: testUser.email
        });
        console.log('✅ Verification email resent');
        console.log(`   Message: ${resendResponse.data.message}`);

        // Test 3: Verify Email (with mock token)
        console.log('\n✉️  Test 3: Verify Email');
        console.log('-'.repeat(60));
        console.log('⚠️  This would normally use the token from the email');
        console.log('   Skipping actual verification in automated test');

        // Test 4: Forgot Password
        console.log('\n🔐 Test 4: Forgot Password (Enhanced)');
        console.log('-'.repeat(60));
        const forgotResponse = await axios.post(`${BASE_URL}/forgot-password-enhanced`, {
            email: testUser.email
        });
        console.log('✅ Password reset email sent');
        console.log(`   Message: ${forgotResponse.data.message}`);

        // Test 5: Reset Password (with mock token)
        console.log('\n🔑 Test 5: Reset Password');
        console.log('-'.repeat(60));
        console.log('⚠️  This would normally use the token from the email');
        console.log('   Skipping actual password reset in automated test');

        // Test 6: Resend to Already Verified User (should fail)
        console.log('\n❌ Test 6: Resend to Already Verified User');
        console.log('-'.repeat(60));
        console.log('⚠️  Skipping - user is not verified yet in this test');

        // Summary
        console.log('\n' + '='.repeat(60));
        console.log('✅ All basic tests passed!');
        console.log('\n📋 Manual Testing Required:');
        console.log('   1. Configure email settings in .env file');
        console.log('   2. Register a new user and check email inbox');
        console.log('   3. Click verification link from email');
        console.log('   4. Test forgot password flow with real email');
        console.log('   5. Test password reset with token from email');
        console.log('\n📚 API Endpoints Available:');
        console.log('   POST /api/auth/verify-email');
        console.log('   POST /api/auth/resend-verification');
        console.log('   POST /api/auth/forgot-password-enhanced');
        console.log('   POST /api/auth/reset-password-enhanced');
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
