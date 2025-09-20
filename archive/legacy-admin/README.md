This folder contains archived legacy admin routing stacks and pages that are no longer used by the active features-based admin.

Files were moved here to reduce confusion and avoid accidental imports. Keep for historical reference until permanently removed.
# Legacy Admin Modules

This directory archives deprecated admin dashboard implementations that predate the consolidated src/admin module. Files are retained temporarily for historical reference and can be deleted once the new admin experience is fully validated.

Contents:
- pages/admin/: legacy React pages, routes, and mock dashboards.
-
outes/*.tsx: older router shells that pointed at the legacy pages.

These files are no longer imported by the application build. New admin work should live exclusively under src/admin.
