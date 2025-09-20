# Security & Privacy

- AuthN via Clerk; AuthZ per roles; route guards + API checks
- Sanitization: rehype-sanitize policy; DOMPurify server-side for previews if needed
- Rate limiting for mutations; audit trail on critical actions
- PII controls: masking in logs; file scanning hook; allowed types/sizes
- CSRF and clickjacking protections on admin
