# Roles & Permissions Matrix

| Capability | Admin | Editor | Author | Reviewer | Support |
|---|---|---|---|---|---|
| Access Admin | ✓ | ✓ | ✓ | ✓ | ✓ |
| Edit service page | ✓ | ✓ | ✗ | ✗ | ✗ |
| Create posts | ✓ | ✓ | ✓ | ✗ | ✗ |
| Edit others' posts | ✓ | ✓ | ✗ | ✗ | ✗ |
| Submit for review | ✓ | ✓ | ✓ | ✓ | ✗ |
| Approve/Publish | ✓ | ✓ | ✗ | ✓ | ✗ |
| Schedule posts | ✓ | ✓ | ✗ | ✓ | ✗ |
| Feature posts | ✓ | ✓ | ✗ | ✓ | ✗ |
| Manage categories/tags | ✓ | ✓ | ✗ | ✗ | ✗ |
| Messaging with users | ✓ | ✓ | ✓ | ✓ | ✓ |
| Upload files | ✓ | ✓ | ✓ | ✓ | ✓ |
| Manage roles | ✓ | ✗ | ✗ | ✗ | ✗ |
| Settings/SEO | ✓ | ✓ | ✗ | ✗ | ✗ |

AuthN via Clerk; AuthZ enforced in frontend guards and API.
