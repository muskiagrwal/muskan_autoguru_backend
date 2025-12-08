/**
 * Pagination Utility
 * Provides pagination helpers for list endpoints
 */

/**
 * Parse and validate pagination parameters
 * @param {Object} query - Request query parameters
 * @returns {Object} - Validated pagination params
 */
const parsePaginationParams = (query) => {
    const page = Math.max(1, parseInt(query.page) || 1);
    const limit = Math.min(100, Math.max(1, parseInt(query.limit) || 10));
    const skip = (page - 1) * limit;

    return { page, limit, skip };
};

/**
 * Create pagination metadata
 * @param {number} total - Total number of items
 * @param {number} page - Current page number
 * @param {number} limit - Items per page
 * @returns {Object} - Pagination metadata
 */
const createPaginationMeta = (total, page, limit) => {
    const totalPages = Math.ceil(total / limit);

    return {
        page,
        limit,
        total,
        totalPages,
        hasNext: page < totalPages,
        hasPrev: page > 1
    };
};

/**
 * Format paginated response
 * @param {Array} data - Array of items
 * @param {number} total - Total number of items
 * @param {number} page - Current page number
 * @param {number} limit - Items per page
 * @returns {Object} - Formatted response with data and pagination
 */
const formatPaginatedResponse = (data, total, page, limit) => {
    return {
        success: true,
        data,
        pagination: createPaginationMeta(total, page, limit)
    };
};

/**
 * Parse sort parameters
 * @param {Object} query - Request query parameters
 * @param {string} defaultSort - Default sort field
 * @returns {Object} - Sort object for MongoDB
 */
const parseSortParams = (query, defaultSort = 'createdAt') => {
    const sortField = query.sort || defaultSort;
    const sortOrder = query.order === 'asc' ? 1 : -1;

    return { [sortField]: sortOrder };
};

module.exports = {
    parsePaginationParams,
    createPaginationMeta,
    formatPaginatedResponse,
    parseSortParams
};
