# Testing Strategy

## Unit
- Utils (format/read-time), content mapping, sanitizers
- Hooks (useServiceContent with mocked service)

## Integration
- Admin publish → public render flow
- Editor autosave/version restore
- Messaging/file upload happy-path + size/type validation

## E2E (smoke)
- Browse service page, filter, load more, open FAQ
- Admin: create post, submit for review, approve, publish

## Tooling
- React Testing Library; msw for service mocks; Playwright/Cypress optional

## CI Gates
- Type-check, lint, unit; optional E2E nightly
