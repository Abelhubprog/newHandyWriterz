# Analytics & Telemetry

## Events
- page_view (service_slug)
- post_click (post_id, position, layout)
- filter_change (search, category, tag)
- load_more (page)
- share_click/bookmark_click (post_id)
- admin_publish (post_id)
- message_sent (thread_id)

## Implementation
- Lightweight event bus; send to analytics endpoint (later swap provider)
- Respect DNT; anonymize PII; sampling for high-volume
