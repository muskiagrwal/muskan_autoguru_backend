# Admin Registration Guide

## Overview

The AutoGuru backend now includes a secure admin registration system that prevents unauthorized admin account creation while allowing legitimate admin setup.

## Security Features

✅ **Regular signup cannot create admin accounts** - Users attempting to set `role: 'admin'` in the signup endpoint will receive a 403 error

✅ **Two-tier authentication for admin creation**:
- **First Admin**: Created using a setup secret from environment variables
- **Subsequent Admins**: Created by existing authenticated admins only

## Creating the First Admin

### Step 1: Configure Environment Variable

Add to your `.env` file:
```env
ADMIN_SETUP_SECRET=your-secure-random-secret-here
```

⚠️ **Important**: Use a strong, random secret. This is only needed for creating the very first admin.

### Step 2: Make API Request

```bash
curl -X POST http://localhost:5000/api/auth/admin/signup \
  -H "Content-Type: application/json" \
  -H "x-admin-setup-secret: your-secure-random-secret-here" \
  -d '{
    "firstName": "Admin",
    "lastName": "User",
    "email": "admin@autoguru.com",
    "password": "SecurePassword123!"
  }'
```

**Response:**
```json
{
  "success": true,
  "message": "Admin account created successfully",
  "user": {
    "id": "...",
    "firstName": "Admin",
    "lastName": "User",
    "email": "admin@autoguru.com",
    "role": "admin",
    "createdAt": "..."
  }
}
```

## Creating Additional Admins

Once you have at least one admin account, additional admins can be created by authenticated admin users.

### Step 1: Login as Admin

```bash
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "admin@autoguru.com",
    "password": "SecurePassword123!"
  }'
```

Save the `token` from the response.

### Step 2: Create New Admin

```bash
curl -X POST http://localhost:5000/api/auth/admin/signup \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_ADMIN_TOKEN_HERE" \
  -d '{
    "firstName": "Second",
    "lastName": "Admin",
    "email": "admin2@autoguru.com",
    "password": "AnotherSecurePassword123!"
  }'
```

## API Reference

### Endpoint: `POST /api/auth/admin/signup`

**Authentication Methods (one required):**
- Setup secret header: `x-admin-setup-secret` (only works when no admins exist)
- Admin JWT: `Authorization: Bearer <token>` (works when admins already exist)

**Request Body:**
```json
{
  "firstName": "string (required)",
  "lastName": "string (required)",
  "email": "string (required, unique)",
  "password": "string (required)"
}
```

**Success Response (201):**
```json
{
  "success": true,
  "message": "Admin account created successfully",
  "user": {
    "id": "string",
    "firstName": "string",
    "lastName": "string",
    "email": "string",
    "role": "admin",
    "createdAt": "date"
  }
}
```

**Error Responses:**

- `400`: Missing required fields or email already exists
- `403`: Invalid setup secret or insufficient permissions
- `500`: Server error or ADMIN_SETUP_SECRET not configured

## Testing

Run the automated test suite:

```bash
# Make sure server is running first
npm start

# In another terminal, run tests
node test_admin_signup.js
```

The test suite verifies:
1. Regular signup rejects admin role assignment
2. First admin creation with setup secret
3. Admin creation fails without proper authentication
4. Subsequent admin creation by existing admin

## Security Best Practices

1. **Protect the Setup Secret**: Never commit `ADMIN_SETUP_SECRET` to version control
2. **Create First Admin Immediately**: Set up the first admin account when deploying to production
3. **Rotate Credentials**: Consider changing admin passwords regularly
4. **Audit Admin Actions**: Monitor who creates admin accounts through application logs
5. **Limit Admin Count**: Only create admin accounts for trusted team members

## Regular User Roles

Regular users can still be created with these roles through the standard signup endpoint:
- `user` (default)
- `mechanic`
- `supplier`

Any attempt to create an `admin` through `/api/auth/signup` will be rejected with a 403 error.

## Troubleshooting

### "Admin setup is not configured"
- Ensure `ADMIN_SETUP_SECRET` is set in your `.env` file
- Restart the server after adding the environment variable

### "Invalid setup secret"
- Verify the header name is exactly `x-admin-setup-secret`
- Check that the secret value matches your `.env` file

### "Only existing admins can create new admin accounts"
- This error appears when admins already exist in the database
- You must authenticate as an existing admin to create new admins
- The setup secret method only works for the first admin

### "An account with this email already exists"
- Choose a different email address
- Check if the user already exists in the database
