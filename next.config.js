// In next.config.js
console.log("Using next.config.js");
const createNextIntlPlugin = require("next-intl/plugin");
const withNextIntl = createNextIntlPlugin();
/** @type {import('next').NextConfig} */
const nextConfig = {};
module.exports = withNextIntl(nextConfig);
