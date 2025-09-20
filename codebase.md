Directory structure:
└── abelhubprog-newhandywriterz/
    ├── README.md
    ├── _routes.json
    ├── ADMIN_DASHBOARD_INTEL.md
    ├── AGENTS.md
    ├── app.tsx
    ├── CMS_CONTENT_SYSTEM.md
    ├── CODEBASE_INTEL.md
    ├── condex.md
    ├── dash.md
    ├── design_and_specs.docx
    ├── env.md
    ├── HandyPRDBuilder.md
    ├── index.html
    ├── lockfile.yaml
    ├── netlify.toml
    ├── package.json
    ├── PLAN_FORWARD.md
    ├── pnpm-lock.yaml
    ├── postcss.config.cjs
    ├── PROD_READINESS.md
    ├── recap.md
    ├── schema.txt
    ├── server.js
    ├── tailwind.config.cjs
    ├── test-functionality.ts
    ├── tsconfig.app.json
    ├── tsconfig.json
    ├── tsconfig.node.json
    ├── typecheck.md
    ├── VALIDATION.md
    ├── vercel.json
    ├── vite.config.d.ts
    ├── vite.config.ts
    ├── wrangler-upload.toml
    ├── wrangler.toml
    ├── ~$sign_and_specs.docx
    ├── .eslintrc.cjs
    ├── .eslintrc.jsonc
    ├── .viterc
    ├── api/
    │   ├── clerk-webhook.ts
    │   ├── messages.ts
    │   ├── notifications.ts
    │   ├── payments.ts
    │   ├── send-documents.ts
    │   ├── send-email-fallback.ts
    │   ├── send-receipt.ts
    │   ├── send-status-update.ts
    │   ├── submissions.ts
    │   ├── upload-fallback.js
    │   ├── upload.ts
    │   └── uploads.ts
    ├── archive/
    │   └── legacy-admin/
    │       ├── README.md
    │       ├── src_admin_Routes.tsx
    │       ├── src_app_admin_router.tsx
    │       ├── src_pages_admin_router.tsx
    │       ├── components/
    │       │   └── admin/
    │       │       ├── AdminAuthProvider.tsx
    │       │       ├── AnalyticsDashboard.tsx
    │       │       ├── CategoriesList.tsx
    │       │       ├── ContentAnalytics.tsx
    │       │       ├── ContentManagement.tsx
    │       │       ├── ContentManagementSystem.tsx
    │       │       ├── ContentManager.tsx
    │       │       ├── ContentScheduling.tsx
    │       │       ├── ContentVersionHistory.tsx
    │       │       ├── ContentWorkflow.tsx
    │       │       ├── DashboardHome.tsx
    │       │       ├── MediaLibrary.tsx
    │       │       ├── MediaManager.tsx
    │       │       ├── MediaUpload.tsx
    │       │       ├── MessagesManager.tsx
    │       │       ├── PostEditor.tsx
    │       │       ├── PostRenderer.tsx
    │       │       ├── PostsList.tsx
    │       │       ├── RichTextEditor.tsx
    │       │       ├── sed7kZmd3
    │       │       ├── sedjvBcCi
    │       │       ├── SeoMetadata.tsx
    │       │       ├── ServiceContentEditor.tsx
    │       │       ├── ServiceContentManager.tsx
    │       │       ├── ServicePageManager.tsx
    │       │       ├── SettingsPage.tsx
    │       │       ├── TagsList.tsx
    │       │       ├── UserManagement.tsx
    │       │       ├── UsersList.tsx
    │       │       ├── content/
    │       │       │   ├── ContentEditor.tsx
    │       │       │   └── ContentManagement.tsx
    │       │       ├── ContentEditor/
    │       │       │   ├── AutoSave.tsx
    │       │       │   ├── ContentEditor.tsx
    │       │       │   ├── EditorToolbar.tsx
    │       │       │   └── RevisionHistory.tsx
    │       │       ├── dashboard/
    │       │       │   ├── AdminDashboard.tsx
    │       │       │   ├── RecentComments.tsx
    │       │       │   ├── RecentPosts.tsx
    │       │       │   ├── StatCard.tsx
    │       │       │   ├── Stats.tsx
    │       │       │   └── editor/
    │       │       │       ├── ContentRenderer.tsx
    │       │       │       └── RichContentEditor.tsx
    │       │       ├── editor/
    │       │       │   ├── PostEditor.tsx
    │       │       │   └── RichTextEditor.tsx
    │       │       ├── layout/
    │       │       │   ├── AdminLayout.tsx
    │       │       │   ├── DashboardLayout.tsx
    │       │       │   ├── Sidebar.tsx
    │       │       │   ├── TopNav.tsx
    │       │       │   └── UserMenu.tsx
    │       │       └── navigation/
    │       │           └── AdminNav.tsx
    │       ├── hooks/
    │       │   └── useAdminAuth.tsx
    │       ├── pages/
    │       │   ├── admin/
    │       │   │   ├── AdminDashboard.tsx
    │       │   │   ├── AdminRoutes.tsx
    │       │   │   ├── Analytics.tsx
    │       │   │   ├── Categories.tsx
    │       │   │   ├── Comments.tsx
    │       │   │   ├── Content.tsx
    │       │   │   ├── ContentDashboard.tsx
    │       │   │   ├── ContentManagementPage.tsx
    │       │   │   ├── ContentManager.tsx
    │       │   │   ├── DashboardRoutes.tsx
    │       │   │   ├── Diagnostics.tsx
    │       │   │   ├── index.tsx
    │       │   │   ├── login.tsx
    │       │   │   ├── MediaLibrary.tsx
    │       │   │   ├── newAdminDashboard.tsx
    │       │   │   ├── Orders.tsx
    │       │   │   ├── payments.tsx
    │       │   │   ├── PostEditor.tsx
    │       │   │   ├── Posts.tsx
    │       │   │   ├── sedaOXepp
    │       │   │   ├── sedIoHI1E
    │       │   │   ├── sedJJw0jl
    │       │   │   ├── Services.tsx
    │       │   │   ├── system-metrics.tsx
    │       │   │   ├── Tags.tsx
    │       │   │   ├── telegram-dashboard.tsx
    │       │   │   ├── UserManagement.tsx
    │       │   │   ├── users.tsx
    │       │   │   ├── analytics/
    │       │   │   │   └── AnalyticsDashboard.tsx
    │       │   │   ├── content/
    │       │   │   │   ├── CategoriesList.tsx
    │       │   │   │   ├── ContentEditor.tsx
    │       │   │   │   ├── ContentList.tsx
    │       │   │   │   ├── PostEditor.tsx
    │       │   │   │   └── PostsList.tsx
    │       │   │   ├── services/
    │       │   │   │   ├── index.tsx
    │       │   │   │   ├── ServiceManager.tsx
    │       │   │   │   ├── ServicePageEditor.tsx
    │       │   │   │   ├── ServicePagesManager.tsx
    │       │   │   │   └── ServicesList.tsx
    │       │   │   └── users/
    │       │   │       └── UserManagement.tsx
    │       │   └── auth/
    │       │       ├── AdminLogin.tsx
    │       │       ├── sedr9jRO1
    │       │       ├── sedXqLlI6
    │       │       └── sedYGUtNt
    │       ├── routes/
    │       │   ├── admin.tsx
    │       │   ├── AdminDashboardRoutes.tsx
    │       │   ├── AdminProtectedRoute.tsx
    │       │   ├── AdminRoutes.tsx
    │       │   └── AdminServicePagesRoutes.tsx
    │       └── services/
    │           ├── adminAuth.ts
    │           └── adminAuthService.ts
    ├── docs/
    │   ├── admin-dashboard-spec.md
    │   ├── admin-ux-wireflow.md
    │   ├── analytics-telemetry.md
    │   ├── api-contracts.md
    │   ├── component-inventory.md
    │   ├── content-governance.md
    │   ├── data-model-and-migrations.md
    │   ├── deployment-ops.md
    │   ├── implementation-roadmap.md
    │   ├── migration-playbook.md
    │   ├── platform-redesign-plan.md
    │   ├── roles-permissions-matrix.md
    │   ├── security-privacy.md
    │   ├── seo-a11y-performance.md
    │   ├── service-page-template-spec.md
    │   └── testing-strategy.md
    ├── functions/
    │   └── api/
    │       ├── auth.ts
    │       ├── clerk-webhook.ts
    │       ├── database.ts
    │       ├── health.ts
    │       ├── messages.ts
    │       ├── payments.ts
    │       ├── r2.ts
    │       ├── submissions.ts
    │       ├── test.ts
    │       └── upload.ts
    ├── migrations/
    │   ├── 000_complete_setup.sql
    │   ├── 000_initial_setup.sql
    │   ├── 001_setup_admin.sql
    │   ├── 002_content_storage_setup.sql
    │   ├── 003_content_functions.sql
    │   ├── 004_content_workflow_tables.sql
    │   ├── 005_analytics_tables.sql
    │   ├── 005_services_and_content.sql
    │   ├── 006_create_review_tables.sql
    │   ├── 006_service_content_tables.sql
    │   ├── 006_services_and_categories.sql
    │   ├── 007_content_versioning.sql
    │   ├── 008_content_scheduling.sql
    │   ├── 009_content_analytics.sql
    │   ├── 010_interactions_system.sql
    │   ├── 011_document_submissions.sql
    │   ├── 012_service_cms.sql
    │   ├── 02_create_admin.sql
    │   ├── 03_add_status_to_views.sql
    │   ├── 03_fix_views_table.sql
    │   ├── 03_posts_table.sql
    │   ├── 04_content_workflow.sql
    │   ├── 04_content_workflow_tables.sql
    │   ├── 05_content_workflow_revisions.sql
    │   ├── 06_content_service_categories.sql
    │   ├── complete_content_system.sql
    │   ├── complete_setup.sql
    │   └── create_admin_tables.sql
    ├── public/
    │   ├── _redirects
    │   └── index.html
    ├── schema/
    │   ├── cloudflare-d1.sql
    │   └── enhanced-schema.sql
    ├── src/
    │   ├── api-test.ts
    │   ├── App.tsx
    │   ├── env.d.ts
    │   ├── env.ts
    │   ├── index.css
    │   ├── index.d.ts
    │   ├── main.tsx
    │   ├── polyfills.ts
    │   ├── providers.tsx
    │   ├── router.tsx
    │   ├── vite-env.d.ts
    │   ├── vite.config.ts
    │   ├── admin/
    │   │   ├── Routes.tsx
    │   │   ├── components/
    │   │   │   └── navigation/
    │   │   │       └── Sidebar.tsx
    │   │   └── pages/
    │   │       └── content/
    │   │           ├── ServiceExperienceEditor.tsx
    │   │           ├── ServicesPage.tsx
    │   │           └── service-experience/
    │   │               ├── FaqPricingForm.tsx
    │   │               ├── HeroForm.tsx
    │   │               ├── ImageUploader.tsx
    │   │               ├── SectionEditor.tsx
    │   │               ├── ServiceExperienceEditor.tsx
    │   │               ├── types.ts
    │   │               └── utils.ts
    │   ├── api/
    │   │   ├── createCharge.ts
    │   │   ├── admin/
    │   │   │   ├── profile.js
    │   │   │   └── content/
    │   │   │       ├── analytics.ts
    │   │   │       ├── approval.ts
    │   │   │       ├── index.ts
    │   │   │       └── version.ts
    │   │   ├── controllers/
    │   │   │   └── PostController.ts
    │   │   └── routes/
    │   │       ├── index.ts
    │   │       └── postRoutes.ts
    │   ├── app/
    │   │   └── admin/
    │   │       ├── router.tsx
    │   │       ├── components/
    │   │       │   └── layouts/
    │   │       │       └── AdminLayout.tsx
    │   │       └── pages/
    │   │           ├── Analytics.tsx
    │   │           ├── Categories.tsx
    │   │           ├── Content.tsx
    │   │           ├── Dashboard.tsx
    │   │           ├── Messages.tsx
    │   │           ├── Services.tsx
    │   │           ├── Settings.tsx
    │   │           └── Users.tsx
    │   ├── components/
    │   │   ├── CommentSection.tsx
    │   │   ├── HandyWriterzLogo.tsx
    │   │   ├── Navbar.tsx
    │   │   ├── PublicCommentSection.tsx
    │   │   ├── PublicCommentSystem.tsx
    │   │   ├── ServicePageRenderer.tsx
    │   │   ├── auth/
    │   │   │   ├── AdminGuard.tsx
    │   │   │   ├── AdminProtectedRoute.tsx
    │   │   │   ├── AdminRoute.tsx
    │   │   │   ├── AdminRouteGuard.tsx
    │   │   │   ├── AuthGuard.tsx
    │   │   │   ├── AuthModal.tsx
    │   │   │   ├── ClerkAdminAuth.tsx
    │   │   │   ├── ClerkProvider.tsx
    │   │   │   ├── LoginPrompt.tsx
    │   │   │   ├── ProtectedRoute.tsx
    │   │   │   └── SubscriptionGuard.tsx
    │   │   ├── Comments/
    │   │   │   └── CommentSection.tsx
    │   │   ├── common/
    │   │   │   ├── Button.tsx
    │   │   │   ├── ErrorBoundary.tsx
    │   │   │   ├── Loader.tsx
    │   │   │   ├── LoadingState.tsx
    │   │   │   ├── PageHeader.tsx
    │   │   │   └── Pagination.tsx
    │   │   ├── contents/
    │   │   │   ├── ContentManager.tsx
    │   │   │   └── PublicContent.tsx
    │   │   ├── Dashboard/
    │   │   │   ├── Dashboard.tsx
    │   │   │   ├── DashboardWrapper.tsx
    │   │   │   ├── DocumentUploader.tsx
    │   │   │   ├── PaymentDashboard.tsx
    │   │   │   ├── SendToAdminButton.tsx
    │   │   │   ├── SideNav.tsx
    │   │   │   └── SubscriptionStatus.tsx
    │   │   ├── Documents/
    │   │   │   └── DocumentManager.tsx
    │   │   ├── Editor/
    │   │   │   └── RichTextEditor.tsx
    │   │   ├── interactions/
    │   │   │   ├── Comments.tsx
    │   │   │   └── Likes.tsx
    │   │   ├── layout/
    │   │   │   └── Navbar.tsx
    │   │   ├── layouts/
    │   │   │   ├── AdminLayout.tsx
    │   │   │   ├── Breadcrumbs.tsx
    │   │   │   ├── DashboardLayout.tsx
    │   │   │   ├── Footer.tsx
    │   │   │   ├── Header.tsx
    │   │   │   ├── Navbar.tsx
    │   │   │   ├── RootLayout.tsx
    │   │   │   └── ServiceLayout.tsx
    │   │   ├── Messages/
    │   │   │   └── MessageCenter.tsx
    │   │   ├── navigation/
    │   │   │   ├── Navbar.tsx
    │   │   │   └── Navigation.tsx
    │   │   ├── Payments/
    │   │   │   ├── PaymentProcessor.tsx
    │   │   │   └── StableLinkPayment.tsx
    │   │   ├── services/
    │   │   │   ├── BlogPostDetail.tsx
    │   │   │   ├── BlogPostsList.tsx
    │   │   │   ├── OrderFlow.tsx
    │   │   │   ├── ServiceHeader.tsx
    │   │   │   ├── ServiceHero.tsx
    │   │   │   ├── ServiceOverview.tsx
    │   │   │   ├── ServicePageTemplate.tsx
    │   │   │   └── StandardServicePage.tsx
    │   │   ├── shared/
    │   │   │   ├── Chat.tsx
    │   │   │   ├── NotificationCenter.tsx
    │   │   │   └── TurnitinUpload.tsx
    │   │   ├── skeletons/
    │   │   │   ├── ContentSkeleton.tsx
    │   │   │   └── TableSkeleton.tsx
    │   │   ├── transitions/
    │   │   │   ├── PageTransition.tsx
    │   │   │   └── PageTransitionRouter.tsx
    │   │   └── ui/
    │   │       ├── access-denied.tsx
    │   │       ├── AccessibleButton.tsx
    │   │       ├── AccessibleToggleButton.tsx
    │   │       ├── alert.tsx
    │   │       ├── animated.tsx
    │   │       ├── avatar-upload.tsx
    │   │       ├── avatar.tsx
    │   │       ├── badge.tsx
    │   │       ├── box.tsx
    │   │       ├── button.tsx
    │   │       ├── card.tsx
    │   │       ├── CategoryCard.vue
    │   │       ├── checkbox.tsx
    │   │       ├── command.tsx
    │   │       ├── DatabaseErrorMessage.tsx
    │   │       ├── DataSourceIndicator.tsx
    │   │       ├── DataTable.tsx
    │   │       ├── dialog.tsx
    │   │       ├── document-upload.tsx
    │   │       ├── DocumentProcessingStatus.tsx
    │   │       ├── DocumentUploadForm.tsx
    │   │       ├── dropdown-menu.tsx
    │   │       ├── EmailInterface.tsx
    │   │       ├── enhanced-button.tsx
    │   │       ├── enhanced-card.tsx
    │   │       ├── enhanced-input.tsx
    │   │       ├── enhanced-layout.tsx
    │   │       ├── enhanced-loading.tsx
    │   │       ├── ErrorFallback.tsx
    │   │       ├── ErrorState.tsx
    │   │       ├── fieldset.tsx
    │   │       ├── FileUploader.tsx
    │   │       ├── form-field.tsx
    │   │       ├── form.tsx
    │   │       ├── FormField.tsx
    │   │       ├── FormLayout.tsx
    │   │       ├── IconButton.tsx
    │   │       ├── icons.tsx
    │   │       ├── image-upload.tsx
    │   │       ├── index.ts
    │   │       ├── input.tsx
    │   │       ├── label.tsx
    │   │       ├── layout.tsx
    │   │       ├── Loader.tsx
    │   │       ├── LoadingScreen.tsx
    │   │       ├── LoadingSpinner.tsx
    │   │       ├── LoadingState.tsx
    │   │       ├── MessagingInterface.tsx
    │   │       ├── NotificationSystem.tsx
    │   │       ├── PageTitle.tsx
    │   │       ├── PaymentButton.tsx
    │   │       ├── popover.tsx
    │   │       ├── progress.tsx
    │   │       ├── radio-group.tsx
    │   │       ├── RoleBadge.tsx
    │   │       ├── scroll-area.tsx
    │   │       ├── SearchBar.vue
    │   │       ├── select.tsx
    │   │       ├── separator.tsx
    │   │       ├── skeleton.tsx
    │   │       ├── spinner.tsx
    │   │       ├── stack.tsx
    │   │       ├── StatusBadge.tsx
    │   │       ├── switch.tsx
    │   │       ├── table.tsx
    │   │       ├── tabs.tsx
    │   │       ├── textarea.tsx
    │   │       ├── ThemeToggle.tsx
    │   │       ├── ThemeTransition.tsx
    │   │       ├── toast.tsx
    │   │       ├── toaster.tsx
    │   │       ├── types.ts
    │   │       ├── use-toast.ts
    │   │       ├── use-toast.tsx
    │   │       ├── UserProfile.tsx
    │   │       └── toast/
    │   │           ├── index.tsx
    │   │           ├── toaster.tsx
    │   │           └── use-toast.ts
    │   ├── config/
    │   │   ├── clerk.ts
    │   │   ├── deployment.ts
    │   │   ├── dev-flags.ts
    │   │   ├── env.ts
    │   │   ├── flags.ts
    │   │   ├── production.ts
    │   │   ├── services.ts
    │   │   ├── telegram.ts
    │   │   └── config/
    │   │       ├── services.ts
    │   │       └── telegram.ts
    │   ├── contexts/
    │   │   ├── AdminLayoutContext.tsx
    │   │   ├── AuthContext.tsx
    │   │   └── DatabaseConnectionContext.tsx
    │   ├── cron/
    │   │   ├── cleanupJob.ts
    │   │   └── telegramRetryJob.ts
    │   ├── data/
    │   │   ├── categories.json
    │   │   ├── posts.json
    │   │   └── services.json
    │   ├── db/
    │   │   ├── schema.sql
    │   │   └── schema.ts
    │   ├── features/
    │   │   ├── router.tsx
    │   │   ├── comments/
    │   │   │   ├── Comments.tsx
    │   │   │   ├── components/
    │   │   │   │   ├── columns.tsx
    │   │   │   │   └── DataTableRowActions.tsx
    │   │   │   └── data/
    │   │   │       ├── schema.ts
    │   │   │       └── seed.ts
    │   │   ├── common/
    │   │   │   ├── components/
    │   │   │   │   ├── ErrorBoundary.tsx
    │   │   │   │   ├── ProtectedRoute.tsx
    │   │   │   │   ├── datatable/
    │   │   │   │   │   ├── data.tsx
    │   │   │   │   │   ├── DataTable.tsx
    │   │   │   │   │   ├── DataTableColumnHeader.tsx
    │   │   │   │   │   ├── DataTableFacetedFilter.tsx
    │   │   │   │   │   ├── DataTablePagination.tsx
    │   │   │   │   │   ├── DataTableRowActions.tsx
    │   │   │   │   │   ├── DataTableToolbar.tsx
    │   │   │   │   │   └── DataTableViewOptions.tsx
    │   │   │   │   └── navigation/
    │   │   │   │       ├── Header.tsx
    │   │   │   │       └── Sidebar.tsx
    │   │   │   └── layouts/
    │   │   │       └── AdminLayout.tsx
    │   │   ├── content/
    │   │   │   ├── ServiceExperienceEditor.tsx
    │   │   │   ├── ServicesPage.tsx
    │   │   │   └── service-experience/
    │   │   │       ├── FaqPricingForm.tsx
    │   │   │       ├── HeroForm.tsx
    │   │   │       ├── HighlightsForm.tsx
    │   │   │       ├── SectionEditor.tsx
    │   │   │       ├── types.ts
    │   │   │       └── utils.ts
    │   │   ├── dashboard/
    │   │   │   ├── Dashboard.tsx
    │   │   │   └── components/
    │   │   │       ├── Analytics.tsx
    │   │   │       ├── ChartPanel.tsx
    │   │   │       ├── RecentActivity.tsx
    │   │   │       └── StatCard.tsx
    │   │   ├── files/
    │   │   │   ├── Files.tsx
    │   │   │   ├── components/
    │   │   │   │   ├── columns.tsx
    │   │   │   │   └── DataTableRowActions.tsx
    │   │   │   └── data/
    │   │   │       ├── schema.ts
    │   │   │       └── seed.ts
    │   │   ├── messages/
    │   │   │   ├── Messages.tsx
    │   │   │   ├── components/
    │   │   │   │   ├── columns.tsx
    │   │   │   │   └── DataTableRowActions.tsx
    │   │   │   └── data/
    │   │   │       ├── schema.ts
    │   │   │       └── seed.ts
    │   │   ├── posts/
    │   │   │   ├── Posts.tsx
    │   │   │   ├── components/
    │   │   │   │   ├── Categories.tsx
    │   │   │   │   ├── columns.tsx
    │   │   │   │   ├── ContentForm.tsx
    │   │   │   │   ├── DataTableRowActions.tsx
    │   │   │   │   ├── Services.tsx
    │   │   │   │   └── content/
    │   │   │   │       ├── Categories.tsx
    │   │   │   │       ├── ContentEditor.tsx
    │   │   │   │       ├── ContentList.tsx
    │   │   │   │       ├── ContentManagement.tsx
    │   │   │   │       ├── ServiceEditor.tsx
    │   │   │   │       ├── ServiceExperienceEditor.tsx
    │   │   │   │       ├── ServicesPage.tsx
    │   │   │   │       └── service-experience/
    │   │   │   │           ├── FaqPricingForm.tsx
    │   │   │   │           ├── HeroForm.tsx
    │   │   │   │           ├── HighlightsForm.tsx
    │   │   │   │           ├── SectionsForm.tsx
    │   │   │   │           ├── types.ts
    │   │   │   │           └── utils.ts
    │   │   │   └── data/
    │   │   │       ├── schema.ts
    │   │   │       └── seed.ts
    │   │   ├── settings/
    │   │   │   ├── Settings.tsx
    │   │   │   └── components/
    │   │   │       └── ProfileForm.tsx
    │   │   └── users/
    │   │       ├── Users.tsx
    │   │       ├── components/
    │   │       │   ├── columns.tsx
    │   │       │   ├── DataTableRowActions.tsx
    │   │       │   └── users/
    │   │       │       ├── UserEditor.tsx
    │   │       │       └── UsersList.tsx
    │   │       └── data/
    │   │           ├── schema.ts
    │   │           └── seed.ts
    │   ├── hooks/
    │   │   ├── useAnalytics.ts
    │   │   ├── useAuth.ts
    │   │   ├── useAuth.tsx
    │   │   ├── useAuthGuard.ts
    │   │   ├── useAuthPrompt.ts
    │   │   ├── useAuthRedirect.ts
    │   │   ├── useBilling.ts
    │   │   ├── useCommentQueries.ts
    │   │   ├── useDatabase.ts
    │   │   ├── useDatabaseQuery.ts
    │   │   ├── useDocumentSubmission.ts
    │   │   ├── useField.ts
    │   │   ├── useHomeData.ts
    │   │   ├── useInteractions.ts
    │   │   ├── useIsAdmin.tsx
    │   │   ├── useLocalStorage.ts
    │   │   ├── useNotifications.ts
    │   │   ├── usePostQueries.ts
    │   │   ├── useRedirectIfNotAuthenticated.ts
    │   │   ├── useServiceContent.ts
    │   │   ├── useServices.ts
    │   │   ├── useSubscription.ts
    │   │   └── useTheme.ts
    │   ├── layouts/
    │   │   └── AdminLayout.tsx
    │   ├── lib/
    │   │   ├── admin.ts
    │   │   ├── chakra-helpers.tsx
    │   │   ├── checkEnv.ts
    │   │   ├── clerk.ts
    │   │   ├── clerkClient.ts
    │   │   ├── cloudflare.ts
    │   │   ├── cloudflareClient.ts
    │   │   ├── cloudflareR2Client.ts
    │   │   ├── comments.ts
    │   │   ├── content.ts
    │   │   ├── corsCheck.ts
    │   │   ├── d1Client.ts
    │   │   ├── database-adapter.ts
    │   │   ├── database.ts
    │   │   ├── db-helpers.ts
    │   │   ├── env.ts
    │   │   ├── fallbackLoader.ts
    │   │   ├── fileUploadService.ts
    │   │   ├── firebase.ts
    │   │   ├── form-validation.ts
    │   │   ├── initDatabase.ts
    │   │   ├── logger.ts
    │   │   ├── messages.ts
    │   │   ├── prisma.ts
    │   │   ├── r2MediaUtils.ts
    │   │   ├── rateLimit.ts
    │   │   ├── sedcsYY97
    │   │   ├── sedJ9IZaU
    │   │   ├── seduJWpZd
    │   │   ├── sedVqifSs
    │   │   ├── services.ts
    │   │   ├── storage-compat.ts
    │   │   ├── storage.ts
    │   │   ├── utils.ts
    │   │   ├── validation.ts
    │   │   ├── migrations/
    │   │   │   ├── 001_initial_schema.sql
    │   │   │   └── 002_seed_services.sql
    │   │   ├── telegram/
    │   │   │   └── index.ts
    │   │   └── types/
    │   │       └── database.types.ts
    │   ├── migrations/
    │   │   └── turnitin_tables.sql
    │   ├── models/
    │   │   ├── Post.ts
    │   │   └── User.ts
    │   ├── pages/
    │   │   ├── About.tsx
    │   │   ├── ApiTestPage.tsx
    │   │   ├── Contact.tsx
    │   │   ├── Diagnostics.tsx
    │   │   ├── EnhancedHomepage.tsx
    │   │   ├── FAQ.tsx
    │   │   ├── Homepage.tsx
    │   │   ├── HowItWorks.tsx
    │   │   ├── learning-hub.tsx
    │   │   ├── LearningHub.tsx
    │   │   ├── not-found.tsx
    │   │   ├── Payment.tsx
    │   │   ├── Pricing.tsx
    │   │   ├── Privacy.tsx
    │   │   ├── ServicePage.tsx
    │   │   ├── Services.tsx
    │   │   ├── Support.tsx
    │   │   ├── Terms.tsx
    │   │   ├── Unauthorized.tsx
    │   │   ├── admin/
    │   │   │   └── router.tsx
    │   │   ├── api/
    │   │   │   └── upload.ts
    │   │   ├── auth/
    │   │   │   ├── admin-login.tsx
    │   │   │   ├── check-email.tsx
    │   │   │   ├── forgot-password.tsx
    │   │   │   ├── ForgotPassword.tsx
    │   │   │   ├── login.tsx
    │   │   │   ├── mfa-challenge.tsx
    │   │   │   ├── register.tsx
    │   │   │   ├── reset-password.tsx
    │   │   │   └── SignUp.tsx
    │   │   ├── dashboard/
    │   │   │   ├── DocumentsUpload.tsx
    │   │   │   ├── Messages.tsx
    │   │   │   ├── Orders.jsx
    │   │   │   ├── Orders.tsx
    │   │   │   ├── Profile.tsx
    │   │   │   ├── sed2j6CA5
    │   │   │   ├── sedhOjoZp
    │   │   │   └── Settings.tsx
    │   │   ├── deepresearch/
    │   │   │   └── DeepResearch.tsx
    │   │   ├── domains/
    │   │   │   ├── AdultHealth.tsx
    │   │   │   ├── AI.tsx
    │   │   │   ├── ChildNursing.tsx
    │   │   │   ├── Crypto.tsx
    │   │   │   ├── DomainLanding.tsx
    │   │   │   ├── MentalHealth.tsx
    │   │   │   ├── SocialWork.tsx
    │   │   │   └── Technology.tsx
    │   │   ├── learning/
    │   │   │   └── index.tsx
    │   │   ├── learningHub/
    │   │   │   └── index.tsx
    │   │   ├── profile/
    │   │   │   └── profile.tsx
    │   │   ├── support/
    │   │   │   └── Support247.tsx
    │   │   ├── tools/
    │   │   │   └── check-turnitin.tsx
    │   │   └── user/
    │   │       └── Profile.tsx
    │   ├── providers/
    │   │   ├── AuthProvider.tsx
    │   │   ├── clerk-provider.tsx
    │   │   ├── ClerkProvider.tsx
    │   │   ├── QueryProvider.tsx
    │   │   ├── ServicesProvider.tsx
    │   │   └── Web3Provider.tsx
    │   ├── routes/
    │   │   ├── AppRoutes.tsx
    │   │   ├── pages.tsx
    │   │   └── services.tsx
    │   ├── services/
    │   │   ├── adminContentService.ts
    │   │   ├── adminNotificationService.ts
    │   │   ├── adminService.ts
    │   │   ├── aiScoreChecker.ts
    │   │   ├── analyticsService.ts
    │   │   ├── authAdapter.ts
    │   │   ├── authService.ts
    │   │   ├── blogService.ts
    │   │   ├── cloudflareUploadService.ts
    │   │   ├── commentService.ts
    │   │   ├── contentManagementService.ts
    │   │   ├── contentService.ts
    │   │   ├── cryptoPaymentService.ts
    │   │   ├── databaseService.ts
    │   │   ├── documentCleanup.ts
    │   │   ├── documentProcessor.ts
    │   │   ├── documentQueueService.ts
    │   │   ├── documentSubmissionService.ts
    │   │   ├── fileSanitizer.ts
    │   │   ├── fileUploadService.ts
    │   │   ├── functions.ts
    │   │   ├── interactionsService.ts
    │   │   ├── notificationService.ts
    │   │   ├── paymentService.ts
    │   │   ├── reactionService.ts
    │   │   ├── researchService.ts
    │   │   ├── sedfx6Xdb
    │   │   ├── serviceCmsService.ts
    │   │   ├── serviceContentService.ts
    │   │   ├── serviceModel.ts
    │   │   ├── servicePage.types.ts
    │   │   ├── stableLinkPaymentService.ts
    │   │   ├── storage.ts
    │   │   ├── storageService.ts
    │   │   ├── userService.ts
    │   │   └── workflowService.ts
    │   ├── styles/
    │   │   ├── animations.css
    │   │   └── onchainkit.css
    │   ├── theme/
    │   │   └── ThemeContext.tsx
    │   ├── types/
    │   │   ├── admin.ts
    │   │   ├── analytics.ts
    │   │   ├── appkit.d.ts
    │   │   ├── auth.ts
    │   │   ├── auth.types.ts
    │   │   ├── blog.ts
    │   │   ├── clerk.ts
    │   │   ├── content.ts
    │   │   ├── database.ts
    │   │   ├── database.types.ts
    │   │   ├── databaseTypes.ts
    │   │   ├── dompurify.d.ts
    │   │   ├── env.d.ts
    │   │   ├── formidable.d.ts
    │   │   ├── global.d.ts
    │   │   ├── globals.d.ts
    │   │   ├── next-auth.d.ts
    │   │   ├── post.ts
    │   │   ├── reown-appkit.d.ts
    │   │   ├── sections.ts
    │   │   ├── service.ts
    │   │   ├── services.ts
    │   │   ├── user.ts
    │   │   └── workflow.ts
    │   └── utils/
    │       ├── apiAuth.ts
    │       ├── authLogout.ts
    │       ├── checkEnv.ts
    │       ├── clerkRoles.ts
    │       ├── cn.ts
    │       ├── deploymentCheck.ts
    │       ├── dynamicImportErrorHandler.tsx
    │       ├── error.ts
    │       ├── errorTracking.ts
    │       ├── formatDate.ts
    │       ├── formatters.ts
    │       ├── mediaUtils.ts
    │       ├── random.ts
    │       ├── seoUtils.ts
    │       └── testAuth.ts
    ├── types/
    │   └── database.types.ts
    ├── .github/
    │   ├── copilot-instructions.md
    │   ├── instructions/
    │   │   └── codebaseintel.md.instructions.md
    │   ├── prompts/
    │   │   └── codebaseintelligence.md.prompt.md
    │   └── workflows/
    │       ├── ci.yml
    │       └── deploy.yml
    └── .wrangler/
        └── tmp/
            ├── bundle-jbf2nV/
            │   ├── checked-fetch.js
            │   ├── middleware-insertion-facade.js
            │   └── middleware-loader.entry.ts
            ├── bundle-xLLS1Y/
            │   ├── checked-fetch.js
            │   ├── middleware-insertion-facade.js
            │   └── middleware-loader.entry.ts
            ├── dev-gid8GA/
            │   └── functionsWorker-0.00432784623102056.js
            └── pages-CWjmo2/
                ├── functionsRoutes-0.006413031454188811.mjs
                └── functionsWorker-0.00432784623102056.mjs


Files Content:

(Files content cropped to 300k characters, download full ingest to see more)
================================================
FILE: README.md
================================================
# HandyWriterz - Professional Academic Writing Services

![HandyWriterz](https://handywriterz.com/favicon.ico)

## 🎓 About HandyWriterz

HandyWriterz is a comprehensive academic writing platform that connects students with professional writers for essays, research papers, dissertations, and other academic work. Built with modern web technologies and designed for scale.

## ✨ Features

### 🔐 Authentication & Security
- **Clerk Authentication** - Secure user authentication and session management
- **Role-based Access Control** - Admin and user role separation
- **Multi-factor Authentication** - Enhanced security for admin accounts

### 💰 Payment Processing
- **PayPal Integration** - Fully functional PayPal payment processing
- **Coinbase Commerce** - Production-ready cryptocurrency payments (USDC, ETH, BTC)
- **REOWN APPKIT** - Wallet connectivity for direct crypto transactions
- **Payment Receipts** - Downloadable and shareable transaction receipts

### 📁 File Management
- **Cloudflare R2 Storage** - Secure, scalable file storage
- **Document Upload System** - Multi-file upload with progress tracking
- **File Validation** - Comprehensive file type and size validation
- **Admin Notifications** - Automatic email alerts for new submissions

### 💬 Communication
- **Messaging System** - Built-in customer-admin communication
- **Email Notifications** - Automated status updates and confirmations
- **Real-time Updates** - Live order status tracking

### 📊 Admin Dashboard
- **Order Management** - Complete order lifecycle management
- **User Management** - User accounts and profile administration
- **Analytics Dashboard** - Business intelligence and reporting
- **Content Management** - Blog posts and service page management

## 🛠 Technology Stack

### Frontend
- **React 18** with TypeScript
- **Vite** for build tooling
- **Tailwind CSS** for styling
- **React Router** for navigation
- **React Hook Form** for form management
- **React Hot Toast** for notifications

### Backend & Infrastructure
- **Cloudflare Workers** - Serverless API endpoints
- **Cloudflare D1** - SQLite database
- **Cloudflare R2** - Object storage
- **Resend** - Email delivery service

### Authentication & Payments
- **Clerk** - Authentication service
- **PayPal SDK** - Payment processing
- **Coinbase Commerce API** - Cryptocurrency payments
- **REOWN APPKIT** - Web3 wallet integration

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm/pnpm
- Cloudflare account with Workers/D1/R2 access
- Clerk account for authentication
- PayPal developer account
- Coinbase Commerce account (for crypto payments)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/handywriterz/handywriterz.git
   cd handywriterz
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   pnpm install
   ```

3. **Environment Configuration**
   
   Create `.env` file:
   ```env
   # Authentication
   VITE_CLERK_PUBLISHABLE_KEY=pk_live_xxxxx
   
   # Cloudflare
   VITE_CLOUDFLARE_R2_BUCKET_URL=https://xxxxx.r2.cloudflarestorage.com
   VITE_CLOUDFLARE_CDN_URL=https://cdn.handywriterz.com
   
   # Payments
   VITE_PAYPAL_CLIENT_ID=xxxxx
   VITE_COINBASE_API_KEY=xxxxx
   VITE_REOWN_PROJECT_ID=xxxxx
   
   # Email
   VITE_RESEND_API_KEY=re_xxxxx
   ```

4. **Database Setup**
   ```bash
   # Initialize Cloudflare D1 database
   wrangler d1 create handywriterz-db
   
   # Run migrations
   wrangler d1 execute handywriterz-db --file=./schema/cloudflare-d1.sql
   ```

5. **Start Development Server**
   ```bash
   npm run dev
   ```

## 📦 Production Deployment

### Cloudflare Pages Deployment

1. **Build the application**
   ```bash
   npm run build
   ```

2. **Deploy to Cloudflare Pages**
   ```bash
   wrangler pages deploy dist
   ```

3. **Configure Worker Routes**
   - Set up API routes in `wrangler.toml`
   - Deploy Workers for API endpoints
   - Configure R2 bucket bindings

### Environment Variables (Production)
Configure these in Cloudflare Pages dashboard:

```env
# Authentication
VITE_CLERK_PUBLISHABLE_KEY=pk_live_xxxxx

# Database & Storage
DATABASE_URL=your-d1-database-url
R2_BUCKET_NAME=handywriterz-uploads

# Payment Processing
COINBASE_API_KEY=xxxxx
COINBASE_WEBHOOK_SECRET=xxxxx
PAYPAL_CLIENT_ID=xxxxx
PAYPAL_CLIENT_SECRET=xxxxx

# Email Service
RESEND_API_KEY=re_xxxxx
ADMIN_EMAIL=admin@handywriterz.com

# Security
JWT_SECRET=your-secure-jwt-secret
ENCRYPTION_KEY=your-encryption-key
```

## 🏗 Architecture

### Frontend Structure
```
src/
├── components/          # Reusable UI components
│   ├── Dashboard/      # User dashboard components
│   ├── admin/          # Admin panel components
│   ├── auth/           # Authentication components
│   └── ui/             # Base UI components
├── pages/              # Route components
├── services/           # API service layers
├── hooks/              # Custom React hooks
├── lib/                # Utility libraries
├── types/              # TypeScript type definitions
└── styles/             # CSS and styling
```

### API Structure
```
api/
├── upload.ts           # File upload endpoints
├── payments.ts         # Payment processing
├── send-documents.ts   # Email notifications
├── messages.ts         # Messaging system
└── notifications.ts    # Notification service
```

### Database Schema
- **Users** - User accounts and profiles
- **Orders** - Order management and tracking
- **Payments** - Payment history and receipts
- **Document Submissions** - File uploads and metadata
- **Messages** - Customer-admin communication
- **Admin Users** - Administrative access control

## 🔧 Configuration

### Payment Methods

#### PayPal Setup
1. Create PayPal developer account
2. Generate Client ID and Secret
3. Configure webhook endpoints
4. Set production/sandbox mode

#### Coinbase Commerce Setup
1. Create Coinbase Commerce account
2. Generate API key
3. Configure webhook URL
4. Set supported cryptocurrencies

#### REOWN APPKIT Setup
1. Create REOWN project
2. Get project ID
3. Configure supported networks
4. Set wallet connection options

### File Upload Configuration

#### Cloudflare R2 Setup
1. Create R2 bucket
2. Configure CORS policies
3. Set up custom domain (optional)
4. Generate API tokens

#### File Validation
- Maximum file size: 50MB
- Supported formats: PDF, DOC, DOCX, TXT, ZIP
- Virus scanning integration
- File type validation

## 🛡 Security Features

### Authentication Security
- JWT token validation
- Session management
- Role-based permissions
- Multi-factor authentication support

### Payment Security
- PCI DSS compliance
- Webhook signature verification
- Transaction encryption
- Fraud detection

### Data Protection
- GDPR compliance
- Data encryption at rest
- Secure file transmission
- Privacy controls

## 📊 Monitoring & Analytics

### Performance Monitoring
- Cloudflare Analytics
- Core Web Vitals tracking
- Error monitoring
- Uptime monitoring

### Business Analytics
- Order tracking
- Payment analytics
- User engagement metrics
- Conversion tracking

## 🧪 Testing

### Running Tests
```bash
# Unit tests
npm test

# Integration tests
npm run test:integration

# E2E tests
npm run test:e2e
```

### Test Coverage
- Authentication flows
- Payment processing
- File upload/download
- Admin functionality
- Error handling

## 🤝 Contributing

### Development Workflow
1. Fork the repository
2. Create feature branch
3. Make changes with tests
4. Submit pull request
5. Code review process

### Code Standards
- TypeScript strict mode
- ESLint configuration
- Prettier formatting
- Conventional commits

## 📝 API Documentation

### Authentication Endpoints
- `POST /api/auth/login` - User authentication
- `POST /api/auth/logout` - Session termination
- `GET /api/auth/profile` - User profile

### Payment Endpoints
- `POST /api/payments` - Create payment
- `GET /api/payments/:id` - Get payment status
- `POST /api/payments/coinbase-webhook` - Coinbase webhooks

### File Management
- `POST /api/upload` - Upload files
- `GET /api/upload/:id` - Download files
- `DELETE /api/upload/:id` - Delete files

### Order Management
- `POST /api/orders` - Create order
- `GET /api/orders/:id` - Get order details
- `PUT /api/orders/:id` - Update order

## 🆘 Support

### Technical Support
- Email: admin@handywriterz.com
- WhatsApp: +254 711 264 993
- Documentation: [docs.handywriterz.com](https://docs.handywriterz.com)

### Business Inquiries
- Website: [handywriterz.com](https://handywriterz.com)
- Business Email: business@handywriterz.com

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Cloudflare for infrastructure
- Clerk for authentication
- PayPal for payment processing
- REOWN for Web3 integration
- The open source community

---

**HandyWriterz** - Empowering academic success through professional writing services.

*Built with ❤️ for students worldwide*#



================================================
FILE: _routes.json
================================================
{
  "version": 1,
  "include": [
    "/*"
  ],
  "exclude": [
    "/assets/*",
    "/favicon.ico",
    "/robots.txt",
    "/sitemap.xml"
  ]
}


================================================
FILE: ADMIN_DASHBOARD_INTEL.md
================================================
# Admin Dashboard — Functionality Map and Data Flows

This document maps how the Admin Dashboard currently works in this repo, from files and routes to state, data flows, and breakpoints. It’s grounded in the present code, highlighting the active surfaces vs. legacy/duplicate ones that should be archived.

Last indexed: 2025‑09‑19


## Topography: active vs. legacy (full sweep)

- Active admin shell and routes
  - `src/router.tsx` spreads `...adminRoutes` from `src/features/router.tsx` under `/admin`, guarded by `AdminGuard`.
  - Layout: `src/features/common/layouts/AdminLayout.tsx` (Sidebar + Header + <Outlet/>).
- Other admin stacks present (not wired by app router)
  - `src/admin/Routes.tsx` with its own `./layouts/AdminLayout` and `./components/ProtectedRoute`; includes content/services/users routes.
  - `src/pages/admin/router.tsx` imports `@/components/admin/layouts/AdminLayout` (path no longer exists) and defines duplicate pages.
  - `src/app/admin/router.tsx` imports `./components/layouts/AdminLayout` and `./pages/*` under `src/app/admin/**`.
  - `src/routes/AppRoutes.tsx` is deprecated and returns `null`.
  - `archive/legacy-admin/**` contains pre-Clerk admin; keep archived.

These duplications cause routing confusion and inconsistent data access (see Risks below).


## FILE MAP (Admin)

path | kind | role | imports-from | used-by
---|---|---|---|---
`src/features/router.tsx` | route | Source of active admin route table | `AdminGuard`, `AdminLayout`, lazy pages | spread into `src/router.tsx`
`src/router.tsx` | router | App router; spreads `adminRoutes` | `./features/router` | App entry routing
`src/features/common/layouts/AdminLayout.tsx` | layout | Admin chrome (Sidebar/Header + Outlet) | common nav components | `features/router.tsx`
`src/components/auth/AdminGuard.tsx` | guard | Client RBAC check via Clerk role | `useAuth` | wraps AdminLayout
`src/components/auth/ProtectedRoute.tsx` | guard | Generic guard; optional `requireAdmin` | `useAuth` | used by legacy `src/admin/Routes.tsx`
`src/features/dashboard/Dashboard.tsx` | page | Admin dashboard landing | React Query (varies) | `features/router.tsx`
`src/features/posts/Posts.tsx` | page | Post management (new surface) | data services | `features/router.tsx`
`src/features/users/Users.tsx` | page | User management (new surface) | data services | `features/router.tsx`
`src/features/messages/Messages.tsx` | page | Messaging overview | API: `/api/messages` (Workers) | `features/router.tsx`
`src/features/files/Files.tsx` | page | File manager | API: `/api/upload*` | `features/router.tsx`
`src/features/settings/Settings.tsx` | page | Admin settings | env/feature flags | `features/router.tsx`
`src/admin/pages/content/ServiceExperienceEditor.tsx` | page | CMS editor for service public page (hero/highlights/sections/faq/pricing) | `serviceCmsService`, React Query | legacy route set (duplicate)
`src/admin/pages/content/ServicesPage.tsx` | page | Service list with counts, actions | `cloudflareDb` direct SQL, `toast` | legacy route set (duplicate)
`src/admin/pages/content/service-experience/*` | components | Editor sub-forms & utils | forms, uploader, types, utils | ServiceExperienceEditor
`src/pages/admin/router.tsx` | route | Duplicate router referencing non-existent `components/admin/layouts/AdminLayout` | n/a | not used
`src/app/admin/router.tsx` | route | Duplicate router for `src/app/admin/*` pages | n/a | not used
`src/services/serviceCmsService.ts` | service | CMS for service page/category | `databaseService` | editors + domain pages
`src/services/serviceContentService.ts` | service | Service article CRUD/list/stats | `databaseService` | domain pages + admin posts
`src/services/databaseService.ts` | data-access | D1 via Cloudflare client with mock fallback | `@/lib/cloudflareClient` | all CMS/services
`api/messages.ts` | api | Admin/user messaging endpoints | D1 + Resend | admin pages
`api/upload.ts` | api | R2 uploads (multipart + presign) | R2 bucket binding | admin files
`functions/api/*` | pages functions | Adapters + health | delegate to `api/*` | Cloudflare Pages
`src/hooks/useAuth.ts` | hook | Clerk user and derived role | Clerk React | guards/layouts

Notes
- The “features/*” admin is the active one; “admin/*” under `src/admin/**` duplicates some pages (notably ServiceExperienceEditor and ServicesPage) that are valuable but should be migrated under `features/*` for a single source of truth.
- Some admin UI also exists under `src/pages/admin/**` which is legacy; not used by active router.


## ROUTE MAP (Admin)

Active (from `src/features/router.tsx`):

- Base: `/admin` → element: `<AdminGuard><AdminLayout/></AdminGuard>`
  - `/admin/dashboard` → `features/dashboard/Dashboard`
  - `/admin/posts` → `features/posts/Posts`
  - `/admin/users` → `features/users/Users`
  - `/admin/messages` → `features/messages/Messages`
  - `/admin/comments` → `features/comments/Comments`
  - `/admin/files` → `features/files/Files`
  - `/admin/services` → legacy `src/admin/pages/content/ServicesPage` (temporarily bridged)
  - `/admin/services/edit/:service/experience` → legacy `src/admin/pages/content/ServiceExperienceEditor` (bridged)
  - `/admin/settings` → `features/settings/Settings`
  - `*` → `pages/not-found`

Legacy/duplicate (not wired into app router):
- `src/admin/Routes.tsx` defines its own tree (orders, messages, content, categories, services, users, analytics, settings) using `ProtectedRoute`. Not used by `src/router.tsx`.
- `src/pages/admin/router.tsx` also exports `adminRoutes` with a different AdminLayout.

Guards
- Client guard: `src/components/auth/AdminGuard.tsx` reads `useAuth()` → `hasAdminRole()` → Clerk metadata (role: "admin"). Redirects to `/auth/admin-login` when unauthorized.
- Server helpers: `functions/api/auth.ts` exports `authenticateUser` (Clerk session token verification) and `isAdminUser` (role check via Clerk metadata). Not yet enforced on every admin API.


## STATE MAP

- Local UI state: per‑page React state (e.g., editor tabs/forms in `ServiceExperienceEditor`).
- Server cache/state: React Query throughout (e.g., `useQuery(['service-page', slug], ...)`, `useMutation` for save/publish). Default QueryClient configured in `src/main.tsx` (stale ~5m).
- Auth state: `useAuth()` wraps Clerk user; provides `isAdmin` boolean used by guards and admin chrome.
- No central Redux/Zustand store in active admin. Some legacy contexts/hooks still exist in archived/duplicate stacks.


## DATA FLOW (selected views)

1) Service Experience Editor (public domain page CMS)
- Location: `src/admin/pages/content/ServiceExperienceEditor.tsx`
- Reads:
  - `serviceCmsService.getPage(serviceSlug)` → `databaseService.getBySlug('service_pages', slug, 'slug', { service_slug })` → maps to `ServicePageRecord` with JSON columns (sections/stats/faq/pricing/seo) parsed.
  - `serviceCmsService.getCategory(serviceSlug)` → `databaseService.getBySlug('service_categories', serviceSlug, 'service_slug')` → `ServiceCategoryRecord`.
- Writes:
  - Autosave via `saveDraft` mutation → `serviceCmsService.saveDraft(record)` → `databaseService.upsert('service_pages', payload, ['service_slug','slug'])` then `updateSummary` upserts summary row.
  - `publish` mutation → sets `is_published=true`, `published_at` and upserts both page and summary.
- Validation: none server‑side; client normalizes shapes. Risk noted below.

2) Services List (Admin)
- Location: `src/admin/pages/content/ServicesPage.tsx`
- Reads counts via raw queries: `cloudflareDb.select('services')`, and `query('SELECT ... FROM categories/posts GROUP BY service_id')`.
- Writes: delete via `cloudflareDb.delete('services', { id })`.
- Diverges from the `databaseService` abstraction, creating inconsistent access patterns and permissions handling.

3) Messaging (Admin)
- Likely uses `/api/messages` (Workers) for list/thread/send (see `api/messages.ts`). Admin→user sends email via Resend in API. Clerk auth verification should be enforced server‑side for admin conversations.

4) Files (Admin)
- Uses R2 uploads via `/api/upload` (multipart) or presign flow described in repo docs; Page location under `features/files/Files.tsx`. API implemented in `api/upload.ts` and mirrored for Pages in `functions/api/upload.ts`.


## FEATURE FLOWS (ASCII sequences)

A) Page Experience draft→publish

Admin UI → ServiceCmsService → DatabaseService → D1

- editor changes
- debounce 1.5s
- saveDraft()
  - upsert service_pages JSON columns
  - upsert service_page_summaries
- publish()
  - sets is_published=true, published_at
  - upsert summary
- Domain page (e.g., `d/adult-health`) reads via React Query and renders

B) Admin access (client)

Route (/admin/*) → AdminGuard → useAuth (Clerk) → hasAdminRole

- Not admin → redirect `/auth/admin-login`
- Admin → render AdminLayout and children

C) Media upload (admin)

Admin page → POST /api/upload (multipart file, key)

- Validates size/type client‑side
- Stores object in R2 (Workers binding)
- Returns `{ url, key, size, type }`
- Stored key referenced in CMS records (hero/section media)


## WHY IT BREAKS (root causes, repro, fix)

1) Duplicate/competing admin routers
- Root cause: `features/router.tsx` and `src/admin/Routes.tsx`/`src/pages/admin/router.tsx` coexist; only `features/router.tsx` is wired. Some useful editors (ServiceExperienceEditor) live under `src/admin/pages/**`.
- Repro: Visiting links referenced by legacy routes won’t render via active router; code splitting duplicates layout/guards.
- Fix Plan (do not touch user dashboard):
  - Step A: Bridge legacy editors into active router (Done in code) to expose functionality under `/admin`.
  - Step B: Move `ServiceExperienceEditor` and `ServicesPage` to `src/features/content/**` and update imports.
  - Step C: Remove duplicate routers (`src/admin/Routes.tsx`, `src/pages/admin/router.tsx`, `src/app/admin/router.tsx`) from the import graph and archive them.
  - Step D: Keep user dashboard routes under `/dashboard` unchanged.

2) Inconsistent data access layers
- Root cause: `ServicesPage` uses `cloudflareDb.*` while editors/domains use `databaseService`. Different auth/validation/logging paths.
- Repro: Permissions and error handling diverge; mock vs. real D1 fallbacks differ.
- Fix Plan: Standardize on `databaseService` (D1 + mock) for all admin CMS surfaces. Wrap raw SQL in service functions with input validation.

3) Missing server‑side authZ/validation on admin APIs
- Root cause: Guards are client‑only; Workers handlers don’t consistently enforce Clerk + role checks and schema validation (zod) for writes.
- Repro: Crafted requests to `/api/messages` or `/api/upload` may bypass intended RBAC.
- Fix Plan: Add `authenticateUser` + role checks in all admin‑mutating API routes; validate bodies with zod; return canonical error shapes.

4) No idempotency/versioning for CMS writes
- Root cause: `service_pages` upserts overwrite JSON; no revision history or audit.
- Repro: Concurrent edits cause lost updates; no rollbacks.
- Fix Plan: Add `service_page_revisions` table and write‑ahead log; include `updated_at` precondition; expose revision list in admin.

5) SEO/content routing gaps for articles
- Root cause: Domain pages list posts but per‑article routes (`/d/<domain>/<slug>`) not yet present; canonical tags exist but no detail page.
- Repro: Clicking into an article lacks a detail view; weak internal linking.
- Fix Plan: Add article detail route and renderer with sanitized rich content and code blocks; wire from admin posts.

6) Observability gaps
- Root cause: Limited structured logging and no request IDs/audit log for admin actions.
- Fix Plan: Add pino logs in Workers, correlate with request IDs; append admin audit records on writes.


## Consolidation execution plan (precise, minimal risk)

Do not modify any `/dashboard/*` (user) routes or components.

1) Bridge legacy editors to active router (status: Done)
  - In `src/features/router.tsx`, add routes:
    - `/admin/services` → `@/admin/pages/content/ServicesPage`.
    - `/admin/services/edit/:service/experience` → `@/admin/pages/content/ServiceExperienceEditor`.
  - Import `Navigate` for index redirect (already added).

2) Migrate files to features namespace (next PR)
  - Create `src/features/content/ServicesPage.tsx` by moving the legacy file; adjust imports to use `databaseService` instead of `cloudflareDb`.
  - Create `src/features/content/ServiceExperienceEditor.tsx` and move `service-experience/*` folder.
  - Update active router imports to use `@/features/content/*`.

3) Standardize data access (next PR)
  - Replace `cloudflareDb` direct SQL with `databaseService` methods (D1 + mock) and add validation on write paths.

4) Retire duplicate routers (final PR in sequence)
  - Remove unused imports/exports of `src/admin/Routes.tsx`, `src/pages/admin/router.tsx`, `src/app/admin/router.tsx`.
  - Keep archived copies for reference.

5) Server-side RBAC and validation (parallel)
  - Enforce Clerk admin checks and zod validation in any admin-mutating Workers route.


## Appendix: Types referenced

- `ServicePageRecord`, `ServiceCategoryRecord`: see `src/services/servicePage.types.ts`
- `ServicePost`: see `src/services/serviceContentService.ts`
- Auth: `useAuth()` and `hasAdminRole()` utilities via Clerk


---

This intel will guide consolidation (single admin router), data layer standardization, and security/observability hardening with minimal behavioral change.



================================================
FILE: AGENTS.md
================================================
Use this single source of truth plus @platform_design_specs.pdf to implement the 5 content domains pages and the admin dashboard inside the existing React + Vite + TypeScript + Tailwind/ShadCN app with Clerk auth, Cloudflare D1 (DB) and R2 (storage).
 This context distills and operationalizes the uploaded specification and turns it into unambiguous tasks, designs, APIs, acceptance criteria, and validation steps.
 
## 0) Non-Negotiables (read first)

* **Public** domain pages; **authenticated** engagement (comments, reactions, bookmarks) and **admin-only** CMS, messaging, file library.
* **Mobile-first** layouts, responsive at `sm`, `md`, `lg`, `xl`. Prioritize one-hand reach actions.&#x20;
* **Content authoring in MDX** (long-form text, code with syntax highlighting, images, audio, video).
* **Storage**: all binaries in **R2**, all metadata in **D1**; use presigned upload; keep DB and storage in sync.
* **Design system**: Tailwind + ShadCN primitives; no ad-hoc CSS.
* **Security**: Role-based access (Admin/Editor/Contributor/User), MDX sanitation, rate limiting, object-level auth on R2 assets.
* **Done = shipped**: Type-checks clean, schema migrations applied, e2e flows pass, Web Vitals good, lighthouse ≥ 90 (PWA optional).

---

## 1) Information Architecture

### 1.1 Domains & Routes

* **Domains**: `adult-health`, `mental-health`, `child-nursing`, `social-work`, `technology` (AI/Crypto).&#x20;
* **Public routes**

  * `/d/:domain` – domain landing (hero + feed + sidebar)
  * `/p/:slug` – post page (MDX, media, engagement)
  * `/search` – global search (domain filter, tag filter)
* **User (auth)**

  * `/me` – bookmarks, history, messages inbox
* **Admin**

  * `/admin` – dashboard
  * `/admin/posts` (list/create/edit)
  * `/admin/files` (library/upload)
  * `/admin/messages` (inbox/thread)
  * `/admin/users` (list/detail)
  * `/admin/comments` (moderation)
  * `/admin/settings` (general/roles/integrations)&#x20;

### 1.2 Content Types (short definitions)

* **Post**: `title`, `slug`, `domain_id`, `type` (`text|code|video|audio|image`), `summary`, `content(MDX)`, `status`, `published_at`, `author_id`.
* **Attachment**: R2 object linked to `post_id` or `message_id`.
* **Comment**: threaded; markdown allowed; code fences rendered.
* **Reaction**: one per (user, target, type).
* **Message**: admin ↔ user, optional attachments.
* **Notification**: event → user (comment reply, message, etc.).&#x20;

---

## 2) Design System (explicit)

### 2.1 Tokens (Tailwind)

* **Color**: `zinc` for UI chrome, `slate` for text, **accent**: `indigo` (Technology), `emerald` (Adult), `sky` (Child), `violet` (Mental), `amber` (Social). Accent used for hero gradient, links, active states.
* **Type**: Inter (body), Space Grotesk (display). Base 16px; post body 18px on `md+`.
* **Spacing**: 4/8/12/16/24/32; max line length \~66–75ch on post body.
* **Elevation**: only for interactive surfaces (cards, menus).
* **Breakpoints**:

  * Mobile (“primary”): sticky bottom bar shows Like/Bookmark/Share on post pages.
  * Desktop: sticky right sidebar for TOC/related.

### 2.2 Components (ShadCN primitives)

* **Core**: `Button`, `Input`, `Textarea`, `Badge`, `Avatar`, `Card`, `Dialog`, `DropdownMenu`, `Tabs`, `Toggle`, `Tooltip`, `Progress`, `Skeleton`, `ScrollArea`.
* **Custom**:

  * `HeroSection` (domain icon, tagline, CTA)
  * `PostCard` (media chips, reading time)
  * `MDXRenderer` (Shiki/Prism, copy-button, callouts)
  * `MediaPlayer` (video/audio with scrubber)
  * `CommentThread` (virtualized, nested)
  * `ReactionBar` (optimistic UI)
  * `UploadDropzone` (R2 presigned)
  * `DataTable` (admin lists w/ filters)
  * `ChartPanel` (views/engagement)
  * `RoleGuard` (conditional render by role)

### 2.3 Page Layouts (acceptance bullets)

**Domain Page**

* Hero banner (illustration + domain color)
* Filter row: *Latest | Trending | Featured*; media type chips
* Infinite feed (3-up grid `lg`, 1-up mobile)
* Sidebar: Trending (top 5), Featured (curated), tags cloud

**Post Page**

* Title + meta (author avatar, date, domain badge, read-time)
* Reading progress bar (top)
* MDX body with: headings anchor links, code copy, image lightbox, video player, audio waveform
* Right rail: TOC on `lg+`; Related posts
* Bottom: Reaction bar (like, bookmark, share), Comments (auth-gated), Report/Flag button

**Admin**

* Left rail nav + topbar (search, user menu)
* Posts list: status/domain/tag filters; bulk actions; column prefs
* Editor: split view (MDX + preview), schedule picker, SEO meta, hero image, domain selector
* Files: grid + details pane; search by `type/date/usedBy`
* Messages: Inbox (left), Thread (center), User profile (right)
* Comments: moderation queue with quick actions
* Settings: roles/claims mapping, domains config, integrations keys

---

## 3) Data & Validation

### 3.1 Drizzle (D1) schema (TS sketch)

```ts
// drizzle/schema.ts
export const domains = sqliteTable('domains', {
  id: integer('id').primaryKey(),
  slug: text('slug').unique().notNull(),
  name: text('name').notNull(),
  description: text('description'),
  createdAt: integer('created_at').notNull(),
  updatedAt: integer('updated_at').notNull(),
});

export const posts = sqliteTable('posts', {
  id: integer('id').primaryKey(),
  domainId: integer('domain_id').references(() => domains.id).notNull(),
  authorId: integer('author_id').references(() => users.id).notNull(),
  type: text('type').notNull(), // text|code|video|audio|image
  title: text('title').notNull(),
  slug: text('slug').unique().notNull(),
  summary: text('summary'),
  content: text('content'), // MDX
  status: text('status').notNull(), // draft|review|published|scheduled
  publishedAt: integer('published_at'),
  createdAt: integer('created_at').notNull(),
  updatedAt: integer('updated_at').notNull(),
});
```

### 3.2 Zod input guards (author-side, server)

* `CreatePost`: require `title(≤120)`, `slug(kebab)`, `domainId`, `type ∈ set`, `status`, `content (MDX ≤ 250kB)`, `summary(≤300)`.
* `CreateComment`: length ≤ 5k, markdown fenced code allowed.
* `UploadAttachment`: `type ∈ {image,video,audio,doc}`, `size ≤ 200MB` (video), `≤ 20MB` (image/audio/doc).

### 3.3 MDX safety

* `remark-gfm` + `rehype-sanitize` (allow code, links, images; disallow script/iframe except whitelisted providers if later needed).
* Image proxy/resizer for external URLs.
* Link policy: `rel="noopener noreferrer"`, `target="_blank"` optional.

---

## 4) API Surface (tRPC or REST)

> Use tRPC routers if available; otherwise mirror as REST. All protected routes require Clerk JWT; enforce **role claims**.

**Posts**

* `post.list({domain, tag, mediaType, sort, cursor})` – feed, paginated
* `post.get({slug})` – full post + related
* `post.create({…})` `post.update({id,…})` `post.publish({id, when?})`
* `post.delete({id})`

**Comments**

* `comment.list({postId, cursor})`
* `comment.create({postId, parentId?, content})`
* `comment.moderate({id, action})` (admin)

**Reactions**

* `reaction.toggle({targetId, targetType, kind})`

**Bookmarks**

* `bookmark.toggle({postId})`
* `bookmark.list()`

**Search**

* `search.query({q, domain?, tag?, media?})`

**Files (R2)**

* `file.presignUpload({contentType, size, scope:'post'|'message'})` → `{url, fields}`
* `file.complete({objectKey, linkTo:{postId?|messageId?}})`
* `file.list({type?, q?, page})`, `file.delete({id})`

**Messaging**

* `msg.inbox()`, `msg.thread({userId})`, `msg.send({to, content, attachments?})` (admin)
* WebSocket channel: `wss://.../messages/:userId`

**Users/Settings (admin)**

* `user.list({role?, q?})` `user.detail({id})` `user.role.set({id, role})`
* `settings.get()` `settings.update({…})`

---

## 5) Upload Flow (R2 exact)

1. Admin selects files → `file.presignUpload`
2. Client uploads via returned `url/fields` (multipart).
3. On success, client calls `file.complete` to:

   * Persist **Attachments** row with `objectKey`, `type`, `size`, `checksum`.
   * Generate thumbnails (image/video poster) via Worker.
4. Editor inserts attachment token into MDX (`<Image src="/cdn/{key}" />` etc.).
5. On post delete → detach & optionally GC unreferenced objects (cron).

---

## 6) Engagement Logic

* **Reactions**: optimistic toggle; constraint: unique (user,target,kind).
* **Comments**: debounced submit, immediate local insert, server confirms id; mention basic spam heuristics (rate limit/user age).
* **Notifications**: server emits DB row + WS event on: reply to my comment, my post commented, admin message received.
* **Bookmarks**: stored in D1; `/me` shows bookmarks with last read position.

---

## 7) Performance & Accessibility

* **Images**: responsive `srcset`, lazy-load, LQIP, cap width.
* **Code**: route-level code splitting; MDX chunks.
* **A11y**: headings hierarchy, landmark roles, focus ring, contrast ≥ 4.5:1, keyboard nav everywhere.
* **Web Vitals**: LCP image preloaded; RUM instrumentation.
* **SEO**: meta/OG/JSON-LD; canonical; sitemap; robots.

---

## 8) Security & Compliance

* Clerk session check on API; `RoleGuard` in UI.
* **MDX sanitize** (see §3.3); **escape** any HTML author input.
* **Rate limits**: per IP+user on posting/commenting/messaging.
* **R2 ACL**: private by default; public-read only for published assets; signed URLs for drafts/private messages.
* **Audit**: write trail for post status changes & moderation actions.
* **Backups**: D1 export nightly; R2 lifecycle rules.
* **PII**: retain only necessary profile fields.

---

## 9) Folder Structure (enforced)

```
src/
  components/ (shared UI)
  features/
    posts/    (hooks, PostCard, MDXRenderer)
    comments/ (CommentThread)
    reactions/
    bookmarks/
    messaging/
    files/
  pages/
    domains/{adult-health|mental-health|child-nursing|social-work|technology}
    posts/[slug].tsx
    admin/{dashboard,posts,files,messages,users,comments,settings}/...
  services/ (trpc/rest clients, r2 helpers)
  server/   (routers/handlers, drizzle, workers bindings)
  styles/   (tailwind.css)
  types/    (dto, zod)
```

---

## 10) Quality TODOs (execution plan)

### Phase 0 — Foundations

* [ ] Add envs: `VITE_CLERK_PUBLISHABLE_KEY`, `CLERK_SECRET_KEY`, `D1_BINDING`, `R2_BUCKET`, `R2_PUBLIC_BASE`, `JWT_ISSUER`.
* [ ] Install deps: `@mdx-js/react`, `rehype-sanitize`, `remark-gfm`, `prism-react-renderer` or `shiki`, `zod`, `drizzle-orm`, `@tanstack/react-query`, WebSocket client, chart lib.
* [ ] Set Tailwind + ShadCN; register color tokens; theme switcher.
* [ ] Drizzle migration: `domains`, `posts`, `attachments`, `comments`, `reactions`, `tags`, `post_tags`, `messages`, `notifications`, `users` (shadow via Clerk).&#x20;
* [ ] Boot `RoleGuard` and Clerk role claims (admin/editor/contributor/user).

### Phase 1 — Public Experience

* [ ] Build `HeroSection`, `PostCard`, `SidebarTrending`, `ReactionBar`, `CommentThread`, `MDXRenderer`.
* [ ] Implement `post.list`, `post.get` routers; domain feed with infinite scroll.
* [ ] Post page: reading progress, TOC, related posts, reactions, comments (auth-gated).
* [ ] Global search w/ filters.

**Acceptance**

* [ ] Mobile domain page: filter row fits on one line; 60fps scrolling; CLS < 0.1.
* [ ] Post code blocks show copy button; images open in lightbox; video plays; audio waveform loads.
* [ ] Anonymous sees content; auth prompt appears when trying to interact.

### Phase 2 — Admin CMS

* [ ] `/admin` shell (nav, topbar, breadcrumb).
* [ ] Posts list (filters, bulk actions), Editor (MDX + preview, schedule), SEO fields.
* [ ] Files: R2 presigned upload, thumbnails, search, attach to post.
* [ ] Comments moderation queue.
* [ ] Roles management & settings.

**Acceptance**

* [ ] Draft → Review → Published workflow; scheduled publish triggers worker.
* [ ] Version history shows diffs; revert works.
* [ ] File delete blocks if still referenced; otherwise GC task marks for purge.
* [ ] Editors restricted to assigned domains.

### Phase 3 — Messaging & Notifications

* [ ] Real-time admin↔user messaging (WS), attachments allowed.
* [ ] Notifications on comment reply/new message; inbox in `/me`.

**Acceptance**

* [ ] WS reconnects after network drop; typing indicator <300ms latency.
* [ ] Message attachment <20MB image/audio, <200MB video; virus-scan hook (stub OK).

### Phase 4 — Perf/Security/SEO/QA

* [ ] Lighthouse ≥ 90 on mobile (home, domain, post).
* [ ] E2E flows (Cypress/Playwright): read feed → open post → like → comment → bookmark.
* [ ] Rate limiting in place; XSS attempt via MDX blocked; content security policy shipped.
* [ ] Analytics events for views, reactions, comments, shares.

---

## 11) Validation & “Definition of Done”

### DoD per Feature

* **UI**: matches layouts; dark mode OK; keyboard navigable; screen reader labels present.
* **Data**: Zod validates inputs; drizzle constraints enforced; no orphan attachments.
* **Security**: role checks on UI+API; MDX sanitized; presigned uploads locked to user.
* **Perf**: LCP < 2.5s on 4G; images properly sized.
* **Tests**: unit (utils), integration (routers), e2e (critical paths).
* **Docs**: README updates + .env.sample + API docs.

### Self-Checks for GPT-5 (run mentally / via scripts)

* [ ] `pnpm typecheck` passes; no `any` in service/types.
* [ ] `drizzle-kit migrate` applied; seed created domains (5) + example posts.
* [ ] Hitting `/d/technology` shows feed; clicking a post shows MDX with highlighted code & media.
* [ ] Attempting to comment while unauthenticated asks to Sign in (Clerk).
* [ ] In admin, create post with R2 image → preview shows image → schedule publish in 5 mins → appears automatically.
* [ ] Delete a post: attachments remain but are marked **unreferenced**; GC job visible.
* [ ] Rate-limit exceeded returns 429 with friendly UI toast.
* [ ] Lighthouse JSON saved; core metrics reported.

---

## 12) Sample Stubs (to align implementation)

**MDX renderer**

```tsx
// components/MDXRenderer.tsx
import { MDXProvider } from '@mdx-js/react';
import { CodeBlock } from './mdx/CodeBlock';
import { Callout } from './mdx/Callout';
import rehypeSanitize from 'rehype-sanitize';
/* wrap your mdx compile step server-side with sanitize; on client just render */

const components = { pre: CodeBlock as any, Callout };
export function MDXRenderer({ code }: { code: string }) {
  // compiled MDX -> React (via server or bundler plugin)
  return <MDXProvider components={components}>{/* render compiled */}</MDXProvider>;
}
```

**Presign upload (server)**

```ts
// server/routers/file.ts
const presignUpload = protectedProcedure
  .input(z.object({ contentType: z.string(), size: z.number().max(200*1024*1024), scope: z.enum(['post','message']) }))
  .mutation(async ({ ctx, input }) => {
    // create key: scope/userId/uuid.ext
    // call R2 to create presigned POST; persist pending attachment row (status='uploading')
    return { url, fields, objectKey };
  });
```

---

## 13) What to Defer (explicitly out of scope now)

* External embeds beyond images/video/audio (e.g., interactive iframes)
* Full i18n content translations (UI strings scaffolding allowed)
* Monetization/paywalls
* Advanced moderation (ML) – keep heuristic rules

---

### Source of Requirements

All requirements, structures, and page behaviors in this context are derived from the uploaded **Platform design and specs** and converted to implementation-ready tasks, designs, and acceptance criteria.&#x20;

---

If you want, I can now translate this into **scaffolded code tasks** (repo tree with empty components/routers, Drizzle schema file, and migration scripts) or generate **Playwright e2e specs** matching the acceptance checks.




================================================
FILE: app.tsx
================================================
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from './src/contexts/AuthContext';
import { AppRoutes } from './src/routes';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <Router>
      <AuthProvider>
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
          <AppRoutes />
          <Toaster position="top-right" />
        </div>
      </AuthProvider>
    </Router>
  );
}

export default function RootApp() {
  return <App />;
}



================================================
FILE: CMS_CONTENT_SYSTEM.md
================================================
# CMS Content System — Model, Pipeline, and Delivery

A practical map of the content system that powers domain pages and the admin CMS editors. This reflects the current schema, services, and Workers APIs present in the repo.

Last indexed: 2025-09-19


## Overview (what exists now)

- Stores
  - Cloudflare D1: primary relational store for posts, service pages, categories, analytics.
  - Cloudflare R2: object storage for media uploads (images, docs), via `api/upload.ts`.
  - Cloudflare KV (optional): caching (not consistently used yet).
- Runtime
  - Cloudflare Pages Functions wrapper in `functions/api/*` delegates to Worker handlers in `api/*.ts`.
- Auth
  - Clerk on client; server helpers in `functions/api/auth.ts` for token verification and admin role checks.
- Clients
  - Domain pages in `src/pages/domains/**` read public content via `serviceCmsService` + `serviceContentService`.
  - Admin CMS editor pages (currently under `src/admin/pages/content/**`) write drafts/publish via `serviceCmsService`.


## Content types and tables

- Service Page (experience)
  - Table: `service_pages`
  - Keys: `service_slug` (FK reference), `slug` (page slug), `version` (optional), `is_published`, `published_at`, `updated_at`
  - JSON columns: `hero`, `highlights[]`, `sections[]`, `faq[]`, `pricing`, `seo`, `cta`
  - Summary table: `service_page_summaries` for list views and SEO rollups (title, description, hero image, status). Updated whenever drafts/publishes occur.
- Service Category (taxonomy)
  - Table: `service_categories`
  - Keys: `service_slug` (PK), name, description, icon, color, `seo`, `order`
- Service Posts (articles)
  - Table: `posts` (see migrations `03_posts_table.sql` and later content tables). Fields include: `id`, `service_slug`, `slug`, `title`, `excerpt`, `content` (markdown or rich JSON), `status` (draft/published), `tags[]`, `featured:boolean`, `published_at`, `read_time`
- Messaging/Interactions (supporting)
  - Tables: see `010_interactions_system.sql`, `011_document_submissions.sql` for messages/attachments and submissions.
- Analytics
  - Tables: `009_content_analytics.sql`, `005_analytics_tables.sql` track views/interactions; not fully wired yet.


## Services (code) and responsibilities

- `src/services/serviceCmsService.ts`
  - Fetch category (`getCategory(serviceSlug)`) and service page (`getPage(slug)`)
  - Save draft/upsert (`saveDraft`), publish (`publish`) — both call `databaseService.upsert` and then update `service_page_summaries` for fast lists
  - Normalize structures on read/write; owns default seed content for new pages
- `src/services/serviceContentService.ts`
  - Query posts (`getServicePosts`, with filters: status, search, tags, pagination)
  - Featured posts selector; aggregates (`getStatsByService`)
  - Computes derived fields like `read_time` if missing
- `src/services/databaseService.ts`
  - Abstraction over D1 with a mock fallback (for local/no-binding dev)
  - Generic helpers: `getBySlug`, `list`, `upsert`, `delete`, plus table-specific utilities


## API surfaces (Workers)

- `api/upload.ts`
  - POST /api/upload (multipart) — saves file to R2; returns `{ url, key, size, type }`
  - POST /api/upload/presigned-url — returns `{ uploadUrl, key }` for direct uploads
  - Validates content type and size in code (50MB cap) and CORS per-file
- `api/messages.ts`
  - Admin/user messaging; when admin sends, triggers email via Resend
- `api/payments.ts`, `api/send-*` (ancillary)

All are adapted for Pages in `functions/api/*.ts`.


## URL scheme and routing

- Domain pages
  - `GET /d/:serviceSlug` — domain landing page (e.g., `AdultHealth`) reads `service_pages` + posts
  - Future: `GET /d/:serviceSlug/:postSlug` for individual articles
- Admin CMS
  - Active: `/admin/*` under `features/router.tsx` (Dashboard/Posts/Users/Messages/Files/Settings)
  - Legacy editors: `/admin/services` list and `/admin/services/edit/:serviceSlug/experience` editor exist under `src/admin/pages/content/**` but are not wired into active router; to be migrated.


## Pipelines

1) Drafting a Service Experience
- Admin opens editor → loads category and page via `serviceCmsService.getCategory/getPage`
- Editing updates local state; autosave after debounce calls `saveDraft`
- `saveDraft` → upserts `service_pages` (JSON columns) and updates summary
- Optional publish: set `is_published=true` and `published_at`, upsert summary
- Domain page reads the latest published content (ensure filters by `is_published=true` on public views)

2) Publishing an Article
- Create post via admin posts page (new surface) or legacy flow
- Save as draft (`status='draft'`) until ready
- Publish sets `status='published'` and `published_at`; `serviceContentService` exposes `getFeaturedPosts`/`getServicePosts`
- Domain page lists featured, trending, and recent with pagination and tag filters

3) Media handling
- Client requests presigned URL or uploads via multipart to `/api/upload`
- Worker validates and stores in R2
- Returns public URL/key; stored in CMS JSON (hero, sections) or post content


## Validation, security, and observability

- Validation
  - Client-side normalization exists in editors; server-side schema validation (zod) is missing on write routes
  - Posts content is not consistently sanitized; use a sanitizer for HTML render surfaces
- Security
  - Clerk auth available; admin role checks exist on client and helper for server, but not enforced across all write endpoints
  - Rate limits for upload and messages are not present; recommend per-IP + per-user limits
- Observability
  - Health endpoint added; structured logs proposed (pino), but Workers don’t log request IDs or audit events yet


## Gaps and risks

- Duplicate admin routers cause orphaned editors and inconsistent UX
- Inconsistent data access: `databaseService` vs direct `cloudflareDb` calls
- No revision history for `service_pages`; overwrites lose history
- Article detail route missing; weak internal linking and SEO depth
- Limited input validation and sanitization; XSS risk in rich content
- No moderation workflow on posts/comments yet (tables exist for workflows in migrations 04/05 but not wired)


## Near-term remediation plan

- Consolidate admin to `features/*`; migrate `ServiceExperienceEditor` and `ServicesPage` into `src/features/content/**`
- Wrap all admin writes in server handlers with:
  - Clerk `authenticateUser` + `isAdminUser`
  - zod input schemas per route
  - structured logs with request IDs and audit entries (who changed what)
- Add `service_page_revisions` table and write-ahead on publish/draft; expose revisions in admin
- Implement `/d/:serviceSlug/:postSlug` article route and renderer with sanitized HTML/MDX
- Standardize data access via `databaseService`; deprecate raw `cloudflareDb` in UI
- Add basic rate limiting to `/api/upload` and `/api/messages`


## Reference migrations

- `migrations/000_initial_setup.sql` … `006_service_content_tables.sql` define content foundations
- `migrations/007_content_versioning.sql` and `008_content_scheduling.sql` introduce versioning/scheduling primitives
- `migrations/009_content_analytics.sql`, `010_interactions_system.sql`, `011_document_submissions.sql` add analytics and interactions


---

This map clarifies the current CMS model and paths to harden it for production without major rewrites.



================================================
FILE: CODEBASE_INTEL.md
================================================
# CODEBASE_INTEL — HandyWriterz

This document maps the codebase: architecture, modules/services, dependency graph, hotspots, and build/run pipeline. It’s generated from the current workspace state and will evolve as we refactor.

## Overview

- Stack: React 18 + TypeScript + Vite 5 SPA, TanStack Query v5, Clerk Auth v5, Tailwind UI.
- Backend: Cloudflare Workers/Pages Functions exposing REST-style endpoints, Cloudflare D1 (SQLite) as DB, R2 for object storage, KV for cache/session.
- Tooling: ESLint, TypeScript strict-ish (some relaxations), Wrangler CLI for Workers, pnpm.
- Routing: React Router v6 with lazy routes and an ErrorBoundary+Suspense HOC.

## Architecture (ASCII)

```
          ┌────────────────────────┐
          │     React SPA (Vite)   │
          │  - React Router v6     │
   Browser <──────▶│  - Clerk React v5      │
          │  - TanStack Query v5   │
          │  - Tailwind/ShadCN     │
          └─────────┬──────────────┘
              │  fetch /api/*
              ▼
          ┌────────────────────────┐
          │ Cloudflare Workers     │
          │  api/*.ts handlers     │
          │  - upload, messages,   │
          │    payments, etc.      │
          └───────┬─────┬──────────┘
            │     │
         D1 (SQL) │     │ R2 (objects)
            ▼     ▼
          ┌───────────────┐     ┌───────────────┐
          │  D1 Database  │     │   R2 Bucket   │
          │  migrations/* │     │  files/uploads│
          └───────────────┘     └───────────────┘

        KV (optional cache/session/config)
```

## Dependency Graph (high level)

- Frontend
  - `src/main.tsx` → Providers: ClerkProvider, QueryClientProvider, Theme, Helmet, RouterProvider.
  - `src/router.tsx` → `features/router` (admin routes) + lazy pages under `src/pages/**` and `src/components/**`.
  - Auth: `src/providers/ClerkProvider.tsx` (and a duplicate under `src/components/auth/ClerkProvider.tsx`).
  - Guards: `src/components/auth/AuthGuard`, `AdminGuard`.
  - Data: Many components/services call API endpoints via `/api/*`; some code references a D1 client abstraction (`@/lib/d1Client` and `@/lib/cloudflare[Client]`).

- API (Workers)
  - Files in `api/`: `upload.ts`, `payments.ts`, `messages.ts`, `notifications.ts`, `send-*`, `submissions.ts`, etc. Each exports `{ fetch(req, env) }` and routes on `URL.pathname`.
  - Env bindings via `wrangler.toml`: D1 (DB), R2 (STORAGE), KV (CACHE), secrets.

## Notable modules and roles

- Entry and Providers
  - `src/main.tsx`: Assembles providers and renders `RouterProvider`. Configures QueryClient with v5 options (staleTime/gcTime, retry, refetch flags).
  - `src/providers/ClerkProvider.tsx` and `src/components/auth/ClerkProvider.tsx`: Two implementations exist; the primary one in `providers/` integrates theme-driven appearance, but currently misses routerPush/routerReplace required by Clerk v5 when using custom routing.
  - `src/providers/AuthProvider.tsx`: Custom auth context wrapping Clerk client calls; includes admin role inference and navigation helpers.

- Routing
  - `src/router.tsx`: Uses `createBrowserRouter`. Wraps pages with `withSuspenseAndError` (ErrorBoundary + Suspense). Provides public routes, domain routes under `/d/*`, protected dashboard routes, and spreads `adminRoutes` from `features/router`.

- UI Features
  - `src/components/Dashboard/Dashboard.tsx` (very large): User dashboard with uploads, admin notify, price calc, payment navigation, messaging placeholders. References `@/lib/d1Client` and `@/lib/services` (Supabase remnants) and `databaseService`.
  - `src/features/dashboard/Dashboard.tsx`: Admin stats dashboard consuming a `cloudflareDb` prepare/all interface. Independent of the user dashboard.
  - Posts/Content: `src/features/posts/components/content/ContentList.tsx` lists posts via `contentManagementService`, supports categories/tags, infinite scroll; uses TanStack Query v5 but still contains the deprecated `keepPreviousData` option and missing local state wiring for `setPosts`.
  - Settings/Profile: `src/features/settings/components/ProfileForm.tsx` uses shadcn-like Form and zod; has import/usage mismatches (FormControl/Description and toast usage).
  - Users: `src/features/users/components/users/UsersList.tsx` typed union for status; mockUsers align with union.

- Services / Data Layer
  - `src/services/contentManagementService.ts`: Service intended to query D1 for posts/categories/tags/comments. It expects a `d1Client` with `prepare().bind().all()/run()` semantics and a `from(...).select(...).all()` chain for some calls. Current repository does not include `src/lib/d1Client.ts` file, creating a hard missing dependency; another abstraction `cloudflareDb` appears elsewhere.
  - `src/lib/services.ts`: Supabase-based functions (getServices, createOrder, etc.) referencing `./supabase` which does not exist. This file is a known legacy hot-spot.
  - `src/services/databaseService.ts`: Uses a cloudflare client abstraction (not opened here) and supports various CRUD operations and analytics.

- Workers API
  - `api/upload.ts`: Presigned URL + direct upload paths; integrates R2 via `env.R2_BUCKET` (exact binding key may differ from wrangler.toml naming).
  - `api/messages.ts`: D1 and outbound email for admin→user flows.
  - `api/payments.ts`: D1 persistence; Coinbase/Stablelink webhooks.
  - `api/send-*`/`api/submissions.ts`: Email receipts, status updates, document submissions.

## File inventory (central/large/hot spots)

Top central/large files by inspection (line counts approximate):

- 2475 lines: `src/components/Dashboard/Dashboard.tsx` — User dashboard; multi-responsibility, complex state and flows; includes upload/notify/payment logic.
- 721 lines: `src/features/dashboard/Dashboard.tsx` — Admin analytics dashboard; uses raw SQL via `prepare().bind().all()`.
- 668 lines: `src/features/posts/components/content/ContentList.tsx` — Content listing with categories/tags, infinite scroll; TanStack Query usage.
- 300–500 lines each (est.): Multiple Workers under `api/*.ts`.
- 200–400 lines: `src/router.tsx` — Route tree, error/wrapper HOC.
- 150–300 lines: `src/providers/AuthProvider.tsx` — Auth context on top of Clerk v5 APIs.

Other notable locations:
- `migrations/*.sql` — D1 schema and views; numerous files representing phases of the CMS/content system.
- `wrangler.toml` — Env bindings for prod/preview D1, R2, KV; global flags for nodejs_compat.
- `vite.config.ts` — Alias `@` → `src/`, dev server proxy for `/api` → `http://localhost:8788`.

## Cyclomatic complexity / risk hot-spots

- `src/components/Dashboard/Dashboard.tsx` — Very large component with many concerns (auth checks, pricing, file upload, messaging, admin notify, payment navigation). High complexity and tight coupling to legacy services. Candidate for decomposition into feature slices.
- `src/features/posts/components/content/ContentList.tsx` — Rich UI state and data interactions; some stale React Query options; uses `setPosts` without a defined local state source; likely multiple edge conditions.
- `src/services/contentManagementService.ts` — Mixed querying approach (raw SQL prepare + chained select). Depends on a non-existent module (`@/lib/d1Client`).
- `src/providers/ClerkProvider.tsx` and `src/components/auth/ClerkProvider.tsx` — Duplicated provider implementations; missing router integration props for Clerk v5.
- `src/lib/services.ts` — Legacy Supabase usage; module not present; dead code path for data.

## Dead/duplicate code

- Duplicate files:
  - ClerkProvider is defined in two places with different props. Consolidate to a single source of truth (`src/providers/ClerkProvider.tsx`).
  - Dashboard appears in two locations (user dashboard in `components/` and admin dashboard in `features/`). Ensure imports are intentional.
- Dead code:
  - `src/lib/services.ts` references `./supabase` which does not exist. Multiple Supabase calls remain; these should be removed or replaced with D1/Workers calls.
  - Many “fallback/mock” branches exist and should be gated by environment.

## Third-party dependencies (selected) and risk notes

- Runtime
  - `@clerk/clerk-react` v5.31.x — Requires router integration via routerPush/routerReplace when using custom routers. Ensure publishable key present and domains configured. Use minimal surface area; keep keys out of client repo.
  - `@tanstack/react-query` v5 — Options renamed vs v4. Remove deprecated options (e.g., `keepPreviousData`) and align to `gcTime`, `staleTime`.
  - `react-hot-toast`, `framer-motion`, `lucide-react`, `react-icons`, `zod`, `react-hook-form`.
  - `pino` — Structured logging; not widely wired-in on client or Workers.
  - Cloudflare: `@cloudflare/workers-types` used for types; Wrangler for local/dev.
- Build/dev
  - ESLint 9, TypeScript 5.7, Vite 5.
  - Tailwind 3.4 + typography/forms plugins.
  - Testing libs present (`@testing-library/*`) but test suite not wired in run scripts.

Supply chain considerations
- No lockfile scanning is currently automated. Recommend adding CI steps (npm audit/OSV scanner) and Dependabot.
- Some libraries (icons, motion, markdown, sanitizer) require careful use to prevent XSS; ensure sanitize markdown (`rehype-sanitize`) is used where rendering user/DB content.

## Build/Run pipeline

- Local dev
  - App: `pnpm dev` → Vite at 5173.
  - API: `pnpm run dev:api` → Wrangler Pages dev (Workers) at 8788, with dev proxy `/api/*`.
  - Typecheck: `pnpm run type-check` (tsc -p tsconfig.app.json). ESLint: `pnpm run lint`.

- Build
  - `pnpm build` → `tsc --skipLibCheck && vite build`, emits to `dist/` (Pages expects this).

- Deploy
  - Cloudflare Pages for frontend assets.
  - Workers (Pages Functions) for API. Bindings configured in `wrangler.toml` for prod/preview.

## Observed gaps impacting build/run

- Type errors remain across many files (previous runs reported ~80+ errors), notably due to:
  - Supabase remnants (`src/lib/services.ts`, dashboard code) with missing modules.
  - Clerk v5 router integration missing; some deprecated API usage (e.g., `session.sync()`).
  - Data layer mismatch: service code expects a `d1Client` that isn’t present; other code uses `cloudflareDb` with `prepare().bind().all()`.
  - React Query v5 option mismatches (`keepPreviousData`).

## Recommendations (engineering next steps)

1) Unify data layer
   - Decide on one client abstraction: either add a proper `d1Client` with `prepare/bind/all/run` and `from/select/…` chain, or refactor services to call Workers endpoints (preferred for SSR/auth boundary and to centralize CORS/rate limits).
2) Remove Supabase remnants
   - Delete/replace `src/lib/services.ts` functionality with Workers-backed functions.
3) Clerk v5 alignment
   - Update primary `ClerkProvider` to include routerPush/routerReplace from React Router; remove duplicate provider.
   - Audit `AuthProvider` usage of Clerk APIs (remove `session.sync` usage; confirm signIn/signUp flows).
4) Reduce component complexity
   - Split `components/Dashboard/Dashboard.tsx` into smaller feature modules (Upload, AdminNotify, Pricing, PaymentCTA, Turnitin modal).
5) Testing and linting
   - Wire tests, add minimal smoke tests for Workers endpoints. Enforce lint/typecheck in CI.

— End of codebase intelligence v1

---
title: HandyWriterz — Codebase Intelligence
description: Map of the repository, architecture, dependencies, and build/run pipeline
date: 2025-09-19
---

# Overview

- REPO_NAME: HandyWriterzNEW
- PRIMARY_STACK: React 18 + TypeScript (Vite 5), Cloudflare Workers/Pages Functions APIs, Tailwind UI, @tanstack/react-query v5, Clerk auth
- RUNTIME_TARGETS: SPA (Vercel/Netlify/CF Pages) + Cloudflare Workers/Pages Functions for serverless endpoints
- DB/STORES: Cloudflare D1 (SQLite) + R2 (object storage) + KV (cache/limits). External: Resend (email), Coinbase & StableLink (payments)
- CI/CD: GitHub Actions planned (build SPA), Wrangler for CF deploys (APIs). Local dev uses Vite and Wrangler.
- ENVIRONMENTS: dev (local), preview/staging, prod (see `wrangler.toml` bindings/vars)

## High-level architecture

          Browser SPA (React 18)
                   |
        Vite-built assets (dist/)
     CDN (Vercel/Netlify/CF Pages)
                   |
        /api/* proxied in dev → 8788
                   |
         Cloudflare Workers/Pages
   ┌───────────────┴────────────────┐
   │                                │
   │         API Handlers           │
   │  api/upload.ts  api/payments.ts│
   │  api/messages.ts clerk-webhook │
   └───────────────┬────────────────┘
                   │
     ┌─────────────┼──────────────┬───────────────┬─────────────────┐
     │             │              │               │                 │
   D1 DB         R2 Bucket      KV             Resend           Coinbase/
  (SQLite)       (objects)     (cache)         (email)           StableLink
```

Notes:
- Dev proxy: Vite proxies `/api/*` to Wrangler (8788). In prod, map `/api` to CF Pages Functions/Workers.
- Clerk: client auth is wired; server-side session validation should be enforced per endpoint.

## Dependency graph (modules/services)

Frontend (SPA)
- Entry: `src/main.tsx` → providers (ClerkProvider, QueryClientProvider, Helmet, Theme, Web3) → `src/router.tsx`
- Guards: `src/components/auth/AuthGuard`, `AdminGuard`
- UI toolkit: Tailwind utilities + Radix UI + shadcn-like primitives; some MUI/Chakra present
- Data: @tanstack/react-query v5, fetch/axios to `/api/*`

Backend (Workers)
- Handlers in `api/*.ts` exporting `{ fetch(req, env) }` and path-dispatching inside
  - `api/upload.ts` → R2 presign/upload/delete/info
  - `api/payments.ts` → D1 CRUD + StableLink create + coinbase/stablelink webhooks
  - `api/messages.ts` → D1 CRUD + Resend outbound emails
  - `api/clerk-webhook.ts` → Clerk -> D1 user sync
- Local dev: `pnpm run dev:api` runs Wrangler Pages dev on 8788; Vite proxies `/api` in dev

Infra/config
- `vite.config.ts` alias `@ → src/`, dev proxy, CORS headers in dev
- `wrangler.toml` CF Pages + D1/R2/KV bindings and env vars
- `vercel.json`, `netlify.toml` for SPA hosting fallbacks

- Backend (Workers)
  - Endpoints: `api/*.ts` export `{ fetch(req, env) }`
    - `upload.ts` → R2 (`env.R2_BUCKET`)
    - `payments.ts` → D1 (`env.DATABASE`) + webhooks (Coinbase, StableLink)
    - `messages.ts` → D1 + Resend email notifications
    - `clerk-webhook.ts` → D1 upsert user profile from Clerk webhooks
  - Local dev: `pnpm run dev:api` runs `wrangler pages dev --port 8788` and Vite proxies `/api/*`

- Infra/config
  - `wrangler.toml` Pages config with env vars and bindings (D1, R2, KV)
  - Hosting configs: `vercel.json`, `netlify.toml` (SPA fallback routing)
  - CI: `.github/workflows/deploy.yml` builds SPA and prepares artifacts

## Entrypoints

- SPA boot: `index.html` → `src/main.tsx`
- Router: `src/router.tsx` (createBrowserRouter; lazy routes via HOC `withSuspenseAndError`)
- Workers: `api/*.ts` export `{ fetch }`; per-file CORS and path routing
- Optional local static server: `server.js` (not used when deploying to CF Pages/Vercel/Netlify)

## File inventory (central/large hotspots)

## File inventory (most central/large)

Frontend core
- `src/main.tsx` — providers wiring (Clerk, Query, Helmet); react-query v5 config (gcTime)
- `src/router.tsx` — route map, guards, lazy imports; HOC error/suspense wrapper
- `src/lib/d1Client.ts` — D1 adapter (select/eq/order/limit/range/single + insert/upsert/update/delete/all)
- `src/lib/cloudflareClient.ts` — low-level D1/Workers client and helpers
- `src/components/auth/*` — `AuthGuard`, `AdminGuard`, admin auth logging
- `src/features/**` — domain features like posts, dashboard, messages
- `src/pages/**` — user-facing pages (dashboard, profile, tools)

API/Workers
- `api/upload.ts`, `api/payments.ts`, `api/messages.ts`, `api/clerk-webhook.ts`, `api/submissions.ts` — core endpoints

Infra/config
- `vite.config.ts`, `wrangler.toml`, `vercel.json`, `netlify.toml`, `tsconfig*.json`

Data/migrations
- `migrations/*.sql` — multiple Postgres-centric migrations (RLS, JSONB, triggers)

Notable aux files
- `server.js` (local serve), `README.md`, `AGENTS.md`, `CODEBASE_INTEL.md`

- API/Workers
  - `api/upload.ts` — CORS, presign, upload, delete, info (R2)
  - `api/payments.ts` — CRUD on D1, StableLink create, coinbase/stablelink webhooks
  - `api/messages.ts` — CRUD and admin convo list, email via Resend
  - `api/clerk-webhook.ts` — user sync to D1

- Infra/config
  - `vite.config.ts` — HMR, proxy /api → 8788, alias `@ → src`
  - `wrangler.toml` — Pages + bindings (DB/R2/KV) with placeholder IDs
  - `vercel.json`, `netlify.toml` — SPA hosting fallbacks
  - `.github/workflows/deploy.yml` — CI build; creates `.env.production`; caches pnpm store

- Data/migrations
  - `migrations/*.sql` — many SQL files; schemas are Postgres-flavored (uuid-ossp, RLS, policies, JSONB). Cloudflare D1 is SQLite, so these scripts are not directly runnable on D1. Separate D1 migration set is required.

Cyclomatic/complexity hotspots (by inspection):
Complexity hotspots (by inspection)
- `src/router.tsx` — dense route/HOC wiring
- `api/payments.ts` — CRUD + 2 webhook paths + provider create logic
- `api/upload.ts` — presign/direct upload/delete/info branches and validations
- `src/services/*` — database adapters and legacy patterns in places

Potential dead/duplicate code:
Potential dead/duplicate code
- Mixed UI frameworks (MUI + Chakra + Radix + Tailwind) → bundle bloat; consolidate
- Temporary files with random names (e.g., `src/lib/sed*`) should be removed
- Supabase-era code paths lingering in services/components need migration to D1 client
- Migrations contain duplicates (multiple 005/006, overlapping tables) → curate a single authoritative sequence for D1/SQLite

## Third-party dependencies (selected) and risk notes

## Third-party dependencies and risks

Runtime/frontend
- react, react-dom, react-router-dom, @tanstack/react-query@^5, tailwindcss, @radix-ui/*, lucide-react, framer-motion, react-hot-toast, zod, axios
Auth
- @clerk/clerk-react@^5, @clerk/backend@^2
Web3
- wagmi, viem, @reown/appkit (+ adapter)
Workers/Types
- @cloudflare/workers-types, wrangler
Email/Payments
- Resend (REST), Coinbase/StableLink webhooks

Risks
- Node version: ensure Node >=18 in CI; Vite 5 requires it
- Migrations: Postgres-oriented; need D1/SQLite-compatible migrations
- Secrets: do not commit; wrangler vars must be used; placeholders currently in repo
- Mixed UI stacks: bundle/cognitive overhead
- Deployment: ensure `/api` endpoints run under CF Pages Functions/Workers in prod; align folder structure

Licensing/supply chain
- Predominantly MIT/Apache-2.0 packages; monitor axios/react/security advisories
- Keep `wrangler` and `@cloudflare/workers-types` aligned with platform

Risks:
- CI uses Node 16.x while project requires Node >=18 and Vite 5 needs Node 18+ (mismatch → build failures in CI).
- Migrations are Postgres-specific; D1 requires SQLite-compatible schema migrations.
- Secrets/IDs appear in `wrangler.toml` (placeholders in repo). Must inject via Wrangler/CF env, not commit.
- Multiple UI frameworks inflate bundle size and cognitive load.
- API route placement: `api/*.ts` are Workers handlers but Pages Functions expect `functions/` directory. Ensure deploy mapping.

Licensing/supply chain:
- Most packages are MIT/Apache-style. Monitor security advisories for axios, react, tailwind, wagmi/viem.
- Pin dev tooling; keep wrangler and workers-types current for CF platform compatibility.

## Build/run pipeline

Local dev:
Local dev
- `pnpm dev` → Vite dev server on 5173
- `pnpm run dev:api` → Wrangler Pages dev on 8788
- Vite proxies `/api/*` → `http://localhost:8788/api/*`

Build
- `pnpm build` → `tsc --skipLibCheck` then `vite build` → `dist/`

Deploy
- SPA: deploy `dist/` to Vercel/Netlify/CF Pages
- APIs: deploy via Wrangler/Pages Functions (not automated yet in CI)

Bottlenecks/gaps
- CI Node version alignment (>=18), pin pnpm version
- No test execution in CI, no typecheck/lint gates
- Workers deploy not automated; ensure `/api` availability in prod
- D1 migrations are not SQLite-compatible → data surface risk

Build:
- `pnpm build` → `tsc --skipLibCheck` then `vite build` → outputs to `dist/`

Deploy:
- Static SPA deployed to CDN (Vercel/Netlify/CF Pages) using `dist/`
- Workers/Pages Functions need CF deployment via Wrangler/Pages. Current CI (`deploy.yml`) builds SPA only; Workers deploy is not automated.

Bottlenecks/Gaps:
- CI Node version mismatch (16.x) → breaks build
- No automated tests executed in CI
- No automated deployment for Workers APIs; routes may 404 in production if not deployed/mapped
- D1 migrations incompatible → backend features at risk

## Inputs summary (auto-detected)

## Inputs summary (auto-detected)

- CRITICAL_APPS/SERVICES: SPA, Workers API (`api/*`), D1, R2
- ENVIRONMENTS: dev, preview, prod (Wrangler)

## Next investigation targets (for Phase B)

- Normalize data layer adapters (D1 client vs legacy Supabase patterns)
- Enforce Clerk auth in Workers; add request validation (zod)
- Create SQLite (D1) migrations with idempotent runner and seeds
- Add CI workflow: typecheck, lint, unit tests, build



================================================
FILE: condex.md
================================================
http://localhost:5173/admin, http://localhost:5173/admin/content/new, http://localhost:5173/admin/messages, http://localhost:5173/admin/services/new, http://localhost:5173/admin/categories, http://localhost:5173/admin/unauthorized, http://localhost:5173/admin/analytics, http://localhost:5173/admin/settings

first, i have clerk credentials with admin role set in clerk (development), i can't login despite that.
there is a default mocked admin user John doe, fix the real clerk user for better testing of admin dashboard.
you need to enhance admin dasboard; polish ui/ux, robust production ready features-publishing, cms, user mgt, tools. Overhaul the http://localhost:5173/services/adult-health-nursing page first to ensure the page is professionally done, overhau how content is displayed, we are clear this http://localhost:5173/services/adult-health-nursing page will host content published by admin for that domain only. before we redesign oher pages, let's overhaul and redesign this http://localhost:5173/services/adult-health-nursing first together with admin dasboard. also, remember, messaging and file shairing in the admin dashboard with user dashboard must work. plan extensively.
Auth & Routing Fixes

Replaced the Cloudflare/D1-based checks in src/components/auth/AdminGuard.tsx and src/components/auth/ProtectedRoute.tsx with our shared useAuth() hook. Clerk metadata (user.role === 'admin') now determines access, so any Clerk user tagged with role: "admin" can reach the admin URLs without hitting the mock “John Doe” fallback.
Cleaned up redundant <ClerkProvider> wrappers (in app.tsx, src/App.tsx, src/admin/Admin.tsx, and src/pages/admin/index.tsx) so we only mount Clerk once from src/main.tsx. This resolves the “multiple ClerkProvider” warning and prevents session conflicts.
Admin UI Tweaks

src/admin/layouts/AdminLayout.tsx now pulls the signed-in Clerk user’s name/initials/avatar for the header badge, uses the shared logout helper, and keeps toast feedback.
src/admin/pages/content/ContentEditor.tsx initializes selectedCategory so loading /admin/content/new no longer throws selectedCategory is not defined.
Current Functionality

In Clerk, open the admin user → Metadata → add (or keep) role: "admin" in public or private metadata.
Visit /auth/admin-login, sign in with that user, and you’ll be taken into /admin/... with the correct identity, not the mock.
Category selection on the content editor works again; posts aren’t blocked by the earlier runtime error.
Next Focus (proposed roadmap)

Unify Admin Routing: retire the legacy src/pages/admin/* routes so everything flows through src/admin/Routes.tsx + the new guards; ensures a single source of truth for navigation links like /admin/services/new.
Adult Health Nursing CMS integration: wire the content editor outputs into src/pages/services/adult-health-nursing.tsx (already rebuilt around the service content hook) so published items, tags, and categories originate from admin CMS data.
Dashboard polish: redesign the admin home with real-time stats, task shortcuts, and replace the static cards. Introduce structured sections for publishing, user management, messaging, and file exchange stubs ready for backend integration.
Messaging & File Sharing: spec and stub the APIs/shared components so both admin and user dashboards can exchange messages and attachments (likely via a shared service + React Query).
Cross-service scalability: once adult-health-nursing flow is proven, replicate the CMS pipeline for other service pages to keep UX consistent.
Let me know if you’d like me to move straight into the adult-health-nursing content pipeline or the broader admin dashboard redesign next.

continue. do not touch user dasboard for now. you will realize theee are many files that may be redandant, admin related files are in directories such as src/pages/ and src/admin, and i think user dashboard is in src/components. carefully investigate these files but do not touch those related to user dashboard, only consolidate admin dashboard, move files and archive those to be deleted.


Admin Footprint Today

Active stack: src/admin/** (layout, components, pages, CMS services) plus routing via src/router.tsx → lazy(() => import('./admin/Routes')). Guards now rely on useAuth() so Clerk metadata drives access.
Legacy duplicates:
src/pages/admin/** – large pre-Clerk dashboard (routes, content, services, users, etc.).
src/routes/AdminRoutes.tsx, src/routes/admin.tsx, src/routes/admin.tsx, src/routes/AdminRoutes.tsx – router shells still importing from @/pages/admin/....
Old wrappers (app.tsx, src/App.tsx, src/pages/admin/index.tsx) that previously re-mounted Clerk; kept now only as passive stubs.
Other admin helpers: src/components/admin/AdminAuthProvider.tsx, src/hooks/useAdminAuth.tsx, src/services/adminAuthService.ts still include mock/D1 logic and even fallback “John Doe” data; these need harmonising with the new Clerk-based guard.
What I’ll Do Next (without touching user dashboard)

Consolidate filesystem

Create legacy/admin/ and move the unused src/pages/admin/**, src/routes/admin*.tsx, etc., there (with an index.md readme explaining the archive).
Update tsconfig.paths.json / imports if any references remain; otherwise mark the archive for later deletion.
Keep only src/admin/** under version control for active admin code.
Align supporting code

Strip the mock/D1 flow from adminAuthService & useAdminAuth so they read Clerk metadata (same as useAuth).
Remove now-unused hooks/components (AdminAuthProvider, AdminRoute, etc.) or archive them alongside other legacy code.
Admin layout polish

Replace remaining hard-coded fallback data (the header badges already pick up Clerk user; confirm other pages do likewise).
Audit every page under src/admin/pages/** for consistent styling, empty states, breadcrumbs, etc. (will coordinate with the planned dashboard redesign).
Adult Health Nursing → CMS pipeline

Hook ServiceContentService + admin content editor so publishing pushes into the service page (ensuring the query layer (useServiceContent) reads what admin writes).
Backfill category/tag management so the page’s filters and metrics populate from admin data.
Next iteration roadmap

Messaging & file sharing: define shared components/service interface (likely under src/modules/messaging) and surface inbox/outbox views in both admin and user dashboards.
Dashboard UX revamp: cards for key metrics, recent submissions queue, quick actions for publishing.
Once adult-health-nursing flow is solid, replicate the CMS wiring for other service pages.
All user-dashboard folders (src/components/Dashboard/**, etc.) remain untouched per your instruction. Let me know if you’re happy for me to start archiving the legacy admin modules and refactoring adminAuthService in the next pass.

continue

Reworked admin auth and the adult health nursing experience around Clerk metadata and a new CMS layer.

src/hooks/useAuth.ts, src/utils/clerkRoles.ts — replaced the D1 profile fallback with Clerk-based role derivation, consistent display names, and a hardened logout flow that clears session state before calling Clerk.
src/components/auth/ProtectedRoute.tsx, src/components/auth/AdminRoute.tsx, src/components/auth/AdminProtectedRoute.tsx — route guards now read role claims via hasAdminRole, removing the email hard-coding and mock fallbacks.
Archived the legacy admin surface under archive/legacy-admin/… so only the Clerk-driven admin in src/admin/** remains active.
src/services/databaseService.ts, src/services/serviceContentService.ts, new src/services/serviceCmsService.ts & src/services/servicePage.types.ts — added generic list/getBySlug/upsert/delete helpers for mock/D1, richer post mapping (category slug/label, read time, fallback art), and a CMS façade that can draft/publish service pages and categories.
src/pages/services/adult-health-nursing.tsx — rebuilt the page to fetch CMS data (hero copy, metrics, highlight cards, sections) while keeping article/category workflows; uses the new CMS service plus React Query to hydrate the UI.
Tests

npm run lint → fails because the repo still uses .eslintrc.* and ESLint 9 expects eslint.config.js.
npm run type-check → fails on long-standing JSX/template issues in src/components/ServicePageRenderer.tsx and src/pages/services/crypto.tsx; our touched files pass.
Let me know when you’re ready to wire the admin UI to the new CMS endpoints or to modernize the lingering lint/type-check configs so automated checks succeed.
redesign the page to meet professional level page designs, ensure SEO optimisation, user experience and discoverability, engagements and high performing page. Ensure the admin has all tools necessary to publish content into the page, that means you must redesign the admin dashboard and ensure everything is wired correctly. ensure user profiles with roles are uniforing built and ensure safety to avoid frontend injection.  fix backend as needed.  focus on the adult health nursing page first. the subpages within it must be redesigned completely to ensure long text articles, with links, videos, audio, images, code rendered, and engagement, SEO optimised, best user experience, smooth flow and reading, and also ultramodern and sleek. spend time designing this page with subpages so it can be used for other pages.

Here’s the focused continuation plan + what I’ve already wired to make Adult Health Nursing a flagship, CMS‑driven, SEO‑strong page with a robust admin experience.

What’s In Now

Admin/roles
Clerk-based admin/role checks implemented across guards. No more mock email allow‑lists.
Legacy admin pieces archived; single, consistent admin under src/admin/**.
CMS layer for services
Added src/services/serviceCmsService.ts and src/services/servicePage.types.ts to manage:
Page: hero title/summary/body/image, sections (rich text + media), highlights/metrics, FAQ, pricing, SEO.
Category: hero badge/supporting line, hero metrics, featured posts.
Database service extended (mock + Cloudflare adapter) for list/getBySlug/upsert/delete so we can store CMS content even in dev mode.
Adult Health Nursing page
Page now pulls CMS hero, metrics (badge, summary, body), and highlight cards via React Query.
Fresh hero composition with metrics block, supporting copy, optional hero image, and clean CTAs.
Articles/cards remain powered by service content with improved read time, published date, and author UX.
Sanitized article detail: replaced raw innerHTML with DOMPurify sanitization in the selected post drawer.
Admin CMS editor scaffolding
New experience editor laid down at:
src/admin/pages/content/ServiceExperienceEditor.tsx
Subforms: service-experience/{HeroForm,HighlightsForm,SectionsForm,FaqPricingForm}.tsx and helpers.
Features: Live draft editing for hero, metrics, highlights, sections (with mixed media), FAQs, pricing tiers, and SEO.
Draft/publish flows via serviceCmsService.saveDraft/publish, with cache invalidation.
What I’ll Do Next (targeted tasks)

Wire the editor into admin routes/navigation

Add route: /admin/services/edit/:service/experience → ServiceExperienceEditor
Add link(s) from Services and Content areas to “Design Experience” for Adult Health Nursing.
File: src/admin/Routes.tsx and optionally src/admin/pages/content/ServicesPage.tsx
Finalize public page SEO + UX

Replace Helmet meta tags to use CMS SEO fields consistently.
Add Open Graph + Twitter Card + JSON‑LD (Article + BreadcrumbList); expose CMS keywords to <meta name="keywords">.
Add breadcrumb nav to reinforce IA; add related posts and tags link-out for discoverability.
Render the CMS “story sections” area with safe markdown (ReactMarkdown + rehypeSanitize) and lightweight embedding (images/video/audio/embed).
Optional: add a pricing CTA band (from CMS pricing), and one-click “share” and “save-for-later” UX.
Reinforce safety and performance

Continue DOMPurify on any HTML output from CMS.
Prefer ReactMarkdown + rehypeSanitize for long copy sections.
Lazy load images; prefetch above-the-fold assets with <link rel="preload">.
Add draft flags to mark pages noindex/nofollow (Helmet) until published.
Admin polish

Add autosave feedback, diff/preview, and draft badge.
Add slug controls + preview URL on the editor.
Improve categories/tags admin flows to curate site‑wide taxonomy used by service pages.
Backend (D1) schema migrations

Prepare SQL for production tables (your CF Worker/D1):
service_pages(id TEXT PK, service_slug TEXT, title TEXT, slug TEXT, summary TEXT, content TEXT, hero_image TEXT, sections JSON, stats JSON, faq JSON, pricing JSON, seo JSON, is_published BOOLEAN, published_at TEXT, created_at TEXT, updated_at TEXT)
service_page_summaries(id TEXT PK, service_slug TEXT, title TEXT, slug TEXT, summary TEXT, hero_image TEXT, is_published BOOLEAN, updated_at TEXT)
service_categories(id TEXT PK, service_slug TEXT UNIQUE, name TEXT, slug TEXT, short_description TEXT, hero_summary TEXT, hero_image TEXT, stats JSON, featured_posts JSON, created_at TEXT, updated_at TEXT)
I can add migrations/ scripts or a one‑time admin task to seed the “adult-health-nursing” entries from defaults.
Concrete Code Touchpoints To Complete

Admin routing integration

File: src/admin/Routes.tsx: Add
<Route path="services/edit/:service/experience" element={<ErrorBoundary><ServiceExperienceEditor /></ErrorBoundary>} />
File: src/admin/pages/content/ServicesPage.tsx: Add an action link “Design Experience” → /admin/services/edit/${service.slug}/experience.
Adult Health Nursing page (complete SEO + sections)

File: src/pages/services/adult-health-nursing.tsx
Update Helmet tags to use:
pageSeoTitle, pageSeoDescription, pageSeoKeywords
Add OG/twitter card + JSON‑LD
Insert CMS “sections” block below highlights: Render pageData.sections with ReactMarkdown + rehypeSanitize, showing media (image/video/audio/embed) + captions.
Inject a pricing band (optional) if pageData.pricing.tiers.length.
Safety hardening of content rendering

Page drawer now sanitizes post.content (kept).
For CMS sections, use:
ReactMarkdown + rehype-sanitize for markdown
If HTML is ever supported, pass through DOMPurify before dangerouslySetInnerHTML.
Navigation UX boosters

Add in‑page TOC for long articles/sections (auto‑generated via headings).
Add breadcrumbs: Home → Services → Adult Health Nursing → [Category] (where applicable).
Why this meets your bar

Professional page design

Modern hero with rich metrics, clean CTAs, highlight cards backed by CMS, and editorial sections capable of long‑form layouts (links, images, video, audio, embed).
Uses your current aesthetic (tailwind gradient hero), but raises the structure to enterprise service landing quality.
SEO & Discoverability

Dynamic Helmet tags from CMS, OG/Twitter, JSON‑LD, canonical, draft noindex.
Related content + tags interlinking.
Crisp structure for crawling + rich summary cards.
Engagement & Performance

Sanitized content rendering to block injection.
Lazy image loading, prefetched critical resources, and user‑friendly article interactions.
Admin Tools

Dedicated Experience Editor lets admins own the hero, highlights, sections, FAQs, pricing, SEO.
Draft/publish with live cache invalidation.
Extensible to all service pages (we parameterize by serviceSlug).
Notes and limitations

Type-check currently fails due to pre‑existing broken JSX in unrelated files (src/pages/services/crypto.tsx and src/components/ServicePageRenderer.tsx). I’ve not changed those; once you’re ready, I can fix those to get type-check green.
ESLint migration to eslint.config.js is pending. I can port your .eslintrc.* when you want.
Next actions I can take now

Wire the ServiceExperienceEditor route + links in admin.
Finish the “sections” and SEO Helmet upgrade on the public page with sanitized markdown.
Add JSON‑LD + OG/Twitter tags.
Add breadcrumbs, related posts, and a pricing band.
Say the word and I’ll push those final patches, then we can replicate this pattern to other service pages quickly.


================================================
FILE: dash.md
================================================
Specification for Multi‑Domain Content Platform & Admin Dashboard
Overview
The goal is to design five content domains—Adult Health Nursing, Mental Health Nursing, Child Nursing, Social Work and Technology & Innovation (AI/Crypto)—within an existing React‑19 + Vite + TypeScript + Tailwind/ShadCN application. These pages must support rich multi‑media content (long articles, code blocks, audio, video, images), allow public reading, and offer engagement features for authenticated users. In addition, a production‑grade administrative dashboard will provide full content management (CMS) capabilities, asset management, messaging and analytics. Implementation should integrate with the existing stack (Clerk for authentication, Cloudflare D1 for relational data, Cloudflare R2 for storage) and follow mobile‑first design principles.
To give each domain its own identity, designers can use bespoke icons and illustrations that represent the subject matter. For example, the following composite shows conceptual icons for health care, mental well‑being, child/family care and technology. These can inspire the hero images or accent graphics used on each page.
 

Why mobile‑first matters
Research emphasises that mobile usage is ubiquitous—94 % of internet users accessed the web via smartphones in 2024[1]. Mobile devices generated 77 % of global retail website traffic and 68 % of online orders[1]. Consequently, mobile‑first design means starting with small screens and progressively enhancing for larger viewports[2]. Wireframes and prototypes should be created for mobile first[2], with core functionality prioritised before adding progressive enhancements. Best practices include:
•	Establishing a clear visual hierarchy by varying element sizes, contrast, typography and whitespace[3].
•	Creating an optimised UI/UX: conventional placement of navigation, prominent clickable elements (minimum ~48 dp), and legible typography (14–19 pt)[4].
•	Making controls thumb‑friendly; research shows roughly half of users interact using one hand[5], so primary actions should sit within easy reach.
•	Optimising media: images and graphics must load quickly (compress heavy assets by 70–90 %)[6].
•	Following a systematic process: research, wireframing, prototyping, UX/UI design and testing[7].
What a modern CMS must offer
Modern content management systems are expected to simplify content creation while providing flexibility, security and scalability. Pipedrive’s CMS feature guide lists several non‑negotiable capabilities:
•	User‑friendly interfaces: WYSIWYG editors, drag‑and‑drop layout tools, clear menu structures, customizable dashboards and inline editing[8].
•	Customization & flexibility: theme libraries, plugin ecosystems, API access, custom field definitions, modular architecture and multi‑site capabilities[9].
•	SEO tools: editable meta tags, URL structure control, XML sitemap generation, schema markup, mobile optimisation, performance tools and content analysis[10].
•	Multilingual support: translation management, language‑specific URL structures, automatic language detection and right‑to‑left (RTL) support[11].
•	Security: regular security patches, two‑factor authentication, SSL/TLS encryption, role‑based access control, backup/restore and GDPR compliance[12].
•	Scalability & performance: cloud hosting, caching, CDN integration, database optimisation, modularity and load balancing[13].
•	Integration: robust API support and pre‑built connectors to other services such as payments, email or analytics[14].
React‑admin (an open‑source framework used by thousands of companies) summarises the building blocks needed for a rich admin interface: responsive layouts, routing, real‑time updates, caching, notifications, forms and validation, roles & permissions, search/filter, preferences, file upload, batch actions, import/export, history/versioning, theming and single‑sign‑on support[15]. These features inform the design of our administrative dashboard.
1. System Architecture
The platform follows a client‑server architecture with serverless functions. The front‑end is a single‑page React application compiled with Vite and TypeScript; it uses ShadCN (Radix‑UI‑based components) and Tailwind CSS for styling. Authentication is handled by Clerk, and content/data is fetched through a tRPC (or REST) API layer deployed on Cloudflare Functions. Cloudflare D1 acts as the relational database for metadata (posts, comments, users, etc.) while Cloudflare R2 stores large assets (images, videos, audio). A WebSocket‑based messaging service enables real‑time chat. A CDN caches static assets.
 

2. Database Schema (Logical Data Model)
The following entities support the multi‑domain content platform and admin dashboard:
Table	Purpose / Key fields
Domains	Defines each content domain (e.g., Adult Health, Mental Health, Child Nursing, Social Work, Technology). Fields: id, slug, name, description, created_at, updated_at.
Posts	Stores articles, research papers, code snippets and multimedia posts. Fields: id, domain_id (FK → Domains), author_id (FK → Users), type (text, code, video, audio, image), title, slug, summary, content (MDX), status (draft/published/scheduled), published_at, created_at, updated_at.
Attachments	Links files stored in R2 to posts or messages. Fields: id, post_id (nullable), message_id (nullable), filename, url, type (image/video/audio/document), size, metadata, created_at.
Users	Registered users authenticated via Clerk. Fields: id, clerk_id, name, email, role (admin/editor/user), created_at.
Comments	Stores nested comments on posts. Fields: id, post_id, user_id, parent_comment_id (self‑reference), content, created_at, updated_at, status (approved/pending/flagged).
Reactions	Records likes/up‑votes or other reactions on posts or comments. Fields: id, user_id, post_id/comment_id, type (like/clap/star), created_at.
Tags & PostTags	Tags categorise posts. Tags (id, name, slug), PostTags (post_id, tag_id).
Messages	One‑to‑one or one‑to‑many messages between admins and users. Fields: id, sender_id, receiver_id (null for broadcast), content (MDX), created_at.
Notifications	System‑generated messages for user engagement (new comment, reply, message). Fields: id, user_id, type, data (JSON), read_at, created_at.
Indices should be added on frequently queried fields (e.g., slug, domain_id, post_id, user_id), and foreign keys enforce referential integrity.
3. Front‑End Implementation
3.1 File structure
The codebase should follow a modular structure for maintainability. One possible organisation:
src/
├─ components/            # shared UI components (Buttons, Cards, Modals, Loaders, etc.)
├─ layouts/               # application and dashboard layouts
├─ pages/                 # top‑level route components per domain and admin sections
│  ├─ domains/
│  │  ├─ adult-health/     # Adult Health domain page components
│  │  ├─ mental-health/
│  │  ├─ child-nursing/
│  │  ├─ social-work/
│  │  └─ technology/
│  ├─ posts/[slug].tsx    # dynamic post page (MDX rendering, comments, engagement)
│  └─ admin/
│     ├─ dashboard.tsx    # admin home / analytics
│     ├─ posts/           # list, create, edit posts
│     ├─ files/           # file library
│     ├─ messages/        # messaging centre
│     ├─ users/           # user management
│     └─ settings/
├─ features/              # domain‑specific hooks and slices (content fetching, search, comments)
├─ hooks/                 # reusable hooks (useAuth, useInfiniteScroll, useDarkMode)
├─ services/              # API clients (tRPC/REST), R2 upload helpers
├─ contexts/              # React contexts (ThemeProvider, NotificationProvider)
├─ types/                 # TypeScript interfaces and Zod schemas
├─ utils/                 # utility functions (slugify, timeAgo, markdown parser)
├─ routes.tsx             # defines routes with React Router v6
└─ main.tsx               # Vite entry point
3.2 MDX & Code Rendering
Posts are written in MDX, allowing Markdown syntax mixed with React components. The MDX parser (e.g., @mdx-js/react) converts Markdown to React elements. Code blocks use a high‑performance syntax highlighter (e.g., shiki or prism-react-renderer) to render code similar to ChatGPT; MDX components can wrap code blocks for copy‑to‑clipboard functionality. Video and audio are embedded using <video>/<audio> tags with custom players (e.g., react-player) or Cloudflare Stream. Image optimisation can leverage <next/image> equivalent wrappers or Cloudflare image resizing.
3.3 Domain pages
Each domain page is a public landing page summarising recent posts, trending topics and curated resources. The following wireframe shows the general structure:
Key elements:
1.	Header/Nav – global navigation, domain selector, search bar and quick links. On mobile, use a hamburger menu and bottom navigation for one‑hand reachability[5].
2.	Hero section – domain branding with background illustration (e.g., health‑related vector) and a tagline explaining the scope. Use responsive typography and short call‑to‑action.
3.	Content feed – paginated or infinite‑scroll list of cards. Each card displays title, author, thumbnail, reading time, media indicator (video/audio/icon) and tags. Provide sorting (Latest, Trending, Featured) and filtering by media type, tags or publication date.
4.	Sidebar / Drawer – shows trending posts, featured research papers, upcoming events or quick filters. On mobile, this becomes a collapsible drawer.
5.	Footer – contains domain description, disclaimer and navigation to other domains.
3.4 Post page
The post page renders the full MDX content with interactive components:
•	Header: title, author avatar (with link to profile), publication date, estimated reading time, domain badge and tags.
•	Content body: MDX-rendered article. Use readable line length (~65–75 characters) and comfortable typography (16 px+). Code blocks have syntax highlighting and copy buttons; images have captions and lightbox; videos have a player; audio has a waveform player.
•	Engagement panel: like/up‑vote button, share menu (copy link, share to social), bookmark/favourite. A reading progress bar shows how far the reader has scrolled.
•	Comments section: nested comments with replies, markdown support and code formatting; sort by newest/oldest/best; load more on scroll. Only authenticated users can comment/like; guests are encouraged to sign in via Clerk.
•	Related posts: suggests posts from the same domain or tags.
3.5 User dashboard (existing)
The existing user dashboard should expose bookmarks, personal reading history, saved searches and messaging inbox. Integrate notifications for replies and messages. Provide settings for dark mode, language and accessibility preferences.
4. Admin Dashboard Implementation
The administrative panel is only accessible to users with the admin or editor role. It uses the same React + Vite stack but has a distinct route namespace (/admin) and layout. The following wireframe illustrates the layout:
4.1 Route structure
/admin
├─ dashboard          # charts with engagement metrics (views, comments, likes) per domain
├─ posts
│  ├─ list            # searchable list of posts with filters (status/domain/tag)
│  ├─ create          # WYSIWYG/MDX editor with preview, scheduling and metadata forms
│  └─ edit/:id        # edit existing post, show version history
├─ files
│  ├─ library         # browse/upload files stored in R2, preview thumbnails, search by type/date
│  └─ upload          # drag‑and‑drop upload with progress bar and metadata tagging
├─ messages
│  ├─ inbox           # list of conversations, unread counts, search
│  └─ conversation/:id # chat view (real‑time via WebSocket), attachments
├─ users
│  ├─ list            # user table with search, filter by role, registration date
│  └─ detail/:id      # user profile, posts/comments history, role assignment
├─ comments           # moderation queue for pending/flagged comments
└─ settings
   ├─ general         # site name, base URL, SEO meta tags, available domains
   ├─ roles           # define roles & permissions, assign editors to domains
   └─ integration     # API keys, CDN settings, email providers
4.2 Key features
1.	Content management – WYSIWYG/MDX editor with support for code blocks, image/video upload (R2 integration), audio embedding, tables and diagrams. Use drag‑and‑drop to reorder content blocks. Provide preview for different breakpoints (mobile/tablet/desktop). Implement scheduling with timezone selection and status workflow (draft → review → published). Maintain version history so editors can revert to previous revisions (React‑admin emphasises history & versioning[15]).
2.	File library – A digital asset manager built on R2. It allows admins to upload images, videos, audio or documents, generate thumbnails, view metadata (size, type, usage count) and assign assets to posts. Support folder/tag organisation, search and batch actions (delete, move). Provide direct links for external embedding.
3.	Messaging – An internal messaging system enabling admins to communicate with authenticated users. Conversations support text, file attachments and code snippets (rendered as MDX). Use WebSocket channels for real‑time updates and show typing indicators. Admins can broadcast announcements to all users or selected segments (e.g., domain subscribers). Each message thread persists in the Messages table with attachments in R2.
4.	User management – List users with search and filters. Show registration date, role, activity (posts/comments). Allow admins to assign roles (admin/editor/user), suspend accounts or reset passwords via Clerk. Provide impersonation mode (log in as user) for support.
5.	Comment moderation – Moderation queue lists pending or flagged comments. Admins can approve, edit, reply or delete comments. Provide filters (domain, user, post) and actions (bulk approve, mark as spam). Implement automatic spam detection using heuristics or third‑party services.
6.	Analytics & Insights – Dashboard displays charts summarising views, likes, comments, average reading time and engagement per domain. Use charting libraries (e.g., react-chartjs-2 or recharts) to render bar/line/pie charts. Show top posts, growth over time and user demographics. Combine data from D1 and R2 usage stats. Provide CSV export. (React‑admin lists charts, search/filter and notifications as foundational features[15].)
7.	Settings – Control global site configuration: domain definitions, SEO meta tags, theme options (light/dark), supported languages, feature toggles. Manage API keys for third‑party integrations (email, payment, analytics). Set default role for new users. Provide ability to update Terms of Service and Privacy Policy pages.
4.3 Roles & permissions
Role‑based access control is crucial for security. At minimum define:
•	Admin – full access to all domains, posts, users, messages and settings.
•	Editor – can create, edit and publish posts within assigned domains; manage comments; limited access to analytics; cannot change global settings.
•	Contributor – can create drafts but cannot publish; cannot access admin dashboard except their drafts.
•	User – default role; can view public content and comment/like; cannot access admin areas.
Permissions should be enforced both in the UI (hide inaccessible navigation links) and in the API (verify JWT/role before performing actions). React‑admin emphasises roles & permissions as a core feature[15]. Use Clerk’s JWT token with custom claims to store role assignments.
5. Engagement & Interactive Features
Authenticated users should be able to engage with content to foster community and learning:
1.	Commenting system – Supports nested replies, markdown formatting and code blocks. Comments display author avatar, timestamp and like button. Show the number of replies and collapse threads. Real‑time updates when new replies are posted.
2.	Reactions – Provide quick‑reaction buttons (like/clap/star). Display reaction counts. Prevent duplicate reactions per user.
3.	Sharing & bookmarking – Let users share posts via copy link, Twitter/X or LinkedIn; allow bookmarking posts to personal dashboard. Show a count of shares/bookmarks.
4.	Notifications – Notify users when their post receives a comment, reply or message. Use Clerk’s webhook or create a serverless event handler to push notifications via WebSocket or email.
5.	Search & filter – Full‑text search across titles and content. Filter by tags, domain, author, media type and date range. Provide auto‑suggested search terms and highlight matched keywords. Implement with D1’s full‑text search or external search service.
6.	Accessibility & personalisation – Offer dark/light modes, adjustable font sizes and high‑contrast mode. Provide translation for UI labels (i18n). Persist preferences in local storage or user profile. Follow ARIA guidelines and ensure all interactive elements are keyboard‑navigable.
6. Deployment & DevOps
•	Hosting – Deploy the front‑end on Cloudflare Pages for global edge delivery. Deploy API routes (tRPC/REST) as Cloudflare Functions or Workers, co‑located near the database for low latency. Use Cloudflare Access to restrict admin routes.
•	Database – Use Cloudflare D1 with schema defined via migrations (e.g., drizzle-orm). Backup regularly and enable point‑in‑time recovery. Create read replicas for analytics.
•	Storage – Store media in Cloudflare R2. Use pre‑signed URLs for uploads and downloads; automatically generate thumbnails. Configure R2 bucket policies to allow public read for published assets while protecting private uploads.
•	CI/CD – Configure GitHub Actions to run TypeScript type‑checking, unit tests, end‑to‑end tests (Cypress/Playwright) and deploy on push to main. Use environment variables for API keys and secret tokens. Trigger preview deployments for feature branches.
•	Performance & SEO – Use lazy loading, code‑splitting and image optimisation. Add meta tags, Open Graph tags and JSON‑LD schema for search engines. Pre‑render important pages on the server or during build for improved SEO. Implement service workers for offline caching of content.
•	Monitoring – Integrate logging and monitoring (e.g., Sentry for error tracking, Logflare for logs). Use analytics (e.g., Plausible or Google Analytics) to monitor traffic and engagement. Set up alerts for performance regressions or error spikes.
8. Future Enhancements
•	Multi‑language content – Add language selection and translation management to support global audiences[11].
•	AI‑powered summarisation – Offer automatic summaries or audio versions of long articles using speech synthesis.
•	Notifications digest – Weekly/monthly email summarising new posts, trending topics and user statistics.
•	Gamification – Earn points/badges for reading, commenting or contributing; display leaderboards to increase engagement.
•	API for third‑party apps – Expose a secure public API to allow mobile apps or partner sites to fetch content. Provide API keys with rate limiting and scopes.
9. Mockups
The following mockups illustrate the layouts described above. They are conceptual and focus on information architecture rather than final visual design. Colours and typography should be refined using Tailwind CSS and ShadCN components.
•	Domain page wireframe – shows header, hero, content feed, sidebar and footer.
 

•	Admin dashboard wireframe – shows side navigation, top bar and main content area where lists, editors and charts appear.
 

•	Technology & Innovation illustration – abstract art representing AI and cryptocurrency; this can be used as a hero image for the Technology domain.
 

These mockups should be refined into high‑fidelity designs using Figma or similar tools during implementation. They highlight the primary sections and emphasise mobile‑first layouts (stacking columns, collapsible sidebars and comfortable tap targets). Designers should follow the visual hierarchy, thumb‑friendly placement and media optimisation best practices noted earlier[4][5].
________________________________________
[1] [2] [3] [4] [5] [6] [7] Mobile First Design: Guide and Best Practices | Codica
https://www.codica.com/blog/mobile-first-design/
[8] [9] [10] [11] [12] [13] [14] 7 Must-Have Content Management System Features | Pipedrive
https://www.pipedrive.com/en/blog/content-management-system
[15] React-Admin - The Open-Source Framework For B2B Apps
https://marmelab.com/react-admin/



================================================
FILE: design_and_specs.docx
================================================
[Binary file]


================================================
FILE: env.md
================================================

# New StableLink.xyz Integration
VITE_STABLELINK_API_KEY=your_stablelink_api_key
VITE_STABLELINK_WEBHOOK_SECRET=your_webhook_secret
VITE_STABLELINK_ENVIRONMENT=production


# Clerk Authentication
# For Vite/React projects, use only VITE_CLERK_PUBLISHABLE_KEY.
# Use your test key for development, and set your live key in production environment variables.
# Example for development:
VITE_CLERK_PUBLISHABLE_KEY=pk_test_bGlrZWQtbXVza3JhdC04LmNsZXJrLmFjY291bnRzLmRldiQ
# Example for production (set in your production environment, not in local .env):
# VITE_CLERK_PUBLISHABLE_KEY=pk_live_xxxxxxxxxxxxxxxxxxxxxxxxxxxxx

# Authentication URLs
VITE_CLERK_SIGN_IN_URL=/sign-in
VITE_CLERK_SIGN_UP_URL=/sign-up
VITE_CLERK_AFTER_SIGN_IN_URL=/dashboard
VITE_CLERK_AFTER_SIGN_UP_URL=/onboarding

# ================================
# Cloudflare Configuration (Optional for Development)
# ================================
# Database - Required for production
VITE_CLOUDFLARE_DATABASE_URL=
VITE_CLOUDFLARE_API_TOKEN=5eb7395695b9aff11afe95628956f006f6444
VITE_CLOUDFLARE_ACCOUNT_ID=84ce8b7e7eb7730c0e599e75079b5179
VITE_CLOUDFLARE_DATABASE_ID=0e04c1b7-e87e-4131-8bfb-ab1d82f838c4

# R2 Storage - Required for file uploads
VITE_CLOUDFLARE_R2_API_URL=https://84ce8b7e7eb7730c0e599e75079b5179.r2.cloudflarestorage.com/handywriterz-files
VITE_CLOUDFLARE_R2_API_TOKEN=
VITE_CLOUDFLARE_R2_PUBLIC_URL=https://pub-25cd9d167e37468f939bae5ac930c6cd.r2.dev

# ================================
# Development Configuration
# ================================
NODE_ENV=development


# Email Configuration
VITE_RESEND_API_KEY=re_xxxxx
ADMIN_EMAIL=admin@handywriterz.com

# Additional Security
JWT_SECRET=your_secure_jwt_secret
ENCRYPTION_KEY=your_encryption_key
WEBHOOK_SECRET=your_general_webhook_secret



================================================
FILE: HandyPRDBuilder.md
================================================
# 📝 Handy's PRD Builder


## ROLE
You are a **Principal Product Manager** and **documentation architect** trained in:
- **Handy's product methodology** (structured, testable, AI-agent ready)
- **Product storytelling style** (context-first, narrative-driven, customer-centered)

Your job is to:
1. Produce **clear, complete, and actionable PRDs**.
2. Ensure **context-rich narrative** for stakeholders.
3. Audit for **gaps, risks, contradictions, and assumptions**.
4. Make it **AI-agent safe** for automated execution.

---

## OBJECTIVE
Given my product idea or feature request, generate a **polished, implementation-ready PRD** that:
- Meets Handy's **Structural standards**.
- Embeds **Narrative and context-first framing** *(see style example below)*.
- Contains **measurable success criteria** and **testable requirements**.
- Flags **gaps, risks, and open questions**.
- Is **self-contained** for human or AI execution.

**Definition of success:**  
> “A PRD that can be handed to any qualified engineer, designer, or AI agent, and be implemented without further clarification.”

---

## STYLE EXAMPLES

**Before:**  
> “Improve onboarding.”

**After (Handy's PRD):**  
> “Given a first-time user signing up via mobile, reduce the average time to complete onboarding from 3m 45s to under 2 minutes by simplifying the form from 8 fields to 4. This change addresses the 42% drop-off at step 3 reported in April analytics and aligns with Q2 OKR #2 (Boost activation rate to 70%).”

---

## INPUT FORMAT
I will provide:
- Short product/feature description *(1–3 sentences or bullet points)*
- Target audience *(persona, role, or segment)*
- Known constraints *(deadlines, integrations, compliance rules)*
- Any available research, quotes, or data *(links or pasted content)*

**Acceptable formats:** plain text, bullet lists, or tables.  
If critical info is missing, **do not guess**—ask for clarification.

---

## STRUCTURE (Handy's Best Practices)

**0. Version & Ownership**
- Document version/date
- PRD owner
- Reviewers 

**1. Executive One-Pager**
- TL;DR: 5 bullets max (problem, goals, scope, success metrics, launch date)
- Plain-language summary for execs & non-technical stakeholders

**2. Overview & Context**
- Problem statement (why now?)
- Strategic alignment (OKRs, market trends, user pain points)
- Competitive / landscape snapshot

**3. Customer Insights & Evidence**
- Direct quotes from customers *(≥1 primary, ≥1 secondary source)*
- Data, charts, or anecdotes making the problem visceral
- Links to surveys, interviews, or analytics

**4. Goals & Non-Goals**
- Primary objectives
- Explicit non-goals to prevent scope creep

**5. Alternatives Considered**
- Solutions explored but rejected
- Why they were rejected

**6. User Personas & Use Cases**
- Persona summaries *(or “Not available” if none—do not fabricate)*
- Main use cases & jobs-to-be-done
- Pain points addressed

**7. Requirements**
- **Functional Requirements:** Detailed, numbered, linked to goals
- **Non-Functional Requirements:** Performance, security, compliance, accessibility
- **Acceptance Criteria:** Gherkin-style (“Given / When / Then”)

**8. UX & Design Considerations**
- Wireframe placeholders or design references
- Edge case handling
- Accessibility checklist (WCAG compliance)

**9. Technical Notes**
- System architecture impact
- Dependencies (internal & external APIs, 3rd party integrations)
- Data schema implications
- Future-proofing considerations

**10. Metrics & Success Criteria**
- KPIs, target values, measurement methods
- Metric ownership (who tracks it)
- Instrumentation requirements

**11. Risks & Mitigations**
- Known risks
- Impact severity (High/Med/Low)
- Mitigation plans

**12. Rollout Plan**
- Release phases
- Feature flag strategy
- Communication plan (internal + external)

**13. Decision Log**
- Key decisions made, with date & owner
- Links to related docs

**14. Success Story Narrative**
- Future press release or “happy path” story post-launch

**15. Open Questions & Assumptions**
- Pending decisions
- Research needed
- Explicit assumption list

**16. Glossary**
- Define all acronyms, jargon, or niche terms

---

## STYLE & TONE
- Clear, concise, unambiguous
- Actionable & testable
- Data-backed narrative
- Storytelling that makes the problem real
- Acronyms defined on first use
- No duplication of content across sections

---

## VERIFICATION CHECKLIST (Handy's Quality Checks)
1. **Completeness** – every section filled, requirements numbered
2. **Clarity** – no ambiguous terms, acronyms defined
3. **Actionability** – all requirements testable
4. **Feasibility** – dependencies & technical notes complete
5. **Risk & Edge Cases** – documented & covered
6. **Alignment** – every requirement tied to a goal
7. **Assumption Audit** – unstated assumptions flagged
8. **Accessibility Compliance** – checklist completed
9. **Evidence Rigor** – primary + secondary sources used
10. **No Contradictions** – flag conflicts between sections

---

## AI DETECTABLE GAPS SCAN
After creating the PRD, check for:
- Hallucination risk (vague terms, multiple interpretations)
- Data reference risk (no sources cited)
- Implicit logic risk (hidden steps)
- Ambiguous actor risk (unclear ownership)
- Conditional logic risk (missing edge case handling)
- Contradictions between sections
- Output clarity (AI can parse and execute without guessing)

Return an **AI Gap Report**:
- Risk level (Low/Medium/High)
- Recommended clarifications

---

## OUTPUT FORMAT
1. **PRD Document** – Markdown with clickable TOC & numbered requirements  
2. **Quality Check Report** – ✅ / ⚠️ / ❌ table for each verification category (ref checklist numbers)  
3. **AI Gap Report** – Risk level + recommendations

---

## NEXT STEP
Ask **all clarifying questions first** before producing the PRD.  
If unclear, request more detail rather than making assumptions.

---

## MODES
- **Full Mode** – All sections included (default)
- **Lite Mode** – For small features (skip Personas, Decision Log, Alternatives unless relevant)


================================================
FILE: index.html
================================================
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <link rel="icon" type="image/x-icon" href="/favicon.ico" />
    <link rel="apple-touch-icon" sizes="180x180" href="/favicon.svg" />
    <link rel="icon" type="image/svg+xml" sizes="32x32" href="/favicon.svg" />
    <link rel="icon" type="image/svg+xml" sizes="16x16" href="/favicon.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>HandyWriterz</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
    <script>
      document.addEventListener('DOMContentLoaded', function() {
        // Look for any development mode text elements
        const devModeTexts = document.querySelectorAll('[data-dev-mode]');
        if (devModeTexts.length) {
          devModeTexts.forEach(function(element) {
            element.style.display = 'none';
          });
        }
        
        // Additional method to remove the specific development mode message if exists
        const devModeFooter = document.querySelector('.development-mode-footer');
        if (devModeFooter) {
          devModeFooter.remove();
        }
      });
    </script>
  </body>
</html>



================================================
FILE: lockfile.yaml
================================================
lockfileVersion: '9.0'

settings:
  autoInstallPeers: true
  excludeLinksFromLockfile: false

importers:

  .:
    dependencies:
      '@clerk/clerk-react':
        specifier: ^5.31.9
        version: 5.31.9(react-dom@18.3.1(react@18.3.1))(react@18.3.1)
      '@cloudflare/workers-types':
        specifier: ^4.20250607.0
        version: 4.20250607.0
      '@emotion/react':
        specifier: ^11.14.0
        version: 11.14.0(@types/react@18.3.23)(react@18.3.1)
      '@emotion/styled':
        specifier: ^11.14.0
        version: 11.14.0(@emotion/react@11.14.0(@types/react@18.3.23)(react@18.3.1))(@types/react@18.3.23)(react@18.3.1)
      '@mui/icons-material':
        specifier: ^7.1.1
        version: 7.1.1(@mui/material@7.1.1(@emotion/react@11.14.0(@types/react@18.3.23)(react@18.3.1))(@emotion/styled@11.14.0(@emotion/react@11.14.0(@types/react@18.3.23)(react@18.3.1))(@types/react@18.3.23)(react@18.3.1))(@types/react@18.3.23)(react-dom@18.3.1(react@18.3.1))(react@18.3.1))(@types/react@18.3.23)(react@18.3.1)
      '@mui/material':
        specifier: ^7.1.1
        version: 7.1.1(@emotion/react@11.14.0(@types/react@18.3.23)(react@18.3.1))(@emotion/styled@11.14.0(@emotion/react@11.14.0(@types/react@18.3.23)(react@18.3.1))(@types/react@18.3.23)(react@18.3.1))(@types/react@18.3.23)(react-dom@18.3.1(react@18.3.1))(react@18.3.1)
      '@radix-ui/react-dialog':
        specifier: ^1.1.14
        version: 1.1.14(@types/react-dom@18.3.7(@types/react@18.3.23))(@types/react@18.3.23)(react-dom@18.3.1(react@18.3.1))(react@18.3.1)
      '@radix-ui/react-dropdown-menu':
        specifier: ^2.1.15
        version: 2.1.15(@types/react-dom@18.3.7(@types/react@18.3.23))(@types/react@18.3.23)(react-dom@18.3.1(react@18.3.1))(react@18.3.1)
      '@radix-ui/react-radio-group':
        specifier: ^1.3.7
        version: 1.3.7(@types/react-dom@18.3.7(@types/react@18.3.23))(@types/react@18.3.23)(react-dom@18.3.1(react@18.3.1))(react@18.3.1)
      '@radix-ui/react-scroll-area':
        specifier: ^1.2.9
        version: 1.2.9(@types/react-dom@18.3.7(@types/react@18.3.23))(@types/react@18.3.23)(react-dom@18.3.1(react@18.3.1))(react@18.3.1)
      '@radix-ui/react-separator':
        specifier: ^1.1.7
        version: 1.1.7(@types/react-dom@18.3.7(@types/react@18.3.23))(@types/react@18.3.23)(react-dom@18.3.1(react@18.3.1))(react@18.3.1)
      '@radix-ui/react-slot':
        specifier: ^1.2.3
        version: 1.2.3(@types/react@18.3.23)(react@18.3.1)
      '@radix-ui/react-switch':
        specifier: ^1.2.5
        version: 1.2.5(@types/react-dom@18.3.7(@types/react@18.3.23))(@types/react@18.3.23)(react-dom@18.3.1(react@18.3.1))(react@18.3.1)
      '@radix-ui/react-tabs':
        specifier: ^1.1.12
        version: 1.1.12(@types/react-dom@18.3.7(@types/react@18.3.23))(@types/react@18.3.23)(react-dom@18.3.1(react@18.3.1))(react@18.3.1)
      '@reown/appkit':
        specifier: ^1.7.8
        version: 1.7.8(@types/react@18.3.23)(bufferutil@4.0.9)(react@18.3.1)(typescript@5.8.3)(utf-8-validate@5.0.10)(zod@3.25.34)
      '@reown/appkit-adapter-wagmi':
        specifier: ^1.7.8
        version: 1.7.8(@types/react@18.3.23)(@wagmi/core@2.17.3(@tanstack/query-core@5.80.6)(@types/react@18.3.23)(react@18.3.1)(typescript@5.8.3)(use-sync-external-store@1.4.0(react@18.3.1))(viem@2.31.0(bufferutil@4.0.9)(typescript@5.8.3)(utf-8-validate@5.0.10)(zod@3.25.34)))(bufferutil@4.0.9)(react@18.3.1)(typescript@5.8.3)(utf-8-validate@5.0.10)(viem@2.31.0(bufferutil@4.0.9)(typescript@5.8.3)(utf-8-validate@5.0.10)(zod@3.25.34))(wagmi@2.15.6(@tanstack/query-core@5.80.6)(@tanstack/react-query@5.80.6(react@18.3.1))(@types/react@18.3.23)(bufferutil@4.0.9)(react@18.3.1)(typescript@5.8.3)(utf-8-validate@5.0.10)(viem@2.31.0(bufferutil@4.0.9)(typescript@5.8.3)(utf-8-validate@5.0.10)(zod@3.25.34))(zod@3.25.34))(zod@3.25.34)
      '@tanstack/react-query':
        specifier: ^5.80.6
        version: 5.80.6(react@18.3.1)
      '@tanstack/react-query-devtools':
        specifier: ^5.21.7
        version: 5.77.2(@tanstack/react-query@5.80.6(react@18.3.1))(react@18.3.1)
      axios:
        specifier: ^1.6.7
        version: 1.9.0
      class-variance-authority:
        specifier: ^0.7.0
        version: 0.7.1
      clsx:
        specifier: ^2.1.0
        version: 2.1.1
      date-fns:
        specifier: ^3.3.1
        version: 3.6.0
      framer-motion:
        specifier: ^11.0.5
        version: 11.18.2(@emotion/is-prop-valid@1.3.1)(react-dom@18.3.1(react@18.3.1))(react@18.3.1)
      lucide-react:
        specifier: ^0.263.1
        version: 0.263.1(react@18.3.1)
      pdf-lib:
        specifier: ^1.17.1
        version: 1.17.1
      react:
        specifier: ^18.2.0
        version: 18.3.1
      react-dom:
        specifier: ^18.2.0
        version: 18.3.1(react@18.3.1)
      react-dropzone:
        specifier: ^14.3.8
        version: 14.3.8(react@18.3.1)
      react-error-boundary:
        specifier: ^4.0.12
        version: 4.1.2(react@18.3.1)
      react-helmet-async:
        specifier: ^2.0.4
        version: 2.0.5(react@18.3.1)
      react-hook-form:
        specifier: ^7.50.1
        version: 7.56.4(react@18.3.1)
      react-hot-toast:
        specifier: ^2.4.1
        version: 2.5.2(react-dom@18.3.1(react@18.3.1))(react@18.3.1)
      react-icons:
        specifier: ^5.0.1
        version: 5.5.0(react@18.3.1)
      react-markdown:
        specifier: ^9.0.1
        version: 9.0.3(@types/react@18.3.23)(react@18.3.1)
      react-router-dom:
        specifier: ^6.22.1
        version: 6.30.1(react-dom@18.3.1(react@18.3.1))(react@18.3.1)
      react-syntax-highlighter:
        specifier: ^15.5.0
        version: 15.6.1(react@18.3.1)
      recharts:
        specifier: ^2.15.3
        version: 2.15.3(react-dom@18.3.1(react@18.3.1))(react@18.3.1)
      rehype-sanitize:
        specifier: ^6.0.0
        version: 6.0.0
      sonner:
        specifier: ^1.4.0
        version: 1.7.4(react-dom@18.3.1(react@18.3.1))(react@18.3.1)
      tailwind-merge:
        specifier: ^2.2.1
        version: 2.6.0
      uuid:
        specifier: ^9.0.1
        version: 9.0.1
      viem:
        specifier: ^2.31.0
        version: 2.31.0(bufferutil@4.0.9)(typescript@5.8.3)(utf-8-validate@5.0.10)(zod@3.25.34)
      wagmi:
        specifier: ^2.15.6
        version: 2.15.6(@tanstack/query-core@5.80.6)(@tanstack/react-query@5.80.6(react@18.3.1))(@types/react@18.3.23)(bufferutil@4.0.9)(react@18.3.1)(typescript@5.8.3)(utf-8-validate@5.0.10)(viem@2.31.0(bufferutil@4.0.9)(typescript@5.8.3)(utf-8-validate@5.0.10)(zod@3.25.34))(zod@3.25.34)
      zod:
        specifier: ^3.22.4
        version: 3.25.34
    devDependencies:
      '@tailwindcss/forms':
        specifier: ^0.5.7
        version: 0.5.10(tailwindcss@3.4.17(ts-node@10.9.2(@types/node@20.17.52)(typescript@5.8.3)))
      '@tailwindcss/typography':
        specifier: ^0.5.10
        version: 0.5.16(tailwindcss@3.4.17(ts-node@10.9.2(@types/node@20.17.52)(typescript@5.8.3)))
      '@testing-library/jest-dom':
        specifier: ^6.4.2
        version: 6.6.3
      '@testing-library/react':
        specifier: ^14.2.1
        version: 14.3.1(@types/react@18.3.23)(react-dom@18.3.1(react@18.3.1))(react@18.3.1)
      '@types/node':
        specifier: ^20.11.19
        version: 20.17.52
      '@types/react':
        specifier: ^18.2.57
        version: 18.3.23
      '@types/react-dom':
        specifier: ^18.2.19
        version: 18.3.7(@types/react@18.3.23)
      '@types/react-syntax-highlighter':
        specifier: ^15.5.11
        version: 15.5.13
      '@types/uuid':
        specifier: ^9.0.8
        version: 9.0.8
      '@typescript-eslint/eslint-plugin':
        specifier: ^8.18.0
        version: 8.33.1(@typescript-eslint/parser@8.33.1(eslint@9.28.0(jiti@1.21.7))(typescript@5.8.3))(eslint@9.28.0(jiti@1.21.7))(typescript@5.8.3)
      '@typescript-eslint/parser':
        specifier: ^8.18.0
        version: 8.33.1(eslint@9.28.0(jiti@1.21.7))(typescript@5.8.3)
      '@vitejs/plugin-react':
        specifier: ^4.2.1
        version: 4.5.0(vite@5.4.19(@types/node@20.17.52)(lightningcss@1.30.1)(terser@5.39.0))
      autoprefixer:
        specifier: ^10.4.17
        version: 10.4.21(postcss@8.5.3)
      eslint:
        specifier: ^9.28.0
        version: 9.28.0(jiti@1.21.7)
      eslint-plugin-react-hooks:
        specifier: ^5.0.0
        version: 5.2.0(eslint@9.28.0(jiti@1.21.7))
      eslint-plugin-react-refresh:
        specifier: ^0.4.5
        version: 0.4.20(eslint@9.28.0(jiti@1.21.7))
      postcss:
        specifier: ^8.4.35
        version: 8.5.3
      tailwindcss:
        specifier: ^3.4.1
        version: 3.4.17(ts-node@10.9.2(@types/node@20.17.52)(typescript@5.8.3))
      typescript:
        specifier: ^5.7.2
        version: 5.8.3
      vite:
        specifier: ^5.4.10
        version: 5.4.19(@types/node@20.17.52)(lightningcss@1.30.1)(terser@5.39.0)
      wrangler:
        specifier: ^4.19.1
        version: 4.19.1(@cloudflare/workers-types@4.20250607.0)(bufferutil@4.0.9)(utf-8-validate@5.0.10)

packages:

  '@adobe/css-tools@4.4.3':
    resolution: {integrity: sha512-VQKMkwriZbaOgVCby1UDY/LDk5fIjhQicCvVPFqfe+69fWaPWydbWJ3wRt59/YzIwda1I81loas3oCoHxnqvdA==}

  '@adraffy/ens-normalize@1.11.0':
    resolution: {integrity: sha512-/3DDPKHqqIqxUULp8yP4zODUY1i+2xvVWsv8A79xGWdCAG+8sb0hRh0Rk2QyOJUnnbyPUAZYcpBuRe3nS2OIUg==}

  '@alloc/quick-lru@5.2.0':
    resolution: {integrity: sha512-UrcABB+4bUrFABwbluTIBErXwvbsU/V7TZWfmbgJfbkwiBuziS9gxdODUyuiecfdGQ85jglMW6juS3+z5TsKLw==}
    engines: {node: '>=10'}

  '@ampproject/remapping@2.3.0':
    resolution: {integrity: sha512-30iZtAPgz+LTIYoeivqYo853f02jBYSd5uGnGpkFV0M3xOt9aN73erkgYAmZU43x4VfqcnLxW9Kpg3R5LC4YYw==}
    engines: {node: '>=6.0.0'}

  '@babel/code-frame@7.27.1':
    resolution: {integrity: sha512-cjQ7ZlQ0Mv3b47hABuTevyTuYN4i+loJKGeV9flcCgIK37cCXRh+L1bd3iBHlynerhQ7BhCkn2BPbQUL+rGqFg==}
    engines: {node: '>=6.9.0'}

  '@babel/compat-data@7.27.3':
    resolution: {integrity: sha512-V42wFfx1ymFte+ecf6iXghnnP8kWTO+ZLXIyZq+1LAXHHvTZdVxicn4yiVYdYMGaCO3tmqub11AorKkv+iodqw==}
    engines: {node: '>=6.9.0'}

  '@babel/core@7.27.3':
    resolution: {integrity: sha512-hyrN8ivxfvJ4i0fIJuV4EOlV0WDMz5Ui4StRTgVaAvWeiRCilXgwVvxJKtFQ3TKtHgJscB2YiXKGNJuVwhQMtA==}
    engines: {node: '>=6.9.0'}

  '@babel/generator@7.27.3':
    resolution: {integrity: sha512-xnlJYj5zepml8NXtjkG0WquFUv8RskFqyFcVgTBp5k+NaA/8uw/K+OSVf8AMGw5e9HKP2ETd5xpK5MLZQD6b4Q==}
    engines: {node: '>=6.9.0'}

  '@babel/helper-compilation-targets@7.27.2':
    resolution: {integrity: sha512-2+1thGUUWWjLTYTHZWK1n8Yga0ijBz1XAhUXcKy81rd5g6yh7hGqMp45v7cadSbEHc9G3OTv45SyneRN3ps4DQ==}
    engines: {node: '>=6.9.0'}

  '@babel/helper-module-imports@7.27.1':
    resolution: {integrity: sha512-0gSFWUPNXNopqtIPQvlD5WgXYI5GY2kP2cCvoT8kczjbfcfuIljTbcWrulD1CIPIX2gt1wghbDy08yE1p+/r3w==}
    engines: {node: '>=6.9.0'}

  '@babel/helper-module-transforms@7.27.3':
    resolution: {integrity: sha512-dSOvYwvyLsWBeIRyOeHXp5vPj5l1I011r52FM1+r1jCERv+aFXYk4whgQccYEGYxK2H3ZAIA8nuPkQ0HaUo3qg==}
    engines: {node: '>=6.9.0'}
    peerDependencies:
      '@babel/core': ^7.0.0

  '@babel/helper-plugin-utils@7.26.5':
    resolution: {integrity: sha512-RS+jZcRdZdRFzMyr+wcsaqOmld1/EqTghfaBGQQd/WnRdzdlvSZ//kF7U8VQTxf1ynZ4cjUcYgjVGx13ewNPMg==}
    engines: {node: '>=6.9.0'}

  '@babel/helper-string-parser@7.27.1':
    resolution: {integrity: sha512-qMlSxKbpRlAridDExk92nSobyDdpPijUq2DW6oDnUqd0iOGxmQjyqhMIihI9+zv4LPyZdRje2cavWPbCbWm3eA==}
    engines: {node: '>=6.9.0'}

  '@babel/helper-validator-identifier@7.27.1':
    resolution: {integrity: sha512-D2hP9eA+Sqx1kBZgzxZh0y1trbuU+JoDkiEwqhQ36nodYqJwyEIhPSdMNd7lOm/4io72luTPWH20Yda0xOuUow==}
    engines: {node: '>=6.9.0'}

  '@babel/helper-validator-option@7.27.1':
    resolution: {integrity: sha512-YvjJow9FxbhFFKDSuFnVCe2WxXk1zWc22fFePVNEaWJEu8IrZVlda6N0uHwzZrUM1il7NC9Mlp4MaJYbYd9JSg==}
    engines: {node: '>=6.9.0'}

  '@babel/helpers@7.27.3':
    resolution: {integrity: sha512-h/eKy9agOya1IGuLaZ9tEUgz+uIRXcbtOhRtUyyMf8JFmn1iT13vnl/IGVWSkdOCG/pC57U4S1jnAabAavTMwg==}
    engines: {node: '>=6.9.0'}

  '@babel/parser@7.27.3':
    resolution: {integrity: sha512-xyYxRj6+tLNDTWi0KCBcZ9V7yg3/lwL9DWh9Uwh/RIVlIfFidggcgxKX3GCXwCiswwcGRawBKbEg2LG/Y8eJhw==}
    engines: {node: '>=6.0.0'}
    hasBin: true

  '@babel/plugin-transform-react-jsx-self@7.25.9':
    resolution: {integrity: sha512-y8quW6p0WHkEhmErnfe58r7x0A70uKphQm8Sp8cV7tjNQwK56sNVK0M73LK3WuYmsuyrftut4xAkjjgU0twaMg==}
    engines: {node: '>=6.9.0'}
    peerDependencies:
      '@babel/core': ^7.0.0-0

  '@babel/plugin-transform-react-jsx-source@7.25.9':
    resolution: {integrity: sha512-+iqjT8xmXhhYv4/uiYd8FNQsraMFZIfxVSqxxVSZP0WbbSAWvBXAul0m/zu+7Vv4O/3WtApy9pmaTMiumEZgfg==}
    engines: {node: '>=6.9.0'}
    peerDependencies:
      '@babel/core': ^7.0.0-0

  '@babel/runtime@7.27.3':
    resolution: {integrity: sha512-7EYtGezsdiDMyY80+65EzwiGmcJqpmcZCojSXaRgdrBaGtWTgDZKq69cPIVped6MkIM78cTQ2GOiEYjwOlG4xw==}
    engines: {node: '>=6.9.0'}

  '@babel/template@7.27.2':
    resolution: {integrity: sha512-LPDZ85aEJyYSd18/DkjNh4/y1ntkE5KwUHWTiqgRxruuZL2F1yuHligVHLvcHY2vMHXttKFpJn6LwfI7cw7ODw==}
    engines: {node: '>=6.9.0'}

  '@babel/traverse@7.27.3':
    resolution: {integrity: sha512-lId/IfN/Ye1CIu8xG7oKBHXd2iNb2aW1ilPszzGcJug6M8RCKfVNcYhpI5+bMvFYjK7lXIM0R+a+6r8xhHp2FQ==}
    engines: {node: '>=6.9.0'}

  '@babel/types@7.27.3':
    resolution: {integrity: sha512-Y1GkI4ktrtvmawoSq+4FCVHNryea6uR+qUQy0AGxLSsjCX0nVmkYQMBLHDkXZuo5hGx7eYdnIaslsdBFm7zbUw==}
    engines: {node: '>=6.9.0'}

  '@clerk/clerk-react@5.31.9':
    resolution: {integrity: sha512-jP+qygYcChVDKM3pMtChOGNrGV4QAOYQvVyiitzQu5xgyVsFN3AnSdIj0u73lxOLZubfv9cOHjFwc41s31f1pA==}
    engines: {node: '>=18.17.0'}
    peerDependencies:
      react: ^18.0.0 || ^19.0.0 || ^19.0.0-0
      react-dom: ^18.0.0 || ^19.0.0 || ^19.0.0-0

  '@clerk/shared@3.9.6':
    resolution: {integrity: sha512-zScvDbNKBcGfkD7Db4LCoEbB8qZ/WFwuB77xqRgXiHDa+pBzEPyFB5nQSt1zQfLqOK3POng0GsPBoXEWKb4Ikw==}
    engines: {node: '>=18.17.0'}
    peerDependencies:
      react: ^18.0.0 || ^19.0.0 || ^19.0.0-0
      react-dom: ^18.0.0 || ^19.0.0 || ^19.0.0-0
    peerDependenciesMeta:
      react:
        optional: true
      react-dom:
        optional: true

  '@clerk/types@4.60.0':
    resolution: {integrity: sha512-60u/Z3VD0lgepsySUPyFM1MV5cwhMwouN63na5g9+qm3PpaTE2kN4DeW9Nq6t1YB0TFpVEKIb1r8U6EOWPa01A==}
    engines: {node: '>=18.17.0'}

  '@cloudflare/kv-asset-handler@0.4.0':
    resolution: {integrity: sha512-+tv3z+SPp+gqTIcImN9o0hqE9xyfQjI1XD9pL6NuKjua9B1y7mNYv0S9cP+QEbA4ppVgGZEmKOvHX5G5Ei1CVA==}
    engines: {node: '>=18.0.0'}

  '@cloudflare/unenv-preset@2.3.2':
    resolution: {integrity: sha512-MtUgNl+QkQyhQvv5bbWP+BpBC1N0me4CHHuP2H4ktmOMKdB/6kkz/lo+zqiA4mEazb4y+1cwyNjVrQ2DWeE4mg==}
    peerDependencies:
      unenv: 2.0.0-rc.17
      workerd: ^1.20250508.0
    peerDependenciesMeta:
      workerd:
        optional: true

  '@cloudflare/workerd-darwin-64@1.20250525.0':
    resolution: {integrity: sha512-L5l+7sSJJT2+riR5rS3Q3PKNNySPjWfRIeaNGMVRi1dPO6QPi4lwuxfRUFNoeUdilZJUVPfSZvTtj9RedsKznQ==}
    engines: {node: '>=16'}
    cpu: [x64]
    os: [darwin]

  '@cloudflare/workerd-darwin-arm64@1.20250525.0':
    resolution: {integrity: sha512-Y3IbIdrF/vJWh/WBvshwcSyUh175VAiLRW7963S1dXChrZ1N5wuKGQm9xY69cIGVtitpMJWWW3jLq7J/Xxwm0Q==}
    engines: {node: '>=16'}
    cpu: [arm64]
    os: [darwin]

  '@cloudflare/workerd-linux-64@1.20250525.0':
    resolution: {integrity: sha512-KSyQPAby+c6cpENoO0ayCQlY6QIh28l/+QID7VC1SLXfiNHy+hPNsH1vVBTST6CilHVAQSsy9tCZ9O9XECB8yg==}
    engines: {node: '>=16'}
    cpu: [x64]
    os: [linux]

  '@cloudflare/workerd-linux-arm64@1.20250525.0':
    resolution: {integrity: sha512-Nt0FUxS2kQhJUea4hMCNPaetkrAFDhPnNX/ntwcqVlGgnGt75iaAhupWJbU0GB+gIWlKeuClUUnDZqKbicoKyg==}
    engines: {node: '>=16'}
    cpu: [arm64]
    os: [linux]

  '@cloudflare/workerd-windows-64@1.20250525.0':
    resolution: {integrity: sha512-mwTj+9f3uIa4NEXR1cOa82PjLa6dbrb3J+KCVJFYIaq7e63VxEzOchCXS4tublT2pmOhmFqkgBMXrxozxNkR2Q==}
    engines: {node: '>=16'}
    cpu: [x64]
    os: [win32]

  '@cloudflare/workers-types@4.20250607.0':
    resolution: {integrity: sha512-OYmKNzC2eQy6CNj+j0go8Ut3SezjsprCgJyEaBzJql+473WAN9ndVnNZy9lj/tTyLV6wzpQkZWmRAKGDmacvkg==}

  '@coinbase/wallet-sdk@3.9.3':
    resolution: {integrity: sha512-N/A2DRIf0Y3PHc1XAMvbBUu4zisna6qAdqABMZwBMNEfWrXpAwx16pZGkYCLGE+Rvv1edbcB2LYDRnACNcmCiw==}

  '@coinbase/wallet-sdk@4.3.3':
    resolution: {integrity: sha512-h8gMLQNvP5TIJVXFOyQZaxbi1Mg5alFR4Z2/PEIngdyXZEoQGcVhzyQGuDa3t9zpllxvqfAaKfzDhsfCo+nhSQ==}

  '@cspotcode/source-map-support@0.8.1':
    resolution: {integrity: sha512-IchNf6dN4tHoMFIn/7OE8LWZ19Y6q/67Bmf6vnGREv8RSbBVb9LPJxEcnwrcwX6ixSvaiGoomAUvu4YSxXrVgw==}
    engines: {node: '>=12'}

  '@ecies/ciphers@0.2.3':
    resolution: {integrity: sha512-tapn6XhOueMwht3E2UzY0ZZjYokdaw9XtL9kEyjhQ/Fb9vL9xTFbOaI+fV0AWvTpYu4BNloC6getKW6NtSg4mA==}
    engines: {bun: '>=1', deno: '>=2', node: '>=16'}
    peerDependencies:
      '@noble/ciphers': ^1.0.0

  '@emnapi/runtime@1.4.3':
    resolution: {integrity: sha512-pBPWdu6MLKROBX05wSNKcNb++m5Er+KQ9QkB+WVM+pW2Kx9hoSrVTnu3BdkI5eBLZoKu/J6mW/B6i6bJB2ytXQ==}

  '@emotion/babel-plugin@11.13.5':
    resolution: {integrity: sha512-pxHCpT2ex+0q+HH91/zsdHkw/lXd468DIN2zvfvLtPKLLMo6gQj7oLObq8PhkrxOZb/gGCq03S3Z7PDhS8pduQ==}

  '@emotion/cache@11.14.0':
    resolution: {integrity: sha512-L/B1lc/TViYk4DcpGxtAVbx0ZyiKM5ktoIyafGkH6zg/tj+mA+NE//aPYKG0k8kCHSHVJrpLpcAlOBEXQ3SavA==}

  '@emotion/hash@0.9.2':
    resolution: {integrity: sha512-MyqliTZGuOm3+5ZRSaaBGP3USLw6+EGykkwZns2EPC5g8jJ4z9OrdZY9apkl3+UP9+sdz76YYkwCKP5gh8iY3g==}

  '@emotion/is-prop-valid@1.3.1':
    resolution: {integrity: sha512-/ACwoqx7XQi9knQs/G0qKvv5teDMhD7bXYns9N/wM8ah8iNb8jZ2uNO0YOgiq2o2poIvVtJS2YALasQuMSQ7Kw==}

  '@emotion/memoize@0.9.0':
    resolution: {integrity: sha512-30FAj7/EoJ5mwVPOWhAyCX+FPfMDrVecJAM+Iw9NRoSl4BBAQeqj4cApHHUXOVvIPgLVDsCFoz/hGD+5QQD1GQ==}

  '@emotion/react@11.14.0':
    resolution: {integrity: sha512-O000MLDBDdk/EohJPFUqvnp4qnHeYkVP5B0xEG0D/L7cOKP9kefu2DXn8dj74cQfsEzUqh+sr1RzFqiL1o+PpA==}
    peerDependencies:
      '@types/react': '*'
      react: '>=16.8.0'
    peerDependenciesMeta:
      '@types/react':
        optional: true

  '@emotion/serialize@1.3.3':
    resolution: {integrity: sha512-EISGqt7sSNWHGI76hC7x1CksiXPahbxEOrC5RjmFRJTqLyEK9/9hZvBbiYn70dw4wuwMKiEMCUlR6ZXTSWQqxA==}

  '@emotion/sheet@1.4.0':
    resolution: {integrity: sha512-fTBW9/8r2w3dXWYM4HCB1Rdp8NLibOw2+XELH5m5+AkWiL/KqYX6dc0kKYlaYyKjrQ6ds33MCdMPEwgs2z1rqg==}

  '@emotion/styled@11.14.0':
    resolution: {integrity: sha512-XxfOnXFffatap2IyCeJyNov3kiDQWoR08gPUQxvbL7fxKryGBKUZUkG6Hz48DZwVrJSVh9sJboyV1Ds4OW6SgA==}
    peerDependencies:
      '@emotion/react': ^11.0.0-rc.0
      '@types/react': '*'
      react: '>=16.8.0'
    peerDependenciesMeta:
      '@types/react':
        optional: true

  '@emotion/unitless@0.10.0':
    resolution: {integrity: sha512-dFoMUuQA20zvtVTuxZww6OHoJYgrzfKM1t52mVySDJnMSEa08ruEvdYQbhvyu6soU+NeLVd3yKfTfT0NeV6qGg==}

  '@emotion/use-insertion-effect-with-fallbacks@1.2.0':
    resolution: {integrity: sha512-yJMtVdH59sxi/aVJBpk9FQq+OR8ll5GT8oWd57UpeaKEVGab41JWaCFA7FRLoMLloOZF/c/wsPoe+bfGmRKgDg==}
    peerDependencies:
      react: '>=16.8.0'

  '@emotion/utils@1.4.2':
    resolution: {integrity: sha512-3vLclRofFziIa3J2wDh9jjbkUz9qk5Vi3IZ/FSTKViB0k+ef0fPV7dYrUIugbgupYDx7v9ud/SjrtEP8Y4xLoA==}

  '@emotion/weak-memoize@0.4.0':
    resolution: {integrity: sha512-snKqtPW01tN0ui7yu9rGv69aJXr/a/Ywvl11sUjNtEcRc+ng/mQriFL0wLXMef74iHa/EkftbDzU9F8iFbH+zg==}

  '@esbuild/aix-ppc64@0.21.5':
    resolution: {integrity: sha512-1SDgH6ZSPTlggy1yI6+Dbkiz8xzpHJEVAlF/AM1tHPLsf5STom9rwtjE4hKAF20FfXXNTFqEYXyJNWh1GiZedQ==}
    engines: {node: '>=12'}
    cpu: [ppc64]
    os: [aix]

  '@esbuild/aix-ppc64@0.25.4':
    resolution: {integrity: sha512-1VCICWypeQKhVbE9oW/sJaAmjLxhVqacdkvPLEjwlttjfwENRSClS8EjBz0KzRyFSCPDIkuXW34Je/vk7zdB7Q==}
    engines: {node: '>=18'}
    cpu: [ppc64]
    os: [aix]

  '@esbuild/android-arm64@0.21.5':
    resolution: {integrity: sha512-c0uX9VAUBQ7dTDCjq+wdyGLowMdtR/GoC2U5IYk/7D1H1JYC0qseD7+11iMP2mRLN9RcCMRcjC4YMclCzGwS/A==}
    engines: {node: '>=12'}
    cpu: [arm64]
    os: [android]

  '@esbuild/android-arm64@0.25.4':
    resolution: {integrity: sha512-bBy69pgfhMGtCnwpC/x5QhfxAz/cBgQ9enbtwjf6V9lnPI/hMyT9iWpR1arm0l3kttTr4L0KSLpKmLp/ilKS9A==}
    engines: {node: '>=18'}
    cpu: [arm64]
    os: [android]

  '@esbuild/android-arm@0.21.5':
    resolution: {integrity: sha512-vCPvzSjpPHEi1siZdlvAlsPxXl7WbOVUBBAowWug4rJHb68Ox8KualB+1ocNvT5fjv6wpkX6o/iEpbDrf68zcg==}
    engines: {node: '>=12'}
    cpu: [arm]
    os: [android]

  '@esbuild/android-arm@0.25.4':
    resolution: {integrity: sha512-QNdQEps7DfFwE3hXiU4BZeOV68HHzYwGd0Nthhd3uCkkEKK7/R6MTgM0P7H7FAs5pU/DIWsviMmEGxEoxIZ+ZQ==}
    engines: {node: '>=18'}
    cpu: [arm]
    os: [android]

  '@esbuild/android-x64@0.21.5':
    resolution: {integrity: sha512-D7aPRUUNHRBwHxzxRvp856rjUHRFW1SdQATKXH2hqA0kAZb1hKmi02OpYRacl0TxIGz/ZmXWlbZgjwWYaCakTA==}
    engines: {node: '>=12'}
    cpu: [x64]
    os: [android]

  '@esbuild/android-x64@0.25.4':
    resolution: {integrity: sha512-TVhdVtQIFuVpIIR282btcGC2oGQoSfZfmBdTip2anCaVYcqWlZXGcdcKIUklfX2wj0JklNYgz39OBqh2cqXvcQ==}
    engines: {node: '>=18'}
    cpu: [x64]
    os: [android]

  '@esbuild/darwin-arm64@0.21.5':
    resolution: {integrity: sha512-DwqXqZyuk5AiWWf3UfLiRDJ5EDd49zg6O9wclZ7kUMv2WRFr4HKjXp/5t8JZ11QbQfUS6/cRCKGwYhtNAY88kQ==}
    engines: {node: '>=12'}
    cpu: [arm64]
    os: [darwin]

  '@esbuild/darwin-arm64@0.25.4':
    resolution: {integrity: sha512-Y1giCfM4nlHDWEfSckMzeWNdQS31BQGs9/rouw6Ub91tkK79aIMTH3q9xHvzH8d0wDru5Ci0kWB8b3up/nl16g==}
    engines: {node: '>=18'}
    cpu: [arm64]
    os: [darwin]

  '@esbuild/darwin-x64@0.21.5':
    resolution: {integrity: sha512-se/JjF8NlmKVG4kNIuyWMV/22ZaerB+qaSi5MdrXtd6R08kvs2qCN4C09miupktDitvh8jRFflwGFBQcxZRjbw==}
    engines: {node: '>=12'}
    cpu: [x64]
    os: [darwin]

  '@esbuild/darwin-x64@0.25.4':
    resolution: {integrity: sha512-CJsry8ZGM5VFVeyUYB3cdKpd/H69PYez4eJh1W/t38vzutdjEjtP7hB6eLKBoOdxcAlCtEYHzQ/PJ/oU9I4u0A==}
    engines: {node: '>=18'}
    cpu: [x64]
    os: [darwin]

  '@esbuild/freebsd-arm64@0.21.5':
    resolution: {integrity: sha512-5JcRxxRDUJLX8JXp/wcBCy3pENnCgBR9bN6JsY4OmhfUtIHe3ZW0mawA7+RDAcMLrMIZaf03NlQiX9DGyB8h4g==}
    engines: {node: '>=12'}
    cpu: [arm64]
    os: [freebsd]

  '@esbuild/freebsd-arm64@0.25.4':
    resolution: {integrity: sha512-yYq+39NlTRzU2XmoPW4l5Ifpl9fqSk0nAJYM/V/WUGPEFfek1epLHJIkTQM6bBs1swApjO5nWgvr843g6TjxuQ==}
    engines: {node: '>=18'}
    cpu: [arm64]
    os: [freebsd]

  '@esbuild/freebsd-x64@0.21.5':
    resolution: {integrity: sha512-J95kNBj1zkbMXtHVH29bBriQygMXqoVQOQYA+ISs0/2l3T9/kj42ow2mpqerRBxDJnmkUDCaQT/dfNXWX/ZZCQ==}
    engines: {node: '>=12'}
    cpu: [x64]
    os: [freebsd]

  '@esbuild/freebsd-x64@0.25.4':
    resolution: {integrity: sha512-0FgvOJ6UUMflsHSPLzdfDnnBBVoCDtBTVyn/MrWloUNvq/5SFmh13l3dvgRPkDihRxb77Y17MbqbCAa2strMQQ==}
    engines: {node: '>=18'}
    cpu: [x64]
    os: [freebsd]

  '@esbuild/linux-arm64@0.21.5':
    resolution: {integrity: sha512-ibKvmyYzKsBeX8d8I7MH/TMfWDXBF3db4qM6sy+7re0YXya+K1cem3on9XgdT2EQGMu4hQyZhan7TeQ8XkGp4Q==}
    engines: {node: '>=12'}
    cpu: [arm64]
    os: [linux]

  '@esbuild/linux-arm64@0.25.4':
    resolution: {integrity: sha512-+89UsQTfXdmjIvZS6nUnOOLoXnkUTB9hR5QAeLrQdzOSWZvNSAXAtcRDHWtqAUtAmv7ZM1WPOOeSxDzzzMogiQ==}
    engines: {node: '>=18'}
    cpu: [arm64]
    os: [linux]

  '@esbuild/linux-arm@0.21.5':
    resolution: {integrity: sha512-bPb5AHZtbeNGjCKVZ9UGqGwo8EUu4cLq68E95A53KlxAPRmUyYv2D6F0uUI65XisGOL1hBP5mTronbgo+0bFcA==}
    engines: {node: '>=12'}
    cpu: [arm]
    os: [linux]

  '@esbuild/linux-arm@0.25.4':
    resolution: {integrity: sha512-kro4c0P85GMfFYqW4TWOpvmF8rFShbWGnrLqlzp4X1TNWjRY3JMYUfDCtOxPKOIY8B0WC8HN51hGP4I4hz4AaQ==}
    engines: {node: '>=18'}
    cpu: [arm]
    os: [linux]

  '@esbuild/linux-ia32@0.21.5':
    resolution: {integrity: sha512-YvjXDqLRqPDl2dvRODYmmhz4rPeVKYvppfGYKSNGdyZkA01046pLWyRKKI3ax8fbJoK5QbxblURkwK/MWY18Tg==}
    engines: {node: '>=12'}
    cpu: [ia32]
    os: [linux]

  '@esbuild/linux-ia32@0.25.4':
    resolution: {integrity: sha512-yTEjoapy8UP3rv8dB0ip3AfMpRbyhSN3+hY8mo/i4QXFeDxmiYbEKp3ZRjBKcOP862Ua4b1PDfwlvbuwY7hIGQ==}
    engines: {node: '>=18'}
    cpu: [ia32]
    os: [linux]

  '@esbuild/linux-loong64@0.21.5':
    resolution: {integrity: sha512-uHf1BmMG8qEvzdrzAqg2SIG/02+4/DHB6a9Kbya0XDvwDEKCoC8ZRWI5JJvNdUjtciBGFQ5PuBlpEOXQj+JQSg==}
    engines: {node: '>=12'}
    cpu: [loong64]
    os: [linux]

  '@esbuild/linux-loong64@0.25.4':
    resolution: {integrity: sha512-NeqqYkrcGzFwi6CGRGNMOjWGGSYOpqwCjS9fvaUlX5s3zwOtn1qwg1s2iE2svBe4Q/YOG1q6875lcAoQK/F4VA==}
    engines: {node: '>=18'}
    cpu: [loong64]
    os: [linux]

  '@esbuild/linux-mips64el@0.21.5':
    resolution: {integrity: sha512-IajOmO+KJK23bj52dFSNCMsz1QP1DqM6cwLUv3W1QwyxkyIWecfafnI555fvSGqEKwjMXVLokcV5ygHW5b3Jbg==}
    engines: {node: '>=12'}
    cpu: [mips64el]
    os: [linux]

  '@esbuild/linux-mips64el@0.25.4':
    resolution: {integrity: sha512-IcvTlF9dtLrfL/M8WgNI/qJYBENP3ekgsHbYUIzEzq5XJzzVEV/fXY9WFPfEEXmu3ck2qJP8LG/p3Q8f7Zc2Xg==}
    engines: {node: '>=18'}
    cpu: [mips64el]
    os: [linux]

  '@esbuild/linux-ppc64@0.21.5':
    resolution: {integrity: sha512-1hHV/Z4OEfMwpLO8rp7CvlhBDnjsC3CttJXIhBi+5Aj5r+MBvy4egg7wCbe//hSsT+RvDAG7s81tAvpL2XAE4w==}
    engines: {node: '>=12'}
    cpu: [ppc64]
    os: [linux]

  '@esbuild/linux-ppc64@0.25.4':
    resolution: {integrity: sha512-HOy0aLTJTVtoTeGZh4HSXaO6M95qu4k5lJcH4gxv56iaycfz1S8GO/5Jh6X4Y1YiI0h7cRyLi+HixMR+88swag==}
    engines: {node: '>=18'}
    cpu: [ppc64]
    os: [linux]

  '@esbuild/linux-riscv64@0.21.5':
    resolution: {integrity: sha512-2HdXDMd9GMgTGrPWnJzP2ALSokE/0O5HhTUvWIbD3YdjME8JwvSCnNGBnTThKGEB91OZhzrJ4qIIxk/SBmyDDA==}
    engines: {node: '>=12'}
    cpu: [riscv64]
    os: [linux]

  '@esbuild/linux-riscv64@0.25.4':
    resolution: {integrity: sha512-i8JUDAufpz9jOzo4yIShCTcXzS07vEgWzyX3NH2G7LEFVgrLEhjwL3ajFE4fZI3I4ZgiM7JH3GQ7ReObROvSUA==}
    engines: {node: '>=18'}
    cpu: [riscv64]
    os: [linux]

  '@esbuild/linux-s390x@0.21.5':
    resolution: {integrity: sha512-zus5sxzqBJD3eXxwvjN1yQkRepANgxE9lgOW2qLnmr8ikMTphkjgXu1HR01K4FJg8h1kEEDAqDcZQtbrRnB41A==}
    engines: {node: '>=12'}
    cpu: [s390x]
    os: [linux]

  '@esbuild/linux-s390x@0.25.4':
    resolution: {integrity: sha512-jFnu+6UbLlzIjPQpWCNh5QtrcNfMLjgIavnwPQAfoGx4q17ocOU9MsQ2QVvFxwQoWpZT8DvTLooTvmOQXkO51g==}
    engines: {node: '>=18'}
    cpu: [s390x]
    os: [linux]

  '@esbuild/linux-x64@0.21.5':
    resolution: {integrity: sha512-1rYdTpyv03iycF1+BhzrzQJCdOuAOtaqHTWJZCWvijKD2N5Xu0TtVC8/+1faWqcP9iBCWOmjmhoH94dH82BxPQ==}
    engines: {node: '>=12'}
    cpu: [x64]
    os: [linux]

  '@esbuild/linux-x64@0.25.4':
    resolution: {integrity: sha512-6e0cvXwzOnVWJHq+mskP8DNSrKBr1bULBvnFLpc1KY+d+irZSgZ02TGse5FsafKS5jg2e4pbvK6TPXaF/A6+CA==}
    engines: {node: '>=18'}
    cpu: [x64]
    os: [linux]

  '@esbuild/netbsd-arm64@0.25.4':
    resolution: {integrity: sha512-vUnkBYxZW4hL/ie91hSqaSNjulOnYXE1VSLusnvHg2u3jewJBz3YzB9+oCw8DABeVqZGg94t9tyZFoHma8gWZQ==}
    engines: {node: '>=18'}
    cpu: [arm64]
    os: [netbsd]

  '@esbuild/netbsd-x64@0.21.5':
    resolution: {integrity: sha512-Woi2MXzXjMULccIwMnLciyZH4nCIMpWQAs049KEeMvOcNADVxo0UBIQPfSmxB3CWKedngg7sWZdLvLczpe0tLg==}
    engines: {node: '>=12'}
    cpu: [x64]
    os: [netbsd]

  '@esbuild/netbsd-x64@0.25.4':
    resolution: {integrity: sha512-XAg8pIQn5CzhOB8odIcAm42QsOfa98SBeKUdo4xa8OvX8LbMZqEtgeWE9P/Wxt7MlG2QqvjGths+nq48TrUiKw==}
    engines: {node: '>=18'}
    cpu: [x64]
    os: [netbsd]

  '@esbuild/openbsd-arm64@0.25.4':
    resolution: {integrity: sha512-Ct2WcFEANlFDtp1nVAXSNBPDxyU+j7+tId//iHXU2f/lN5AmO4zLyhDcpR5Cz1r08mVxzt3Jpyt4PmXQ1O6+7A==}
    engines: {node: '>=18'}
    cpu: [arm64]
    os: [openbsd]

  '@esbuild/openbsd-x64@0.21.5':
    resolution: {integrity: sha512-HLNNw99xsvx12lFBUwoT8EVCsSvRNDVxNpjZ7bPn947b8gJPzeHWyNVhFsaerc0n3TsbOINvRP2byTZ5LKezow==}
    engines: {node: '>=12'}
    cpu: [x64]
    os: [openbsd]

  '@esbuild/openbsd-x64@0.25.4':
    resolution: {integrity: sha512-xAGGhyOQ9Otm1Xu8NT1ifGLnA6M3sJxZ6ixylb+vIUVzvvd6GOALpwQrYrtlPouMqd/vSbgehz6HaVk4+7Afhw==}
    engines: {node: '>=18'}
    cpu: [x64]
    os: [openbsd]

  '@esbuild/sunos-x64@0.21.5':
    resolution: {integrity: sha512-6+gjmFpfy0BHU5Tpptkuh8+uw3mnrvgs+dSPQXQOv3ekbordwnzTVEb4qnIvQcYXq6gzkyTnoZ9dZG+D4garKg==}
    engines: {node: '>=12'}
    cpu: [x64]
    os: [sunos]

  '@esbuild/sunos-x64@0.25.4':
    resolution: {integrity: sha512-Mw+tzy4pp6wZEK0+Lwr76pWLjrtjmJyUB23tHKqEDP74R3q95luY/bXqXZeYl4NYlvwOqoRKlInQialgCKy67Q==}
    engines: {node: '>=18'}
    cpu: [x64]
    os: [sunos]

  '@esbuild/win32-arm64@0.21.5':
    resolution: {integrity: sha512-Z0gOTd75VvXqyq7nsl93zwahcTROgqvuAcYDUr+vOv8uHhNSKROyU961kgtCD1e95IqPKSQKH7tBTslnS3tA8A==}
    engines: {node: '>=12'}
    cpu: [arm64]
    os: [win32]

  '@esbuild/win32-arm64@0.25.4':
    resolution: {integrity: sha512-AVUP428VQTSddguz9dO9ngb+E5aScyg7nOeJDrF1HPYu555gmza3bDGMPhmVXL8svDSoqPCsCPjb265yG/kLKQ==}
    engines: {node: '>=18'}
    cpu: [arm64]
    os: [win32]

  '@esbuild/win32-ia32@0.21.5':
    resolution: {integrity: sha512-SWXFF1CL2RVNMaVs+BBClwtfZSvDgtL//G/smwAc5oVK/UPu2Gu9tIaRgFmYFFKrmg3SyAjSrElf0TiJ1v8fYA==}
    engines: {node: '>=12'}
    cpu: [ia32]
    os: [win32]

  '@esbuild/win32-ia32@0.25.4':
    resolution: {integrity: sha512-i1sW+1i+oWvQzSgfRcxxG2k4I9n3O9NRqy8U+uugaT2Dy7kLO9Y7wI72haOahxceMX8hZAzgGou1FhndRldxRg==}
    engines: {node: '>=18'}
    cpu: [ia32]
    os: [win32]

  '@esbuild/win32-x64@0.21.5':
    resolution: {integrity: sha512-tQd/1efJuzPC6rCFwEvLtci/xNFcTZknmXs98FYDfGE4wP9ClFV98nyKrzJKVPMhdDnjzLhdUyMX4PsQAPjwIw==}
    engines: {node: '>=12'}
    cpu: [x64]
    os: [win32]

  '@esbuild/win32-x64@0.25.4':
    resolution: {integrity: sha512-nOT2vZNw6hJ+z43oP1SPea/G/6AbN6X+bGNhNuq8NtRHy4wsMhw765IKLNmnjek7GvjWBYQ8Q5VBoYTFg9y1UQ==}
    engines: {node: '>=18'}
    cpu: [x64]
    os: [win32]

  '@eslint-community/eslint-utils@4.7.0':
    resolution: {integrity: sha512-dyybb3AcajC7uha6CvhdVRJqaKyn7w2YKqKyAN37NKYgZT36w+iRb0Dymmc5qEJ549c/S31cMMSFd75bteCpCw==}
    engines: {node: ^12.22.0 || ^14.17.0 || >=16.0.0}
    peerDependencies:
      eslint: ^6.0.0 || ^7.0.0 || >=8.0.0

  '@eslint-community/regexpp@4.12.1':
    resolution: {integrity: sha512-CCZCDJuduB9OUkFkY2IgppNZMi2lBQgD2qzwXkEia16cge2pijY/aXi96CJMquDMn3nJdlPV1A5KrJEXwfLNzQ==}
    engines: {node: ^12.0.0 || ^14.0.0 || >=16.0.0}

  '@eslint/config-array@0.20.0':
    resolution: {integrity: sha512-fxlS1kkIjx8+vy2SjuCB94q3htSNrufYTXubwiBFeaQHbH6Ipi43gFJq2zCMt6PHhImH3Xmr0NksKDvchWlpQQ==}
    engines: {node: ^18.18.0 || ^20.9.0 || >=21.1.0}

  '@eslint/config-helpers@0.2.2':
    resolution: {integrity: sha512-+GPzk8PlG0sPpzdU5ZvIRMPidzAnZDl/s9L+y13iodqvb8leL53bTannOrQ/Im7UkpsmFU5Ily5U60LWixnmLg==}
    engines: {node: ^18.18.0 || ^20.9.0 || >=21.1.0}

  '@eslint/core@0.14.0':
    resolution: {integrity: sha512-qIbV0/JZr7iSDjqAc60IqbLdsj9GDt16xQtWD+B78d/HAlvysGdZZ6rpJHGAc2T0FQx1X6thsSPdnoiGKdNtdg==}
    engines: {node: ^18.18.0 || ^20.9.0 || >=21.1.0}

  '@eslint/eslintrc@3.3.1':
    resolution: {integrity: sha512-gtF186CXhIl1p4pJNGZw8Yc6RlshoePRvE0X91oPGb3vZ8pM3qOS9W9NGPat9LziaBV7XrJWGylNQXkGcnM3IQ==}
    engines: {node: ^18.18.0 || ^20.9.0 || >=21.1.0}

  '@eslint/js@9.28.0':
    resolution: {integrity: sha512-fnqSjGWd/CoIp4EXIxWVK/sHA6DOHN4+8Ix2cX5ycOY7LG0UY8nHCU5pIp2eaE1Mc7Qd8kHspYNzYXT2ojPLzg==}
    engines: {node: ^18.18.0 || ^20.9.0 || >=21.1.0}

  '@eslint/object-schema@2.1.6':
    resolution: {integrity: sha512-RBMg5FRL0I0gs51M/guSAj5/e14VQ4tpZnQNWwuDT66P14I43ItmPfIZRhO9fUVIPOAQXU47atlywZ/czoqFPA==}
    engines: {node: ^18.18.0 || ^20.9.0 || >=21.1.0}

  '@eslint/plugin-kit@0.3.1':
    resolution: {integrity: sha512-0J+zgWxHN+xXONWIyPWKFMgVuJoZuGiIFu8yxk7RJjxkzpGmyja5wRFqZIVtjDVOQpV+Rw0iOAjYPE2eQyjr0w==}
    engines: {node: ^18.18.0 || ^20.9.0 || >=21.1.0}

  '@ethereumjs/common@3.2.0':
    resolution: {integrity: sha512-pksvzI0VyLgmuEF2FA/JR/4/y6hcPq8OUail3/AvycBaW1d5VSauOZzqGvJ3RTmR4MU35lWE8KseKOsEhrFRBA==}

  '@ethereumjs/rlp@4.0.1':
    resolution: {integrity: sha512-tqsQiBQDQdmPWE1xkkBq4rlSW5QZpLOUJ5RJh2/9fug+q9tnUhuZoVLk7s0scUIKTOzEtR72DFBXI4WiZcMpvw==}
    engines: {node: '>=14'}
    hasBin: true

  '@ethereumjs/tx@4.2.0':
    resolution: {integrity: sha512-1nc6VO4jtFd172BbSnTnDQVr9IYBFl1y4xPzZdtkrkKIncBCkdbgfdRV+MiTkJYAtTxvV12GRZLqBFT1PNK6Yw==}
    engines: {node: '>=14'}

  '@ethereumjs/util@8.1.0':
    resolution: {integrity: sha512-zQ0IqbdX8FZ9aw11vP+dZkKDkS+kgIvQPHnSAXzP9pLu+Rfu3D3XEeLbicvoXJTYnhZiPmsZUxgdzXwNKxRPbA==}
    engines: {node: '>=14'}

  '@fastify/busboy@2.1.1':
    resolution: {integrity: sha512-vBZP4NlzfOlerQTnba4aqZoMhE/a9HY7HRqoOPaETQcSQuWEIyZMHGfVu6w9wGtGK5fED5qRs2DteVCjOH60sA==}
    engines: {node: '>=14'}

  '@floating-ui/core@1.7.1':
    resolution: {integrity: sha512-azI0DrjMMfIug/ExbBaeDVJXcY0a7EPvPjb2xAJPa4HeimBX+Z18HK8QQR3jb6356SnDDdxx+hinMLcJEDdOjw==}

  '@floating-ui/dom@1.7.1':
    resolution: {integrity: sha512-cwsmW/zyw5ltYTUeeYJ60CnQuPqmGwuGVhG9w0PRaRKkAyi38BT5CKrpIbb+jtahSwUl04cWzSx9ZOIxeS6RsQ==}

  '@floating-ui/react-dom@2.1.3':
    resolution: {integrity: sha512-huMBfiU9UnQ2oBwIhgzyIiSpVgvlDstU8CX0AF+wS+KzmYMs0J2a3GwuFHV1Lz+jlrQGeC1fF+Nv0QoumyV0bA==}
    peerDependencies:
      react: '>=16.8.0'
      react-dom: '>=16.8.0'

  '@floating-ui/utils@0.2.9':
    resolution: {integrity: sha512-MDWhGtE+eHw5JW7lq4qhc5yRLS11ERl1c7Z6Xd0a58DozHES6EnNNwUWbMiG4J9Cgj053Bhk8zvlhFYKVhULwg==}

  '@humanfs/core@0.19.1':
    resolution: {integrity: sha512-5DyQ4+1JEUzejeK1JGICcideyfUbGixgS9jNgex5nqkW+cY7WZhxBigmieN5Qnw9ZosSNVC9KQKyb+GUaGyKUA==}
    engines: {node: '>=18.18.0'}

  '@humanfs/node@0.16.6':
    resolution: {integrity: sha512-YuI2ZHQL78Q5HbhDiBA1X4LmYdXCKCMQIfw0pw7piHJwyREFebJUvrQN4cMssyES6x+vfUbx1CIpaQUKYdQZOw==}
    engines: {node: '>=18.18.0'}

  '@humanwhocodes/module-importer@1.0.1':
    resolution: {integrity: sha512-bxveV4V8v5Yb4ncFTT3rPSgZBOpCkjfK0y4oVVVJwIuDVBRMDXrPyXRL988i5ap9m9bnyEEjWfm5WkBmtffLfA==}
    engines: {node: '>=12.22'}

  '@humanwhocodes/retry@0.3.1':
    resolution: {integrity: sha512-JBxkERygn7Bv/GbN5Rv8Ul6LVknS+5Bp6RgDC/O8gEBU/yeH5Ui5C/OlWrTb6qct7LjjfT6Re2NxB0ln0yYybA==}
    engines: {node: '>=18.18'}

  '@humanwhocodes/retry@0.4.3':
    resolution: {integrity: sha512-bV0Tgo9K4hfPCek+aMAn81RppFKv2ySDQeMoSZuvTASywNTnVJCArCZE2FWqpvIatKu7VMRLWlR1EazvVhDyhQ==}
    engines: {node: '>=18.18'}

  '@img/sharp-darwin-arm64@0.33.5':
    resolution: {integrity: sha512-UT4p+iz/2H4twwAoLCqfA9UH5pI6DggwKEGuaPy7nCVQ8ZsiY5PIcrRvD1DzuY3qYL07NtIQcWnBSY/heikIFQ==}
    engines: {node: ^18.17.0 || ^20.3.0 || >=21.0.0}
    cpu: [arm64]
    os: [darwin]

  '@img/sharp-darwin-x64@0.33.5':
    resolution: {integrity: sha512-fyHac4jIc1ANYGRDxtiqelIbdWkIuQaI84Mv45KvGRRxSAa7o7d1ZKAOBaYbnepLC1WqxfpimdeWfvqqSGwR2Q==}
    engines: {node: ^18.17.0 || ^20.3.0 || >=21.0.0}
    cpu: [x64]
    os: [darwin]

  '@img/sharp-libvips-darwin-arm64@1.0.4':
    resolution: {integrity: sha512-XblONe153h0O2zuFfTAbQYAX2JhYmDHeWikp1LM9Hul9gVPjFY427k6dFEcOL72O01QxQsWi761svJ/ev9xEDg==}
    cpu: [arm64]
    os: [darwin]

  '@img/sharp-libvips-darwin-x64@1.0.4':
    resolution: {integrity: sha512-xnGR8YuZYfJGmWPvmlunFaWJsb9T/AO2ykoP3Fz/0X5XV2aoYBPkX6xqCQvUTKKiLddarLaxpzNe+b1hjeWHAQ==}
    cpu: [x64]
    os: [darwin]

  '@img/sharp-libvips-linux-arm64@1.0.4':
    resolution: {integrity: sha512-9B+taZ8DlyyqzZQnoeIvDVR/2F4EbMepXMc/NdVbkzsJbzkUjhXv/70GQJ7tdLA4YJgNP25zukcxpX2/SueNrA==}
    cpu: [arm64]
    os: [linux]

  '@img/sharp-libvips-linux-arm@1.0.5':
    resolution: {integrity: sha512-gvcC4ACAOPRNATg/ov8/MnbxFDJqf/pDePbBnuBDcjsI8PssmjoKMAz4LtLaVi+OnSb5FK/yIOamqDwGmXW32g==}
    cpu: [arm]
    os: [linux]

  '@img/sharp-libvips-linux-s390x@1.0.4':
    resolution: {integrity: sha512-u7Wz6ntiSSgGSGcjZ55im6uvTrOxSIS8/dgoVMoiGE9I6JAfU50yH5BoDlYA1tcuGS7g/QNtetJnxA6QEsCVTA==}
    cpu: [s390x]
    os: [linux]

  '@img/sharp-libvips-linux-x64@1.0.4':
    resolution: {integrity: sha512-MmWmQ3iPFZr0Iev+BAgVMb3ZyC4KeFc3jFxnNbEPas60e1cIfevbtuyf9nDGIzOaW9PdnDciJm+wFFaTlj5xYw==}
    cpu: [x64]
    os: [linux]

  '@img/sharp-libvips-linuxmusl-arm64@1.0.4':
    resolution: {integrity: sha512-9Ti+BbTYDcsbp4wfYib8Ctm1ilkugkA/uscUn6UXK1ldpC1JjiXbLfFZtRlBhjPZ5o1NCLiDbg8fhUPKStHoTA==}
    cpu: [arm64]
    os: [linux]

  '@img/sharp-libvips-linuxmusl-x64@1.0.4':
    resolution: {integrity: sha512-viYN1KX9m+/hGkJtvYYp+CCLgnJXwiQB39damAO7WMdKWlIhmYTfHjwSbQeUK/20vY154mwezd9HflVFM1wVSw==}
    cpu: [x64]
    os: [linux]

  '@img/sharp-linux-arm64@0.33.5':
    resolution: {integrity: sha512-JMVv+AMRyGOHtO1RFBiJy/MBsgz0x4AWrT6QoEVVTyh1E39TrCUpTRI7mx9VksGX4awWASxqCYLCV4wBZHAYxA==}
    engines: {node: ^18.17.0 || ^20.3.0 || >=21.0.0}
    cpu: [arm64]
    os: [linux]

  '@img/sharp-linux-arm@0.33.5':
    resolution: {integrity: sha512-JTS1eldqZbJxjvKaAkxhZmBqPRGmxgu+qFKSInv8moZ2AmT5Yib3EQ1c6gp493HvrvV8QgdOXdyaIBrhvFhBMQ==}
    engines: {node: ^18.17.0 || ^20.3.0 || >=21.0.0}
    cpu: [arm]
    os: [linux]

  '@img/sharp-linux-s390x@0.33.5':
    resolution: {integrity: sha512-y/5PCd+mP4CA/sPDKl2961b+C9d+vPAveS33s6Z3zfASk2j5upL6fXVPZi7ztePZ5CuH+1kW8JtvxgbuXHRa4Q==}
    engines: {node: ^18.17.0 || ^20.3.0 || >=21.0.0}
    cpu: [s390x]
    os: [linux]

  '@img/sharp-linux-x64@0.33.5':
    resolution: {integrity: sha512-opC+Ok5pRNAzuvq1AG0ar+1owsu842/Ab+4qvU879ippJBHvyY5n2mxF1izXqkPYlGuP/M556uh53jRLJmzTWA==}
    engines: {node: ^18.17.0 || ^20.3.0 || >=21.0.0}
    cpu: [x64]
    os: [linux]

  '@img/sharp-linuxmusl-arm64@0.33.5':
    resolution: {integrity: sha512-XrHMZwGQGvJg2V/oRSUfSAfjfPxO+4DkiRh6p2AFjLQztWUuY/o8Mq0eMQVIY7HJ1CDQUJlxGGZRw1a5bqmd1g==}
    engines: {node: ^18.17.0 || ^20.3.0 || >=21.0.0}
    cpu: [arm64]
    os: [linux]

  '@img/sharp-linuxmusl-x64@0.33.5':
    resolution: {integrity: sha512-WT+d/cgqKkkKySYmqoZ8y3pxx7lx9vVejxW/W4DOFMYVSkErR+w7mf2u8m/y4+xHe7yY9DAXQMWQhpnMuFfScw==}
    engines: {node: ^18.17.0 || ^20.3.0 || >=21.0.0}
    cpu: [x64]
    os: [linux]

  '@img/sharp-wasm32@0.33.5':
    resolution: {integrity: sha512-ykUW4LVGaMcU9lu9thv85CbRMAwfeadCJHRsg2GmeRa/cJxsVY9Rbd57JcMxBkKHag5U/x7TSBpScF4U8ElVzg==}
    engines: {node: ^18.17.0 || ^20.3.0 || >=21.0.0}
    cpu: [wasm32]

  '@img/sharp-win32-ia32@0.33.5':
    resolution: {integrity: sha512-T36PblLaTwuVJ/zw/LaH0PdZkRz5rd3SmMHX8GSmR7vtNSP5Z6bQkExdSK7xGWyxLw4sUknBuugTelgw2faBbQ==}
    engines: {node: ^18.17.0 || ^20.3.0 || >=21.0.0}
    cpu: [ia32]
    os: [win32]

  '@img/sharp-win32-x64@0.33.5':
    resolution: {integrity: sha512-MpY/o8/8kj+EcnxwvrP4aTJSWw/aZ7JIGR4aBeZkZw5B7/Jn+tY9/VNwtcoGmdT7GfggGIU4kygOMSbYnOrAbg==}
    engines: {node: ^18.17.0 || ^20.3.0 || >=21.0.0}
    cpu: [x64]
    os: [win32]

  '@isaacs/cliui@8.0.2':
    resolution: {integrity: sha512-O8jcjabXaleOG9DQ0+ARXWZBTfnP4WNAqzuiJK7ll44AmxGKv/J2M4TPjxjY3znBCfvBXFzucm1twdyFybFqEA==}
    engines: {node: '>=12'}

  '@jridgewell/gen-mapping@0.3.8':
    resolution: {integrity: sha512-imAbBGkb+ebQyxKgzv5Hu2nmROxoDOXHh80evxdoXNOrvAnVx7zimzc1Oo5h9RlfV4vPXaE2iM5pOFbvOCClWA==}
    engines: {node: '>=6.0.0'}

  '@jridgewell/resolve-uri@3.1.2':
    resolution: {integrity: sha512-bRISgCIjP20/tbWSPWMEi54QVPRZExkuD9lJL+UIxUKtwVJA8wW1Trb1jMs1RFXo1CBTNZ/5hpC9QvmKWdopKw==}
    engines: {node: '>=6.0.0'}

  '@jridgewell/set-array@1.2.1':
    resolution: {integrity: sha512-R8gLRTZeyp03ymzP/6Lil/28tGeGEzhx1q2k703KGWRAI1VdvPIXdG70VJc2pAMw3NA6JKL5hhFu1sJX0Mnn/A==}
    engines: {node: '>=6.0.0'}

  '@jridgewell/source-map@0.3.6':
    resolution: {integrity: sha512-1ZJTZebgqllO79ue2bm3rIGud/bOe0pP5BjSRCRxxYkEZS8STV7zN84UBbiYu7jy+eCKSnVIUgoWWE/tt+shMQ==}

  '@jridgewell/sourcemap-codec@1.5.0':
    resolution: {integrity: sha512-gv3ZRaISU3fjPAgNsriBRqGWQL6quFx04YMPW/zD8XMLsU32mhCCbfbO6KZFLjvYpCZ8zyDEgqsgf+PwPaM7GQ==}

  '@jridgewell/trace-mapping@0.3.25':
    resolution: {integrity: sha512-vNk6aEwybGtawWmy/PzwnGDOjCkLWSD2wqvjGGAgOAwCGWySYXfYoxt00IJkTF+8Lb57DwOb3Aa0o9CApepiYQ==}

  '@jridgewell/trace-mapping@0.3.9':
    resolution: {integrity: sha512-3Belt6tdc8bPgAtbcmdtNJlirVoTmEb5e2gC94PnkwEW9jI6CAHUeoG85tjWP5WquqfavoMtMwiG4P926ZKKuQ==}

  '@lit-labs/ssr-dom-shim@1.3.0':
    resolution: {integrity: sha512-nQIWonJ6eFAvUUrSlwyHDm/aE8PBDu5kRpL0vHMg6K8fK3Diq1xdPjTnsJSwxABhaZ+5eBi1btQB5ShUTKo4nQ==}

  '@lit/reactive-element@2.1.0':
    resolution: {integrity: sha512-L2qyoZSQClcBmq0qajBVbhYEcG6iK0XfLn66ifLe/RfC0/ihpc+pl0Wdn8bJ8o+hj38cG0fGXRgSS20MuXn7qA==}

  '@metamask/eth-json-rpc-provider@1.0.1':
    resolution: {integrity: sha512-whiUMPlAOrVGmX8aKYVPvlKyG4CpQXiNNyt74vE1xb5sPvmx5oA7B/kOi/JdBvhGQq97U1/AVdXEdk2zkP8qyA==}
    engines: {node: '>=14.0.0'}

  '@metamask/json-rpc-engine@7.3.3':
    resolution: {integrity: sha512-dwZPq8wx9yV3IX2caLi9q9xZBw2XeIoYqdyihDDDpuHVCEiqadJLwqM3zy+uwf6F1QYQ65A8aOMQg1Uw7LMLNg==}
    engines: {node: '>=16.0.0'}

  '@metamask/json-rpc-engine@8.0.2':
    resolution: {integrity: sha512-IoQPmql8q7ABLruW7i4EYVHWUbF74yrp63bRuXV5Zf9BQwcn5H9Ww1eLtROYvI1bUXwOiHZ6qT5CWTrDc/t/AA==}
    engines: {node: '>=16.0.0'}

  '@metamask/json-rpc-middleware-stream@7.0.2':
    resolution: {integrity: sha512-yUdzsJK04Ev98Ck4D7lmRNQ8FPioXYhEUZOMS01LXW8qTvPGiRVXmVltj2p4wrLkh0vW7u6nv0mNl5xzC5Qmfg==}
    engines: {node: '>=16.0.0'}

  '@metamask/object-multiplex@2.1.0':
    resolution: {integrity: sha512-4vKIiv0DQxljcXwfpnbsXcfa5glMj5Zg9mqn4xpIWqkv6uJ2ma5/GtUfLFSxhlxnR8asRMv8dDmWya1Tc1sDFA==}
    engines: {node: ^16.20 || ^18.16 || >=20}

  '@metamask/onboarding@1.0.1':
    resolution: {integrity: sha512-FqHhAsCI+Vacx2qa5mAFcWNSrTcVGMNjzxVgaX8ECSny/BJ9/vgXP9V7WF/8vb9DltPeQkxr+Fnfmm6GHfmdTQ==}

  '@metamask/providers@16.1.0':
    resolution: {integrity: sha512-znVCvux30+3SaUwcUGaSf+pUckzT5ukPRpcBmy+muBLC0yaWnBcvDqGfcsw6CBIenUdFrVoAFa8B6jsuCY/a+g==}
    engines: {node: ^18.18 || >=20}

  '@metamask/rpc-errors@6.4.0':
    resolution: {integrity: sha512-1ugFO1UoirU2esS3juZanS/Fo8C8XYocCuBpfZI5N7ECtoG+zu0wF+uWZASik6CkO6w9n/Iebt4iI4pT0vptpg==}
    engines: {node: '>=16.0.0'}

  '@metamask/safe-event-emitter@2.0.0':
    resolution: {integrity: sha512-/kSXhY692qiV1MXu6EeOZvg5nECLclxNXcKCxJ3cXQgYuRymRHpdx/t7JXfsK+JLjwA1e1c1/SBrlQYpusC29Q==}

  '@metamask/safe-event-emitter@3.1.2':
    resolution: {integrity: sha512-5yb2gMI1BDm0JybZezeoX/3XhPDOtTbcFvpTXM9kxsoZjPZFh4XciqRbpD6N86HYZqWDhEaKUDuOyR0sQHEjMA==}
    engines: {node: '>=12.0.0'}

  '@metamask/sdk-communication-layer@0.32.0':
    resolution: {integrity: sha512-dmj/KFjMi1fsdZGIOtbhxdg3amxhKL/A5BqSU4uh/SyDKPub/OT+x5pX8bGjpTL1WPWY/Q0OIlvFyX3VWnT06Q==}
    peerDependencies:
      cross-fetch: ^4.0.0
      eciesjs: '*'
      eventemitter2: ^6.4.9
      readable-stream: ^3.6.2
      socket.io-client: ^4.5.1

  '@metamask/sdk-install-modal-web@0.32.0':
    resolution: {integrity: sha512-TFoktj0JgfWnQaL3yFkApqNwcaqJ+dw4xcnrJueMP3aXkSNev2Ido+WVNOg4IIMxnmOrfAC9t0UJ0u/dC9MjOQ==}

  '@metamask/sdk@0.32.0':
    resolution: {integrity: sha512-WmGAlP1oBuD9hk4CsdlG1WJFuPtYJY+dnTHJMeCyohTWD2GgkcLMUUuvu9lO1/NVzuOoSi1OrnjbuY1O/1NZ1g==}

  '@metamask/superstruct@3.2.1':
    resolution: {integrity: sha512-fLgJnDOXFmuVlB38rUN5SmU7hAFQcCjrg3Vrxz67KTY7YHFnSNEKvX4avmEBdOI0yTCxZjwMCFEqsC8k2+Wd3g==}
    engines: {node: '>=16.0.0'}

  '@metamask/utils@5.0.2':
    resolution: {integrity: sha512-yfmE79bRQtnMzarnKfX7AEJBwFTxvTyw3nBQlu/5rmGXrjAeAMltoGxO62TFurxrQAFMNa/fEjIHNvungZp0+g==}
    engines: {node: '>=14.0.0'}

  '@metamask/utils@8.5.0':
    resolution: {integrity: sha512-I6bkduevXb72TIM9q2LRO63JSsF9EXduh3sBr9oybNX2hNNpr/j1tEjXrsG0Uabm4MJ1xkGAQEMwifvKZIkyxQ==}
    engines: {node: '>=16.0.0'}

  '@metamask/utils@9.3.0':
    resolution: {integrity: sha512-w8CVbdkDrVXFJbfBSlDfafDR6BAkpDmv1bC1UJVCoVny5tW2RKAdn9i68Xf7asYT4TnUhl/hN4zfUiKQq9II4g==}
    engines: {node: '>=16.0.0'}

  '@mui/core-downloads-tracker@7.1.1':
    resolution: {integrity: sha512-yBckQs4aQ8mqukLnPC6ivIRv6guhaXi8snVl00VtyojBbm+l6VbVhyTSZ68Abcx7Ah8B+GZhrB7BOli+e+9LkQ==}

  '@mui/icons-material@7.1.1':
    resolution: {integrity: sha512-X37+Yc8QpEnl0sYmz+WcLFy2dWgNRzbswDzLPXG7QU1XDVlP5TPp1HXjdmCupOWLL/I9m1fyhcyZl8/HPpp/Cg==}
    engines: {node: '>=14.0.0'}
    peerDependencies:
      '@mui/material': ^7.1.1
      '@types/react': ^17.0.0 || ^18.0.0 || ^19.0.0
      react: ^17.0.0 || ^18.0.0 || ^19.0.0
    peerDependenciesMeta:
      '@types/react':
        optional: true

  '@mui/material@7.1.1':
    resolution: {integrity: sha512-mTpdmdZCaHCGOH3SrYM41+XKvNL0iQfM9KlYgpSjgadXx/fEKhhvOktxm8++Xw6FFeOHoOiV+lzOI8X1rsv71A==}
    engines: {node: '>=14.0.0'}
    peerDependencies:
      '@emotion/react': ^11.5.0
      '@emotion/styled': ^11.3.0
      '@mui/material-pigment-css': ^7.1.1
      '@types/react': ^17.0.0 || ^18.0.0 || ^19.0.0
      react: ^17.0.0 || ^18.0.0 || ^19.0.0
      react-dom: ^17.0.0 || ^18.0.0 || ^19.0.0
    peerDependenciesMeta:
      '@emotion/react':
        optional: true
      '@emotion/styled':
        optional: true
      '@mui/material-pigment-css':
        optional: true
      '@types/react':
        optional: true

  '@mui/private-theming@7.1.1':
    resolution: {integrity: sha512-M8NbLUx+armk2ZuaxBkkMk11ultnWmrPlN0Xe3jUEaBChg/mcxa5HWIWS1EE4DF36WRACaAHVAvyekWlDQf0PQ==}
    engines: {node: '>=14.0.0'}
    peerDependencies:
      '@types/react': ^17.0.0 || ^18.0.0 || ^19.0.0
      react: ^17.0.0 || ^18.0.0 || ^19.0.0
    peerDependenciesMeta:
      '@types/react':
        optional: true

  '@mui/styled-engine@7.1.1':
    resolution: {integrity: sha512-R2wpzmSN127j26HrCPYVQ53vvMcT5DaKLoWkrfwUYq3cYytL6TQrCH8JBH3z79B6g4nMZZVoaXrxO757AlShaw==}
    engines: {node: '>=14.0.0'}
    peerDependencies:
      '@emotion/react': ^11.4.1
      '@emotion/styled': ^11.3.0
      react: ^17.0.0 || ^18.0.0 || ^19.0.0
    peerDependenciesMeta:
      '@emotion/react':
        optional: true
      '@emotion/styled':
        optional: true

  '@mui/system@7.1.1':
    resolution: {integrity: sha512-Kj1uhiqnj4Zo7PDjAOghtXJtNABunWvhcRU0O7RQJ7WOxeynoH6wXPcilphV8QTFtkKaip8EiNJRiCD+B3eROA==}
    engines: {node: '>=14.0.0'}
    peerDependencies:
      '@emotion/react': ^11.5.0
      '@emotion/styled': ^11.3.0
      '@types/react': ^17.0.0 || ^18.0.0 || ^19.0.0
      react: ^17.0.0 || ^18.0.0 || ^19.0.0
    peerDependenciesMeta:
      '@emotion/react':
        optional: true
      '@emotion/styled':
        optional: true
      '@types/react':
        optional: true

  '@mui/types@7.4.3':
    resolution: {integrity: sha512-2UCEiK29vtiZTeLdS2d4GndBKacVyxGvReznGXGr+CzW/YhjIX+OHUdCIczZjzcRAgKBGmE9zCIgoV9FleuyRQ==}
    peerDependencies:
      '@types/react': ^17.0.0 || ^18.0.0 || ^19.0.0
    peerDependenciesMeta:
      '@types/react':
        optional: true

  '@mui/utils@7.1.1':
    resolution: {integrity: sha512-BkOt2q7MBYl7pweY2JWwfrlahhp+uGLR8S+EhiyRaofeRYUWL2YKbSGQvN4hgSN1i8poN0PaUiii1kEMrchvzg==}
    engines: {node: '>=14.0.0'}
    peerDependencies:
      '@types/react': ^17.0.0 || ^18.0.0 || ^19.0.0
      react: ^17.0.0 || ^18.0.0 || ^19.0.0
    peerDependenciesMeta:
      '@types/react':
        optional: true

  '@noble/ciphers@1.2.1':
    resolution: {integrity: sha512-rONPWMC7PeExE077uLE4oqWrZ1IvAfz3oH9LibVAcVCopJiA9R62uavnbEzdkVmJYI6M6Zgkbeb07+tWjlq2XA==}
    engines: {node: ^14.21.3 || >=16}

  '@noble/ciphers@1.3.0':
    resolution: {integrity: sha512-2I0gnIVPtfnMw9ee9h1dJG7tp81+8Ob3OJb3Mv37rx5L40/b0i7djjCVvGOVqc9AEIQyvyu1i6ypKdFw8R8gQw==}
    engines: {node: ^14.21.3 || >=16}

  '@noble/curves@1.4.2':
    resolution: {integrity: sha512-TavHr8qycMChk8UwMld0ZDRvatedkzWfH8IiaeGCfymOP5i0hSCozz9vHOL0nkwk7HRMlFnAiKpS2jrUmSybcw==}

  '@noble/curves@1.8.0':
    resolution: {integrity: sha512-j84kjAbzEnQHaSIhRPUmB3/eVXu2k3dKPl2LOrR8fSOIL+89U+7lV117EWHtq/GHM3ReGHM46iRBdZfpc4HRUQ==}
    engines: {node: ^14.21.3 || >=16}

  '@noble/curves@1.8.1':
    resolution: {integrity: sha512-warwspo+UYUPep0Q+vtdVB4Ugn8GGQj8iyB3gnRWsztmUHTI3S1nhdiWNsPUGL0vud7JlRRk1XEu7Lq1KGTnMQ==}
    engines: {node: ^14.21.3 || >=16}

  '@noble/curves@1.9.1':
    resolution: {integrity: sha512-k11yZxZg+t+gWvBbIswW0yoJlu8cHOC7dhunwOzoWH/mXGBiYyR4YY6hAEK/3EUs4UpB8la1RfdRpeGsFHkWsA==}
    engines: {node: ^14.21.3 || >=16}

  '@noble/hashes@1.4.0':
    resolution: {integrity: sha512-V1JJ1WTRUqHHrOSh597hURcMqVKVGL/ea3kv0gSnEdsEZ0/+VyPghM1lMNGc00z7CIQorSvbKpuJkxvuHbvdbg==}
    engines: {node: '>= 16'}

  '@noble/hashes@1.7.0':
    resolution: {integrity: sha512-HXydb0DgzTpDPwbVeDGCG1gIu7X6+AuU6Zl6av/E/KG8LMsvPntvq+w17CHRpKBmN6Ybdrt1eP3k4cj8DJa78w==}
    engines: {node: ^14.21.3 || >=16}

  '@noble/hashes@1.7.1':
    resolution: {integrity: sha512-B8XBPsn4vT/KJAGqDzbwztd+6Yte3P4V7iafm24bxgDe/mlRuK6xmWPuCNrKt2vDafZ8MfJLlchDG/vYafQEjQ==}
    engines: {node: ^14.21.3 || >=16}

  '@noble/hashes@1.8.0':
    resolution: {integrity: sha512-jCs9ldd7NwzpgXDIf6P3+NrHh9/sD6CQdxHyjQI+h/6rDNo88ypBxxz45UDuZHz9r3tNz7N/VInSVoVdtXEI4A==}
    engines: {node: ^14.21.3 || >=16}

  '@nodelib/fs.scandir@2.1.5':
    resolution: {integrity: sha512-vq24Bq3ym5HEQm2NKCr3yXDwjc7vTsEThRDnkp2DK9p1uqLR+DHurm/NOTo0KG7HYHU7eppKZj3MyqYuMBf62g==}
    engines: {node: '>= 8'}

  '@nodelib/fs.stat@2.0.5':
    resolution: {integrity: sha512-RkhPPp2zrqDAQA/2jNhnztcPAlv64XdhIp7a7454A5ovI7Bukxgt7MX7udwAu3zg1DcpPU0rz3VV1SeaqvY4+A==}
    engines: {node: '>= 8'}

  '@nodelib/fs.walk@1.2.8':
    resolution: {integrity: sha512-oGB+UxlgWcgQkgwo8GcEGwemoTFt3FIO9ababBmaGwXIoBKZ+GTy0pP185beGg7Llih/NSHSV2XAs1lnznocSg==}
    engines: {node: '>= 8'}

  '@paulmillr/qr@0.2.1':
    resolution: {integrity: sha512-IHnV6A+zxU7XwmKFinmYjUcwlyK9+xkG3/s9KcQhI9BjQKycrJ1JRO+FbNYPwZiPKW3je/DR0k7w8/gLa5eaxQ==}
    deprecated: 'The package is now available as "qr": npm install qr'

  '@pdf-lib/standard-fonts@1.0.0':
    resolution: {integrity: sha512-hU30BK9IUN/su0Mn9VdlVKsWBS6GyhVfqjwl1FjZN4TxP6cCw0jP2w7V3Hf5uX7M0AZJ16vey9yE0ny7Sa59ZA==}

  '@pdf-lib/upng@1.0.1':
    resolution: {integrity: sha512-dQK2FUMQtowVP00mtIksrlZhdFXQZPC+taih1q4CvPZ5vqdxR/LKBaFg0oAfzd1GlHZXXSPdQfzQnt+ViGvEIQ==}

  '@pkgjs/parseargs@0.11.0':
    resolution: {integrity: sha512-+1VkjdD0QBLPodGrJUeqarH8VAIvQODIbwh9XpP5Syisf7YoQgsJKPNFoqqLQlu+VQ/tVSshMR6loPMn8U+dPg==}
    engines: {node: '>=14'}

  '@popperjs/core@2.11.8':
    resolution: {integrity: sha512-P1st0aksCrn9sGZhp8GMYwBnQsbvAWsZAX44oXNNvLHGqAOcoVxmjZiohstwQ7SqKnbR47akdNi+uleWD8+g6A==}

  '@radix-ui/number@1.1.1':
    resolution: {integrity: sha512-MkKCwxlXTgz6CFoJx3pCwn07GKp36+aZyu/u2Ln2VrA5DcdyCZkASEDBTd8x5whTQQL5CiYf4prXKLcgQdv29g==}

  '@radix-ui/primitive@1.1.2':
    resolution: {integrity: sha512-XnbHrrprsNqZKQhStrSwgRUQzoCI1glLzdw79xiZPoofhGICeZRSQ3dIxAKH1gb3OHfNf4d6f+vAv3kil2eggA==}

  '@radix-ui/react-arrow@1.1.7':
    resolution: {integrity: sha512-F+M1tLhO+mlQaOWspE8Wstg+z6PwxwRd8oQ8IXceWz92kfAmalTRf0EjrouQeo7QssEPfCn05B4Ihs1K9WQ/7w==}
    peerDependencies:
      '@types/react': '*'
      '@types/react-dom': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
      react-dom: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true
      '@types/react-dom':
        optional: true

  '@radix-ui/react-collection@1.1.7':
    resolution: {integrity: sha512-Fh9rGN0MoI4ZFUNyfFVNU4y9LUz93u9/0K+yLgA2bwRojxM8JU1DyvvMBabnZPBgMWREAJvU2jjVzq+LrFUglw==}
    peerDependencies:
      '@types/react': '*'
      '@types/react-dom': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
      react-dom: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true
      '@types/react-dom':
        optional: true

  '@radix-ui/react-compose-refs@1.1.2':
    resolution: {integrity: sha512-z4eqJvfiNnFMHIIvXP3CY57y2WJs5g2v3X0zm9mEJkrkNv4rDxu+sg9Jh8EkXyeqBkB7SOcboo9dMVqhyrACIg==}
    peerDependencies:
      '@types/react': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true

  '@radix-ui/react-context@1.1.2':
    resolution: {integrity: sha512-jCi/QKUM2r1Ju5a3J64TH2A5SpKAgh0LpknyqdQ4m6DCV0xJ2HG1xARRwNGPQfi1SLdLWZ1OJz6F4OMBBNiGJA==}
    peerDependencies:
      '@types/react': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true

  '@radix-ui/react-dialog@1.1.14':
    resolution: {integrity: sha512-+CpweKjqpzTmwRwcYECQcNYbI8V9VSQt0SNFKeEBLgfucbsLssU6Ppq7wUdNXEGb573bMjFhVjKVll8rmV6zMw==}
    peerDependencies:
      '@types/react': '*'
      '@types/react-dom': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
      react-dom: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true
      '@types/react-dom':
        optional: true

  '@radix-ui/react-direction@1.1.1':
    resolution: {integrity: sha512-1UEWRX6jnOA2y4H5WczZ44gOOjTEmlqv1uNW4GAJEO5+bauCBhv8snY65Iw5/VOS/ghKN9gr2KjnLKxrsvoMVw==}
    peerDependencies:
      '@types/react': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true

  '@radix-ui/react-dismissable-layer@1.1.10':
    resolution: {integrity: sha512-IM1zzRV4W3HtVgftdQiiOmA0AdJlCtMLe00FXaHwgt3rAnNsIyDqshvkIW3hj/iu5hu8ERP7KIYki6NkqDxAwQ==}
    peerDependencies:
      '@types/react': '*'
      '@types/react-dom': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
      react-dom: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true
      '@types/react-dom':
        optional: true

  '@radix-ui/react-dropdown-menu@2.1.15':
    resolution: {integrity: sha512-mIBnOjgwo9AH3FyKaSWoSu/dYj6VdhJ7frEPiGTeXCdUFHjl9h3mFh2wwhEtINOmYXWhdpf1rY2minFsmaNgVQ==}
    peerDependencies:
      '@types/react': '*'
      '@types/react-dom': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
      react-dom: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true
      '@types/react-dom':
        optional: true

  '@radix-ui/react-focus-guards@1.1.2':
    resolution: {integrity: sha512-fyjAACV62oPV925xFCrH8DR5xWhg9KYtJT4s3u54jxp+L/hbpTY2kIeEFFbFe+a/HCE94zGQMZLIpVTPVZDhaA==}
    peerDependencies:
      '@types/react': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true

  '@radix-ui/react-focus-scope@1.1.7':
    resolution: {integrity: sha512-t2ODlkXBQyn7jkl6TNaw/MtVEVvIGelJDCG41Okq/KwUsJBwQ4XVZsHAVUkK4mBv3ewiAS3PGuUWuY2BoK4ZUw==}
    peerDependencies:
      '@types/react': '*'
      '@types/react-dom': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
      react-dom: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true
      '@types/react-dom':
        optional: true

  '@radix-ui/react-id@1.1.1':
    resolution: {integrity: sha512-kGkGegYIdQsOb4XjsfM97rXsiHaBwco+hFI66oO4s9LU+PLAC5oJ7khdOVFxkhsmlbpUqDAvXw11CluXP+jkHg==}
    peerDependencies:
      '@types/react': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true

  '@radix-ui/react-menu@2.1.15':
    resolution: {integrity: sha512-tVlmA3Vb9n8SZSd+YSbuFR66l87Wiy4du+YE+0hzKQEANA+7cWKH1WgqcEX4pXqxUFQKrWQGHdvEfw00TjFiew==}
    peerDependencies:
      '@types/react': '*'
      '@types/react-dom': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
      react-dom: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true
      '@types/react-dom':
        optional: true

  '@radix-ui/react-popper@1.2.7':
    resolution: {integrity: sha512-IUFAccz1JyKcf/RjB552PlWwxjeCJB8/4KxT7EhBHOJM+mN7LdW+B3kacJXILm32xawcMMjb2i0cIZpo+f9kiQ==}
    peerDependencies:
      '@types/react': '*'
      '@types/react-dom': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
      react-dom: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true
      '@types/react-dom':
        optional: true

  '@radix-ui/react-portal@1.1.9':
    resolution: {integrity: sha512-bpIxvq03if6UNwXZ+HTK71JLh4APvnXntDc6XOX8UVq4XQOVl7lwok0AvIl+b8zgCw3fSaVTZMpAPPagXbKmHQ==}
    peerDependencies:
      '@types/react': '*'
      '@types/react-dom': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
      react-dom: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true
      '@types/react-dom':
        optional: true

  '@radix-ui/react-presence@1.1.4':
    resolution: {integrity: sha512-ueDqRbdc4/bkaQT3GIpLQssRlFgWaL/U2z/S31qRwwLWoxHLgry3SIfCwhxeQNbirEUXFa+lq3RL3oBYXtcmIA==}
    peerDependencies:
      '@types/react': '*'
      '@types/react-dom': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
      react-dom: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true
      '@types/react-dom':
        optional: true

  '@radix-ui/react-primitive@2.1.3':
    resolution: {integrity: sha512-m9gTwRkhy2lvCPe6QJp4d3G1TYEUHn/FzJUtq9MjH46an1wJU+GdoGC5VLof8RX8Ft/DlpshApkhswDLZzHIcQ==}
    peerDependencies:
      '@types/react': '*'
      '@types/react-dom': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
      react-dom: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true
      '@types/react-dom':
        optional: true

  '@radix-ui/react-radio-group@1.3.7':
    resolution: {integrity: sha512-9w5XhD0KPOrm92OTTE0SysH3sYzHsSTHNvZgUBo/VZ80VdYyB5RneDbc0dKpURS24IxkoFRu/hI0i4XyfFwY6g==}
    peerDependencies:
      '@types/react': '*'
      '@types/react-dom': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
      react-dom: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true
      '@types/react-dom':
        optional: true

  '@radix-ui/react-roving-focus@1.1.10':
    resolution: {integrity: sha512-dT9aOXUen9JSsxnMPv/0VqySQf5eDQ6LCk5Sw28kamz8wSOW2bJdlX2Bg5VUIIcV+6XlHpWTIuTPCf/UNIyq8Q==}
    peerDependencies:
      '@types/react': '*'
      '@types/react-dom': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
      react-dom: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true
      '@types/react-dom':
        optional: true

  '@radix-ui/react-scroll-area@1.2.9':
    resolution: {integrity: sha512-YSjEfBXnhUELsO2VzjdtYYD4CfQjvao+lhhrX5XsHD7/cyUNzljF1FHEbgTPN7LH2MClfwRMIsYlqTYpKTTe2A==}
    peerDependencies:
      '@types/react': '*'
      '@types/react-dom': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
      react-dom: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true
      '@types/react-dom':
        optional: true

  '@radix-ui/react-separator@1.1.7':
    resolution: {integrity: sha512-0HEb8R9E8A+jZjvmFCy/J4xhbXy3TV+9XSnGJ3KvTtjlIUy/YQ/p6UYZvi7YbeoeXdyU9+Y3scizK6hkY37baA==}
    peerDependencies:
      '@types/react': '*'
      '@types/react-dom': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
      react-dom: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true
      '@types/react-dom':
        optional: true

  '@radix-ui/react-slot@1.2.3':
    resolution: {integrity: sha512-aeNmHnBxbi2St0au6VBVC7JXFlhLlOnvIIlePNniyUNAClzmtAUEY8/pBiK3iHjufOlwA+c20/8jngo7xcrg8A==}
    peerDependencies:
      '@types/react': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true

  '@radix-ui/react-switch@1.2.5':
    resolution: {integrity: sha512-5ijLkak6ZMylXsaImpZ8u4Rlf5grRmoc0p0QeX9VJtlrM4f5m3nCTX8tWga/zOA8PZYIR/t0p2Mnvd7InrJ6yQ==}
    peerDependencies:
      '@types/react': '*'
      '@types/react-dom': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
      react-dom: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true
      '@types/react-dom':
        optional: true

  '@radix-ui/react-tabs@1.1.12':
    resolution: {integrity: sha512-GTVAlRVrQrSw3cEARM0nAx73ixrWDPNZAruETn3oHCNP6SbZ/hNxdxp+u7VkIEv3/sFoLq1PfcHrl7Pnp0CDpw==}
    peerDependencies:
      '@types/react': '*'
      '@types/react-dom': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
      react-dom: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true
      '@types/react-dom':
        optional: true

  '@radix-ui/react-use-callback-ref@1.1.1':
    resolution: {integrity: sha512-FkBMwD+qbGQeMu1cOHnuGB6x4yzPjho8ap5WtbEJ26umhgqVXbhekKUQO+hZEL1vU92a3wHwdp0HAcqAUF5iDg==}
    peerDependencies:
      '@types/react': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true

  '@radix-ui/react-use-controllable-state@1.2.2':
    resolution: {integrity: sha512-BjasUjixPFdS+NKkypcyyN5Pmg83Olst0+c6vGov0diwTEo6mgdqVR6hxcEgFuh4QrAs7Rc+9KuGJ9TVCj0Zzg==}
    peerDependencies:
      '@types/react': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true

  '@radix-ui/react-use-effect-event@0.0.2':
    resolution: {integrity: sha512-Qp8WbZOBe+blgpuUT+lw2xheLP8q0oatc9UpmiemEICxGvFLYmHm9QowVZGHtJlGbS6A6yJ3iViad/2cVjnOiA==}
    peerDependencies:
      '@types/react': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true

  '@radix-ui/react-use-escape-keydown@1.1.1':
    resolution: {integrity: sha512-Il0+boE7w/XebUHyBjroE+DbByORGR9KKmITzbR7MyQ4akpORYP/ZmbhAr0DG7RmmBqoOnZdy2QlvajJ2QA59g==}
    peerDependencies:
      '@types/react': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true

  '@radix-ui/react-use-layout-effect@1.1.1':
    resolution: {integrity: sha512-RbJRS4UWQFkzHTTwVymMTUv8EqYhOp8dOOviLj2ugtTiXRaRQS7GLGxZTLL1jWhMeoSCf5zmcZkqTl9IiYfXcQ==}
    peerDependencies:
      '@types/react': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true

  '@radix-ui/react-use-previous@1.1.1':
    resolution: {integrity: sha512-2dHfToCj/pzca2Ck724OZ5L0EVrr3eHRNsG/b3xQJLA2hZpVCS99bLAX+hm1IHXDEnzU6by5z/5MIY794/a8NQ==}
    peerDependencies:
      '@types/react': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true

  '@radix-ui/react-use-rect@1.1.1':
    resolution: {integrity: sha512-QTYuDesS0VtuHNNvMh+CjlKJ4LJickCMUAqjlE3+j8w+RlRpwyX3apEQKGFzbZGdo7XNG1tXa+bQqIE7HIXT2w==}
    peerDependencies:
      '@types/react': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true

  '@radix-ui/react-use-size@1.1.1':
    resolution: {integrity: sha512-ewrXRDTAqAXlkl6t/fkXWNAhFX9I+CkKlw6zjEwk86RSPKwZr3xpBRso655aqYafwtnbpHLj6toFzmd6xdVptQ==}
    peerDependencies:
      '@types/react': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true

  '@radix-ui/rect@1.1.1':
    resolution: {integrity: sha512-HPwpGIzkl28mWyZqG52jiqDJ12waP11Pa1lGoiyUkIEuMLBP0oeK/C89esbXrxsky5we7dfd8U58nm0SgAWpVw==}

  '@remix-run/router@1.23.0':
    resolution: {integrity: sha512-O3rHJzAQKamUz1fvE0Qaw0xSFqsA/yafi2iqeE0pvdFtCO1viYx8QL6f3Ln/aCCTLxs68SLf0KPM9eSeM8yBnA==}
    engines: {node: '>=14.0.0'}

  '@reown/appkit-adapter-wagmi@1.7.8':
    resolution: {integrity: sha512-6W5/AILgHyKhy99d2+3N2aJOXmkuAjhItFkCi4RiAUC8TZQN3gUl9Nh2viCglnR5RL1Rb+w+Iwa/neNqh13cgg==}
    peerDependencies:
      '@wagmi/core': '>=2.16.7'
      viem: '>=2.29.0'
      wagmi: '>=2.15.2'

  '@reown/appkit-common@1.7.8':
    resolution: {integrity: sha512-ridIhc/x6JOp7KbDdwGKY4zwf8/iK8EYBl+HtWrruutSLwZyVi5P8WaZa+8iajL6LcDcDF7LoyLwMTym7SRuwQ==}

  '@reown/appkit-controllers@1.7.8':
    resolution: {integrity: sha512-IdXlJlivrlj6m63VsGLsjtPHHsTWvKGVzWIP1fXZHVqmK+rZCBDjCi9j267Rb9/nYRGHWBtlFQhO8dK35WfeDA==}

  '@reown/appkit-pay@1.7.8':
    resolution: {integrity: sha512-OSGQ+QJkXx0FEEjlpQqIhT8zGJKOoHzVnyy/0QFrl3WrQTjCzg0L6+i91Ad5Iy1zb6V5JjqtfIFpRVRWN4M3pw==}

  '@reown/appkit-polyfills@1.7.8':
    resolution: {integrity: sha512-W/kq786dcHHAuJ3IV2prRLEgD/2iOey4ueMHf1sIFjhhCGMynMkhsOhQMUH0tzodPqUgAC494z4bpIDYjwWXaA==}

  '@reown/appkit-scaffold-ui@1.7.8':
    resolution: {integrity: sha512-RCeHhAwOrIgcvHwYlNWMcIDibdI91waaoEYBGw71inE0kDB8uZbE7tE6DAXJmDkvl0qPh+DqlC4QbJLF1FVYdQ==}

  '@reown/appkit-ui@1.7.8':
    resolution: {integrity: sha512-1hjCKjf6FLMFzrulhl0Y9Vb9Fu4royE+SXCPSWh4VhZhWqlzUFc7kutnZKx8XZFVQH4pbBvY62SpRC93gqoHow==}

  '@reown/appkit-utils@1.7.8':
    resolution: {integrity: sha512-8X7UvmE8GiaoitCwNoB86pttHgQtzy4ryHZM9kQpvjQ0ULpiER44t1qpVLXNM4X35O0v18W0Dk60DnYRMH2WRw==}
    peerDependencies:
      valtio: 1.13.2

  '@reown/appkit-wallet@1.7.8':
    resolution: {integrity: sha512-kspz32EwHIOT/eg/ZQbFPxgXq0B/olDOj3YMu7gvLEFz4xyOFd/wgzxxAXkp5LbG4Cp++s/elh79rVNmVFdB9A==}

  '@reown/appkit@1.7.8':
    resolution: {integrity: sha512-51kTleozhA618T1UvMghkhKfaPcc9JlKwLJ5uV+riHyvSoWPKPRIa5A6M1Wano5puNyW0s3fwywhyqTHSilkaA==}

  '@rolldown/pluginutils@1.0.0-beta.9':
    resolution: {integrity: sha512-e9MeMtVWo186sgvFFJOPGy7/d2j2mZhLJIdVW0C/xDluuOvymEATqz6zKsP0ZmXGzQtqlyjz5sC1sYQUoJG98w==}

  '@rollup/rollup-android-arm-eabi@4.36.0':
    resolution: {integrity: sha512-jgrXjjcEwN6XpZXL0HUeOVGfjXhPyxAbbhD0BlXUB+abTOpbPiN5Wb3kOT7yb+uEtATNYF5x5gIfwutmuBA26w==}
    cpu: [arm]
    os: [android]

  '@rollup/rollup-android-arm64@4.36.0':
    resolution: {integrity: sha512-NyfuLvdPdNUfUNeYKUwPwKsE5SXa2J6bCt2LdB/N+AxShnkpiczi3tcLJrm5mA+eqpy0HmaIY9F6XCa32N5yzg==}
    cpu: [arm64]
    os: [android]

  '@rollup/rollup-darwin-arm64@4.36.0':
    resolution: {integrity: sha512-JQ1Jk5G4bGrD4pWJQzWsD8I1n1mgPXq33+/vP4sk8j/z/C2siRuxZtaUA7yMTf71TCZTZl/4e1bfzwUmFb3+rw==}
    cpu: [arm64]
    os: [darwin]

  '@rollup/rollup-darwin-x64@4.36.0':
    resolution: {integrity: sha512-6c6wMZa1lrtiRsbDziCmjE53YbTkxMYhhnWnSW8R/yqsM7a6mSJ3uAVT0t8Y/DGt7gxUWYuFM4bwWk9XCJrFKA==}
    cpu: [x64]
    os: [darwin]

  '@rollup/rollup-freebsd-arm64@4.36.0':
    resolution: {integrity: sha512-KXVsijKeJXOl8QzXTsA+sHVDsFOmMCdBRgFmBb+mfEb/7geR7+C8ypAml4fquUt14ZyVXaw2o1FWhqAfOvA4sg==}
    cpu: [arm64]
    os: [freebsd]

  '@rollup/rollup-freebsd-x64@4.36.0':
    resolution: {integrity: sha512-dVeWq1ebbvByI+ndz4IJcD4a09RJgRYmLccwlQ8bPd4olz3Y213uf1iwvc7ZaxNn2ab7bjc08PrtBgMu6nb4pQ==}
    cpu: [x64]
    os: [freebsd]

  '@rollup/rollup-linux-arm-gnueabihf@4.36.0':
    resolution: {integrity: sha512-bvXVU42mOVcF4le6XSjscdXjqx8okv4n5vmwgzcmtvFdifQ5U4dXFYaCB87namDRKlUL9ybVtLQ9ztnawaSzvg==}
    cpu: [arm]
    os: [linux]

  '@rollup/rollup-linux-arm-musleabihf@4.36.0':
    resolution: {integrity: sha512-JFIQrDJYrxOnyDQGYkqnNBtjDwTgbasdbUiQvcU8JmGDfValfH1lNpng+4FWlhaVIR4KPkeddYjsVVbmJYvDcg==}
    cpu: [arm]
    os: [linux]

  '@rollup/rollup-linux-arm64-gnu@4.36.0':
    resolution: {integrity: sha512-KqjYVh3oM1bj//5X7k79PSCZ6CvaVzb7Qs7VMWS+SlWB5M8p3FqufLP9VNp4CazJ0CsPDLwVD9r3vX7Ci4J56A==}
    cpu: [arm64]
    os: [linux]

  '@rollup/rollup-linux-arm64-musl@4.36.0':
    resolution: {integrity: sha512-QiGnhScND+mAAtfHqeT+cB1S9yFnNQ/EwCg5yE3MzoaZZnIV0RV9O5alJAoJKX/sBONVKeZdMfO8QSaWEygMhw==}
    cpu: [arm64]
    os: [linux]

  '@rollup/rollup-linux-loongarch64-gnu@4.36.0':
    resolution: {integrity: sha512-1ZPyEDWF8phd4FQtTzMh8FQwqzvIjLsl6/84gzUxnMNFBtExBtpL51H67mV9xipuxl1AEAerRBgBwFNpkw8+Lg==}
    cpu: [loong64]
    os: [linux]

  '@rollup/rollup-linux-powerpc64le-gnu@4.36.0':
    resolution: {integrity: sha512-VMPMEIUpPFKpPI9GZMhJrtu8rxnp6mJR3ZzQPykq4xc2GmdHj3Q4cA+7avMyegXy4n1v+Qynr9fR88BmyO74tg==}
    cpu: [ppc64]
    os: [linux]

  '@rollup/rollup-linux-riscv64-gnu@4.36.0':
    resolution: {integrity: sha512-ttE6ayb/kHwNRJGYLpuAvB7SMtOeQnVXEIpMtAvx3kepFQeowVED0n1K9nAdraHUPJ5hydEMxBpIR7o4nrm8uA==}
    cpu: [riscv64]
    os: [linux]

  '@rollup/rollup-linux-s390x-gnu@4.36.0':
    resolution: {integrity: sha512-4a5gf2jpS0AIe7uBjxDeUMNcFmaRTbNv7NxI5xOCs4lhzsVyGR/0qBXduPnoWf6dGC365saTiwag8hP1imTgag==}
    cpu: [s390x]
    os: [linux]

  '@rollup/rollup-linux-x64-gnu@4.36.0':
    resolution: {integrity: sha512-5KtoW8UWmwFKQ96aQL3LlRXX16IMwyzMq/jSSVIIyAANiE1doaQsx/KRyhAvpHlPjPiSU/AYX/8m+lQ9VToxFQ==}
    cpu: [x64]
    os: [linux]

  '@rollup/rollup-linux-x64-musl@4.36.0':
    resolution: {integrity: sha512-sycrYZPrv2ag4OCvaN5js+f01eoZ2U+RmT5as8vhxiFz+kxwlHrsxOwKPSA8WyS+Wc6Epid9QeI/IkQ9NkgYyQ==}
    cpu: [x64]
    os: [linux]

  '@rollup/rollup-win32-arm64-msvc@4.36.0':
    resolution: {integrity: sha512-qbqt4N7tokFwwSVlWDsjfoHgviS3n/vZ8LK0h1uLG9TYIRuUTJC88E1xb3LM2iqZ/WTqNQjYrtmtGmrmmawB6A==}
    cpu: [arm64]
    os: [win32]

  '@rollup/rollup-win32-ia32-msvc@4.36.0':
    resolution: {integrity: sha512-t+RY0JuRamIocMuQcfwYSOkmdX9dtkr1PbhKW42AMvaDQa+jOdpUYysroTF/nuPpAaQMWp7ye+ndlmmthieJrQ==}
    cpu: [ia32]
    os: [win32]

  '@rollup/rollup-win32-x64-msvc@4.36.0':
    resolution: {integrity: sha512-aRXd7tRZkWLqGbChgcMMDEHjOKudo1kChb1Jt1IfR8cY/KIpgNviLeJy5FUb9IpSuQj8dU2fAYNMPW/hLKOSTw==}
    cpu: [x64]
    os: [win32]

  '@safe-global/safe-apps-provider@0.18.6':
    resolution: {integrity: sha512-4LhMmjPWlIO8TTDC2AwLk44XKXaK6hfBTWyljDm0HQ6TWlOEijVWNrt2s3OCVMSxlXAcEzYfqyu1daHZooTC2Q==}

  '@safe-global/safe-apps-sdk@9.1.0':
    resolution: {integrity: sha512-N5p/ulfnnA2Pi2M3YeWjULeWbjo7ei22JwU/IXnhoHzKq3pYCN6ynL9mJBOlvDVv892EgLPCWCOwQk/uBT2v0Q==}

  '@safe-global/safe-gateway-typescript-sdk@3.23.1':
    resolution: {integrity: sha512-6ORQfwtEJYpalCeVO21L4XXGSdbEMfyp2hEv6cP82afKXSwvse6d3sdelgaPWUxHIsFRkWvHDdzh8IyyKHZKxw==}
    engines: {node: '>=16'}

  '@scure/base@1.1.9':
    resolution: {integrity: sha512-8YKhl8GHiNI/pU2VMaofa2Tor7PJRAjwQLBBuilkJ9L5+13yVbC7JO/wS7piioAvPSwR3JKM1IJ/u4xQzbcXKg==}

  '@scure/base@1.2.6':
    resolution: {integrity: sha512-g/nm5FgUa//MCj1gV09zTJTaM6KBAHqLN907YVQqf7zC49+DcO4B1so4ZX07Ef10Twr6nuqYEH9GEggFXA4Fmg==}

  '@scure/bip32@1.4.0':
    resolution: {integrity: sha512-sVUpc0Vq3tXCkDGYVWGIZTRfnvu8LoTDaev7vbwh0omSvVORONr960MQWdKqJDCReIEmTj3PAr73O3aoxz7OPg==}

  '@scure/bip32@1.6.2':
    resolution: {integrity: sha512-t96EPDMbtGgtb7onKKqxRLfE5g05k7uHnHRM2xdE6BP/ZmxaLtPek4J4KfVn/90IQNrU1IOAqMgiDtUdtbe3nw==}

  '@scure/bip32@1.7.0':
    resolution: {integrity: sha512-E4FFX/N3f4B80AKWp5dP6ow+flD1LQZo/w8UnLGYZO674jS6YnYeepycOOksv+vLPSpgN35wgKgy+ybfTb2SMw==}

  '@scure/bip39@1.3.0':
    resolution: {integrity: sha512-disdg7gHuTDZtY+ZdkmLpPCk7fxZSu3gBiEGuoC1XYxv9cGx3Z6cpTggCgW6odSOOIXCiDjuGejW+aJKCY/pIQ==}

  '@scure/bip39@1.5.4':
    resolution: {integrity: sha512-TFM4ni0vKvCfBpohoh+/lY05i9gRbSwXWngAsF4CABQxoaOHijxuaZ2R6cStDQ5CHtHO9aGJTr4ksVJASRRyMA==}

  '@scure/bip39@1.6.0':
    resolution: {integrity: sha512-+lF0BbLiJNwVlev4eKelw1WWLaiKXw7sSl8T6FvBlWkdX+94aGJ4o8XjUdlyhTCjd8c+B3KT3JfS8P0bLRNU6A==}

  '@socket.io/component-emitter@3.1.2':
    resolution: {integrity: sha512-9BCxFwvbGg/RsZK9tjXd8s4UcwR0MWeFQ1XEKIQVVvAGJyINdrqKMcTRyLoK8Rse1GjzLV9cwjWV1olXRWEXVA==}

  '@tailwindcss/forms@0.5.10':
    resolution: {integrity: sha512-utI1ONF6uf/pPNO68kmN1b8rEwNXv3czukalo8VtJH8ksIkZXr3Q3VYudZLkCsDd4Wku120uF02hYK25XGPorw==}
    peerDependencies:
      tailwindcss: '>=3.0.0 || >= 3.0.0-alpha.1 || >= 4.0.0-alpha.20 || >= 4.0.0-beta.1'

  '@tailwindcss/typography@0.5.16':
    resolution: {integrity: sha512-0wDLwCVF5V3x3b1SGXPCDcdsbDHMBe+lkFzBRaHeLvNi+nrrnZ1lA18u+OTWO8iSWU2GxUOCvlXtDuqftc1oiA==}
    peerDependencies:
      tailwindcss: '>=3.0.0 || insiders || >=4.0.0-alpha.20 || >=4.0.0-beta.1'

  '@tanstack/query-core@5.80.6':
    resolution: {integrity: sha512-nl7YxT/TAU+VTf+e2zTkObGTyY8YZBMnbgeA1ee66lIVqzKlYursAII6z5t0e6rXgwUMJSV4dshBTNacNpZHbQ==}

  '@tanstack/query-devtools@5.76.0':
    resolution: {integrity: sha512-1p92nqOBPYVqVDU0Ua5nzHenC6EGZNrLnB2OZphYw8CNA1exuvI97FVgIKON7Uug3uQqvH/QY8suUKpQo8qHNQ==}

  '@tanstack/react-query-devtools@5.77.2':
    resolution: {integrity: sha512-TxB9boB0dmTJByAfh36kbhvohNHZiPJe+m+PCnbnfL+gdDHJbp174S6BwbU2dHx980njeAKFmWz8tgHNKG3itw==}
    peerDependencies:
      '@tanstack/react-query': ^5.77.2
      react: ^18 || ^19

  '@tanstack/react-query@5.80.6':
    resolution: {integrity: sha512-izX+5CnkpON3NQGcEm3/d7LfFQNo9ZpFtX2QsINgCYK9LT2VCIdi8D3bMaMSNhrAJCznRoAkFic76uvLroALBw==}
    peerDependencies:
      react: ^18 || ^19

  '@testing-library/dom@9.3.4':
    resolution: {integrity: sha512-FlS4ZWlp97iiNWig0Muq8p+3rVDjRiYE+YKGbAqXOu9nwJFFOdL00kFpz42M+4huzYi86vAK1sOOfyOG45muIQ==}
    engines: {node: '>=14'}

  '@testing-library/jest-dom@6.6.3':
    resolution: {integrity: sha512-IteBhl4XqYNkM54f4ejhLRJiZNqcSCoXUOG2CPK7qbD322KjQozM4kHQOfkG2oln9b9HTYqs+Sae8vBATubxxA==}
    engines: {node: '>=14', npm: '>=6', yarn: '>=1'}

  '@testing-library/react@14.3.1':
    resolution: {integrity: sha512-H99XjUhWQw0lTgyMN05W3xQG1Nh4lq574D8keFf1dDoNTJgp66VbJozRaczoF+wsiaPJNt/TcnfpLGufGxSrZQ==}
    engines: {node: '>=14'}
    peerDependencies:
      react: ^18.0.0
      react-dom: ^18.0.0

  '@tsconfig/node10@1.0.11':
    resolution: {integrity: sha512-DcRjDCujK/kCk/cUe8Xz8ZSpm8mS3mNNpta+jGCA6USEDfktlNvm1+IuZ9eTcDbNk41BHwpHHeW+N1lKCz4zOw==}

  '@tsconfig/node12@1.0.11':
    resolution: {integrity: sha512-cqefuRsh12pWyGsIoBKJA9luFu3mRxCA+ORZvA4ktLSzIuCUtWVxGIuXigEwO5/ywWFMZ2QEGKWvkZG1zDMTag==}

  '@tsconfig/node14@1.0.3':
    resolution: {integrity: sha512-ysT8mhdixWK6Hw3i1V2AeRqZ5WfXg1G43mqoYlM2nc6388Fq5jcXyr5mRsqViLx/GJYdoL0bfXD8nmF+Zn/Iow==}

  '@tsconfig/node16@1.0.4':
    resolution: {integrity: sha512-vxhUy4J8lyeyinH7Azl1pdd43GJhZH/tP2weN8TntQblOY+A0XbT8DJk1/oCPuOOyg/Ja757rG0CgHcWC8OfMA==}

  '@types/aria-query@5.0.4':
    resolution: {integrity: sha512-rfT93uj5s0PRL7EzccGMs3brplhcrghnDoV26NqKhCAS1hVo+WdNsPvE/yb6ilfr5hi2MEk6d5EWJTKdxg8jVw==}

  '@types/babel__core@7.20.5':
    resolution: {integrity: sha512-qoQprZvz5wQFJwMDqeseRXWv3rqMvhgpbXFfVyWhbx9X47POIA6i/+dXefEmZKoAgOaTdaIgNSMqMIU61yRyzA==}

  '@types/babel__generator@7.6.8':
    resolution: {integrity: sha512-ASsj+tpEDsEiFr1arWrlN6V3mdfjRMZt6LtK/Vp/kreFLnr5QH5+DhvD5nINYZXzwJvXeGq+05iUXcAzVrqWtw==}

  '@types/babel__template@7.4.4':
    resolution: {integrity: sha512-h/NUaSyG5EyxBIp8YRxo4RMe2/qQgvyowRwVMzhYhBCONbW8PUsg4lkFMrhgZhUe5z3L3MiLDuvyJ/CaPa2A8A==}

  '@types/babel__traverse@7.20.6':
    resolution: {integrity: sha512-r1bzfrm0tomOI8g1SzvCaQHo6Lcv6zu0EA+W2kHrt8dyrHQxGzBBL4kdkzIS+jBMV+EYcMAEAqXqYaLJq5rOZg==}

  '@types/d3-array@3.2.1':
    resolution: {integrity: sha512-Y2Jn2idRrLzUfAKV2LyRImR+y4oa2AntrgID95SHJxuMUrkNXmanDSed71sRNZysveJVt1hLLemQZIady0FpEg==}

  '@types/d3-color@3.1.3':
    resolution: {integrity: sha512-iO90scth9WAbmgv7ogoq57O9YpKmFBbmoEoCHDB2xMBY0+/KVrqAaCDyCE16dUspeOvIxFFRI+0sEtqDqy2b4A==}

  '@types/d3-ease@3.0.2':
    resolution: {integrity: sha512-NcV1JjO5oDzoK26oMzbILE6HW7uVXOHLQvHshBUW4UMdZGfiY6v5BeQwh9a9tCzv+CeefZQHJt5SRgK154RtiA==}

  '@types/d3-interpolate@3.0.4':
    resolution: {integrity: sha512-mgLPETlrpVV1YRJIglr4Ez47g7Yxjl1lj7YKsiMCb27VJH9W8NVM6Bb9d8kkpG/uAQS5AmbA48q2IAolKKo1MA==}

  '@types/d3-path@3.1.1':
    resolution: {integrity: sha512-VMZBYyQvbGmWyWVea0EHs/BwLgxc+MKi1zLDCONksozI4YJMcTt8ZEuIR4Sb1MMTE8MMW49v0IwI5+b7RmfWlg==}

  '@types/d3-scale@4.0.9':
    resolution: {integrity: sha512-dLmtwB8zkAeO/juAMfnV+sItKjlsw2lKdZVVy6LRr0cBmegxSABiLEpGVmSJJ8O08i4+sGR6qQtb6WtuwJdvVw==}

  '@types/d3-shape@3.1.7':
    resolution: {integrity: sha512-VLvUQ33C+3J+8p+Daf+nYSOsjB4GXp19/S/aGo60m9h1v6XaxjiT82lKVWJCfzhtuZ3yD7i/TPeC/fuKLLOSmg==}

  '@types/d3-time@3.0.4':
    resolution: {integrity: sha512-yuzZug1nkAAaBlBBikKZTgzCeA+k1uy4ZFwWANOfKw5z5LRhV0gNA7gNkKm7HoK+HRN0wX3EkxGk0fpbWhmB7g==}

  '@types/d3-timer@3.0.2':
    resolution: {integrity: sha512-Ps3T8E8dZDam6fUyNiMkekK3XUsaUEik+idO9/YjPtfj2qruF8tFBXS7XhtE4iIXBLxhmLjP3SXpLhVf21I9Lw==}

  '@types/debug@4.1.12':
    resolution: {integrity: sha512-vIChWdVG3LG1SMxEvI/AK+FWJthlrqlTu7fbrlywTkkaONwk/UAGaULXRlf8vkzFBLVm0zkMdCquhL5aOjhXPQ==}

  '@types/estree-jsx@1.0.5':
    resolution: {integrity: sha512-52CcUVNFyfb1A2ALocQw/Dd1BQFNmSdkuC3BkZ6iqhdMfQz7JWOFRuJFloOzjk+6WijU56m9oKXFAXc7o3Towg==}

  '@types/estree@1.0.6':
    resolution: {integrity: sha512-AYnb1nQyY49te+VRAVgmzfcgjYS91mY5P0TKUDCLEM+gNnA+3T6rWITXRLYCpahpqSQbN5cE+gHpnPyXjHWxcw==}

  '@types/hast@2.3.10':
    resolution: {integrity: sha512-McWspRw8xx8J9HurkVBfYj0xKoE25tOFlHGdx4MJ5xORQrMGZNqJhVQWaIbm6Oyla5kYOXtDiopzKRJzEOkwJw==}

  '@types/hast@3.0.4':
    resolution: {integrity: sha512-WPs+bbQw5aCj+x6laNGWLH3wviHtoCv/P3+otBhbOhJgG8qtpdAMlTCxLtsTWA7LH1Oh/bFCHsBn0TPS5m30EQ==}

  '@types/json-schema@7.0.15':
    resolution: {integrity: sha512-5+fP8P8MFNC+AyZCDxrB2pkZFPGzqQWUzpSeuuVLvm8VMcorNYavBqoFcxK8bQz4Qsbn4oUEEem4wDLfcysGHA==}

  '@types/mdast@4.0.4':
    resolution: {integrity: sha512-kGaNbPh1k7AFzgpud/gMdvIm5xuECykRR+JnWKQno9TAXVa6WIVCGTPvYGekIDL4uwCZQSYbUxNBSb1aUo79oA==}

  '@types/ms@2.1.0':
    resolution: {integrity: sha512-GsCCIZDE/p3i96vtEqx+7dBUGXrc7zeSK3wwPHIaRThS+9OhWIXRqzs4d6k1SVU8g91DrNRWxWUGhp5KXQb2VA==}

  '@types/node@20.17.52':
    resolution: {integrity: sha512-2aj++KfxubvW/Lc0YyXE3OEW7Es8TWn1MsRzYgcOGyTNQxi0L8rxQUCZ7ZbyOBWZQD5I63PV9egZWMsapVaklg==}

  '@types/parse-json@4.0.2':
    resolution: {integrity: sha512-dISoDXWWQwUquiKsyZ4Ng+HX2KsPL7LyHKHQwgGFEA3IaKac4Obd+h2a/a6waisAoepJlBcx9paWqjA8/HVjCw==}

  '@types/prop-types@15.7.14':
    resolution: {integrity: sha512-gNMvNH49DJ7OJYv+KAKn0Xp45p8PLl6zo2YnvDIbTd4J6MER2BmWN49TG7n9LvkyihINxeKW8+3bfS2yDC9dzQ==}

  '@types/react-dom@18.3.7':
    resolution: {integrity: sha512-MEe3UeoENYVFXzoXEWsvcpg6ZvlrFNlOQ7EOsvhI3CfAXwzPfO8Qwuxd40nepsYKqyyVQnTdEfv68q91yLcKrQ==}
    peerDependencies:
      '@types/react': ^18.0.0

  '@types/react-syntax-highlighter@15.5.13':
    resolution: {integrity: sha512-uLGJ87j6Sz8UaBAooU0T6lWJ0dBmjZgN1PZTrj05TNql2/XpC6+4HhMT5syIdFUUt+FASfCeLLv4kBygNU+8qA==}

  '@types/react-transition-group@4.4.12':
    resolution: {integrity: sha512-8TV6R3h2j7a91c+1DXdJi3Syo69zzIZbz7Lg5tORM5LEJG7X/E6a1V3drRyBRZq7/utz7A+c4OgYLiLcYGHG6w==}
    peerDependencies:
      '@types/react': '*'

  '@types/react@18.3.23':
    resolution: {integrity: sha512-/LDXMQh55EzZQ0uVAZmKKhfENivEvWz6E+EYzh+/MCjMhNsotd+ZHhBGIjFDTi6+fz0OhQQQLbTgdQIxxCsC0w==}

  '@types/trusted-types@2.0.7':
    resolution: {integrity: sha512-ScaPdn1dQczgbl0QFTeTOmVHFULt394XJgOQNoyVhZ6r2vLnMLJfBPd53SB52T/3G36VI1/g2MZaX0cwDuXsfw==}

  '@types/unist@2.0.11':
    resolution: {integrity: sha512-CmBKiL6NNo/OqgmMn95Fk9Whlp2mtvIv+KNpQKN2F4SjvrEesubTRWGYSg+BnWZOnlCaSTU1sMpsBOzgbYhnsA==}

  '@types/unist@3.0.3':
    resolution: {integrity: sha512-ko/gIFJRv177XgZsZcBwnqJN5x/Gien8qNOn0D5bQU/zAzVf9Zt3BlcUiLqhV9y4ARk0GbT3tnUiPNgnTXzc/Q==}

  '@types/uuid@9.0.8':
    resolution: {integrity: sha512-jg+97EGIcY9AGHJJRaaPVgetKDsrTgbRjQ5Msgjh/DQKEFl0DtyRr/VCOyD1T2R1MNeWPK/u7JoGhlDZnKBAfA==}

  '@typescript-eslint/eslint-plugin@8.33.1':
    resolution: {integrity: sha512-TDCXj+YxLgtvxvFlAvpoRv9MAncDLBV2oT9Bd7YBGC/b/sEURoOYuIwLI99rjWOfY3QtDzO+mk0n4AmdFExW8A==}
    engines: {node: ^18.18.0 || ^20.9.0 || >=21.1.0}
    peerDependencies:
      '@typescript-eslint/parser': ^8.33.1
      eslint: ^8.57.0 || ^9.0.0
      typescript: '>=4.8.4 <5.9.0'

  '@typescript-eslint/parser@8.33.1':
    resolution: {integrity: sha512-qwxv6dq682yVvgKKp2qWwLgRbscDAYktPptK4JPojCwwi3R9cwrvIxS4lvBpzmcqzR4bdn54Z0IG1uHFskW4dA==}
    engines: {node: ^18.18.0 || ^20.9.0 || >=21.1.0}
    peerDependencies:
      eslint: ^8.57.0 || ^9.0.0
      typescript: '>=4.8.4 <5.9.0'

  '@typescript-eslint/project-service@8.33.1':
    resolution: {integrity: sha512-DZR0efeNklDIHHGRpMpR5gJITQpu6tLr9lDJnKdONTC7vvzOlLAG/wcfxcdxEWrbiZApcoBCzXqU/Z458Za5Iw==}
    engines: {node: ^18.18.0 || ^20.9.0 || >=21.1.0}
    peerDependencies:
      typescript: '>=4.8.4 <5.9.0'

  '@typescript-eslint/scope-manager@8.33.1':
    resolution: {integrity: sha512-dM4UBtgmzHR9bS0Rv09JST0RcHYearoEoo3pG5B6GoTR9XcyeqX87FEhPo+5kTvVfKCvfHaHrcgeJQc6mrDKrA==}
    engines: {node: ^18.18.0 || ^20.9.0 || >=21.1.0}

  '@typescript-eslint/tsconfig-utils@8.33.1':
    resolution: {integrity: sha512-STAQsGYbHCF0/e+ShUQ4EatXQ7ceh3fBCXkNU7/MZVKulrlq1usH7t2FhxvCpuCi5O5oi1vmVaAjrGeL71OK1g==}
    engines: {node: ^18.18.0 || ^20.9.0 || >=21.1.0}
    peerDependencies:
      typescript: '>=4.8.4 <5.9.0'

  '@typescript-eslint/type-utils@8.33.1':
    resolution: {integrity: sha512-1cG37d9xOkhlykom55WVwG2QRNC7YXlxMaMzqw2uPeJixBFfKWZgaP/hjAObqMN/u3fr5BrTwTnc31/L9jQ2ww==}
    engines: {node: ^18.18.0 || ^20.9.0 || >=21.1.0}
    peerDependencies:
      eslint: ^8.57.0 || ^9.0.0
      typescript: '>=4.8.4 <5.9.0'

  '@typescript-eslint/types@8.33.1':
    resolution: {integrity: sha512-xid1WfizGhy/TKMTwhtVOgalHwPtV8T32MS9MaH50Cwvz6x6YqRIPdD2WvW0XaqOzTV9p5xdLY0h/ZusU5Lokg==}
    engines: {node: ^18.18.0 || ^20.9.0 || >=21.1.0}

  '@typescript-eslint/typescript-estree@8.33.1':
    resolution: {integrity: sha512-+s9LYcT8LWjdYWu7IWs7FvUxpQ/DGkdjZeE/GGulHvv8rvYwQvVaUZ6DE+j5x/prADUgSbbCWZ2nPI3usuVeOA==}
    engines: {node: ^18.18.0 || ^20.9.0 || >=21.1.0}
    peerDependencies:
      typescript: '>=4.8.4 <5.9.0'

  '@typescript-eslint/utils@8.33.1':
    resolution: {integrity: sha512-52HaBiEQUaRYqAXpfzWSR2U3gxk92Kw006+xZpElaPMg3C4PgM+A5LqwoQI1f9E5aZ/qlxAZxzm42WX+vn92SQ==}
    engines: {node: ^18.18.0 || ^20.9.0 || >=21.1.0}
    peerDependencies:
      eslint: ^8.57.0 || ^9.0.0
      typescript: '>=4.8.4 <5.9.0'

  '@typescript-eslint/visitor-keys@8.33.1':
    resolution: {integrity: sha512-3i8NrFcZeeDHJ+7ZUuDkGT+UHq+XoFGsymNK2jZCOHcfEzRQ0BdpRtdpSx/Iyf3MHLWIcLS0COuOPibKQboIiQ==}
    engines: {node: ^18.18.0 || ^20.9.0 || >=21.1.0}

  '@ungap/structured-clone@1.3.0':
    resolution: {integrity: sha512-WmoN8qaIAo7WTYWbAZuG8PYEhn5fkz7dZrqTBZ7dtt//lL2Gwms1IcnQ5yHqjDfX8Ft5j4YzDM23f87zBfDe9g==}

  '@vitejs/plugin-react@4.5.0':
    resolution: {integrity: sha512-JuLWaEqypaJmOJPLWwO335Ig6jSgC1FTONCWAxnqcQthLTK/Yc9aH6hr9z/87xciejbQcnP3GnA1FWUSWeXaeg==}
    engines: {node: ^14.18.0 || >=16.0.0}
    peerDependencies:
      vite: ^4.2.0 || ^5.0.0 || ^6.0.0

  '@wagmi/connectors@5.8.5':
    resolution: {integrity: sha512-CHh4uYP6MziCMlSVXmuAv7wMoYWdxXliuzwCRAxHNNkgXE7z37ez5XzJu0Sm39NUau3Fl8WSjwKo4a4w9BOYNA==}
    peerDependencies:
      '@wagmi/core': 2.17.3
      typescript: '>=5.0.4'
      viem: 2.x
    peerDependenciesMeta:
      typescript:
        optional: true

  '@wagmi/core@2.17.3':
    resolution: {integrity: sha512-fgZR9fAiCFtGaosTspkTx5lidccq9Z5xRWOk1HG0VfB6euQGw2//Db7upiP4uQ7DPst2YS9yQN2A1m9+iJLYCw==}
    peerDependencies:
      '@tanstack/query-core': '>=5.0.0'
      typescript: '>=5.0.4'
      viem: 2.x
    peerDependenciesMeta:
      '@tanstack/query-core':
        optional: true
      typescript:
        optional: true

  '@walletconnect/core@2.21.0':
    resolution: {integrity: sha512-o6R7Ua4myxR8aRUAJ1z3gT9nM+jd2B2mfamu6arzy1Cc6vi10fIwFWb6vg3bC8xJ6o9H3n/cN5TOW3aA9Y1XVw==}
    engines: {node: '>=18'}

  '@walletconnect/core@2.21.1':
    resolution: {integrity: sha512-Tp4MHJYcdWD846PH//2r+Mu4wz1/ZU/fr9av1UWFiaYQ2t2TPLDiZxjLw54AAEpMqlEHemwCgiRiAmjR1NDdTQ==}
    engines: {node: '>=18'}

  '@walletconnect/environment@1.0.1':
    resolution: {integrity: sha512-T426LLZtHj8e8rYnKfzsw1aG6+M0BT1ZxayMdv/p8yM0MU+eJDISqNY3/bccxRr4LrF9csq02Rhqt08Ibl0VRg==}

  '@walletconnect/ethereum-provider@2.21.1':
    resolution: {integrity: sha512-SSlIG6QEVxClgl1s0LMk4xr2wg4eT3Zn/Hb81IocyqNSGfXpjtawWxKxiC5/9Z95f1INyBD6MctJbL/R1oBwIw==}

  '@walletconnect/events@1.0.1':
    resolution: {integrity: sha512-NPTqaoi0oPBVNuLv7qPaJazmGHs5JGyO8eEAk5VGKmJzDR7AHzD4k6ilox5kxk1iwiOnFopBOOMLs86Oa76HpQ==}

  '@walletconnect/heartbeat@1.2.2':
    resolution: {integrity: sha512-uASiRmC5MwhuRuf05vq4AT48Pq8RMi876zV8rr8cV969uTOzWdB/k+Lj5yI2PBtB1bGQisGen7MM1GcZlQTBXw==}

  '@walletconnect/jsonrpc-http-connection@1.0.8':
    resolution: {integrity: sha512-+B7cRuaxijLeFDJUq5hAzNyef3e3tBDIxyaCNmFtjwnod5AGis3RToNqzFU33vpVcxFhofkpE7Cx+5MYejbMGw==}

  '@walletconnect/jsonrpc-provider@1.0.14':
    resolution: {integrity: sha512-rtsNY1XqHvWj0EtITNeuf8PHMvlCLiS3EjQL+WOkxEOA4KPxsohFnBDeyPYiNm4ZvkQdLnece36opYidmtbmow==}

  '@walletconnect/jsonrpc-types@1.0.4':
    resolution: {integrity: sha512-P6679fG/M+wuWg9TY8mh6xFSdYnFyFjwFelxyISxMDrlbXokorEVXYOxiqEbrU3x1BmBoCAJJ+vtEaEoMlpCBQ==}

  '@walletconnect/jsonrpc-utils@1.0.8':
    resolution: {integrity: sha512-vdeb03bD8VzJUL6ZtzRYsFMq1eZQcM3EAzT0a3st59dyLfJ0wq+tKMpmGH7HlB7waD858UWgfIcudbPFsbzVdw==}

  '@walletconnect/jsonrpc-ws-connection@1.0.16':
    resolution: {integrity: sha512-G81JmsMqh5nJheE1mPst1W0WfVv0SG3N7JggwLLGnI7iuDZJq8cRJvQwLGKHn5H1WTW7DEPCo00zz5w62AbL3Q==}

  '@walletconnect/keyvaluestorage@1.1.1':
    resolution: {integrity: sha512-V7ZQq2+mSxAq7MrRqDxanTzu2RcElfK1PfNYiaVnJgJ7Q7G7hTVwF8voIBx92qsRyGHZihrwNPHuZd1aKkd0rA==}
    peerDependencies:
      '@react-native-async-storage/async-storage': 1.x
    peerDependenciesMeta:
      '@react-native-async-storage/async-storage':
        optional: true

  '@walletconnect/logger@2.1.2':
    resolution: {integrity: sha512-aAb28I3S6pYXZHQm5ESB+V6rDqIYfsnHaQyzFbwUUBFY4H0OXx/YtTl8lvhUNhMMfb9UxbwEBS253TlXUYJWSw==}

  '@walletconnect/relay-api@1.0.11':
    resolution: {integrity: sha512-tLPErkze/HmC9aCmdZOhtVmYZq1wKfWTJtygQHoWtgg722Jd4homo54Cs4ak2RUFUZIGO2RsOpIcWipaua5D5Q==}

  '@walletconnect/relay-auth@1.1.0':
    resolution: {integrity: sha512-qFw+a9uRz26jRCDgL7Q5TA9qYIgcNY8jpJzI1zAWNZ8i7mQjaijRnWFKsCHAU9CyGjvt6RKrRXyFtFOpWTVmCQ==}

  '@walletconnect/safe-json@1.0.2':
    resolution: {integrity: sha512-Ogb7I27kZ3LPC3ibn8ldyUr5544t3/STow9+lzz7Sfo808YD7SBWk7SAsdBFlYgP2zDRy2hS3sKRcuSRM0OTmA==}

  '@walletconnect/sign-client@2.21.0':
    resolution: {integrity: sha512-z7h+PeLa5Au2R591d/8ZlziE0stJvdzP9jNFzFolf2RG/OiXulgFKum8PrIyXy+Rg2q95U9nRVUF9fWcn78yBA==}

  '@walletconnect/sign-client@2.21.1':
    resolution: {integrity: sha512-QaXzmPsMnKGV6tc4UcdnQVNOz4zyXgarvdIQibJ4L3EmLat73r5ZVl4c0cCOcoaV7rgM9Wbphgu5E/7jNcd3Zg==}

  '@walletconnect/time@1.0.2':
    resolution: {integrity: sha512-uzdd9woDcJ1AaBZRhqy5rNC9laqWGErfc4dxA9a87mPdKOgWMD85mcFo9dIYIts/Jwocfwn07EC6EzclKubk/g==}

  '@walletconnect/types@2.21.0':
    resolution: {integrity: sha512-ll+9upzqt95ZBWcfkOszXZkfnpbJJ2CmxMfGgE5GmhdxxxCcO5bGhXkI+x8OpiS555RJ/v/sXJYMSOLkmu4fFw==}

  '@walletconnect/types@2.21.1':
    resolution: {integrity: sha512-UeefNadqP6IyfwWC1Yi7ux+ljbP2R66PLfDrDm8izmvlPmYlqRerJWJvYO4t0Vvr9wrG4Ko7E0c4M7FaPKT/sQ==}

  '@walletconnect/universal-provider@2.21.0':
    resolution: {integrity: sha512-mtUQvewt+X0VBQay/xOJBvxsB3Xsm1lTwFjZ6WUwSOTR1X+FNb71hSApnV5kbsdDIpYPXeQUbGt2se1n5E5UBg==}

  '@walletconnect/universal-provider@2.21.1':
    resolution: {integrity: sha512-Wjx9G8gUHVMnYfxtasC9poGm8QMiPCpXpbbLFT+iPoQskDDly8BwueWnqKs4Mx2SdIAWAwuXeZ5ojk5qQOxJJg==}

  '@walletconnect/utils@2.21.0':
    resolution: {integrity: sha512-zfHLiUoBrQ8rP57HTPXW7rQMnYxYI4gT9yTACxVW6LhIFROTF6/ytm5SKNoIvi4a5nX5dfXG4D9XwQUCu8Ilig==}

  '@walletconnect/utils@2.21.1':
    resolution: {integrity: sha512-VPZvTcrNQCkbGOjFRbC24mm/pzbRMUq2DSQoiHlhh0X1U7ZhuIrzVtAoKsrzu6rqjz0EEtGxCr3K1TGRqDG4NA==}

  '@walletconnect/window-getters@1.0.1':
    resolution: {integrity: sha512-vHp+HqzGxORPAN8gY03qnbTMnhqIwjeRJNOMOAzePRg4xVEEE2WvYsI9G2NMjOknA8hnuYbU3/hwLcKbjhc8+Q==}

  '@walletconnect/window-metadata@1.0.1':
    resolution: {integrity: sha512-9koTqyGrM2cqFRW517BPY/iEtUDx2r1+Pwwu5m7sJ7ka79wi3EyqhqcICk/yDmv6jAS1rjKgTKXlEhanYjijcA==}

  abitype@1.0.8:
    resolution: {integrity: sha512-ZeiI6h3GnW06uYDLx0etQtX/p8E24UaHHBj57RSjK7YBFe7iuVn07EDpOeP451D06sF27VOz9JJPlIKJmXgkEg==}
    peerDependencies:
      typescript: '>=5.0.4'
      zod: ^3 >=3.22.0
    peerDependenciesMeta:
      typescript:
        optional: true
      zod:
        optional: true

  acorn-jsx@5.3.2:
    resolution: {integrity: sha512-rq9s+JNhf0IChjtDXxllJ7g41oZk5SlXtp0LHwyA5cejwn7vKmKp4pPri6YEePv2PU65sAsegbXtIinmDFDXgQ==}
    peerDependencies:
      acorn: ^6.0.0 || ^7.0.0 || ^8.0.0

  acorn-walk@8.3.2:
    resolution: {integrity: sha512-cjkyv4OtNCIeqhHrfS81QWXoCBPExR/J62oyEqepVw8WaQeSqpW2uhuLPh1m9eWhDuOo/jUXVTlifvesOWp/4A==}
    engines: {node: '>=0.4.0'}

  acorn-walk@8.3.4:
    resolution: {integrity: sha512-ueEepnujpqee2o5aIYnvHU6C0A42MNdsIDeqy5BydrkuC5R1ZuUFnm27EeFJGoEHJQgn3uleRvmTXaJgfXbt4g==}
    engines: {node: '>=0.4.0'}

  acorn@8.14.0:
    resolution: {integrity: sha512-cl669nCJTZBsL97OF4kUQm5g5hC2uihk0NxY3WENAC0TYdILVkAyHymAntgxGkl7K+t0cXIrH5siy5S4XkFycA==}
    engines: {node: '>=0.4.0'}
    hasBin: true

  acorn@8.14.1:
    resolution: {integrity: sha512-OvQ/2pUDKmgfCg++xsTX1wGxfTaszcHVcTctW4UJB4hibJx2HXxxO5UmVgyjMa+ZDsiaf5wWLXYpRWMmBI0QHg==}
    engines: {node: '>=0.4.0'}
    hasBin: true

  ajv@6.12.6:
    resolution: {integrity: sha512-j3fVLgvTo527anyYyJOGTYJbG+vnnQYvE0m5mmkc1TK+nxAppkCLMIL0aZ4dblVCNoGShhm+kzE4ZUykBoMg4g==}

  ansi-regex@5.0.1:
    resolution: {integrity: sha512-quJQXlTSUGL2LH9SUXo8VwsY4soanhgo6LNSm84E1LBcE8s3O0wpdiRzyR9z/ZZJMlMWv37qOOb9pdJlMUEKFQ==}
    engines: {node: '>=8'}

  ansi-regex@6.1.0:
    resolution: {integrity: sha512-7HSX4QQb4CspciLpVFwyRe79O3xsIZDDLER21kERQ71oaPodF8jL725AgJMFAYbooIqolJoRLuM81SpeUkpkvA==}
    engines: {node: '>=12'}

  ansi-styles@4.3.0:
    resolution: {integrity: sha512-zbB9rCJAT1rbjiVDb2hqKFHNYLxgtk8NURxZ3IZwD3F6NtxbXZQCnnSi1Lkx+IDohdPlFp222wVALIheZJQSEg==}
    engines: {node: '>=8'}

  ansi-styles@5.2.0:
    resolution: {integrity: sha512-Cxwpt2SfTzTtXcfOlzGEee8O+c+MmUgGrNiBcXnuWxuFJHe6a5Hz7qwhwe5OgaSYI0IJvkLqWX1ASG+cJOkEiA==}
    engines: {node: '>=10'}

  ansi-styles@6.2.1:
    resolution: {integrity: sha512-bN798gFfQX+viw3R7yrGWRqnrN2oRkEkUjjl4JNn4E8GxxbjtG3FbrEIIY3l8/hrwUwIeCZvi4QuOTP4MErVug==}
    engines: {node: '>=12'}

  any-promise@1.3.0:
    resolution: {integrity: sha512-7UvmKalWRt1wgjL1RrGxoSJW/0QZFIegpeGvZG9kjp8vrRu55XTHbwnqq2GpXm9uLbcuhxm3IqX9OB4MZR1b2A==}

  anymatch@3.1.3:
    resolution: {integrity: sha512-KMReFUr0B4t+D+OBkjR3KYqvocp2XaSzO55UcB6mgQMd3KbcE+mWTyvVV7D/zsdEbNnV6acZUutkiHQXvTr1Rw==}
    engines: {node: '>= 8'}

  arg@4.1.3:
    resolution: {integrity: sha512-58S9QDqG0Xx27YwPSt9fJxivjYl432YCwfDMfZ+71RAqUrZef7LrKQZ3LHLOwCS4FLNBplP533Zx895SeOCHvA==}

  arg@5.0.2:
    resolution: {integrity: sha512-PYjyFOLKQ9y57JvQ6QLo8dAgNqswh8M1RMJYdQduT6xbWSgK36P/Z/v+p888pM69jMMfS8Xd8F6I1kQ/I9HUGg==}

  argparse@2.0.1:
    resolution: {integrity: sha512-8+9WqebbFzpX9OR+Wa6O29asIogeRMzcGtAINdpMHHyAg10f05aSFVBbcEqGf/PXw1EjAZ+q2/bEBg3DvurK3Q==}

  aria-hidden@1.2.6:
    resolution: {integrity: sha512-ik3ZgC9dY/lYVVM++OISsaYDeg1tb0VtP5uL3ouh1koGOaUMDPpbFIei4JkFimWUFPn90sbMNMXQAIVOlnYKJA==}
    engines: {node: '>=10'}

  aria-query@5.1.3:
    resolution: {integrity: sha512-R5iJ5lkuHybztUfuOAznmboyjWq8O6sqNqtK7CLOqdydi54VNbORp49mb14KbWgG1QD3JFO9hJdZ+y4KutfdOQ==}

  aria-query@5.3.2:
    resolution: {integrity: sha512-COROpnaoap1E2F000S62r6A60uHZnmlvomhfyT2DlTcrY1OrBKn2UhH7qn5wTC9zMvD0AY7csdPSNwKP+7WiQw==}
    engines: {node: '>= 0.4'}

  array-buffer-byte-length@1.0.2:
    resolution: {integrity: sha512-LHE+8BuR7RYGDKvnrmcuSq3tDcKv9OFEXQt/HpbZhY7V6h0zlUXutnAD82GiFx9rdieCMjkvtcsPqBwgUl1Iiw==}
    engines: {node: '>= 0.4'}

  as-table@1.0.55:
    resolution: {integrity: sha512-xvsWESUJn0JN421Xb9MQw6AsMHRCUknCe0Wjlxvjud80mU4E6hQf1A6NzQKcYNmYw62MfzEtXc+badstZP3JpQ==}

  async-mutex@0.2.6:
    resolution: {integrity: sha512-Hs4R+4SPgamu6rSGW8C7cV9gaWUKEHykfzCCvIRuaVv636Ju10ZdeUbvb4TBEW0INuq2DHZqXbK4Nd3yG4RaRw==}

  asynckit@0.4.0:
    resolution: {integrity: sha512-Oei9OH4tRh0YqU3GxhX79dM/mwVgvbZJaSNaRk+bshkj0S5cfHcgYakreBjrHwatXKbz+IoIdYLxrKim2MjW0Q==}

  atomic-sleep@1.0.0:
    resolution: {integrity: sha512-kNOjDqAh7px0XWNI+4QbzoiR/nTkHAWNud2uvnJquD1/x5a7EQZMJT0AczqK0Qn67oY/TTQ1LbUKajZpp3I9tQ==}
    engines: {node: '>=8.0.0'}

  attr-accept@2.2.5:
    resolution: {integrity: sha512-0bDNnY/u6pPwHDMoF0FieU354oBi0a8rD9FcsLwzcGWbc8KS8KPIi7y+s13OlVY+gMWc/9xEMUgNE6Qm8ZllYQ==}
    engines: {node: '>=4'}

  autoprefixer@10.4.21:
    resolution: {integrity: sha512-O+A6LWV5LDHSJD3LjHYoNi4VLsj/Whi7k6zG12xTYaU4cQ8oxQGckXNX8cRHK5yOZ/ppVHe0ZBXGzSV9jXdVbQ==}
    engines: {node: ^10 || ^12 || >=14}
    hasBin: true
    peerDependencies:
      postcss: ^8.1.0

  available-typed-arrays@1.0.7:
    resolution: {integrity: sha512-wvUjBtSGN7+7SjNpq/9M2Tg350UZD3q62IFZLbRAR1bSMlCo1ZaeW+BJ+D090e4hIIZLBcTDWe4Mh4jvUDajzQ==}
    engines: {node: '>= 0.4'}

  axios@1.9.0:
    resolution: {integrity: sha512-re4CqKTJaURpzbLHtIi6XpDv20/CnpXOtjRY5/CU32L8gU8ek9UIivcfvSWvmKEngmVbrUtPpdDwWDWL7DNHvg==}

  babel-plugin-macros@3.1.0:
    resolution: {integrity: sha512-Cg7TFGpIr01vOQNODXOOaGz2NpCU5gl8x1qJFbb6hbZxR7XrcE2vtbAsTAbJ7/xwJtUuJEw8K8Zr/AE0LHlesg==}
    engines: {node: '>=10', npm: '>=6'}

  bail@2.0.2:
    resolution: {integrity: sha512-0xO6mYd7JB2YesxDKplafRpsiOzPt9V02ddPCLbY1xYGPOX24NTyN50qnUxgCPcSoYMhKpAuBTjQoRZCAkUDRw==}

  balanced-match@1.0.2:
    resolution: {integrity: sha512-3oSeUO0TMV67hN1AmbXsK4yaqU7tjiHlbxRDZOpH0KW9+CeX4bRAaX0Anxt0tx2MrpRpWwQaPwIlISEJhYU5Pw==}

  base-x@5.0.1:
    resolution: {integrity: sha512-M7uio8Zt++eg3jPj+rHMfCC+IuygQHHCOU+IYsVtik6FWjuYpVt/+MRKcgsAMHh8mMFAwnB+Bs+mTrFiXjMzKg==}

  base64-js@1.5.1:
    resolution: {integrity: sha512-AKpaYlHn8t4SVbOHCy+b5+KKgvR4vrsD8vbvrbiQJps7fKDTkjkDry6ji0rUJjC0kzbNePLwzxq8iypo41qeWA==}

  big.js@6.2.2:
    resolution: {integrity: sha512-y/ie+Faknx7sZA5MfGA2xKlu0GDv8RWrXGsmlteyJQ2lvoKv9GBK/fpRMc2qlSoBAgNxrixICFCBefIq8WCQpQ==}

  binary-extensions@2.3.0:
    resolution: {integrity: sha512-Ceh+7ox5qe7LJuLHoY0feh3pHuUDHAcRUeyL2VYghZwfpkNIy/+8Ocg0a3UuSoYzavmylwuLWQOf3hl0jjMMIw==}
    engines: {node: '>=8'}

  blake3-wasm@2.1.5:
    resolution: {integrity: sha512-F1+K8EbfOZE49dtoPtmxUQrpXaBIl3ICvasLh+nJta0xkz+9kF/7uet9fLnwKqhDrmj6g+6K3Tw9yQPUg2ka5g==}

  bn.js@5.2.2:
    resolution: {integrity: sha512-v2YAxEmKaBLahNwE1mjp4WON6huMNeuDvagFZW+ASCuA/ku0bXR9hSMw0XpiqMoA3+rmnyck/tPRSFQkoC9Cuw==}

  bowser@2.11.0:
    resolution: {integrity: sha512-AlcaJBi/pqqJBIQ8U9Mcpc9i8Aqxn88Skv5d+xBX006BY5u8N3mGLHa5Lgppa7L/HfwgwLgZ6NYs+Ag6uUmJRA==}

  brace-expansion@1.1.11:
    resolution: {integrity: sha512-iCuPHDFgrHX7H2vEI/5xpz07zSHB00TpugqhmYtVmMO6518mCuRMoOYFldEBl0g187ufozdaHgWKcYFb61qGiA==}

  brace-expansion@2.0.1:
    resolution: {integrity: sha512-XnAIvQ8eM+kC6aULx6wuQiwVsnzsi9d3WxzV3FpWTGA19F621kwdbsAcFKXgKUHZWsy+mY6iL1sHTxWEFCytDA==}

  braces@3.0.3:
    resolution: {integrity: sha512-yQbXgO/OSZVD2IsiLlro+7Hf6Q18EJrKSEsdoMzKePKXct3gvD8oLcOQdIzGupr5Fj+EDe8gO/lxc1BzfMpxvA==}
    engines: {node: '>=8'}

  browserslist@4.24.4:
    resolution: {integrity: sha512-KDi1Ny1gSePi1vm0q4oxSF8b4DR44GF4BbmS2YdhPLOEqd8pDviZOGH/GsmRwoWJ2+5Lr085X7naowMwKHDG1A==}
    engines: {node: ^6 || ^7 || ^8 || ^9 || ^10 || ^11 || ^12 || >=13.7}
    hasBin: true

  bs58@6.0.0:
    resolution: {integrity: sha512-PD0wEnEYg6ijszw/u8s+iI3H17cTymlrwkKhDhPZq+Sokl3AU4htyBFTjAeNAlCCmg0f53g6ih3jATyCKftTfw==}

  buffer-from@1.1.2:
    resolution: {integrity: sha512-E+XQCRwSbaaiChtv6k6Dwgc+bx+Bs6vuKJHHl5kox/BaKbhiXzqQOwK4cO22yElGp2OCmjwVhT3HmxgyPGnJfQ==}

  buffer@6.0.3:
    resolution: {integrity: sha512-FTiCpNxtwiZZHEZbcbTIcZjERVICn9yq/pDFkTl95/AxzD1naBctN7YO68riM/gLSDY7sdrMby8hofADYuuqOA==}

  bufferutil@4.0.9:
    resolution: {integrity: sha512-WDtdLmJvAuNNPzByAYpRo2rF1Mmradw6gvWsQKf63476DDXmomT9zUiGypLcG4ibIM67vhAj8jJRdbmEws2Aqw==}
    engines: {node: '>=6.14.2'}

  call-bind-apply-helpers@1.0.2:
    resolution: {integrity: sha512-Sp1ablJ0ivDkSzjcaJdxEunN5/XvksFJ2sMBFfq6x0ryhQV/2b/KwFe21cMpmHtPOSij8K99/wSfoEuTObmuMQ==}
    engines: {node: '>= 0.4'}

  call-bind@1.0.8:
    resolution: {integrity: sha512-oKlSFMcMwpUg2ednkhQ454wfWiU/ul3CkJe/PEHcTKuiX6RpbehUiFMXu13HalGZxfUwCQzZG747YXBn1im9ww==}
    engines: {node: '>= 0.4'}

  call-bound@1.0.4:
    resolution: {integrity: sha512-+ys997U96po4Kx/ABpBCqhA9EuxJaQWDQg7295H4hBphv3IZg0boBKuwYpt4YXp6MZ5AmZQnU/tyMTlRpaSejg==}
    engines: {node: '>= 0.4'}

  callsites@3.1.0:
    resolution: {integrity: sha512-P8BjAsXvZS+VIDUI11hHCQEv74YT67YUi5JJFNWIqL235sBmjX4+qx9Muvls5ivyNENctx46xQLQ3aTuE7ssaQ==}
    engines: {node: '>=6'}

  camelcase-css@2.0.1:
    resolution: {integrity: sha512-QOSvevhslijgYwRx6Rv7zKdMF8lbRmx+uQGx2+vDc+KI/eBnsy9kit5aj23AgGu3pa4t9AgwbnXWqS+iOY+2aA==}
    engines: {node: '>= 6'}

  camelcase@5.3.1:
    resolution: {integrity: sha512-L28STB170nwWS63UjtlEOE3dldQApaJXZkOI1uMFfzf3rRuPegHaHesyee+YxQ+W6SvRDQV6UrdOdRiR153wJg==}
    engines: {node: '>=6'}

  caniuse-lite@1.0.30001702:
    resolution: {integrity: sha512-LoPe/D7zioC0REI5W73PeR1e1MLCipRGq/VkovJnd6Df+QVqT+vT33OXCp8QUd7kA7RZrHWxb1B36OQKI/0gOA==}

  ccount@2.0.1:
    resolution: {integrity: sha512-eyrF0jiFpY+3drT6383f1qhkbGsLSifNAjA61IUjZjmLCWjItY6LB9ft9YhoDgwfmclB2zhu51Lc7+95b8NRAg==}

  chalk@3.0.0:
    resolution: {integrity: sha512-4D3B6Wf41KOYRFdszmDqMCGq5VV/uMAB273JILmO+3jAlh8X4qDtdtgCR3fxtbLEMzSx22QdhnDcJvu2u1fVwg==}
    engines: {node: '>=8'}

  chalk@4.1.2:
    resolution: {integrity: sha512-oKnbhFyRIXpUuez8iBMmyEa4nbj4IOQyuhc/wy9kY7/WVPcwIO9VA668Pu8RkO7+0G76SLROeyw9CpQ061i4mA==}
    engines: {node: '>=10'}

  character-entities-html4@2.1.0:
    resolution: {integrity: sha512-1v7fgQRj6hnSwFpq1Eu0ynr/CDEw0rXo2B61qXrLNdHZmPKgb7fqS1a2JwF0rISo9q77jDI8VMEHoApn8qDoZA==}

  character-entities-legacy@1.1.4:
    resolution: {integrity: sha512-3Xnr+7ZFS1uxeiUDvV02wQ+QDbc55o97tIV5zHScSPJpcLm/r0DFPcoY3tYRp+VZukxuMeKgXYmsXQHO05zQeA==}

  character-entities-legacy@3.0.0:
    resolution: {integrity: sha512-RpPp0asT/6ufRm//AJVwpViZbGM/MkjQFxJccQRHmISF/22NBtsHqAWmL+/pmkPWoIUJdWyeVleTl1wydHATVQ==}

  character-entities@1.2.4:
    resolution: {integrity: sha512-iBMyeEHxfVnIakwOuDXpVkc54HijNgCyQB2w0VfGQThle6NXn50zU6V/u+LDhxHcDUPojn6Kpga3PTAD8W1bQw==}

  character-entities@2.0.2:
    resolution: {integrity: sha512-shx7oQ0Awen/BRIdkjkvz54PnEEI/EjwXDSIZp86/KKdbafHh1Df/RYGBhn4hbe2+uKC9FnT5UCEdyPz3ai9hQ==}

  character-reference-invalid@1.1.4:
    resolution: {integrity: sha512-mKKUkUbhPpQlCOfIuZkvSEgktjPFIsZKRRbC6KWVEMvlzblj3i3asQv5ODsrwt0N3pHAEvjP8KTQPHkp0+6jOg==}

  character-reference-invalid@2.0.1:
    resolution: {integrity: sha512-iBZ4F4wRbyORVsu0jPV7gXkOsGYjGHPmAyv+HiHG8gi5PtC9KI2j1+v8/tlibRvjoWX027ypmG/n0HtO5t7unw==}

  chokidar@3.6.0:
    resolution: {integrity: sha512-7VT13fmjotKpGipCW9JEQAusEPE+Ei8nl6/g4FBAmIm0GOOLMua9NDDo/DWp0ZAxCr3cPq5ZpBqmPAQgDda2Pw==}
    engines: {node: '>= 8.10.0'}

  chokidar@4.0.3:
    resolution: {integrity: sha512-Qgzu8kfBvo+cA4962jnP1KkS6Dop5NS6g7R5LFYJr4b8Ub94PPQXUksCw9PvXoeXPRRddRNC5C1JQUR2SMGtnA==}
    engines: {node: '>= 14.16.0'}

  class-variance-authority@0.7.1:
    resolution: {integrity: sha512-Ka+9Trutv7G8M6WT6SeiRWz792K5qEqIGEGzXKhAE6xOWAY6pPH8U+9IY3oCMv6kqTmLsv7Xh/2w2RigkePMsg==}

  cliui@6.0.0:
    resolution: {integrity: sha512-t6wbgtoCXvAzst7QgXxJYqPt0usEfbgQdftEPbLL/cvv6HPE5VgvqCuAIDR0NgU52ds6rFwqrgakNLrHEjCbrQ==}

  clsx@1.2.1:
    resolution: {integrity: sha512-EcR6r5a8bj6pu3ycsa/E/cKVGuTgZJZdsyUYHOksG/UHIiKfjxzRxYJpyVBwYaQeOvghal9fcc4PidlgzugAQg==}
    engines: {node: '>=6'}

  clsx@2.1.1:
    resolution: {integrity: sha512-eYm0QWBtUrBWZWG0d386OGAw16Z995PiOVo2B7bjWSbHedGl5e0ZWaq65kOGgUSNesEIDkB9ISbTg/JK9dhCZA==}
    engines: {node: '>=6'}

  color-convert@2.0.1:
    resolution: {integrity: sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ==}
    engines: {node: '>=7.0.0'}

  color-name@1.1.4:
    resolution: {integrity: sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA==}

  color-string@1.9.1:
    resolution: {integrity: sha512-shrVawQFojnZv6xM40anx4CkoDP+fZsw/ZerEMsW/pyzsRbElpsL/DBVW7q3ExxwusdNXI3lXpuhEZkzs8p5Eg==}

  color@4.2.3:
    resolution: {integrity: sha512-1rXeuUUiGGrykh+CeBdu5Ie7OJwinCgQY0bc7GCRxy5xVHy+moaqkpL/jqQq0MtQOeYcrqEz4abc5f0KtU7W4A==}
    engines: {node: '>=12.5.0'}

  combined-stream@1.0.8:
    resolution: {integrity: sha512-FQN4MRfuJeHf7cBbBMJFXhKSDq+2kAArBlmRBvcvFE5BB1HZKXtSFASDhdlz9zOYwxh8lDdnvmMOe/+5cdoEdg==}
    engines: {node: '>= 0.8'}

  comma-separated-tokens@1.0.8:
    resolution: {integrity: sha512-GHuDRO12Sypu2cV70d1dkA2EUmXHgntrzbpvOB+Qy+49ypNfGgFQIC2fhhXbnyrJRynDCAARsT7Ou0M6hirpfw==}

  comma-separated-tokens@2.0.3:
    resolution: {integrity: sha512-Fu4hJdvzeylCfQPp9SGWidpzrMs7tTrlu6Vb8XGaRGck8QSNZJJp538Wrb60Lax4fPwR64ViY468OIUTbRlGZg==}

  commander@2.20.3:
    resolution: {integrity: sha512-GpVkmM8vF2vQUkj2LvZmD35JxeJOLCwJ9cUkugyk2nuhbv3+mJvpLYYt+0+USMxE+oj+ey/lJEnhZw75x/OMcQ==}

  commander@4.1.1:
    resolution: {integrity: sha512-NOKm8xhkzAjzFx8B2v5OAHT+u5pRQc2UCa2Vq9jYL/31o2wi9mxBA7LIFs3sV5VSC49z6pEhfbMULvShKj26WA==}
    engines: {node: '>= 6'}

  concat-map@0.0.1:
    resolution: {integrity: sha512-/Srv4dswyQNBfohGpz9o6Yb3Gz3SrUDqBH5rTuhGR7ahtlbYKnVxw2bCFMRljaA7EXHaXZ8wsHdodFvbkhKmqg==}

  convert-source-map@1.9.0:
    resolution: {integrity: sha512-ASFBup0Mz1uyiIjANan1jzLQami9z1PoYSZCiiYW2FczPbenXc45FZdBZLzOT+r6+iciuEModtmCti+hjaAk0A==}

  convert-source-map@2.0.0:
    resolution: {integrity: sha512-Kvp459HrV2FEJ1CAsi1Ku+MY3kasH19TFykTz2xWmMeq6bk2NU3XXvfJ+Q61m0xktWwt+1HSYf3JZsTms3aRJg==}

  cookie-es@1.2.2:
    resolution: {integrity: sha512-+W7VmiVINB+ywl1HGXJXmrqkOhpKrIiVZV6tQuV54ZyQC7MMuBt81Vc336GMLoHBq5hV/F9eXgt5Mnx0Rha5Fg==}

  cookie@0.7.2:
    resolution: {integrity: sha512-yki5XnKuf750l50uGTllt6kKILY4nQ1eNIQatoXEByZ5dWgnKqbnqmTrBE5B4N7lrMJKQ2ytWMiTO2o0v6Ew/w==}
    engines: {node: '>= 0.6'}

  core-util-is@1.0.3:
    resolution: {integrity: sha512-ZQBvi1DcpJ4GDqanjucZ2Hj3wEO5pZDS89BWbkcrvdxksJorwUDDZamX9ldFkp9aw2lmBDLgkObEA4DWNJ9FYQ==}

  cosmiconfig@7.1.0:
    resolution: {integrity: sha512-AdmX6xUzdNASswsFtmwSt7Vj8po9IuqXm0UXz7QKPuEUmPB4XyjGfaAr2PSuELMwkRMVH1EpIkX5bTZGRB3eCA==}
    engines: {node: '>=10'}

  crc-32@1.2.2:
    resolution: {integrity: sha512-ROmzCKrTnOwybPcJApAA6WBWij23HVfGVNKqqrZpuyZOHqK2CwHSvpGuyt/UNNvaIjEd8X5IFGp4Mh+Ie1IHJQ==}
    engines: {node: '>=0.8'}
    hasBin: true

  create-require@1.1.1:
    resolution: {integrity: sha512-dcKFX3jn0MpIaXjisoRvexIJVEKzaq7z2rZKxf+MSr9TkdmHmsU4m2lcLojrj/FHl8mk5VxMmYA+ftRkP/3oKQ==}

  cross-fetch@3.2.0:
    resolution: {integrity: sha512-Q+xVJLoGOeIMXZmbUK4HYk+69cQH6LudR0Vu/pRm2YlU/hDV9CiS0gKUMaWY5f2NeUH9C1nV3bsTlCo0FsTV1Q==}

  cross-fetch@4.1.0:
    resolution: {integrity: sha512-uKm5PU+MHTootlWEY+mZ4vvXoCn4fLQxT9dSc1sXVMSFkINTJVN8cAQROpwcKm8bJ/c7rgZVIBWzH5T78sNZZw==}

  cross-spawn@7.0.6:
    resolution: {integrity: sha512-uV2QOWP2nWzsy2aMp8aRibhi9dlzF5Hgh5SHaB9OiTGEyDTiJJyx0uy51QXdyWbtAHNua4XJzUKca3OzKUd3vA==}
    engines: {node: '>= 8'}

  crossws@0.3.5:
    resolution: {integrity: sha512-ojKiDvcmByhwa8YYqbQI/hg7MEU0NC03+pSdEq4ZUnZR9xXpwk7E43SMNGkn+JxJGPFtNvQ48+vV2p+P1ml5PA==}

  css.escape@1.5.1:
    resolution: {integrity: sha512-YUifsXXuknHlUsmlgyY0PKzgPOr7/FjCePfHNt0jxm83wHZi44VDMQ7/fGNkjY3/jV1MC+1CmZbaHzugyeRtpg==}

  cssesc@3.0.0:
    resolution: {integrity: sha512-/Tb/JcjK111nNScGob5MNtsntNM1aCNUDipB/TkwZFhyDrrE47SOx/18wF2bbjgc3ZzCSKW1T5nt5EbFoAz/Vg==}
    engines: {node: '>=4'}
    hasBin: true

  csstype@3.1.3:
    resolution: {integrity: sha512-M1uQkMl8rQK/szD0LNhtqxIPLpimGm8sOBwU7lLnCpSbTyY3yeU1Vc7l4KT5zT4s/yOxHH5O7tIuuLOCnLADRw==}

  d3-array@3.2.4:
    resolution: {integrity: sha512-tdQAmyA18i4J7wprpYq8ClcxZy3SC31QMeByyCFyRt7BVHdREQZ5lpzoe5mFEYZUWe+oq8HBvk9JjpibyEV4Jg==}
    engines: {node: '>=12'}

  d3-color@3.1.0:
    resolution: {integrity: sha512-zg/chbXyeBtMQ1LbD/WSoW2DpC3I0mpmPdW+ynRTj/x2DAWYrIY7qeZIHidozwV24m4iavr15lNwIwLxRmOxhA==}
    engines: {node: '>=12'}

  d3-ease@3.0.1:
    resolution: {integrity: sha512-wR/XK3D3XcLIZwpbvQwQ5fK+8Ykds1ip7A2Txe0yxncXSdq1L9skcG7blcedkOX+ZcgxGAmLX1FrRGbADwzi0w==}
    engines: {node: '>=12'}

  d3-format@3.1.0:
    resolution: {integrity: sha512-YyUI6AEuY/Wpt8KWLgZHsIU86atmikuoOmCfommt0LYHiQSPjvX2AcFc38PX0CBpr2RCyZhjex+NS/LPOv6YqA==}
    engines: {node: '>=12'}

  d3-interpolate@3.0.1:
    resolution: {integrity: sha512-3bYs1rOD33uo8aqJfKP3JWPAibgw8Zm2+L9vBKEHJ2Rg+viTR7o5Mmv5mZcieN+FRYaAOWX5SJATX6k1PWz72g==}
    engines: {node: '>=12'}

  d3-path@3.1.0:
    resolution: {integrity: sha512-p3KP5HCf/bvjBSSKuXid6Zqijx7wIfNW+J/maPs+iwR35at5JCbLUT0LzF1cnjbCHWhqzQTIN2Jpe8pRebIEFQ==}
    engines: {node: '>=12'}

  d3-scale@4.0.2:
    resolution: {integrity: sha512-GZW464g1SH7ag3Y7hXjf8RoUuAFIqklOAq3MRl4OaWabTFJY9PN/E1YklhXLh+OQ3fM9yS2nOkCoS+WLZ6kvxQ==}
    engines: {node: '>=12'}

  d3-shape@3.2.0:
    resolution: {integrity: sha512-SaLBuwGm3MOViRq2ABk3eLoxwZELpH6zhl3FbAoJ7Vm1gofKx6El1Ib5z23NUEhF9AsGl7y+dzLe5Cw2AArGTA==}
    engines: {node: '>=12'}

  d3-time-format@4.1.0:
    resolution: {integrity: sha512-dJxPBlzC7NugB2PDLwo9Q8JiTR3M3e4/XANkreKSUxF8vvXKqm1Yfq4Q5dl8budlunRVlUUaDUgFt7eA8D6NLg==}
    engines: {node: '>=12'}

  d3-time@3.1.0:
    resolution: {integrity: sha512-VqKjzBLejbSMT4IgbmVgDjpkYrNWUYJnbCGo874u7MMKIWsILRX+OpX/gTk8MqjpT1A/c6HY2dCA77ZN0lkQ2Q==}
    engines: {node: '>=12'}

  d3-timer@3.0.1:
    resolution: {integrity: sha512-ndfJ/JxxMd3nw31uyKoY2naivF+r29V+Lc0svZxe1JvvIRmi8hUsrMvdOwgS1o6uBHmiz91geQ0ylPP0aj1VUA==}
    engines: {node: '>=12'}

  data-uri-to-buffer@2.0.2:
    resolution: {integrity: sha512-ND9qDTLc6diwj+Xe5cdAgVTbLVdXbtxTJRXRhli8Mowuaan+0EJOtdqJ0QCHNSSPyoXGx9HX2/VMnKeC34AChA==}

  date-fns@2.30.0:
    resolution: {integrity: sha512-fnULvOpxnC5/Vg3NCiWelDsLiUc9bRwAPs/+LfTLNvetFCtCTN+yQz15C/fs4AwX1R9K5GLtLfn8QW+dWisaAw==}
    engines: {node: '>=0.11'}

  date-fns@3.6.0:
    resolution: {integrity: sha512-fRHTG8g/Gif+kSh50gaGEdToemgfj74aRX3swtiouboip5JDLAyDE9F11nHMIcvOaXeOC6D7SpNhi7uFyB7Uww==}

  dayjs@1.11.13:
    resolution: {integrity: sha512-oaMBel6gjolK862uaPQOVTA7q3TZhuSvuMQAAglQDOWYO9A91IrAOUJEyKVlqJlHE0vq5p5UXxzdPfMH/x6xNg==}

  debug@4.3.7:
    resolution: {integrity: sha512-Er2nc/H7RrMXZBFCEim6TCmMk02Z8vLC2Rbi1KEBggpo0fS6l0S1nnapwmIi3yW/+GOJap1Krg4w0Hg80oCqgQ==}
    engines: {node: '>=6.0'}
    peerDependencies:
      supports-color: '*'
    peerDependenciesMeta:
      supports-color:
        optional: true

  debug@4.4.0:
    resolution: {integrity: sha512-6WTZ/IxCY/T6BALoZHaE4ctp9xm+Z5kY/pzYaCHRFeyVhojxlrm+46y68HA6hr0TcwEssoxNiDEUJQjfPZ/RYA==}
    engines: {node: '>=6.0'}
    peerDependencies:
      supports-color: '*'
    peerDependenciesMeta:
      supports-color:
        optional: true

  decamelize@1.2.0:
    resolution: {integrity: sha512-z2S+W9X73hAUUki+N+9Za2lBlun89zigOyGrsax+KUQ6wKW4ZoWpEYBkGhQjwAjjDCkWxhY0VKEhk8wzY7F5cA==}
    engines: {node: '>=0.10.0'}

  decimal.js-light@2.5.1:
    resolution: {integrity: sha512-qIMFpTMZmny+MMIitAB6D7iVPEorVw6YQRWkvarTkT4tBeSLLiHzcwj6q0MmYSFCiVpiqPJTJEYIrpcPzVEIvg==}

  decode-named-character-reference@1.1.0:
    resolution: {integrity: sha512-Wy+JTSbFThEOXQIR2L6mxJvEs+veIzpmqD7ynWxMXGpnk3smkHQOp6forLdHsKpAMW9iJpaBBIxz285t1n1C3w==}

  decode-uri-component@0.2.2:
    resolution: {integrity: sha512-FqUYQ+8o158GyGTrMFJms9qh3CqTKvAqgqsTnkLI8sKu0028orqBhxNMFkFen0zGyg6epACD32pjVk58ngIErQ==}
    engines: {node: '>=0.10'}

  deep-equal@2.2.3:
    resolution: {integrity: sha512-ZIwpnevOurS8bpT4192sqAowWM76JDKSHYzMLty3BZGSswgq6pBaH3DhCSW5xVAZICZyKdOBPjwww5wfgT/6PA==}
    engines: {node: '>= 0.4'}

  deep-is@0.1.4:
    resolution: {integrity: sha512-oIPzksmTg4/MriiaYGO+okXDT7ztn/w3Eptv/+gSIdMdKsJo0u4CfYNFJPy+4SKMuCqGw2wxnA+URMg3t8a/bQ==}

  define-data-property@1.1.4:
    resolution: {integrity: sha512-rBMvIzlpA8v6E+SJZoo++HAYqsLrkg7MSfIinMPFhmkorw7X+dOXVJQs+QT69zGkzMyfDnIMN2Wid1+NbL3T+A==}
    engines: {node: '>= 0.4'}

  define-properties@1.2.1:
    resolution: {integrity: sha512-8QmQKqEASLd5nx0U1B1okLElbUuuttJ/AnYmRXbbbGDWh6uS208EjD4Xqq/I9wK7u0v6O08XhTWnt5XtEbR6Dg==}
    engines: {node: '>= 0.4'}

  defu@6.1.4:
    resolution: {integrity: sha512-mEQCMmwJu317oSz8CwdIOdwf3xMif1ttiM8LTufzc3g6kR+9Pe236twL8j3IYT1F7GfRgGcW6MWxzZjLIkuHIg==}

  delayed-stream@1.0.0:
    resolution: {integrity: sha512-ZySD7Nf91aLB0RxL4KGrKHBXl7Eds1DAmEdcoVawXnLD7SDhpNgtuII2aAkg7a7QS41jxPSZ17p4VdGnMHk3MQ==}
    engines: {node: '>=0.4.0'}

  dequal@2.0.3:
    resolution: {integrity: sha512-0je+qPKHEMohvfRTCEo3CrPG6cAzAYgmzKyxRiYSSDkS6eGJdyVJm7WaYA5ECaAD9wLB2T4EEeymA5aFVcYXCA==}
    engines: {node: '>=6'}

  derive-valtio@0.1.0:
    resolution: {integrity: sha512-OCg2UsLbXK7GmmpzMXhYkdO64vhJ1ROUUGaTFyHjVwEdMEcTTRj7W1TxLbSBxdY8QLBPCcp66MTyaSy0RpO17A==}
    peerDependencies:
      valtio: '*'

  destr@2.0.5:
    resolution: {integrity: sha512-ugFTXCtDZunbzasqBxrK93Ik/DRYsO6S/fedkWEMKqt04xZ4csmnmwGDBAb07QWNaGMAmnTIemsYZCksjATwsA==}

  detect-browser@5.3.0:
    resolution: {integrity: sha512-53rsFbGdwMwlF7qvCt0ypLM5V5/Mbl0szB7GPN8y9NCcbknYOeVVXdrXEq+90IwAfrrzt6Hd+u2E2ntakICU8w==}

  detect-libc@2.0.4:
    resolution: {integrity: sha512-3UDv+G9CsCKO1WKMGw9fwq/SWJYbI0c5Y7LU1AXYoDdbhE2AHQ6N6Nb34sG8Fj7T5APy8qXDCKuuIHd1BR0tVA==}
    engines: {node: '>=8'}

  detect-node-es@1.1.0:
    resolution: {integrity: sha512-ypdmJU/TbBby2Dxibuv7ZLW3Bs1QEmM7nHjEANfohJLvE0XVujisn1qPJcZxg+qDucsr+bP6fLD1rPS3AhJ7EQ==}

  devlop@1.1.0:
    resolution: {integrity: sha512-RWmIqhcFf1lRYBvNmr7qTNuyCt/7/ns2jbpp1+PalgE/rDQcBT0fioSMUpJ93irlUhC5hrg4cYqe6U+0ImW0rA==}

  didyoumean@1.2.2:
    resolution: {integrity: sha512-gxtyfqMg7GKyhQmb056K7M3xszy/myH8w+B4RT+QXBQsvAOdc3XymqDDPHx1BgPgsdAA5SIifona89YtRATDzw==}

  diff@4.0.2:
    resolution: {integrity: sha512-58lmxKSA4BNyLz+HHMUzlOEpg09FV+ev6ZMe3vJihgdxzgcwZ8VoEEPmALCZG9LmqfVoNMMKpttIYTVG6uDY7A==}
    engines: {node: '>=0.3.1'}

  dijkstrajs@1.0.3:
    resolution: {integrity: sha512-qiSlmBq9+BCdCA/L46dw8Uy93mloxsPSbwnm5yrKn2vMPiy8KyAskTF6zuV/j5BMsmOGZDPs7KjU+mjb670kfA==}

  dlv@1.1.3:
    resolution: {integrity: sha512-+HlytyjlPKnIG8XuRG8WvmBP8xs8P71y+SKKS6ZXWoEgLuePxtDoUEiH7WkdePWrQ5JBpE6aoVqfZfJUQkjXwA==}

  dom-accessibility-api@0.5.16:
    resolution: {integrity: sha512-X7BJ2yElsnOJ30pZF4uIIDfBEVgF4XEBxL9Bxhy6dnrm5hkzqmsWHGTiHqRiITNhMyFLyAiWndIJP7Z1NTteDg==}

  dom-accessibility-api@0.6.3:
    resolution: {integrity: sha512-7ZgogeTnjuHbo+ct10G9Ffp0mif17idi0IyWNVA/wcwcm7NPOD/WEHVP3n7n3MhXqxoIYm8d6MuZohYWIZ4T3w==}

  dom-helpers@5.2.1:
    resolution: {integrity: sha512-nRCa7CK3VTrM2NmGkIy4cbK7IZlgBE/PYMn55rrXefr5xXDP0LdtfPnblFDoVdcAfslJ7or6iqAUnx0CCGIWQA==}

  dunder-proto@1.0.1:
    resolution: {integrity: sha512-KIN/nDJBQRcXw0MLVhZE9iQHmG68qAVIBg9CqmUYjmQIhgij9U5MFvrqkUL5FbtyyzZuOeOt0zdeRe4UY7ct+A==}
    engines: {node: '>= 0.4'}

  duplexify@4.1.3:
    resolution: {integrity: sha512-M3BmBhwJRZsSx38lZyhE53Csddgzl5R7xGJNk7CVddZD6CcmwMCH8J+7AprIrQKH7TonKxaCjcv27Qmf+sQ+oA==}

  eastasianwidth@0.2.0:
    resolution: {integrity: sha512-I88TYZWc9XiYHRQ4/3c5rjjfgkjhLyW2luGIheGERbNQ6OY7yTybanSpDXZa8y7VUP9YmDcYa+eyq4ca7iLqWA==}

  eciesjs@0.4.15:
    resolution: {integrity: sha512-r6kEJXDKecVOCj2nLMuXK/FCPeurW33+3JRpfXVbjLja3XUYFfD9I/JBreH6sUyzcm3G/YQboBjMla6poKeSdA==}
    engines: {bun: '>=1', deno: '>=2', node: '>=16'}

  electron-to-chromium@1.5.112:
    resolution: {integrity: sha512-oen93kVyqSb3l+ziUgzIOlWt/oOuy4zRmpwestMn4rhFWAoFJeFuCVte9F2fASjeZZo7l/Cif9TiyrdW4CwEMA==}

  emoji-regex@8.0.0:
    resolution: {integrity: sha512-MSjYzcWNOA0ewAHpz0MxpYFvwg6yjy1NG3xteoqz644VCo/RPgnr1/GGt+ic3iJTzQ8Eu3TdM14SawnVUmGE6A==}

  emoji-regex@9.2.2:
    resolution: {integrity: sha512-L18DaJsXSUk2+42pv8mLs5jJT2hqFkFE4j21wOmgbUqsZ2hL72NsUU785g9RXgo3s0ZNgVl42TiHp3ZtOv/Vyg==}

  encode-utf8@1.0.3:
    resolution: {integrity: sha512-ucAnuBEhUK4boH2HjVYG5Q2mQyPorvv0u/ocS+zhdw0S8AlHYY+GOFhP1Gio5z4icpP2ivFSvhtFjQi8+T9ppw==}

  end-of-stream@1.4.4:
    resolution: {integrity: sha512-+uw1inIHVPQoaVuHzRyXd21icM+cnt4CzD5rW+NC1wjOUSTOs+Te7FOv7AhN7vS9x/oIyhLP5PR1H+phQAHu5Q==}

  engine.io-client@6.6.3:
    resolution: {integrity: sha512-T0iLjnyNWahNyv/lcjS2y4oE358tVS/SYQNxYXGAJ9/GLgH4VCvOQ/mhTjqU88mLZCQgiG8RIegFHYCdVC+j5w==}

  engine.io-parser@5.2.3:
    resolution: {integrity: sha512-HqD3yTBfnBxIrbnM1DoD6Pcq8NECnh8d4As1Qgh0z5Gg3jRRIqijury0CL3ghu/edArpUYiYqQiDUQBIs4np3Q==}
    engines: {node: '>=10.0.0'}

  error-ex@1.3.2:
    resolution: {integrity: sha512-7dFHNmqeFSEt2ZBsCriorKnn3Z2pj+fd9kmI6QoWw4//DL+icEBfc0U7qJCisqrTsKTjw4fNFy2pW9OqStD84g==}

  es-define-property@1.0.1:
    resolution: {integrity: sha512-e3nRfgfUZ4rNGL232gUgX06QNyyez04KdjFrF+LTRoOXmrOgFKDg4BCdsjW8EnT69eqdYGmRpJwiPVYNrCaW3g==}
    engines: {node: '>= 0.4'}

  es-errors@1.3.0:
    resolution: {integrity: sha512-Zf5H2Kxt2xjTvbJvP2ZWLEICxA6j+hAmMzIlypy4xcBg1vKVnx89Wy0GbS+kf5cwCVFFzdCFh2XSCFNULS6csw==}
    engines: {node: '>= 0.4'}

  es-get-iterator@1.1.3:
    resolution: {integrity: sha512-sPZmqHBe6JIiTfN5q2pEi//TwxmAFHwj/XEuYjTuse78i8KxaqMTTzxPoFKuzRpDpTJ+0NAbpfenkmH2rePtuw==}

  es-object-atoms@1.1.1:
    resolution: {integrity: sha512-FGgH2h8zKNim9ljj7dankFPcICIK9Cp5bm+c2gQSYePhpaG5+esrLODihIorn+Pe6FGJzWhXQotPv73jTaldXA==}
    engines: {node: '>= 0.4'}

  es-set-tostringtag@2.1.0:
    resolution: {integrity: sha512-j6vWzfrGVfyXxge+O0x5sh6cvxAog0a/4Rdd2K36zCMV5eJ+/+tOAngRO8cODMNWbVRdVlmGZQL2YS3yR8bIUA==}
    engines: {node: '>= 0.4'}

  es-toolkit@1.33.0:
    resolution: {integrity: sha512-X13Q/ZSc+vsO1q600bvNK4bxgXMkHcf//RxCmYDaRY5DAcT+eoXjY5hoAPGMdRnWQjvyLEcyauG3b6hz76LNqg==}

  esbuild@0.21.5:
    resolution: {integrity: sha512-mg3OPMV4hXywwpoDxu3Qda5xCKQi+vCTZq8S9J/EpkhB2HzKXq4SNFZE3+NK93JYxc8VMSep+lOUSC/RVKaBqw==}
    engines: {node: '>=12'}
    hasBin: true

  esbuild@0.25.4:
    resolution: {integrity: sha512-8pgjLUcUjcgDg+2Q4NYXnPbo/vncAY4UmyaCm0jZevERqCHZIaWwdJHkf8XQtu4AxSKCdvrUbT0XUr1IdZzI8Q==}
    engines: {node: '>=18'}
    hasBin: true

  escalade@3.2.0:
    resolution: {integrity: sha512-WUj2qlxaQtO4g6Pq5c29GTcWGDyd8itL8zTlipgECz3JesAiiOKotd8JU6otB3PACgG6xkJUyVhboMS+bje/jA==}
    engines: {node: '>=6'}

  escape-string-regexp@4.0.0:
    resolution: {integrity: sha512-TtpcNJ3XAzx3Gq8sWRzJaVajRs0uVxA2YAkdb1jm2YkPz4G6egUFAyA3n5vtEIZefPk5Wa4UXbKuS5fKkJWdgA==}
    engines: {node: '>=10'}

  eslint-plugin-react-hooks@5.2.0:
    resolution: {integrity: sha512-+f15FfK64YQwZdJNELETdn5ibXEUQmW1DZL6KXhNnc2heoy/sg9VJJeT7n8TlMWouzWqSWavFkIhHyIbIAEapg==}
    engines: {node: '>=10'}
    peerDependencies:
      eslint: ^3.0.0 || ^4.0.0 || ^5.0.0 || ^6.0.0 || ^7.0.0 || ^8.0.0-0 || ^9.0.0

  eslint-plugin-react-refresh@0.4.20:
    resolution: {integrity: sha512-XpbHQ2q5gUF8BGOX4dHe+71qoirYMhApEPZ7sfhF/dNnOF1UXnCMGZf79SFTBO7Bz5YEIT4TMieSlJBWhP9WBA==}
    peerDependencies:
      eslint: '>=8.40'

  eslint-scope@8.3.0:
    resolution: {integrity: sha512-pUNxi75F8MJ/GdeKtVLSbYg4ZI34J6C0C7sbL4YOp2exGwen7ZsuBqKzUhXd0qMQ362yET3z+uPwKeg/0C2XCQ==}
    engines: {node: ^18.18.0 || ^20.9.0 || >=21.1.0}

  eslint-visitor-keys@3.4.3:
    resolution: {integrity: sha512-wpc+LXeiyiisxPlEkUzU6svyS1frIO3Mgxj1fdy7Pm8Ygzguax2N3Fa/D/ag1WqbOprdI+uY6wMUl8/a2G+iag==}
    engines: {node: ^12.22.0 || ^14.17.0 || >=16.0.0}

  eslint-visitor-keys@4.2.0:
    resolution: {integrity: sha512-UyLnSehNt62FFhSwjZlHmeokpRK59rcz29j+F1/aDgbkbRTk7wIc9XzdoasMUbRNKDM0qQt/+BJ4BrpFeABemw==}
    engines: {node: ^18.18.0 || ^20.9.0 || >=21.1.0}

  eslint@9.28.0:
    resolution: {integrity: sha512-ocgh41VhRlf9+fVpe7QKzwLj9c92fDiqOj8Y3Sd4/ZmVA4Btx4PlUYPq4pp9JDyupkf1upbEXecxL2mwNV7jPQ==}
    engines: {node: ^18.18.0 || ^20.9.0 || >=21.1.0}
    hasBin: true
    peerDependencies:
      jiti: '*'
    peerDependenciesMeta:
      jiti:
        optional: true

  espree@10.3.0:
    resolution: {integrity: sha512-0QYC8b24HWY8zjRnDTL6RiHfDbAWn63qb4LMj1Z4b076A4une81+z03Kg7l7mn/48PUTqoLptSXez8oknU8Clg==}
    engines: {node: ^18.18.0 || ^20.9.0 || >=21.1.0}

  esquery@1.6.0:
    resolution: {integrity: sha512-ca9pw9fomFcKPvFLXhBKUK90ZvGibiGOvRJNbjljY7s7uq/5YO4BOzcYtJqExdx99rF6aAcnRxHmcUHcz6sQsg==}
    engines: {node: '>=0.10'}

  esrecurse@4.3.0:
    resolution: {integrity: sha512-KmfKL3b6G+RXvP8N1vr3Tq1kL/oCFgn2NYXEtqP8/L3pKapUA4G8cFVaoF3SU323CD4XypR/ffioHmkti6/Tag==}
    engines: {node: '>=4.0'}

  estraverse@5.3.0:
    resolution: {integrity: sha512-MMdARuVEQziNTeJD8DgMqmhwR11BRQ/cBP+pLtYdSTnf3MIO8fFeiINEbX36ZdNlfU/7A9f3gUw49B3oQsvwBA==}
    engines: {node: '>=4.0'}

  estree-util-is-identifier-name@3.0.0:
    resolution: {integrity: sha512-hFtqIDZTIUZ9BXLb8y4pYGyk6+wekIivNVTcmvk8NoOh+VeRn5y6cEHzbURrWbfp1fIqdVipilzj+lfaadNZmg==}

  esutils@2.0.3:
    resolution: {integrity: sha512-kVscqXk4OCp68SZ0dkgEKVi6/8ij300KBWTJq32P/dYeWTSwK41WyTxalN1eRmA5Z9UU/LX9D7FWSmV9SAYx6g==}
    engines: {node: '>=0.10.0'}

  eth-block-tracker@7.1.0:
    resolution: {integrity: sha512-8YdplnuE1IK4xfqpf4iU7oBxnOYAc35934o083G8ao+8WM8QQtt/mVlAY6yIAdY1eMeLqg4Z//PZjJGmWGPMRg==}
    engines: {node: '>=14.0.0'}

  eth-json-rpc-filters@6.0.1:
    resolution: {integrity: sha512-ITJTvqoCw6OVMLs7pI8f4gG92n/St6x80ACtHodeS+IXmO0w+t1T5OOzfSt7KLSMLRkVUoexV7tztLgDxg+iig==}
    engines: {node: '>=14.0.0'}

  eth-query@2.1.2:
    resolution: {integrity: sha512-srES0ZcvwkR/wd5OQBRA1bIJMww1skfGS0s8wlwK3/oNP4+wnds60krvu5R1QbpRQjMmpG5OMIWro5s7gvDPsA==}

  eth-rpc-errors@4.0.3:
    resolution: {integrity: sha512-Z3ymjopaoft7JDoxZcEb3pwdGh7yiYMhOwm2doUt6ASXlMavpNlK6Cre0+IMl2VSGyEU9rkiperQhp5iRxn5Pg==}

  ethereum-cryptography@2.2.1:
    resolution: {integrity: sha512-r/W8lkHSiTLxUxW8Rf3u4HGB0xQweG2RyETjywylKZSzLWoWAijRz8WCuOtJ6wah+avllXBqZuk29HCCvhEIRg==}

  eventemitter2@6.4.9:
    resolution: {integrity: sha512-JEPTiaOt9f04oa6NOkc4aH+nVp5I3wEjpHbIPqfgCdD5v5bUzy7xQqwcVO2aDQgOWhI28da57HksMrzK9HlRxg==}

  eventemitter3@4.0.7:
    resolution: {integrity: sha512-8guHBZCwKnFhYdHr2ysuRWErTwhoN2X8XELRlrRwpmfeY2jjuUN4taQMsULKUVo1K4DvZl+0pgfyoysHxvmvEw==}

  eventemitter3@5.0.1:
    resolution: {integrity: sha512-GWkBvjiSZK87ELrYOSESUYeVIc9mvLLf/nXalMOS5dYrgZq9o5OVkbZAVM06CVxYsCwH9BDZFPlQTlPA1j4ahA==}

  events@3.3.0:
    resolution: {integrity: sha512-mQw+2fkQbALzQ7V0MY0IqdnXNOeTtP4r0lN9z7AAawCXgqea7bDii20AYrIBrFd/Hx0M2Ocz6S111CaFkUcb0Q==}
    engines: {node: '>=0.8.x'}

  exit-hook@2.2.1:
    resolution: {integrity: sha512-eNTPlAD67BmP31LDINZ3U7HSF8l57TxOY2PmBJ1shpCvpnxBF93mWCE8YHBnXs8qiUZJc9WDcWIeC3a2HIAMfw==}
    engines: {node: '>=6'}

  exsolve@1.0.5:
    resolution: {integrity: sha512-pz5dvkYYKQ1AHVrgOzBKWeP4u4FRb3a6DNK2ucr0OoNwYIU4QWsJ+NM36LLzORT+z845MzKHHhpXiUF5nvQoJg==}

  extend@3.0.2:
    resolution: {integrity: sha512-fjquC59cD7CyW6urNXK0FBufkZcoiGG80wTuPujX590cB5Ttln20E2UB4S/WARVqhXffZl2LNgS+gQdPIIim/g==}

  extension-port-stream@3.0.0:
    resolution: {integrity: sha512-an2S5quJMiy5bnZKEf6AkfH/7r8CzHvhchU40gxN+OM6HPhe7Z9T1FUychcf2M9PpPOO0Hf7BAEfJkw2TDIBDw==}
    engines: {node: '>=12.0.0'}

  fast-deep-equal@3.1.3:
    resolution: {integrity: sha512-f3qQ9oQy9j2AhBe/H9VC91wLmKBCCU/gDOnKNAYG5hswO7BLKj09Hc5HYNz9cGI++xlpDCIgDaitVs03ATR84Q==}

  fast-equals@5.2.2:
    resolution: {integrity: sha512-V7/RktU11J3I36Nwq2JnZEM7tNm17eBJz+u25qdxBZeCKiX6BkVSZQjwWIr+IobgnZy+ag73tTZgZi7tr0LrBw==}
    engines: {node: '>=6.0.0'}

  fast-glob@3.3.3:
    resolution: {integrity: sha512-7MptL8U0cqcFdzIzwOTHoilX9x5BrNqye7Z/LuC7kCMRio1EMSyqRK3BEAUD7sXRq4iT4AzTVuZdhgQ2TCvYLg==}
    engines: {node: '>=8.6.0'}

  fast-json-stable-stringify@2.1.0:
    resolution: {integrity: sha512-lhd/wF+Lk98HZoTCtlVraHtfh5XYijIjalXck7saUtuanSDyLMxnHhSXEDJqHxD7msR8D0uCmqlkwjCV8xvwHw==}

  fast-levenshtein@2.0.6:
    resolution: {integrity: sha512-DCXu6Ifhqcks7TZKY3Hxp3y6qphY5SJZmrWMDrKcERSOXWQdMhU9Ig/PYrzyw/ul9jOIyh0N4M0tbC5hodg8dw==}

  fast-redact@3.5.0:
    resolution: {integrity: sha512-dwsoQlS7h9hMeYUq1W++23NDcBLV4KqONnITDV9DjfS3q1SgDGVrBdvvTLUotWtPSD7asWDV9/CmsZPy8Hf70A==}
    engines: {node: '>=6'}

  fast-safe-stringify@2.1.1:
    resolution: {integrity: sha512-W+KJc2dmILlPplD/H4K9l9LcAHAfPtP6BY84uVLXQ6Evcz9Lcg33Y2z1IVblT6xdY54PXYVHEv+0Wpq8Io6zkA==}

  fastq@1.19.1:
    resolution: {integrity: sha512-GwLTyxkCXjXbxqIhTsMI2Nui8huMPtnxg7krajPJAjnEG/iiOS7i+zCtWGZR9G0NBKbXKh6X9m9UIsYX/N6vvQ==}

  fault@1.0.4:
    resolution: {integrity: sha512-CJ0HCB5tL5fYTEA7ToAq5+kTwd++Borf1/bifxd9iT70QcXr4MRrO3Llf8Ifs70q+SJcGHFtnIE/Nw6giCtECA==}

  file-entry-cache@8.0.0:
    resolution: {integrity: sha512-XXTUwCvisa5oacNGRP9SfNtYBNAMi+RPwBFmblZEF7N7swHYQS6/Zfk7SRwx4D5j3CH211YNRco1DEMNVfZCnQ==}
    engines: {node: '>=16.0.0'}

  file-selector@2.1.2:
    resolution: {integrity: sha512-QgXo+mXTe8ljeqUFaX3QVHc5osSItJ/Km+xpocx0aSqWGMSCf6qYs/VnzZgS864Pjn5iceMRFigeAV7AfTlaig==}
    engines: {node: '>= 12'}

  fill-range@7.1.1:
    resolution: {integrity: sha512-YsGpe3WHLK8ZYi4tWDg2Jy3ebRz2rXowDxnld4bkQB00cc/1Zw9AWnC0i9ztDJitivtQvaI9KaLyKrc+hBW0yg==}
    engines: {node: '>=8'}

  filter-obj@1.1.0:
    resolution: {integrity: sha512-8rXg1ZnX7xzy2NGDVkBVaAy+lSlPNwad13BtgSlLuxfIslyt5Vg64U7tFcCt4WS1R0hvtnQybT/IyCkGZ3DpXQ==}
    engines: {node: '>=0.10.0'}

  find-root@1.1.0:
    resolution: {integrity: sha512-NKfW6bec6GfKc0SGx1e07QZY9PE99u0Bft/0rzSD5k3sO/vwkVUpDUKVm5Gpp5Ue3YfShPFTX2070tDs5kB9Ng==}

  find-up@4.1.0:
    resolution: {integrity: sha512-PpOwAdQ/YlXQ2vj8a3h8IipDuYRi3wceVQQGYWxNINccq40Anw7BlsEXCMbt1Zt+OLA6Fq9suIpIWD0OsnISlw==}
    engines: {node: '>=8'}

  find-up@5.0.0:
    resolution: {integrity: sha512-78/PXT1wlLLDgTzDs7sjq9hzz0vXD+zn+7wypEe4fXQxCmdmqfGsEPQxmiCSQI3ajFV91bVSsvNtrJRiW6nGng==}
    engines: {node: '>=10'}

  flat-cache@4.0.1:
    resolution: {integrity: sha512-f7ccFPK3SXFHpx15UIGyRJ/FJQctuKZ0zVuN3frBo4HnK3cay9VEW0R6yPYFHC0AgqhukPzKjq22t5DmAyqGyw==}
    engines: {node: '>=16'}

  flatted@3.3.3:
    resolution: {integrity: sha512-GX+ysw4PBCz0PzosHDepZGANEuFCMLrnRTiEy9McGjmkCQYwRq4A/X786G/fjM/+OjsWSU1ZrY5qyARZmO/uwg==}

  follow-redirects@1.15.9:
    resolution: {integrity: sha512-gew4GsXizNgdoRyqmyfMHyAmXsZDk6mHkSxZFCzW9gwlbtOW44CDtYavM+y+72qD/Vq2l550kMF52DT8fOLJqQ==}
    engines: {node: '>=4.0'}
    peerDependencies:
      debug: '*'
    peerDependenciesMeta:
      debug:
        optional: true

  for-each@0.3.5:
    resolution: {integrity: sha512-dKx12eRCVIzqCxFGplyFKJMPvLEWgmNtUrpTiJIR5u97zEhRG8ySrtboPHZXx7daLxQVrl643cTzbab2tkQjxg==}
    engines: {node: '>= 0.4'}

  foreground-child@3.3.1:
    resolution: {integrity: sha512-gIXjKqtFuWEgzFRJA9WCQeSJLZDjgJUOMCMzxtvFq/37KojM1BFGufqsCy0r4qSQmYLsZYMeyRqzIWOMup03sw==}
    engines: {node: '>=14'}

  form-data@4.0.2:
    resolution: {integrity: sha512-hGfm/slu0ZabnNt4oaRZ6uREyfCj6P4fT/n6A1rGV+Z0VdGXjfOhVUpkn6qVQONHGIFwmveGXyDs75+nr6FM8w==}
    engines: {node: '>= 6'}

  format@0.2.2:
    resolution: {integrity: sha512-wzsgA6WOq+09wrU1tsJ09udeR/YZRaeArL9e1wPbFg3GG2yDnC2ldKpxs4xunpFF9DgqCqOIra3bc1HWrJ37Ww==}
    engines: {node: '>=0.4.x'}

  fraction.js@4.3.7:
    resolution: {integrity: sha512-ZsDfxO51wGAXREY55a7la9LScWpwv9RxIrYABrlvOFBlH/ShPnrtsXeuUIfXKKOVicNxQ+o8JTbJvjS4M89yew==}

  framer-motion@11.18.2:
    resolution: {integrity: sha512-5F5Och7wrvtLVElIpclDT0CBzMVg3dL22B64aZwHtsIY8RB4mXICLrkajK4G9R+ieSAGcgrLeae2SeUTg2pr6w==}
    peerDependencies:
      '@emotion/is-prop-valid': '*'
      react: ^18.0.0 || ^19.0.0
      react-dom: ^18.0.0 || ^19.0.0
    peerDependenciesMeta:
      '@emotion/is-prop-valid':
        optional: true
      react:
        optional: true
      react-dom:
        optional: true

  fsevents@2.3.3:
    resolution: {integrity: sha512-5xoDfX+fL7faATnagmWPpbFtwh/R77WmMMqqHGS65C3vvB0YHrgF+B1YmZ3441tMj5n63k0212XNoJwzlhffQw==}
    engines: {node: ^8.16.0 || ^10.6.0 || >=11.0.0}
    os: [darwin]

  function-bind@1.1.2:
    resolution: {integrity: sha512-7XHNxH7qX9xG5mIwxkhumTox/MIRNcOgDrxWsMt2pAr23WHp6MrRlN7FBSFpCpr+oVO0F744iUgR82nJMfG2SA==}

  functions-have-names@1.2.3:
    resolution: {integrity: sha512-xckBUXyTIqT97tq2x2AMb+g163b5JFysYk0x4qxNFwbfQkmNZoiRHb6sPzI9/QV33WeuvVYBUIiD4NzNIyqaRQ==}

  gensync@1.0.0-beta.2:
    resolution: {integrity: sha512-3hN7NaskYvMDLQY55gnW3NQ+mesEAepTqlg+VEbj7zzqEMBVNhzcGYYeqFo/TlYz6eQiFcp1HcsCZO+nGgS8zg==}
    engines: {node: '>=6.9.0'}

  get-caller-file@2.0.5:
    resolution: {integrity: sha512-DyFP3BM/3YHTQOCUL/w0OZHR0lpKeGrxotcHWcqNEdnltqFwXVfhEBQ94eIo34AfQpo0rGki4cyIiftY06h2Fg==}
    engines: {node: 6.* || 8.* || >= 10.*}

  get-intrinsic@1.3.0:
    resolution: {integrity: sha512-9fSjSaos/fRIVIp+xSJlE6lfwhES7LNtKaCBIamHsjr2na1BiABJPo0mOjjz8GJDURarmCPGqaiVg5mfjb98CQ==}
    engines: {node: '>= 0.4'}

  get-nonce@1.0.1:
    resolution: {integrity: sha512-FJhYRoDaiatfEkUK8HKlicmu/3SGFD51q3itKDGoSTysQJBnfOcxU5GxnhE1E6soB76MbT0MBtnKJuXyAx+96Q==}
    engines: {node: '>=6'}

  get-proto@1.0.1:
    resolution: {integrity: sha512-sTSfBjoXBp89JvIKIefqw7U2CCebsc74kiY6awiGogKtoSGbgjYE/G/+l9sF3MWFPNc9IcoOC4ODfKHfxFmp0g==}
    engines: {node: '>= 0.4'}

  get-source@2.0.12:
    resolution: {integrity: sha512-X5+4+iD+HoSeEED+uwrQ07BOQr0kEDFMVqqpBuI+RaZBpBpHCuXxo70bjar6f0b0u/DQJsJ7ssurpP0V60Az+w==}

  glob-parent@5.1.2:
    resolution: {integrity: sha512-AOIgSQCepiJYwP3ARnGx+5VnTu2HBYdzbGP45eLw1vr3zB3vZLeyed1sC9hnbcOc9/SrMyM5RPQrkGz4aS9Zow==}
    engines: {node: '>= 6'}

  glob-parent@6.0.2:
    resolution: {integrity: sha512-XxwI8EOhVQgWp6iDL+3b0r86f4d6AX6zSU55HfB4ydCEuXLXc5FcYeOu+nnGftS4TEju/11rt4KJPTMgbfmv4A==}
    engines: {node: '>=10.13.0'}

  glob-to-regexp@0.4.1:
    resolution: {integrity: sha512-lkX1HJXwyMcprw/5YUZc2s7DrpAiHB21/V+E1rHUrVNokkvB6bqMzT0VfV6/86ZNabt1k14YOIaT7nDvOX3Iiw==}

  glob@10.4.5:
    resolution: {integrity: sha512-7Bv8RF0k6xjo7d4A/PxYLbUCfb6c+Vpd2/mB2yRDlew7Jb5hEXiCD9ibfO7wpk8i4sevK6DFny9h7EYbM3/sHg==}
    hasBin: true

  globals@11.12.0:
    resolution: {integrity: sha512-WOBp/EEGUiIsJSp7wcv/y6MO+lV9UoncWqxuFfm8eBwzWNgyfBd6Gz+IeKQ9jCmyhoH99g15M3T+QaVHFjizVA==}
    engines: {node: '>=4'}

  globals@14.0.0:
    resolution: {integrity: sha512-oahGvuMGQlPw/ivIYBjVSrWAfWLBeku5tpPE2fOPLi+WHffIWbuh2tCjhyQhTBPMf5E9jDEH4FOmTYgYwbKwtQ==}
    engines: {node: '>=18'}

  goober@2.1.16:
    resolution: {integrity: sha512-erjk19y1U33+XAMe1VTvIONHYoSqE4iS7BYUZfHaqeohLmnC0FdxEh7rQU+6MZ4OajItzjZFSRtVANrQwNq6/g==}
    peerDependencies:
      csstype: ^3.0.10

  gopd@1.2.0:
    resolution: {integrity: sha512-ZUKRh6/kUFoAiTAtTYPZJ3hw9wNxx+BIBOijnlG9PnrJsCcSjs1wyyD6vJpaYtgnzDrKYRSqf3OO6Rfa93xsRg==}
    engines: {node: '>= 0.4'}

  graphemer@1.4.0:
    resolution: {integrity: sha512-EtKwoO6kxCL9WO5xipiHTZlSzBm7WLT627TqC/uVRd0HKmq8NXyebnNYxDoBi7wt8eTWrUrKXCOVaFq9x1kgag==}

  h3@1.15.3:
    resolution: {integrity: sha512-z6GknHqyX0h9aQaTx22VZDf6QyZn+0Nh+Ym8O/u0SGSkyF5cuTJYKlc8MkzW3Nzf9LE1ivcpmYC3FUGpywhuUQ==}

  has-bigints@1.1.0:
    resolution: {integrity: sha512-R3pbpkcIqv2Pm3dUwgjclDRVmWpTJW2DcMzcIhEXEx1oh/CEMObMm3KLmRJOdvhM7o4uQBnwr8pzRK2sJWIqfg==}
    engines: {node: '>= 0.4'}

  has-flag@4.0.0:
    resolution: {integrity: sha512-EykJT/Q1KjTWctppgIAgfSO0tKVuZUjhgMr17kqTumMl6Afv3EISleU7qZUzoXDFTAHTDC4NOoG/ZxU3EvlMPQ==}
    engines: {node: '>=8'}

  has-property-descriptors@1.0.2:
    resolution: {integrity: sha512-55JNKuIW+vq4Ke1BjOTjM2YctQIvCT7GFzHwmfZPGo5wnrgkid0YQtnAleFSqumZm4az3n2BS+erby5ipJdgrg==}

  has-symbols@1.1.0:
    resolution: {integrity: sha512-1cDNdwJ2Jaohmb3sg4OmKaMBwuC48sYni5HUw2DvsC8LjGTLK9h+eb1X6RyuOHe4hT0ULCW68iomhjUoKUqlPQ==}
    engines: {node: '>= 0.4'}

  has-tostringtag@1.0.2:
    resolution: {integrity: sha512-NqADB8VjPFLM2V0VvHUewwwsw0ZWBaIdgo+ieHtK3hasLz4qeCRjYcqfB6AQrBggRKppKF8L52/VqdVsO47Dlw==}
    engines: {node: '>= 0.4'}

  hasown@2.0.2:
    resolution: {integrity: sha512-0hJU9SCPvmMzIBdZFqNPXWa6dqh7WdH0cII9y+CyS8rG3nL48Bclra9HmKhVVUHyPWNH5Y7xDwAB7bfgSjkUMQ==}
    engines: {node: '>= 0.4'}

  hast-util-parse-selector@2.2.5:
    resolution: {integrity: sha512-7j6mrk/qqkSehsM92wQjdIgWM2/BW61u/53G6xmC8i1OmEdKLHbk419QKQUjz6LglWsfqoiHmyMRkP1BGjecNQ==}

  hast-util-sanitize@5.0.2:
    resolution: {integrity: sha512-3yTWghByc50aGS7JlGhk61SPenfE/p1oaFeNwkOOyrscaOkMGrcW9+Cy/QAIOBpZxP1yqDIzFMR0+Np0i0+usg==}

  hast-util-to-jsx-runtime@2.3.6:
    resolution: {integrity: sha512-zl6s8LwNyo1P9uw+XJGvZtdFF1GdAkOg8ujOw+4Pyb76874fLps4ueHXDhXWdk6YHQ6OgUtinliG7RsYvCbbBg==}

  hast-util-whitespace@3.0.0:
    resolution: {integrity: sha512-88JUN06ipLwsnv+dVn+OIYOvAuvBMy/Qoi6O7mQHxdPXpjy+Cd6xRkWwux7DKO+4sYILtLBRIKgsdpS2gQc7qw==}

  hastscript@6.0.0:
    resolution: {integrity: sha512-nDM6bvd7lIqDUiYEiu5Sl/+6ReP0BMk/2f4U/Rooccxkj0P5nm+acM5PrGJ/t5I8qPGiqZSE6hVAwZEdZIvP4w==}

  highlight.js@10.7.3:
    resolution: {integrity: sha512-tzcUFauisWKNHaRkN4Wjl/ZA07gENAjFl3J/c480dprkGTg5EQstgaNFqBfUqCq54kZRIEcreTsAgF/m2quD7A==}

  highlightjs-vue@1.0.0:
    resolution: {integrity: sha512-PDEfEF102G23vHmPhLyPboFCD+BkMGu+GuJe2d9/eH4FsCwvgBpnc9n0pGE+ffKdph38s6foEZiEjdgHdzp+IA==}

  hoist-non-react-statics@3.3.2:
    resolution: {integrity: sha512-/gGivxi8JPKWNm/W0jSmzcMPpfpPLc3dY/6GxhX2hQ9iGj3aDfklV4ET7NjKpSinLpJ5vafa9iiGIEZg10SfBw==}

  html-url-attributes@3.0.1:
    resolution: {integrity: sha512-ol6UPyBWqsrO6EJySPz2O7ZSr856WDrEzM5zMqp+FJJLGMW35cLYmmZnl0vztAZxRUoNZJFTCohfjuIJ8I4QBQ==}

  idb-keyval@6.2.2:
    resolution: {integrity: sha512-yjD9nARJ/jb1g+CvD0tlhUHOrJ9Sy0P8T9MF3YaLlHnSRpwPfpTX0XIvpmw3gAJUmEu3FiICLBDPXVwyEvrleg==}

  ieee754@1.2.1:
    resolution: {integrity: sha512-dcyqhDvX1C46lXZcVqCpK+FtMRQVdIMN6/Df5js2zouUsqG7I6sFxitIC+7KYK29KdXOLHdu9zL4sFnoVQnqaA==}

  ignore@5.3.2:
    resolution: {integrity: sha512-hsBTNUqQTDwkWtcdYI2i06Y/nUBEsNEDJKjWdigLvegy8kDuJAS8uRlpkkcQpyEXL0Z/pjDy5HBmMjRCJ2gq+g==}
    engines: {node: '>= 4'}

  ignore@7.0.5:
    resolution: {integrity: sha512-Hs59xBNfUIunMFgWAbGX5cq6893IbWg4KnrjbYwX3tx0ztorVgTDA6B2sxf8ejHJ4wz8BqGUMYlnzNBer5NvGg==}
    engines: {node: '>= 4'}

  import-fresh@3.3.1:
    resolution: {integrity: sha512-TR3KfrTZTYLPB6jUjfx6MF9WcWrHL9su5TObK4ZkYgBdWKPOFoSoQIdEuTuR82pmtxH2spWG9h6etwfr1pLBqQ==}
    engines: {node: '>=6'}

  imurmurhash@0.1.4:
    resolution: {integrity: sha512-JmXMZ6wuvDmLiHEml9ykzqO6lwFbof0GG4IkcGaENdCRDDmMVnny7s5HsIgHCbaq0w2MyPhDqkhTUgS2LU2PHA==}
    engines: {node: '>=0.8.19'}

  indent-string@4.0.0:
    resolution: {integrity: sha512-EdDDZu4A2OyIK7Lr/2zG+w5jmbuk1DVBnEwREQvBzspBJkCEbRa8GxU1lghYcaGJCnRWibjDXlq779X1/y5xwg==}
    engines: {node: '>=8'}

  inherits@2.0.4:
    resolution: {integrity: sha512-k/vGaX4/Yla3WzyMCvTQOXYeIHvqOKtnqBduzTHpzpQZzAskKMhZ2K+EnBiSM9zGSoIFeMpXKxa4dYeZIQqewQ==}

  inline-style-parser@0.2.4:
    resolution: {integrity: sha512-0aO8FkhNZlj/ZIbNi7Lxxr12obT7cL1moPfE4tg1LkX7LlLfC6DeX4l2ZEud1ukP9jNQyNnfzQVqwbwmAATY4Q==}

  internal-slot@1.1.0:
    resolution: {integrity: sha512-4gd7VpWNQNB4UKKCFFVcp1AVv+FMOgs9NKzjHKusc8jTMhd5eL1NqQqOpE0KzMds804/yHlglp3uxgluOqAPLw==}
    engines: {node: '>= 0.4'}

  internmap@2.0.3:
    resolution: {integrity: sha512-5Hh7Y1wQbvY5ooGgPbDaL5iYLAPzMTUrjMulskHLH6wnv/A+1q5rgEaiuqEjB+oxGXIVZs1FF+R/KPN3ZSQYYg==}
    engines: {node: '>=12'}

  invariant@2.2.4:
    resolution: {integrity: sha512-phJfQVBuaJM5raOpJjSfkiD6BpbCE4Ns//LaXl6wGYtUBY83nWS6Rf9tXm2e8VaK60JEjYldbPif/A2B1C2gNA==}

  iron-webcrypto@1.2.1:
    resolution: {integrity: sha512-feOM6FaSr6rEABp/eDfVseKyTMDt+KGpeB35SkVn9Tyn0CqvVsY3EwI0v5i8nMHyJnzCIQf7nsy3p41TPkJZhg==}

  is-alphabetical@1.0.4:
    resolution: {integrity: sha512-DwzsA04LQ10FHTZuL0/grVDk4rFoVH1pjAToYwBrHSxcrBIGQuXrQMtD5U1b0U2XVgKZCTLLP8u2Qxqhy3l2Vg==}

  is-alphabetical@2.0.1:
    resolution: {integrity: sha512-FWyyY60MeTNyeSRpkM2Iry0G9hpr7/9kD40mD/cGQEuilcZYS4okz8SN2Q6rLCJ8gbCt6fN+rC+6tMGS99LaxQ==}

  is-alphanumerical@1.0.4:
    resolution: {integrity: sha512-UzoZUr+XfVz3t3v4KyGEniVL9BDRoQtY7tOyrRybkVNjDFWyo1yhXNGrrBTQxp3ib9BLAWs7k2YKBQsFRkZG9A==}

  is-alphanumerical@2.0.1:
    resolution: {integrity: sha512-hmbYhX/9MUMF5uh7tOXyK/n0ZvWpad5caBA17GsC6vyuCqaWliRG5K1qS9inmUhEMaOBIW7/whAnSwveW/LtZw==}

  is-arguments@1.2.0:
    resolution: {integrity: sha512-7bVbi0huj/wrIAOzb8U1aszg9kdi3KN/CyU19CTI7tAoZYEZoL9yCDXpbXN+uPsuWnP02cyug1gleqq+TU+YCA==}
    engines: {node: '>= 0.4'}

  is-array-buffer@3.0.5:
    resolution: {integrity: sha512-DDfANUiiG2wC1qawP66qlTugJeL5HyzMpfr8lLK+jMQirGzNod0B12cFB/9q838Ru27sBwfw78/rdoU7RERz6A==}
    engines: {node: '>= 0.4'}

  is-arrayish@0.2.1:
    resolution: {integrity: sha512-zz06S8t0ozoDXMG+ube26zeCTNXcKIPJZJi8hBrF4idCLms4CG9QtK7qBl1boi5ODzFpjswb5JPmHCbMpjaYzg==}

  is-arrayish@0.3.2:
    resolution: {integrity: sha512-eVRqCvVlZbuw3GrM63ovNSNAeA1K16kaR/LRY/92w0zxQ5/1YzwblUX652i4Xs9RwAGjW9d9y6X88t8OaAJfWQ==}

  is-bigint@1.1.0:
    resolution: {integrity: sha512-n4ZT37wG78iz03xPRKJrHTdZbe3IicyucEtdRsV5yglwc3GyUfbAfpSeD0FJ41NbUNSt5wbhqfp1fS+BgnvDFQ==}
    engines: {node: '>= 0.4'}

  is-binary-path@2.1.0:
    resolution: {integrity: sha512-ZMERYes6pDydyuGidse7OsHxtbI7WVeUEozgR/g7rd0xUimYNlvZRE/K2MgZTjWy725IfelLeVcEM97mmtRGXw==}
    engines: {node: '>=8'}

  is-boolean-object@1.2.2:
    resolution: {integrity: sha512-wa56o2/ElJMYqjCjGkXri7it5FbebW5usLw/nPmCMs5DeZ7eziSYZhSmPRn0txqeW4LnAmQQU7FgqLpsEFKM4A==}
    engines: {node: '>= 0.4'}

  is-callable@1.2.7:
    resolution: {integrity: sha512-1BC0BVFhS/p0qtw6enp8e+8OD0UrK0oFLztSjNzhcKA3WDuJxxAPXzPuPtKkjEY9UUoEWlX/8fgKeu2S8i9JTA==}
    engines: {node: '>= 0.4'}

  is-core-module@2.16.1:
    resolution: {integrity: sha512-UfoeMA6fIJ8wTYFEUjelnaGI67v6+N7qXJEvQuIGa99l4xsCruSYOVSQ0uPANn4dAzm8lkYPaKLrrijLq7x23w==}
    engines: {node: '>= 0.4'}

  is-date-object@1.1.0:
    resolution: {integrity: sha512-PwwhEakHVKTdRNVOw+/Gyh0+MzlCl4R6qKvkhuvLtPMggI1WAHt9sOwZxQLSGpUaDnrdyDsomoRgNnCfKNSXXg==}
    engines: {node: '>= 0.4'}

  is-decimal@1.0.4:
    resolution: {integrity: sha512-RGdriMmQQvZ2aqaQq3awNA6dCGtKpiDFcOzrTWrDAT2MiWrKQVPmxLGHl7Y2nNu6led0kEyoX0enY0qXYsv9zw==}

  is-decimal@2.0.1:
    resolution: {integrity: sha512-AAB9hiomQs5DXWcRB1rqsxGUstbRroFOPPVAomNk/3XHR5JyEZChOyTWe2oayKnsSsr/kcGqF+z6yuH6HHpN0A==}

  is-extglob@2.1.1:
    resolution: {integrity: sha512-SbKbANkN603Vi4jEZv49LeVJMn4yGwsbzZworEoyEiutsN3nJYdbO36zfhGJ6QEDpOZIFkDtnq5JRxmvl3jsoQ==}
    engines: {node: '>=0.10.0'}

  is-fullwidth-code-point@3.0.0:
    resolution: {integrity: sha512-zymm5+u+sCsSWyD9qNaejV3DFvhCKclKdizYaJUuHA83RLjb7nSuGnddCHGv0hk+KY7BMAlsWeK4Ueg6EV6XQg==}
    engines: {node: '>=8'}

  is-generator-function@1.1.0:
    resolution: {integrity: sha512-nPUB5km40q9e8UfN/Zc24eLlzdSf9OfKByBw9CIdw4H1giPMeA0OIJvbchsCu4npfI2QcMVBsGEBHKZ7wLTWmQ==}
    engines: {node: '>= 0.4'}

  is-glob@4.0.3:
    resolution: {integrity: sha512-xelSayHH36ZgE7ZWhli7pW34hNbNl8Ojv5KVmkJD4hBdD3th8Tfk9vYasLM+mXWOZhFkgZfxhLSnrwRr4elSSg==}
    engines: {node: '>=0.10.0'}

  is-hexadecimal@1.0.4:
    resolution: {integrity: sha512-gyPJuv83bHMpocVYoqof5VDiZveEoGoFL8m3BXNb2VW8Xs+rz9kqO8LOQ5DH6EsuvilT1ApazU0pyl+ytbPtlw==}

  is-hexadecimal@2.0.1:
    resolution: {integrity: sha512-DgZQp241c8oO6cA1SbTEWiXeoxV42vlcJxgH+B3hi1AiqqKruZR3ZGF8In3fj4+/y/7rHvlOZLZtgJ/4ttYGZg==}

  is-map@2.0.3:
    resolution: {integrity: sha512-1Qed0/Hr2m+YqxnM09CjA2d/i6YZNfF6R2oRAOj36eUdS6qIV/huPJNSEpKbupewFs+ZsJlxsjjPbc0/afW6Lw==}
    engines: {node: '>= 0.4'}

  is-number-object@1.1.1:
    resolution: {integrity: sha512-lZhclumE1G6VYD8VHe35wFaIif+CTy5SJIi5+3y4psDgWu4wPDoBhF8NxUOinEc7pHgiTsT6MaBb92rKhhD+Xw==}
    engines: {node: '>= 0.4'}

  is-number@7.0.0:
    resolution: {integrity: sha512-41Cifkg6e8TylSpdtTpeLVMqvSBEVzTttHvERD741+pnZ8ANv0004MRL43QKPDlK9cGvNp6NZWZUBlbGXYxxng==}
    engines: {node: '>=0.12.0'}

  is-plain-obj@4.1.0:
    resolution: {integrity: sha512-+Pgi+vMuUNkJyExiMBt5IlFoMyKnr5zhJ4Uspz58WOhBF5QoIZkFyNHIbBAtHwzVAgk5RtndVNsDRN61/mmDqg==}
    engines: {node: '>=12'}

  is-regex@1.2.1:
    resolution: {integrity: sha512-MjYsKHO5O7mCsmRGxWcLWheFqN9DJ/2TmngvjKXihe6efViPqc274+Fx/4fYj/r03+ESvBdTXK0V6tA3rgez1g==}
    engines: {node: '>= 0.4'}

  is-set@2.0.3:
    resolution: {integrity: sha512-iPAjerrse27/ygGLxw+EBR9agv9Y6uLeYVJMu+QNCoouJ1/1ri0mGrcWpfCqFZuzzx3WjtwxG098X+n4OuRkPg==}
    engines: {node: '>= 0.4'}

  is-shared-array-buffer@1.0.4:
    resolution: {integrity: sha512-ISWac8drv4ZGfwKl5slpHG9OwPNty4jOWPRIhBpxOoD+hqITiwuipOQ2bNthAzwA3B4fIjO4Nln74N0S9byq8A==}
    engines: {node: '>= 0.4'}

  is-stream@2.0.1:
    resolution: {integrity: sha512-hFoiJiTl63nn+kstHGBtewWSKnQLpyb155KHheA1l39uvtO9nWIop1p3udqPcUd/xbF1VLMO4n7OI6p7RbngDg==}
    engines: {node: '>=8'}

  is-string@1.1.1:
    resolution: {integrity: sha512-BtEeSsoaQjlSPBemMQIrY1MY0uM6vnS1g5fmufYOtnxLGUZM2178PKbhsk7Ffv58IX+ZtcvoGwccYsh0PglkAA==}
    engines: {node: '>= 0.4'}

  is-symbol@1.1.1:
    resolution: {integrity: sha512-9gGx6GTtCQM73BgmHQXfDmLtfjjTUDSyoxTCbp5WtoixAhfgsDirWIcVQ/IHpvI5Vgd5i/J5F7B9cN/WlVbC/w==}
    engines: {node: '>= 0.4'}

  is-typed-array@1.1.15:
    resolution: {integrity: sha512-p3EcsicXjit7SaskXHs1hA91QxgTw46Fv6EFKKGS5DRFLD8yKnohjF3hxoju94b/OcMZoQukzpPpBE9uLVKzgQ==}
    engines: {node: '>= 0.4'}

  is-weakmap@2.0.2:
    resolution: {integrity: sha512-K5pXYOm9wqY1RgjpL3YTkF39tni1XajUIkawTLUo9EZEVUFga5gSQJF8nNS7ZwJQ02y+1YCNYcMh+HIf1ZqE+w==}
    engines: {node: '>= 0.4'}

  is-weakset@2.0.4:
    resolution: {integrity: sha512-mfcwb6IzQyOKTs84CQMrOwW4gQcaTOAWJ0zzJCl2WSPDrWk/OzDaImWFH3djXhb24g4eudZfLRozAvPGw4d9hQ==}
    engines: {node: '>= 0.4'}

  isarray@1.0.0:
    resolution: {integrity: sha512-VLghIWNM6ELQzo7zwmcg0NmTVyWKYjvIeM83yjp0wRDTmUnrM678fQbcKBo6n2CJEF0szoG//ytg+TKla89ALQ==}

  isarray@2.0.5:
    resolution: {integrity: sha512-xHjhDr3cNBK0BzdUJSPXZntQUx/mwMS5Rw4A7lPJ90XGAO6ISP/ePDNuo0vhqOZU+UD5JoodwCAAoZQd3FeAKw==}

  isexe@2.0.0:
    resolution: {integrity: sha512-RHxMLp9lnKHGHRng9QFhRCMbYAcVpn69smSGcq3f36xjgVVWThj4qqLbTLlq7Ssj8B+fIQ1EuCEGI2lKsyQeIw==}

  isows@1.0.6:
    resolution: {integrity: sha512-lPHCayd40oW98/I0uvgaHKWCSvkzY27LjWLbtzOm64yQ+G3Q5npjjbdppU65iZXkK1Zt+kH9pfegli0AYfwYYw==}
    peerDependencies:
      ws: '*'

  isows@1.0.7:
    resolution: {integrity: sha512-I1fSfDCZL5P0v33sVqeTDSpcstAg/N+wF5HS033mogOVIp4B+oHC7oOCsA3axAbBSGTJ8QubbNmnIRN/h8U7hg==}
    peerDependencies:
      ws: '*'

  jackspeak@3.4.3:
    resolution: {integrity: sha512-OGlZQpz2yfahA/Rd1Y8Cd9SIEsqvXkLVoSw/cgwhnhFMDbsQFeZYoJJ7bIZBS9BcamUW96asq/npPWugM+RQBw==}

  jiti@1.21.7:
    resolution: {integrity: sha512-/imKNG4EbWNrVjoNC/1H5/9GFy+tqjGBHCaSsN+P2RnPqjsLmv6UD3Ej+Kj8nBWaRAwyk7kK5ZUc+OEatnTR3A==}
    hasBin: true

  js-cookie@3.0.5:
    resolution: {integrity: sha512-cEiJEAEoIbWfCZYKWhVwFuvPX1gETRYPw6LlaTKoxD3s2AkXzkCjnp6h0V77ozyqj0jakteJ4YqDJT830+lVGw==}
    engines: {node: '>=14'}

  js-tokens@4.0.0:
    resolution: {integrity: sha512-RdJUflcE3cUzKiMqQgsCu06FPu9UdIJO0beYbPhHN4k6apgJtifcoCtT9bcxOpYBtpD2kCM6Sbzg4CausW/PKQ==}

  js-yaml@4.1.0:
    resolution: {integrity: sha512-wpxZs9NoxZaJESJGIZTyDEaYpl0FKSA+FB9aJiyemKhMwkxQg63h4T1KJgUGHpTqPDNRcmmYLugrRjJlBtWvRA==}
    hasBin: true

  jsesc@3.1.0:
    resolution: {integrity: sha512-/sM3dO2FOzXjKQhJuo0Q173wf2KOo8t4I8vHy6lF9poUp7bKT0/NHE8fPX23PwfhnykfqnC2xRxOnVw5XuGIaA==}
    engines: {node: '>=6'}
    hasBin: true

  json-buffer@3.0.1:
    resolution: {integrity: sha512-4bV5BfR2mqfQTJm+V5tPPdf+ZpuhiIvTuAB5g8kcrXOZpTT/QwwVRWBywX1ozr6lEuPdbHxwaJlm9G6mI2sfSQ==}

  json-parse-even-better-errors@2.3.1:
    resolution: {integrity: sha512-xyFwyhro/JEof6Ghe2iz2NcXoj2sloNsWr/XsERDK/oiPCfaNhl5ONfp+jQdAZRQQ0IJWNzH9zIZF7li91kh2w==}

  json-rpc-engine@6.1.0:
    resolution: {integrity: sha512-NEdLrtrq1jUZyfjkr9OCz9EzCNhnRyWtt1PAnvnhwy6e8XETS0Dtc+ZNCO2gvuAoKsIn2+vCSowXTYE4CkgnAQ==}
    engines: {node: '>=10.0.0'}

  json-rpc-random-id@1.0.1:
    resolution: {integrity: sha512-RJ9YYNCkhVDBuP4zN5BBtYAzEl03yq/jIIsyif0JY9qyJuQQZNeDK7anAPKKlyEtLSj2s8h6hNh2F8zO5q7ScA==}

  json-schema-traverse@0.4.1:
    resolution: {integrity: sha512-xbbCH5dCYU5T8LcEhhuh7HJ88HXuW3qsI3Y0zOZFKfZEHcpWiHU/Jxzk629Brsab/mMiHQti9wMP+845RPe3Vg==}

  json-stable-stringify-without-jsonify@1.0.1:
    resolution: {integrity: sha512-Bdboy+l7tA3OGW6FjyFHWkP5LuByj1Tk33Ljyq0axyzdk9//JSi2u3fP1QSmd1KNwq6VOKYGlAu87CisVir6Pw==}

  json5@2.2.3:
    resolution: {integrity: sha512-XmOWe7eyHYH14cLdVPoyg+GOH3rYX++KpzrylJwSW98t3Nk+U8XOl8FWKOgwtzdb8lXGf6zYwDUzeHMWfxasyg==}
    engines: {node: '>=6'}
    hasBin: true

  keccak@3.0.4:
    resolution: {integrity: sha512-3vKuW0jV8J3XNTzvfyicFR5qvxrSAGl7KIhvgOu5cmWwM7tZRj3fMbj/pfIf4be7aznbc+prBWGjywox/g2Y6Q==}
    engines: {node: '>=10.0.0'}

  keyv@4.5.4:
    resolution: {integrity: sha512-oxVHkHR/EJf2CNXnWxRLW6mg7JyCCUcG0DtEGmL2ctUo1PNTin1PUil+r/+4r5MpVgC/fn1kjsx7mjSujKqIpw==}

  keyvaluestorage-interface@1.0.0:
    resolution: {integrity: sha512-8t6Q3TclQ4uZynJY9IGr2+SsIGwK9JHcO6ootkHCGA0CrQCRy+VkouYNO2xicET6b9al7QKzpebNow+gkpCL8g==}

  levn@0.4.1:
    resolution: {integrity: sha512-+bT2uH4E5LGE7h/n3evcS/sQlJXCpIp6ym8OWJ5eV6+67Dsql/LaaT7qJBAt2rzfoa/5QBGBhxDix1dMt2kQKQ==}
    engines: {node: '>= 0.8.0'}

  lightningcss-darwin-arm64@1.30.1:
    resolution: {integrity: sha512-c8JK7hyE65X1MHMN+Viq9n11RRC7hgin3HhYKhrMyaXflk5GVplZ60IxyoVtzILeKr+xAJwg6zK6sjTBJ0FKYQ==}
    engines: {node: '>= 12.0.0'}
    cpu: [arm64]
    os: [darwin]

  lightningcss-darwin-x64@1.30.1:
    resolution: {integrity: sha512-k1EvjakfumAQoTfcXUcHQZhSpLlkAuEkdMBsI/ivWw9hL+7FtilQc0Cy3hrx0AAQrVtQAbMI7YjCgYgvn37PzA==}
    engines: {node: '>= 12.0.0'}
    cpu: [x64]
    os: [darwin]

  lightningcss-freebsd-x64@1.30.1:
    resolution: {integrity: sha512-kmW6UGCGg2PcyUE59K5r0kWfKPAVy4SltVeut+umLCFoJ53RdCUWxcRDzO1eTaxf/7Q2H7LTquFHPL5R+Gjyig==}
    engines: {node: '>= 12.0.0'}
    cpu: [x64]
    os: [freebsd]

  lightningcss-linux-arm-gnueabihf@1.30.1:
    resolution: {integrity: sha512-MjxUShl1v8pit+6D/zSPq9S9dQ2NPFSQwGvxBCYaBYLPlCWuPh9/t1MRS8iUaR8i+a6w7aps+B4N0S1TYP/R+Q==}
    engines: {node: '>= 12.0.0'}
    cpu: [arm]
    os: [linux]

  lightningcss-linux-arm64-gnu@1.30.1:
    resolution: {integrity: sha512-gB72maP8rmrKsnKYy8XUuXi/4OctJiuQjcuqWNlJQ6jZiWqtPvqFziskH3hnajfvKB27ynbVCucKSm2rkQp4Bw==}
    engines: {node: '>= 12.0.0'}
    cpu: [arm64]
    os: [linux]

  lightningcss-linux-arm64-musl@1.30.1:
    resolution: {integrity: sha512-jmUQVx4331m6LIX+0wUhBbmMX7TCfjF5FoOH6SD1CttzuYlGNVpA7QnrmLxrsub43ClTINfGSYyHe2HWeLl5CQ==}
    engines: {node: '>= 12.0.0'}
    cpu: [arm64]
    os: [linux]

  lightningcss-linux-x64-gnu@1.30.1:
    resolution: {integrity: sha512-piWx3z4wN8J8z3+O5kO74+yr6ze/dKmPnI7vLqfSqI8bccaTGY5xiSGVIJBDd5K5BHlvVLpUB3S2YCfelyJ1bw==}
    engines: {node: '>= 12.0.0'}
    cpu: [x64]
    os: [linux]

  lightningcss-linux-x64-musl@1.30.1:
    resolution: {integrity: sha512-rRomAK7eIkL+tHY0YPxbc5Dra2gXlI63HL+v1Pdi1a3sC+tJTcFrHX+E86sulgAXeI7rSzDYhPSeHHjqFhqfeQ==}
    engines: {node: '>= 12.0.0'}
    cpu: [x64]
    os: [linux]

  lightningcss-win32-arm64-msvc@1.30.1:
    resolution: {integrity: sha512-mSL4rqPi4iXq5YVqzSsJgMVFENoa4nGTT/GjO2c0Yl9OuQfPsIfncvLrEW6RbbB24WtZ3xP/2CCmI3tNkNV4oA==}
    engines: {node: '>= 12.0.0'}
    cpu: [arm64]
    os: [win32]

  lightningcss-win32-x64-msvc@1.30.1:
    resolution: {integrity: sha512-PVqXh48wh4T53F/1CCu8PIPCxLzWyCnn/9T5W1Jpmdy5h9Cwd+0YQS6/LwhHXSafuc61/xg9Lv5OrCby6a++jg==}
    engines: {node: '>= 12.0.0'}
    cpu: [x64]
    os: [win32]

  lightningcss@1.30.1:
    resolution: {integrity: sha512-xi6IyHML+c9+Q3W0S4fCQJOym42pyurFiJUHEcEyHS0CeKzia4yZDEsLlqOFykxOdHpNy0NmvVO31vcSqAxJCg==}
    engines: {node: '>= 12.0.0'}

  lilconfig@3.1.3:
    resolution: {integrity: sha512-/vlFKAoH5Cgt3Ie+JLhRbwOsCQePABiU3tJ1egGvyQ+33R/vcwM2Zl2QR/LzjsBeItPt3oSVXapn+m4nQDvpzw==}
    engines: {node: '>=14'}

  lines-and-columns@1.2.4:
    resolution: {integrity: sha512-7ylylesZQ/PV29jhEDl3Ufjo6ZX7gCqJr5F7PKrqc93v7fzSymt1BpwEU8nAUXs8qzzvqhbjhK5QZg6Mt/HkBg==}

  lit-element@4.2.0:
    resolution: {integrity: sha512-MGrXJVAI5x+Bfth/pU9Kst1iWID6GHDLEzFEnyULB/sFiRLgkd8NPK/PeeXxktA3T6EIIaq8U3KcbTU5XFcP2Q==}

  lit-html@3.3.0:
    resolution: {integrity: sha512-RHoswrFAxY2d8Cf2mm4OZ1DgzCoBKUKSPvA1fhtSELxUERq2aQQ2h05pO9j81gS1o7RIRJ+CePLogfyahwmynw==}

  lit@3.3.0:
    resolution: {integrity: sha512-DGVsqsOIHBww2DqnuZzW7QsuCdahp50ojuDaBPC7jUDRpYoH0z7kHBBYZewRzer75FwtrkmkKk7iOAwSaWdBmw==}

  locate-path@5.0.0:
    resolution: {integrity: sha512-t7hw9pI+WvuwNJXwk5zVHpyhIqzg2qTlklJOf0mVxGSbe3Fp2VieZcduNYjaLDoy6p9uGpQEGWG87WpMKlNq8g==}
    engines: {node: '>=8'}

  locate-path@6.0.0:
    resolution: {integrity: sha512-iPZK6eYjbxRu3uB4/WZ3EsEIMJFMqAoopl3R+zuq0UjcAm/MO6KCweDgPfP3elTztoKP3KtnVHxTn2NHBSDVUw==}
    engines: {node: '>=10'}

  lodash.castarray@4.4.0:
    resolution: {integrity: sha512-aVx8ztPv7/2ULbArGJ2Y42bG1mEQ5mGjpdvrbJcJFU3TbYybe+QlLS4pst9zV52ymy2in1KpFPiZnAOATxD4+Q==}

  lodash.isplainobject@4.0.6:
    resolution: {integrity: sha512-oSXzaWypCMHkPC3NvBEaPHf0KsA5mvPrOPgQWDsbg8n7orZ290M0BmC/jgRZ4vcJ6DTAhjrsSYgdsW/F+MFOBA==}

  lodash.merge@4.6.2:
    resolution: {integrity: sha512-0KpjqXRVvrYyCsX1swR/XTK0va6VQkQM6MNo7PqW77ByjAhoARA8EfrP1N4+KlKj8YS0ZUCtRT/YUuhyYDujIQ==}

  lodash@4.17.21:
    resolution: {integrity: sha512-v2kDEe57lecTulaDIuNTPy3Ry4gLGJ6Z1O3vE1krgXZNrsQ+LFTGHVxVjcXPs17LhbZVGedAJv8XZ1tvj5FvSg==}

  longest-streak@3.1.0:
    resolution: {integrity: sha512-9Ri+o0JYgehTaVBBDoMqIl8GXtbWg711O3srftcHhZ0dqnETqLaoIK0x17fUw9rFSlK/0NlsKe0Ahhyl5pXE2g==}

  loose-envify@1.4.0:
    resolution: {integrity: sha512-lyuxPGr/Wfhrlem2CL/UcnUc1zcqKAImBDzukY7Y5F/yQiNdko6+fRLevlw1HgMySw7f611UIY408EtxRSoK3Q==}
    hasBin: true

  lowlight@1.20.0:
    resolution: {integrity: sha512-8Ktj+prEb1RoCPkEOrPMYUN/nCggB7qAWe3a7OpMjWQkh3l2RD5wKRQ+o8Q8YuI9RG/xs95waaI/E6ym/7NsTw==}

  lru-cache@10.4.3:
    resolution: {integrity: sha512-JNAzZcXrCt42VGLuYz0zfAzDfAvJWW6AfYlDBQyDV5DClI2m5sAmK+OIO7s59XfsRsWHp02jAJrRadPRGTt6SQ==}

  lru-cache@5.1.1:
    resolution: {integrity: sha512-KpNARQA3Iwv+jTA0utUVVbrh+Jlrr1Fv0e56GGzAFOXN7dk/FviaDW8LHmK52DlcH4WP2n6gI8vN1aesBFgo9w==}

  lucide-react@0.263.1:
    resolution: {integrity: sha512-keqxAx97PlaEN89PXZ6ki1N8nRjGWtDa4021GFYLNj0RgruM5odbpl8GHTExj0hhPq3sF6Up0gnxt6TSHu+ovw==}
    peerDependencies:
      react: ^16.5.1 || ^17.0.0 || ^18.0.0

  lz-string@1.5.0:
    resolution: {integrity: sha512-h5bgJWpxJNswbU7qCrV0tIKQCaS3blPDrqKWx+QxzuzL1zGUzij9XCWLrSLsJPu5t+eWA/ycetzYAO5IOMcWAQ==}
    hasBin: true

  make-error@1.3.6:
    resolution: {integrity: sha512-s8UhlNe7vPKomQhC1qFelMokr/Sc3AgNbso3n74mVPA5LTZwkB9NlXf4XPamLxJE8h0gh73rM94xvwRT2CVInw==}

  math-intrinsics@1.1.0:
    resolution: {integrity: sha512-/IXtbwEk5HTPyEwyKX6hGkYXxM9nbj64B+ilVJnC/R6B0pH5G4V3b0pVbL7DBj4tkhBAppbQUlf6F6Xl9LHu1g==}
    engines: {node: '>= 0.4'}

  mdast-util-from-markdown@2.0.2:
    resolution: {integrity: sha512-uZhTV/8NBuw0WHkPTrCqDOl0zVe1BIng5ZtHoDk49ME1qqcjYmmLmOf0gELgcRMxN4w2iuIeVso5/6QymSrgmA==}

  mdast-util-mdx-expression@2.0.1:
    resolution: {integrity: sha512-J6f+9hUp+ldTZqKRSg7Vw5V6MqjATc+3E4gf3CFNcuZNWD8XdyI6zQ8GqH7f8169MM6P7hMBRDVGnn7oHB9kXQ==}

  mdast-util-mdx-jsx@3.2.0:
    resolution: {integrity: sha512-lj/z8v0r6ZtsN/cGNNtemmmfoLAFZnjMbNyLzBafjzikOM+glrjNHPlf6lQDOTccj9n5b0PPihEBbhneMyGs1Q==}

  mdast-util-mdxjs-esm@2.0.1:
    resolution: {integrity: sha512-EcmOpxsZ96CvlP03NghtH1EsLtr0n9Tm4lPUJUBccV9RwUOneqSycg19n5HGzCf+10LozMRSObtVr3ee1WoHtg==}

  mdast-util-phrasing@4.1.0:
    resolution: {integrity: sha512-TqICwyvJJpBwvGAMZjj4J2n0X8QWp21b9l0o7eXyVJ25YNWYbJDVIyD1bZXE6WtV6RmKJVYmQAKWa0zWOABz2w==}

  mdast-util-to-hast@13.2.0:
    resolution: {integrity: sha512-QGYKEuUsYT9ykKBCMOEDLsU5JRObWQusAolFMeko/tYPufNkRffBAQjIE+99jbA87xv6FgmjLtwjh9wBWajwAA==}

  mdast-util-to-markdown@2.1.2:
    resolution: {integrity: sha512-xj68wMTvGXVOKonmog6LwyJKrYXZPvlwabaryTjLh9LuvovB/KAH+kvi8Gjj+7rJjsFi23nkUxRQv1KqSroMqA==}

  mdast-util-to-string@4.0.0:
    resolution: {integrity: sha512-0H44vDimn51F0YwvxSJSm0eCDOJTRlmN0R1yBh4HLj9wiV1Dn0QoXGbvFAWj2hSItVTlCmBF1hqKlIyUBVFLPg==}

  merge2@1.4.1:
    resolution: {integrity: sha512-8q7VEgMJW4J8tcfVPy8g09NcQwZdbwFEqhe/WZkoIzjn/3TGDwtOCYtXGxA3O8tPzpczCCDgv+P2P5y00ZJOOg==}
    engines: {node: '>= 8'}

  micro-ftch@0.3.1:
    resolution: {integrity: sha512-/0LLxhzP0tfiR5hcQebtudP56gUurs2CLkGarnCiB/OqEyUFQ6U3paQi/tgLv0hBJYt2rnr9MNpxz4fiiugstg==}

  micromark-core-commonmark@2.0.3:
    resolution: {integrity: sha512-RDBrHEMSxVFLg6xvnXmb1Ayr2WzLAWjeSATAoxwKYJV94TeNavgoIdA0a9ytzDSVzBy2YKFK+emCPOEibLeCrg==}

  micromark-factory-destination@2.0.1:
    resolution: {integrity: sha512-Xe6rDdJlkmbFRExpTOmRj9N3MaWmbAgdpSrBQvCFqhezUn4AHqJHbaEnfbVYYiexVSs//tqOdY/DxhjdCiJnIA==}

  micromark-factory-label@2.0.1:
    resolution: {integrity: sha512-VFMekyQExqIW7xIChcXn4ok29YE3rnuyveW3wZQWWqF4Nv9Wk5rgJ99KzPvHjkmPXF93FXIbBp6YdW3t71/7Vg==}

  micromark-factory-space@2.0.1:
    resolution: {integrity: sha512-zRkxjtBxxLd2Sc0d+fbnEunsTj46SWXgXciZmHq0kDYGnck/ZSGj9/wULTV95uoeYiK5hRXP2mJ98Uo4cq/LQg==}

  micromark-factory-title@2.0.1:
    resolution: {integrity: sha512-5bZ+3CjhAd9eChYTHsjy6TGxpOFSKgKKJPJxr293jTbfry2KDoWkhBb6TcPVB4NmzaPhMs1Frm9AZH7OD4Cjzw==}

  micromark-factory-whitespace@2.0.1:
    resolution: {integrity: sha512-Ob0nuZ3PKt/n0hORHyvoD9uZhr+Za8sFoP+OnMcnWK5lngSzALgQYKMr9RJVOWLqQYuyn6ulqGWSXdwf6F80lQ==}

  micromark-util-character@2.1.1:
    resolution: {integrity: sha512-wv8tdUTJ3thSFFFJKtpYKOYiGP2+v96Hvk4Tu8KpCAsTMs6yi+nVmGh1syvSCsaxz45J6Jbw+9DD6g97+NV67Q==}

  micromark-util-chunked@2.0.1:
    resolution: {integrity: sha512-QUNFEOPELfmvv+4xiNg2sRYeS/P84pTW0TCgP5zc9FpXetHY0ab7SxKyAQCNCc1eK0459uoLI1y5oO5Vc1dbhA==}

  micromark-util-classify-character@2.0.1:
    resolution: {integrity: sha512-K0kHzM6afW/MbeWYWLjoHQv1sgg2Q9EccHEDzSkxiP/EaagNzCm7T/WMKZ3rjMbvIpvBiZgwR3dKMygtA4mG1Q==}

  micromark-util-combine-extensions@2.0.1:
    resolution: {integrity: sha512-OnAnH8Ujmy59JcyZw8JSbK9cGpdVY44NKgSM7E9Eh7DiLS2E9RNQf0dONaGDzEG9yjEl5hcqeIsj4hfRkLH/Bg==}

  micromark-util-decode-numeric-character-reference@2.0.2:
    resolution: {integrity: sha512-ccUbYk6CwVdkmCQMyr64dXz42EfHGkPQlBj5p7YVGzq8I7CtjXZJrubAYezf7Rp+bjPseiROqe7G6foFd+lEuw==}

  micromark-util-decode-string@2.0.1:
    resolution: {integrity: sha512-nDV/77Fj6eH1ynwscYTOsbK7rR//Uj0bZXBwJZRfaLEJ1iGBR6kIfNmlNqaqJf649EP0F3NWNdeJi03elllNUQ==}

  micromark-util-encode@2.0.1:
    resolution: {integrity: sha512-c3cVx2y4KqUnwopcO9b/SCdo2O67LwJJ/UyqGfbigahfegL9myoEFoDYZgkT7f36T0bLrM9hZTAaAyH+PCAXjw==}

  micromark-util-html-tag-name@2.0.1:
    resolution: {integrity: sha512-2cNEiYDhCWKI+Gs9T0Tiysk136SnR13hhO8yW6BGNyhOC4qYFnwF1nKfD3HFAIXA5c45RrIG1ub11GiXeYd1xA==}

  micromark-util-normalize-identifier@2.0.1:
    resolution: {integrity: sha512-sxPqmo70LyARJs0w2UclACPUUEqltCkJ6PhKdMIDuJ3gSf/Q+/GIe3WKl0Ijb/GyH9lOpUkRAO2wp0GVkLvS9Q==}

  micromark-util-resolve-all@2.0.1:
    resolution: {integrity: sha512-VdQyxFWFT2/FGJgwQnJYbe1jjQoNTS4RjglmSjTUlpUMa95Htx9NHeYW4rGDJzbjvCsl9eLjMQwGeElsqmzcHg==}

  micromark-util-sanitize-uri@2.0.1:
    resolution: {integrity: sha512-9N9IomZ/YuGGZZmQec1MbgxtlgougxTodVwDzzEouPKo3qFWvymFHWcnDi2vzV1ff6kas9ucW+o3yzJK9YB1AQ==}

  micromark-util-subtokenize@2.1.0:
    resolution: {integrity: sha512-XQLu552iSctvnEcgXw6+Sx75GflAPNED1qx7eBJ+wydBb2KCbRZe+NwvIEEMM83uml1+2WSXpBAcp9IUCgCYWA==}

  micromark-util-symbol@2.0.1:
    resolution: {integrity: sha512-vs5t8Apaud9N28kgCrRUdEed4UJ+wWNvicHLPxCa9ENlYuAY31M0ETy5y1vA33YoNPDFTghEbnh6efaE8h4x0Q==}

  micromark-util-types@2.0.2:
    resolution: {integrity: sha512-Yw0ECSpJoViF1qTU4DC6NwtC4aWGt1EkzaQB8KPPyCRR8z9TWeV0HbEFGTO+ZY1wB22zmxnJqhPyTpOVCpeHTA==}

  micromark@4.0.2:
    resolution: {integrity: sha512-zpe98Q6kvavpCr1NPVSCMebCKfD7CA2NqZ+rykeNhONIJBpc1tFKt9hucLGwha3jNTNI8lHpctWJWoimVF4PfA==}

  micromatch@4.0.8:
    resolution: {integrity: sha512-PXwfBhYu0hBCPw8Dn0E+WDYb7af3dSLVWKi3HGv84IdF4TyFoC0ysxFd0Goxw7nSv4T/PzEJQxsYsEiFCKo2BA==}
    engines: {node: '>=8.6'}

  mime-db@1.52.0:
    resolution: {integrity: sha512-sPU4uV7dYlvtWJxwwxHD0PuihVNiE7TyAbQ5SWxDCB9mUYvOgroQOwYQQOKPJ8CIbE+1ETVlOoK1UC2nU3gYvg==}
    engines: {node: '>= 0.6'}

  mime-types@2.1.35:
    resolution: {integrity: sha512-ZDY+bPm5zTTF+YpCrAU9nK0UgICYPT0QtT1NZWFv4s++TNkcgVaT0g6+4R2uI4MjQjzysHB1zxuWL50hzaeXiw==}
    engines: {node: '>= 0.6'}

  mime@3.0.0:
    resolution: {integrity: sha512-jSCU7/VB1loIWBZe14aEYHU/+1UMEHoaO7qxCOVJOw9GgH72VAWppxNcjU+x9a2k3GSIBXNKxXQFqRvvZ7vr3A==}
    engines: {node: '>=10.0.0'}
    hasBin: true

  min-indent@1.0.1:
    resolution: {integrity: sha512-I9jwMn07Sy/IwOj3zVkVik2JTvgpaykDZEigL6Rx6N9LbMywwUSMtxET+7lVoDLLd3O3IXwJwvuuns8UB/HeAg==}
    engines: {node: '>=4'}

  mini-svg-data-uri@1.4.4:
    resolution: {integrity: sha512-r9deDe9p5FJUPZAk3A59wGH7Ii9YrjjWw0jmw/liSbHl2CHiyXj6FcDXDu2K3TjVAXqiJdaw3xxwlZZr9E6nHg==}
    hasBin: true

  miniflare@4.20250525.1:
    resolution: {integrity: sha512-4PJlT5WA+hfclFU5Q7xnpG1G1VGYTXaf/3iu6iKQ8IsbSi9QvPTA2bSZ5goCFxmJXDjV4cxttVxB0Wl1CLuQ0w==}
    engines: {node: '>=18.0.0'}
    hasBin: true

  minimatch@3.1.2:
    resolution: {integrity: sha512-J7p63hRiAjw1NDEww1W7i37+ByIrOWO5XQQAzZ3VOcL0PNybwpfmV/N05zFAzwQ9USyEcX6t3UO+K5aqBQOIHw==}

  minimatch@9.0.5:
    resolution: {integrity: sha512-G6T0ZX48xgozx7587koeX9Ys2NYy6Gmv//P89sEte9V9whIapMNF4idKxnW2QtCcLiTWlb/wfCabAtAFWhhBow==}
    engines: {node: '>=16 || 14 >=14.17'}

  minipass@7.1.2:
    resolution: {integrity: sha512-qOOzS1cBTWYF4BH8fVePDBOO9iptMnGUEZwNc/cMWnTV2nVLZ7VoNWEPHkYczZA0pdoA7dl6e7FL659nX9S2aw==}
    engines: {node: '>=16 || 14 >=14.17'}

  mipd@0.0.7:
    resolution: {integrity: sha512-aAPZPNDQ3uMTdKbuO2YmAw2TxLHO0moa4YKAyETM/DTj5FloZo+a+8tU+iv4GmW+sOxKLSRwcSFuczk+Cpt6fg==}
    peerDependencies:
      typescript: '>=5.0.4'
    peerDependenciesMeta:
      typescript:
        optional: true

  motion-dom@11.18.1:
    resolution: {integrity: sha512-g76KvA001z+atjfxczdRtw/RXOM3OMSdd1f4DL77qCTF/+avrRJiawSG4yDibEQ215sr9kpinSlX2pCTJ9zbhw==}

  motion-utils@11.18.1:
    resolution: {integrity: sha512-49Kt+HKjtbJKLtgO/LKj9Ld+6vw9BjH5d9sc40R/kVyH8GLAXgT42M2NnuPcJNuA3s9ZfZBUcwIgpmZWGEE+hA==}

  ms@2.1.3:
    resolution: {integrity: sha512-6FlzubTLZG3J2a/NVCAleEhjzq5oxgHyaCU9yYXvcLsvoVaHJq/s5xXI6/XXP6tz7R9xAOtHnSO/tXtF3WRTlA==}

  multiformats@9.9.0:
    resolution: {integrity: sha512-HoMUjhH9T8DDBNT+6xzkrd9ga/XiBI4xLr58LJACwK6G3HTOPeMz4nB4KJs33L2BelrIJa7P0VuNaVF3hMYfjg==}

  mustache@4.2.0:
    resolution: {integrity: sha512-71ippSywq5Yb7/tVYyGbkBggbU8H3u5Rz56fH60jGFgr8uHwxs+aSKeqmluIVzM0m0kB7xQjKS6qPfd0b2ZoqQ==}
    hasBin: true

  mz@2.7.0:
    resolution: {integrity: sha512-z81GNO7nnYMEhrGh9LeymoE4+Yr0Wn5McHIZMK5cfQCl+NDX08sCZgUc9/6MHni9IWuFLm1Z3HTCXu2z9fN62Q==}

  nanoid@3.3.8:
    resolution: {integrity: sha512-WNLf5Sd8oZxOm+TzppcYk8gVOgP+l58xNy58D0nbUnOxOWRWvlcCV4kUF7ltmI6PsrLl/BgKEyS4mqsGChFN0w==}
    engines: {node: ^10 || ^12 || ^13.7 || ^14 || >=15.0.1}
    hasBin: true

  natural-compare@1.4.0:
    resolution: {integrity: sha512-OWND8ei3VtNC9h7V60qff3SVobHr996CTwgxubgyQYEpg290h9J0buyECNNJexkFm5sOajh5G116RYA1c8ZMSw==}

  node-addon-api@2.0.2:
    resolution: {integrity: sha512-Ntyt4AIXyaLIuMHF6IOoTakB3K+RWxwtsHNRxllEoA6vPwP9o4866g6YWDLUdnucilZhmkxiHwHr11gAENw+QA==}

  node-fetch-native@1.6.6:
    resolution: {integrity: sha512-8Mc2HhqPdlIfedsuZoc3yioPuzp6b+L5jRCRY1QzuWZh2EGJVQrGppC6V6cF0bLdbW0+O2YpqCA25aF/1lvipQ==}

  node-fetch@2.7.0:
    resolution: {integrity: sha512-c4FRfUm/dbcWZ7U+1Wq0AwCyFL+3nt2bEw05wfxSz+DWpWsitgmSgYmy2dQdWyKC1694ELPqMs/YzUSNozLt8A==}
    engines: {node: 4.x || >=6.0.0}
    peerDependencies:
      encoding: ^0.1.0
    peerDependenciesMeta:
      encoding:
        optional: true

  node-gyp-build@4.8.4:
    resolution: {integrity: sha512-LA4ZjwlnUblHVgq0oBF3Jl/6h/Nvs5fzBLwdEF4nuxnFdsfajde4WfxtJr3CaiH+F6ewcIB/q4jQ4UzPyid+CQ==}
    hasBin: true

  node-mock-http@1.0.0:
    resolution: {integrity: sha512-0uGYQ1WQL1M5kKvGRXWQ3uZCHtLTO8hln3oBjIusM75WoesZ909uQJs/Hb946i2SS+Gsrhkaa6iAO17jRIv6DQ==}

  node-releases@2.0.19:
    resolution: {integrity: sha512-xxOWJsBKtzAq7DY0J+DTzuz58K8e7sJbdgwkbMWQe8UYB6ekmsQ45q0M/tJDsGaZmbC+l7n57UV8Hl5tHxO9uw==}

  normalize-path@3.0.0:
    resolution: {integrity: sha512-6eZs5Ls3WtCisHWp9S2GUy8dqkpGi4BVSz3GaqiE6ezub0512ESztXUwUB6C6IKbQkY2Pnb/mD4WYojCRwcwLA==}
    engines: {node: '>=0.10.0'}

  normalize-range@0.1.2:
    resolution: {integrity: sha512-bdok/XvKII3nUpklnV6P2hxtMNrCboOjAcyBuQnWEhO665FwrSNRxU+AqpsyvO6LgGYPspN+lu5CLtw4jPRKNA==}
    engines: {node: '>=0.10.0'}

  obj-multiplex@1.0.0:
    resolution: {integrity: sha512-0GNJAOsHoBHeNTvl5Vt6IWnpUEcc3uSRxzBri7EDyIcMgYvnY2JL2qdeV5zTMjWQX5OHcD5amcW2HFfDh0gjIA==}

  object-assign@4.1.1:
    resolution: {integrity: sha512-rJgTQnkUnH1sFw8yT6VSU3zD3sWmu6sZhIseY8VX+GRu3P6F7Fu+JNDoXfklElbLJSnc3FUQHVe4cU5hj+BcUg==}
    engines: {node: '>=0.10.0'}

  object-hash@3.0.0:
    resolution: {integrity: sha512-RSn9F68PjH9HqtltsSnqYC1XXoWe9Bju5+213R98cNGttag9q9yAOTzdbsqvIa7aNm5WffBZFpWYr2aWrklWAw==}
    engines: {node: '>= 6'}

  object-inspect@1.13.4:
    resolution: {integrity: sha512-W67iLl4J2EXEGTbfeHCffrjDfitvLANg0UlX3wFUUSTx92KXRFegMHUVgSqE+wvhAbi4WqjGg9czysTV2Epbew==}
    engines: {node: '>= 0.4'}

  object-is@1.1.6:
    resolution: {integrity: sha512-F8cZ+KfGlSGi09lJT7/Nd6KJZ9ygtvYC0/UYYLI9nmQKLMnydpB9yvbv9K1uSkEu7FU9vYPmVwLg328tX+ot3Q==}
    engines: {node: '>= 0.4'}

  object-keys@1.1.1:
    resolution: {integrity: sha512-NuAESUOUMrlIXOfHKzD6bpPu3tYt3xvjNdRIQ+FeT0lNb4K8WR70CaDxhuNguS2XG+GjkyMwOzsN5ZktImfhLA==}
    engines: {node: '>= 0.4'}

  object.assign@4.1.7:
    resolution: {integrity: sha512-nK28WOo+QIjBkDduTINE4JkF/UJJKyf2EJxvJKfblDpyg0Q+pkOHNTL0Qwy6NP6FhE/EnzV73BxxqcJaXY9anw==}
    engines: {node: '>= 0.4'}

  ofetch@1.4.1:
    resolution: {integrity: sha512-QZj2DfGplQAr2oj9KzceK9Hwz6Whxazmn85yYeVuS3u9XTMOGMRx0kO95MQ+vLsj/S/NwBDMMLU5hpxvI6Tklw==}

  ohash@2.0.11:
    resolution: {integrity: sha512-RdR9FQrFwNBNXAr4GixM8YaRZRJ5PUWbKYbE5eOsrwAjJW0q2REGcf79oYPsLyskQCZG1PLN+S/K1V00joZAoQ==}

  on-exit-leak-free@0.2.0:
    resolution: {integrity: sha512-dqaz3u44QbRXQooZLTUKU41ZrzYrcvLISVgbrzbyCMxpmSLJvZ3ZamIJIZ29P6OhZIkNIQKosdeM6t1LYbA9hg==}

  once@1.4.0:
    resolution: {integrity: sha512-lNaJgI+2Q5URQBkccEKHTQOPaXdUxnZZElQTZY0MFUAuaEqe1E+Nyvgdz/aIyNi6Z9MzO5dv1H8n58/GELp3+w==}

  optionator@0.9.4:
    resolution: {integrity: sha512-6IpQ7mKUxRcZNLIObR0hz7lxsapSSIYNZJwXPGeF0mTVqGKFIXj1DQcMoT22S3ROcLyY/rz0PWaWZ9ayWmad9g==}
    engines: {node: '>= 0.8.0'}

  ox@0.6.7:
    resolution: {integrity: sha512-17Gk/eFsFRAZ80p5eKqv89a57uXjd3NgIf1CaXojATPBuujVc/fQSVhBeAU9JCRB+k7J50WQAyWTxK19T9GgbA==}
    peerDependencies:
      typescript: '>=5.4.0'
    peerDependenciesMeta:
      typescript:
        optional: true

  ox@0.7.1:
    resolution: {integrity: sha512-+k9fY9PRNuAMHRFIUbiK9Nt5seYHHzSQs9Bj+iMETcGtlpS7SmBzcGSVUQO3+nqGLEiNK4598pHNFlVRaZbRsg==}
    peerDependencies:
      typescript: '>=5.4.0'
    peerDependenciesMeta:
      typescript:
        optional: true

  p-limit@2.3.0:
    resolution: {integrity: sha512-//88mFWSJx8lxCzwdAABTJL2MyWB12+eIY7MDL2SqLmAkeKU9qxRvWuSyTjm3FUmpBEMuFfckAIqEaVGUDxb6w==}
    engines: {node: '>=6'}

  p-limit@3.1.0:
    resolution: {integrity: sha512-TYOanM3wGwNGsZN2cVTYPArw454xnXj5qmWF1bEoAc4+cU/ol7GVh7odevjp1FNHduHc3KZMcFduxU5Xc6uJRQ==}
    engines: {node: '>=10'}

  p-locate@4.1.0:
    resolution: {integrity: sha512-R79ZZ/0wAxKGu3oYMlz8jy/kbhsNrS7SKZ7PxEHBgJ5+F2mtFW2fK2cOtBh1cHYkQsbzFV7I+EoRKe6Yt0oK7A==}
    engines: {node: '>=8'}

  p-locate@5.0.0:
    resolution: {integrity: sha512-LaNjtRWUBY++zB5nE/NwcaoMylSPk+S+ZHNB1TzdbMJMny6dynpAGt7X/tl/QYq3TIeE6nxHppbo2LGymrG5Pw==}
    engines: {node: '>=10'}

  p-try@2.2.0:
    resolution: {integrity: sha512-R4nPAVTAU0B9D35/Gk3uJf/7XYbQcyohSKdvAxIRSNghFl4e71hVoGnBNQz9cWaXxO2I10KTC+3jMdvvoKw6dQ==}
    engines: {node: '>=6'}

  package-json-from-dist@1.0.1:
    resolution: {integrity: sha512-UEZIS3/by4OC8vL3P2dTXRETpebLI2NiI5vIrjaD/5UtrkFX/tNbwjTSRAGC/+7CAo2pIcBaRgWmcBBHcsaCIw==}

  pako@1.0.11:
    resolution: {integrity: sha512-4hLB8Py4zZce5s4yd9XzopqwVv/yGNhV1Bl8NTmCq1763HeK2+EwVTv+leGeL13Dnh2wfbqowVPXCIO0z4taYw==}

  parent-module@1.0.1:
    resolution: {integrity: sha512-GQ2EWRpQV8/o+Aw8YqtfZZPfNRWZYkbidE9k5rpl/hC3vtHHBfGm2Ifi6qWV+coDGkrUKZAxE3Lot5kcsRlh+g==}
    engines: {node: '>=6'}

  parse-entities@2.0.0:
    resolution: {integrity: sha512-kkywGpCcRYhqQIchaWqZ875wzpS/bMKhz5HnN3p7wveJTkTtyAB/AlnS0f8DFSqYW1T82t6yEAkEcB+A1I3MbQ==}

  parse-entities@4.0.2:
    resolution: {integrity: sha512-GG2AQYWoLgL877gQIKeRPGO1xF9+eG1ujIb5soS5gPvLQ1y2o8FL90w2QWNdf9I361Mpp7726c+lj3U0qK1uGw==}

  parse-json@5.2.0:
    resolution: {integrity: sha512-ayCKvm/phCGxOkYRSCM82iDwct8/EonSEgCSxWxD7ve6jHggsFl4fZVQBPRNgQoKiuV/odhFrGzQXZwbifC8Rg==}
    engines: {node: '>=8'}

  path-exists@4.0.0:
    resolution: {integrity: sha512-ak9Qy5Q7jYb2Wwcey5Fpvg2KoAc/ZIhLSLOSBmRmygPsGwkVVt0fZa0qrtMz+m6tJTAHfZQ8FnmB4MG4LWy7/w==}
    engines: {node: '>=8'}

  path-key@3.1.1:
    resolution: {integrity: sha512-ojmeN0qd+y0jszEtoY48r0Peq5dwMEkIlCOu6Q5f41lfkswXuKtYrhgoTpLnyIcHm24Uhqx+5Tqm2InSwLhE6Q==}
    engines: {node: '>=8'}

  path-parse@1.0.7:
    resolution: {integrity: sha512-LDJzPVEEEPR+y48z93A0Ed0yXb8pAByGWo/k5YYdYgpY2/2EsOsksJrq7lOHxryrVOn1ejG6oAp8ahvOIQD8sw==}

  path-scurry@1.11.1:
    resolution: {integrity: sha512-Xa4Nw17FS9ApQFJ9umLiJS4orGjm7ZzwUrwamcGQuHSzDyth9boKDaycYdDcZDuqYATXw4HFXgaqWTctW/v1HA==}
    engines: {node: '>=16 || 14 >=14.18'}

  path-to-regexp@6.3.0:
    resolution: {integrity: sha512-Yhpw4T9C6hPpgPeA28us07OJeqZ5EzQTkbfwuhsUg0c237RomFoETJgmp2sa3F/41gfLE6G5cqcYwznmeEeOlQ==}

  path-type@4.0.0:
    resolution: {integrity: sha512-gDKb8aZMDeD/tZWs9P6+q0J9Mwkdl6xMV8TjnGP3qJVJ06bdMgkbBlLU8IdfOsIsFz2BW1rNVT3XuNEl8zPAvw==}
    engines: {node: '>=8'}

  pathe@2.0.3:
    resolution: {integrity: sha512-WUjGcAqP1gQacoQe+OBJsFA7Ld4DyXuUIjZ5cc75cLHvJ7dtNsTugphxIADwspS+AraAUePCKrSVtPLFj/F88w==}

  pdf-lib@1.17.1:
    resolution: {integrity: sha512-V/mpyJAoTsN4cnP31vc0wfNA1+p20evqqnap0KLoRUN0Yk/p3wN52DOEsL4oBFcLdb76hlpKPtzJIgo67j/XLw==}

  picocolors@1.1.1:
    resolution: {integrity: sha512-xceH2snhtb5M9liqDsmEw56le376mTZkEX/jEb/RxNFyegNul7eNslCXP9FDj/Lcu0X8KEyMceP2ntpaHrDEVA==}

  picomatch@2.3.1:
    resolution: {integrity: sha512-JU3teHTNjmE2VCGFzuY8EXzCDVwEqB2a8fsIvwaStHhAWJEeVd1o1QD80CU6+ZdEXXSLbSsuLwJjkCBWqRQUVA==}
    engines: {node: '>=8.6'}

  pify@2.3.0:
    resolution: {integrity: sha512-udgsAY+fTnvv7kI7aaxbqwWNb0AHiB0qBO89PZKPkoTmGOgdbrHDKD+0B2X4uTfJ/FT1R09r9gTsjUjNJotuog==}
    engines: {node: '>=0.10.0'}

  pify@3.0.0:
    resolution: {integrity: sha512-C3FsVNH1udSEX48gGX1xfvwTWfsYWj5U+8/uK15BGzIGrKoUpghX8hWZwa/OFnakBiiVNmBvemTJR5mcy7iPcg==}
    engines: {node: '>=4'}

  pify@5.0.0:
    resolution: {integrity: sha512-eW/gHNMlxdSP6dmG6uJip6FXN0EQBwm2clYYd8Wul42Cwu/DK8HEftzsapcNdYe2MfLiIwZqsDk2RDEsTE79hA==}
    engines: {node: '>=10'}

  pino-abstract-transport@0.5.0:
    resolution: {integrity: sha512-+KAgmVeqXYbTtU2FScx1XS3kNyfZ5TrXY07V96QnUSFqo2gAqlvmaxH67Lj7SWazqsMabf+58ctdTcBgnOLUOQ==}

  pino-std-serializers@4.0.0:
    resolution: {integrity: sha512-cK0pekc1Kjy5w9V2/n+8MkZwusa6EyyxfeQCB799CQRhRt/CqYKiWs5adeu8Shve2ZNffvfC/7J64A2PJo1W/Q==}

  pino@7.11.0:
    resolution: {integrity: sha512-dMACeu63HtRLmCG8VKdy4cShCPKaYDR4youZqoSWLxl5Gu99HUw8bw75thbPv9Nip+H+QYX8o3ZJbTdVZZ2TVg==}
    hasBin: true

  pirates@4.0.6:
    resolution: {integrity: sha512-saLsH7WeYYPiD25LDuLRRY/i+6HaPYr6G1OUlN39otzkSTxKnubR9RTxS3/Kk50s1g2JTgFwWQDQyplC5/SHZg==}
    engines: {node: '>= 6'}

  pngjs@5.0.0:
    resolution: {integrity: sha512-40QW5YalBNfQo5yRYmiw7Yz6TKKVr3h6970B2YE+3fQpsWcrbj1PzJgxeJ19DRQjhMbKPIuMY8rFaXc8moolVw==}
    engines: {node: '>=10.13.0'}

  pony-cause@2.1.11:
    resolution: {integrity: sha512-M7LhCsdNbNgiLYiP4WjsfLUuFmCfnjdF6jKe2R9NKl4WFN+HZPGHJZ9lnLP7f9ZnKe3U9nuWD0szirmj+migUg==}
    engines: {node: '>=12.0.0'}

  possible-typed-array-names@1.1.0:
    resolution: {integrity: sha512-/+5VFTchJDoVj3bhoqi6UeymcD00DAwb1nJwamzPvHEszJ4FpF6SNNbUbOS8yI56qHzdV8eK0qEfOSiodkTdxg==}
    engines: {node: '>= 0.4'}

  postcss-import@15.1.0:
    resolution: {integrity: sha512-hpr+J05B2FVYUAXHeK1YyI267J/dDDhMU6B6civm8hSY1jYJnBXxzKDKDswzJmtLHryrjhnDjqqp/49t8FALew==}
    engines: {node: '>=14.0.0'}
    peerDependencies:
      postcss: ^8.0.0

  postcss-js@4.0.1:
    resolution: {integrity: sha512-dDLF8pEO191hJMtlHFPRa8xsizHaM82MLfNkUHdUtVEV3tgTp5oj+8qbEqYM57SLfc74KSbw//4SeJma2LRVIw==}
    engines: {node: ^12 || ^14 || >= 16}
    peerDependencies:
      postcss: ^8.4.21

  postcss-load-config@4.0.2:
    resolution: {integrity: sha512-bSVhyJGL00wMVoPUzAVAnbEoWyqRxkjv64tUl427SKnPrENtq6hJwUojroMz2VB+Q1edmi4IfrAPpami5VVgMQ==}
    engines: {node: '>= 14'}
    peerDependencies:
      postcss: '>=8.0.9'
      ts-node: '>=9.0.0'
    peerDependenciesMeta:
      postcss:
        optional: true
      ts-node:
        optional: true

  postcss-nested@6.2.0:
    resolution: {integrity: sha512-HQbt28KulC5AJzG+cZtj9kvKB93CFCdLvog1WFLf1D+xmMvPGlBstkpTEZfK5+AN9hfJocyBFCNiqyS48bpgzQ==}
    engines: {node: '>=12.0'}
    peerDependencies:
      postcss: ^8.2.14

  postcss-selector-parser@6.0.10:
    resolution: {integrity: sha512-IQ7TZdoaqbT+LCpShg46jnZVlhWD2w6iQYAcYXfHARZ7X1t/UGhhceQDs5X0cGqKvYlHNOuv7Oa1xmb0oQuA3w==}
    engines: {node: '>=4'}

  postcss-selector-parser@6.1.2:
    resolution: {integrity: sha512-Q8qQfPiZ+THO/3ZrOrO0cJJKfpYCagtMUkXbnEfmgUjwXg6z/WBeOyS9APBBPCTSiDV+s4SwQGu8yFsiMRIudg==}
    engines: {node: '>=4'}

  postcss-value-parser@4.2.0:
    resolution: {integrity: sha512-1NNCs6uurfkVbeXG4S8JFT9t19m45ICnif8zWLd5oPSZ50QnwMfK+H3jv408d4jw/7Bttv5axS5IiHoLaVNHeQ==}

  postcss@8.5.3:
    resolution: {integrity: sha512-dle9A3yYxlBSrt8Fu+IpjGT8SY8hN0mlaA6GY8t0P5PjIOZemULz/E2Bnm/2dcUOena75OTNkHI76uZBNUUq3A==}
    engines: {node: ^10 || ^12 || >=14}

  preact@10.26.8:
    resolution: {integrity: sha512-1nMfdFjucm5hKvq0IClqZwK4FJkGXhRrQstOQ3P4vp8HxKrJEMFcY6RdBRVTdfQS/UlnX6gfbPuTvaqx/bDoeQ==}

  prelude-ls@1.2.1:
    resolution: {integrity: sha512-vkcDPrRZo1QZLbn5RLGPpg/WmIQ65qoWWhcGKf/b5eplkkarX0m9z8ppCat4mlOqUsWpyNuYgO3VRyrYHSzX5g==}
    engines: {node: '>= 0.8.0'}

  pretty-format@27.5.1:
    resolution: {integrity: sha512-Qb1gy5OrP5+zDf2Bvnzdl3jsTf1qXVMazbvCoKhtKqVs4/YK4ozX4gKQJJVyNe+cajNPn0KoC0MC3FUmaHWEmQ==}
    engines: {node: ^10.13.0 || ^12.13.0 || ^14.15.0 || >=15.0.0}

  printable-characters@1.0.42:
    resolution: {integrity: sha512-dKp+C4iXWK4vVYZmYSd0KBH5F/h1HoZRsbJ82AVKRO3PEo8L4lBS/vLwhVtpwwuYcoIsVY+1JYKR268yn480uQ==}

  prismjs@1.27.0:
    resolution: {integrity: sha512-t13BGPUlFDR7wRB5kQDG4jjl7XeuH6jbJGt11JHPL96qwsEHNX2+68tFXqc1/k+/jALsbSWJKUOT/hcYAZ5LkA==}
    engines: {node: '>=6'}

  prismjs@1.30.0:
    resolution: {integrity: sha512-DEvV2ZF2r2/63V+tK8hQvrR2ZGn10srHbXviTlcv7Kpzw8jWiNTqbVgjO3IY8RxrrOUF8VPMQQFysYYYv0YZxw==}
    engines: {node: '>=6'}

  process-nextick-args@2.0.1:
    resolution: {integrity: sha512-3ouUOpQhtgrbOa17J7+uxOTpITYWaGP7/AhoR3+A+/1e9skrzelGi/dXzEYyvbxubEF6Wn2ypscTKiKJFFn1ag==}

  process-warning@1.0.0:
    resolution: {integrity: sha512-du4wfLyj4yCZq1VupnVSZmRsPJsNuxoDQFdCFHLaYiEbFBD7QE0a+I4D7hOxrVnh78QE/YipFAj9lXHiXocV+Q==}

  prop-types@15.8.1:
    resolution: {integrity: sha512-oj87CgZICdulUohogVAR7AjlC0327U4el4L6eAvOqCeudMDVU0NThNaV+b9Df4dXgSP1gXMTnPdhfe/2qDH5cg==}

  property-information@5.6.0:
    resolution: {integrity: sha512-YUHSPk+A30YPv+0Qf8i9Mbfe/C0hdPXk1s1jPVToV8pk8BQtpw10ct89Eo7OWkutrwqvT0eicAxlOg3dOAu8JA==}

  property-information@7.0.0:
    resolution: {integrity: sha512-7D/qOz/+Y4X/rzSB6jKxKUsQnphO046ei8qxG59mtM3RG3DHgTK81HrxrmoDVINJb8NKT5ZsRbwHvQ6B68Iyhg==}

  proxy-compare@2.6.0:
    resolution: {integrity: sha512-8xuCeM3l8yqdmbPoYeLbrAXCBWu19XEYc5/F28f5qOaoAIMyfmBUkl5axiK+x9olUvRlcekvnm98AP9RDngOIw==}

  proxy-from-env@1.1.0:
    resolution: {integrity: sha512-D+zkORCbA9f1tdWRK0RaCR3GPv50cMxcrz4X8k5LTSUD1Dkw47mKJEZQNunItRTkWwgtaUSo1RVFRIG9ZXiFYg==}

  pump@3.0.2:
    resolution: {integrity: sha512-tUPXtzlGM8FE3P0ZL6DVs/3P58k9nk8/jZeQCurTJylQA8qFYzHFfhBJkuqyE0FifOsQ0uKWekiZ5g8wtr28cw==}

  punycode@2.3.1:
    resolution: {integrity: sha512-vYt7UD1U9Wg6138shLtLOvdAu+8DsC/ilFtEVHcH+wydcSpNE20AfSOduf6MkRFahL5FY7X1oU7nKVZFtfq8Fg==}
    engines: {node: '>=6'}

  qrcode@1.5.3:
    resolution: {integrity: sha512-puyri6ApkEHYiVl4CFzo1tDkAZ+ATcnbJrJ6RiBM1Fhctdn/ix9MTE3hRph33omisEbC/2fcfemsseiKgBPKZg==}
    engines: {node: '>=10.13.0'}
    hasBin: true

  query-string@7.1.3:
    resolution: {integrity: sha512-hh2WYhq4fi8+b+/2Kg9CEge4fDPvHS534aOOvOZeQ3+Vf2mCFsaFBYj0i+iXcAq6I9Vzp5fjMFBlONvayDC1qg==}
    engines: {node: '>=6'}

  queue-microtask@1.2.3:
    resolution: {integrity: sha512-NuaNSa6flKT5JaSYQzJok04JzTL1CA6aGhv5rfLW3PgqA+M2ChpZQnAC8h8i4ZFkBS8X5RqkDBHA7r4hej3K9A==}

  quick-format-unescaped@4.0.4:
    resolution: {integrity: sha512-tYC1Q1hgyRuHgloV/YXs2w15unPVh8qfu/qCTfhTYamaw7fyhumKa2yGpdSo87vY32rIclj+4fWYQXUMs9EHvg==}

  radix3@1.1.2:
    resolution: {integrity: sha512-b484I/7b8rDEdSDKckSSBA8knMpcdsXudlE/LNL639wFoHKwLbEkQFZHWEYwDC0wa0FKUcCY+GAF73Z7wxNVFA==}

  react-dom@18.3.1:
    resolution: {integrity: sha512-5m4nQKp+rZRb09LNH59GM4BxTh9251/ylbKIbpe7TpGxfJ+9kv6BLkLBXIjjspbgbnIBNqlI23tRnTWT0snUIw==}
    peerDependencies:
      react: ^18.3.1

  react-dropzone@14.3.8:
    resolution: {integrity: sha512-sBgODnq+lcA4P296DY4wacOZz3JFpD99fp+hb//iBO2HHnyeZU3FwWyXJ6salNpqQdsZrgMrotuko/BdJMV8Ug==}
    engines: {node: '>= 10.13'}
    peerDependencies:
      react: '>= 16.8 || 18.0.0'

  react-error-boundary@4.1.2:
    resolution: {integrity: sha512-GQDxZ5Jd+Aq/qUxbCm1UtzmL/s++V7zKgE8yMktJiCQXCCFZnMZh9ng+6/Ne6PjNSXH0L9CjeOEREfRnq6Duag==}
    peerDependencies:
      react: '>=16.13.1'

  react-fast-compare@3.2.2:
    resolution: {integrity: sha512-nsO+KSNgo1SbJqJEYRE9ERzo7YtYbou/OqjSQKxV7jcKox7+usiUVZOAC+XnDOABXggQTno0Y1CpVnuWEc1boQ==}

  react-helmet-async@2.0.5:
    resolution: {integrity: sha512-rYUYHeus+i27MvFE+Jaa4WsyBKGkL6qVgbJvSBoX8mbsWoABJXdEO0bZyi0F6i+4f0NuIb8AvqPMj3iXFHkMwg==}
    peerDependencies:
      react: ^16.6.0 || ^17.0.0 || ^18.0.0

  react-hook-form@7.56.4:
    resolution: {integrity: sha512-Rob7Ftz2vyZ/ZGsQZPaRdIefkgOSrQSPXfqBdvOPwJfoGnjwRJUs7EM7Kc1mcoDv3NOtqBzPGbcMB8CGn9CKgw==}
    engines: {node: '>=18.0.0'}
    peerDependencies:
      react: ^16.8.0 || ^17 || ^18 || ^19

  react-hot-toast@2.5.2:
    resolution: {integrity: sha512-Tun3BbCxzmXXM7C+NI4qiv6lT0uwGh4oAfeJyNOjYUejTsm35mK9iCaYLGv8cBz9L5YxZLx/2ii7zsIwPtPUdw==}
    engines: {node: '>=10'}
    peerDependencies:
      react: '>=16'
      react-dom: '>=16'

  react-icons@5.5.0:
    resolution: {integrity: sha512-MEFcXdkP3dLo8uumGI5xN3lDFNsRtrjbOEKDLD7yv76v4wpnEq2Lt2qeHaQOr34I/wPN3s3+N08WkQ+CW37Xiw==}
    peerDependencies:
      react: '*'

  react-is@16.13.1:
    resolution: {integrity: sha512-24e6ynE2H+OKt4kqsOvNd8kBpV65zoxbA4BVsEOB3ARVWQki/DHzaUoC5KuON/BiccDaCCTZBuOcfZs70kR8bQ==}

  react-is@17.0.2:
    resolution: {integrity: sha512-w2GsyukL62IJnlaff/nRegPQR94C/XXamvMWmSHRJ4y7Ts/4ocGRmTHvOs8PSE6pB3dWOrD/nueuU5sduBsQ4w==}

  react-is@18.3.1:
    resolution: {integrity: sha512-/LLMVyas0ljjAtoYiPqYiL8VWXzUUdThrmU5+n20DZv+a+ClRoevUzw5JxU+Ieh5/c87ytoTBV9G1FiKfNJdmg==}

  react-is@19.1.0:
    resolution: {integrity: sha512-Oe56aUPnkHyyDxxkvqtd7KkdQP5uIUfHxd5XTb3wE9d/kRnZLmKbDB0GWk919tdQ+mxxPtG6EAs6RMT6i1qtHg==}

  react-markdown@9.0.3:
    resolution: {integrity: sha512-Yk7Z94dbgYTOrdk41Z74GoKA7rThnsbbqBTRYuxoe08qvfQ9tJVhmAKw6BJS/ZORG7kTy/s1QvYzSuaoBA1qfw==}
    peerDependencies:
      '@types/react': '>=18'
      react: '>=18'

  react-refresh@0.17.0:
    resolution: {integrity: sha512-z6F7K9bV85EfseRCp2bzrpyQ0Gkw1uLoCel9XBVWPg/TjRj94SkJzUTGfOa4bs7iJvBWtQG0Wq7wnI0syw3EBQ==}
    engines: {node: '>=0.10.0'}

  react-remove-scroll-bar@2.3.8:
    resolution: {integrity: sha512-9r+yi9+mgU33AKcj6IbT9oRCO78WriSj6t/cF8DWBZJ9aOGPOTEDvdUDz1FwKim7QXWwmHqtdHnRJfhAxEG46Q==}
    engines: {node: '>=10'}
    peerDependencies:
      '@types/react': '*'
      react: ^16.8.0 || ^17.0.0 || ^18.0.0 || ^19.0.0
    peerDependenciesMeta:
      '@types/react':
        optional: true

  react-remove-scroll@2.7.1:
    resolution: {integrity: sha512-HpMh8+oahmIdOuS5aFKKY6Pyog+FNaZV/XyJOq7b4YFwsFHe5yYfdbIalI4k3vU2nSDql7YskmUseHsRrJqIPA==}
    engines: {node: '>=10'}
    peerDependencies:
      '@types/react': '*'
      react: ^16.8.0 || ^17.0.0 || ^18.0.0 || ^19.0.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true

  react-router-dom@6.30.1:
    resolution: {integrity: sha512-llKsgOkZdbPU1Eg3zK8lCn+sjD9wMRZZPuzmdWWX5SUs8OFkN5HnFVC0u5KMeMaC9aoancFI/KoLuKPqN+hxHw==}
    engines: {node: '>=14.0.0'}
    peerDependencies:
      react: '>=16.8'
      react-dom: '>=16.8'

  react-router@6.30.1:
    resolution: {integrity: sha512-X1m21aEmxGXqENEPG3T6u0Th7g0aS4ZmoNynhbs+Cn+q+QGTLt+d5IQ2bHAXKzKcxGJjxACpVbnYQSCRcfxHlQ==}
    engines: {node: '>=14.0.0'}
    peerDependencies:
      react: '>=16.8'

  react-smooth@4.0.4:
    resolution: {integrity: sha512-gnGKTpYwqL0Iii09gHobNolvX4Kiq4PKx6eWBCYYix+8cdw+cGo3do906l1NBPKkSWx1DghC1dlWG9L2uGd61Q==}
    peerDependencies:
      react: ^16.8.0 || ^17.0.0 || ^18.0.0 || ^19.0.0
      react-dom: ^16.8.0 || ^17.0.0 || ^18.0.0 || ^19.0.0

  react-style-singleton@2.2.3:
    resolution: {integrity: sha512-b6jSvxvVnyptAiLjbkWLE/lOnR4lfTtDAl+eUC7RZy+QQWc6wRzIV2CE6xBuMmDxc2qIihtDCZD5NPOFl7fRBQ==}
    engines: {node: '>=10'}
    peerDependencies:
      '@types/react': '*'
      react: ^16.8.0 || ^17.0.0 || ^18.0.0 || ^19.0.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true

  react-syntax-highlighter@15.6.1:
    resolution: {integrity: sha512-OqJ2/vL7lEeV5zTJyG7kmARppUjiB9h9udl4qHQjjgEos66z00Ia0OckwYfRxCSFrW8RJIBnsBwQsHZbVPspqg==}
    peerDependencies:
      react: '>= 0.14.0'

  react-transition-group@4.4.5:
    resolution: {integrity: sha512-pZcd1MCJoiKiBR2NRxeCRg13uCXbydPnmB4EOeRrY7480qNWO8IIgQG6zlDkm6uRMsURXPuKq0GWtiM59a5Q6g==}
    peerDependencies:
      react: '>=16.6.0'
      react-dom: '>=16.6.0'

  react@18.3.1:
    resolution: {integrity: sha512-wS+hAgJShR0KhEvPJArfuPVN1+Hz1t0Y6n5jLrGQbkb4urgPE/0Rve+1kMB1v/oWgHgm4WIcV+i7F2pTVj+2iQ==}
    engines: {node: '>=0.10.0'}

  read-cache@1.0.0:
    resolution: {integrity: sha512-Owdv/Ft7IjOgm/i0xvNDZ1LrRANRfew4b2prF3OWMQLxLfu3bS8FVhCsrSCMK4lR56Y9ya+AThoTpDCTxCmpRA==}

  readable-stream@2.3.8:
    resolution: {integrity: sha512-8p0AUk4XODgIewSi0l8Epjs+EVnWiK7NoDIEGU0HhE7+ZyY8D1IMY7odu5lRrFXGg71L15KG8QrPmum45RTtdA==}

  readable-stream@3.6.2:
    resolution: {integrity: sha512-9u/sniCrY3D5WdsERHzHE4G2YCXqoG5FTHUiCC4SIbr6XcLZBY05ya9EKjYek9O5xOAwjGq+1JdGBAS7Q9ScoA==}
    engines: {node: '>= 6'}

  readdirp@3.6.0:
    resolution: {integrity: sha512-hOS089on8RduqdbhvQ5Z37A0ESjsqz6qnRcffsMU3495FuTdqSm+7bhJ29JvIOsBDEEnan5DPu9t3To9VRlMzA==}
    engines: {node: '>=8.10.0'}

  readdirp@4.1.2:
    resolution: {integrity: sha512-GDhwkLfywWL2s6vEjyhri+eXmfH6j1L7JE27WhqLeYzoh/A3DBaYGEj2H/HFZCn/kMfim73FXxEJTw06WtxQwg==}
    engines: {node: '>= 14.18.0'}

  real-require@0.1.0:
    resolution: {integrity: sha512-r/H9MzAWtrv8aSVjPCMFpDMl5q66GqtmmRkRjpHTsp4zBAa+snZyiQNlMONiUmEJcsnaw0wCauJ2GWODr/aFkg==}
    engines: {node: '>= 12.13.0'}

  recharts-scale@0.4.5:
    resolution: {integrity: sha512-kivNFO+0OcUNu7jQquLXAxz1FIwZj8nrj+YkOKc5694NbjCvcT6aSZiIzNzd2Kul4o4rTto8QVR9lMNtxD4G1w==}

  recharts@2.15.3:
    resolution: {integrity: sha512-EdOPzTwcFSuqtvkDoaM5ws/Km1+WTAO2eizL7rqiG0V2UVhTnz0m7J2i0CjVPUCdEkZImaWvXLbZDS2H5t6GFQ==}
    engines: {node: '>=14'}
    peerDependencies:
      react: ^16.0.0 || ^17.0.0 || ^18.0.0 || ^19.0.0
      react-dom: ^16.0.0 || ^17.0.0 || ^18.0.0 || ^19.0.0

  redent@3.0.0:
    resolution: {integrity: sha512-6tDA8g98We0zd0GvVeMT9arEOnTw9qM03L9cJXaCjrip1OO764RDBLBfrB4cwzNGDj5OA5ioymC9GkizgWJDUg==}
    engines: {node: '>=8'}

  refractor@3.6.0:
    resolution: {integrity: sha512-MY9W41IOWxxk31o+YvFCNyNzdkc9M20NoZK5vq6jkv4I/uh2zkWcfudj0Q1fovjUQJrNewS9NMzeTtqPf+n5EA==}

  regexp.prototype.flags@1.5.4:
    resolution: {integrity: sha512-dYqgNSZbDwkaJ2ceRd9ojCGjBq+mOm9LmtXnAnEGyHhN/5R7iDW2TRw3h+o/jCFxus3P2LfWIIiwowAjANm7IA==}
    engines: {node: '>= 0.4'}

  rehype-sanitize@6.0.0:
    resolution: {integrity: sha512-CsnhKNsyI8Tub6L4sm5ZFsme4puGfc6pYylvXo1AeqaGbjOYyzNv3qZPwvs0oMJ39eryyeOdmxwUIo94IpEhqg==}

  remark-parse@11.0.0:
    resolution: {integrity: sha512-FCxlKLNGknS5ba/1lmpYijMUzX2esxW5xQqjWxw2eHFfS2MSdaHVINFmhjo+qN1WhZhNimq0dZATN9pH0IDrpA==}

  remark-rehype@11.1.1:
    resolution: {integrity: sha512-g/osARvjkBXb6Wo0XvAeXQohVta8i84ACbenPpoSsxTOQH/Ae0/RGP4WZgnMH5pMLpsj4FG7OHmcIcXxpza8eQ==}

  require-directory@2.1.1:
    resolution: {integrity: sha512-fGxEI7+wsG9xrvdjsrlmL22OMTTiHRwAMroiEeMgq8gzoLC/PQr7RsRDSTLUg/bZAZtF+TVIkHc6/4RIKrui+Q==}
    engines: {node: '>=0.10.0'}

  require-main-filename@2.0.0:
    resolution: {integrity: sha512-NKN5kMDylKuldxYLSUfrbo5Tuzh4hd+2E8NPPX02mZtn1VuREQToYe/ZdlJy+J3uCpfaiGF05e7B8W0iXbQHmg==}

  resolve-from@4.0.0:
    resolution: {integrity: sha512-pb/MYmXstAkysRFx8piNI1tGFNQIFA3vkE3Gq4EuA1dF6gHp/+vgZqsCGJapvy8N3Q+4o7FwvquPJcnZ7RYy4g==}
    engines: {node: '>=4'}

  resolve@1.22.10:
    resolution: {integrity: sha512-NPRy+/ncIMeDlTAsuqwKIiferiawhefFJtkNSW0qZJEqMEb+qBt/77B/jGeeek+F0uOeN05CDa6HXbbIgtVX4w==}
    engines: {node: '>= 0.4'}
    hasBin: true

  reusify@1.1.0:
    resolution: {integrity: sha512-g6QUff04oZpHs0eG5p83rFLhHeV00ug/Yf9nZM6fLeUrPguBTkTQOdpAWWspMh55TZfVQDPaN3NQJfbVRAxdIw==}
    engines: {iojs: '>=1.0.0', node: '>=0.10.0'}

  rollup@4.36.0:
    resolution: {integrity: sha512-zwATAXNQxUcd40zgtQG0ZafcRK4g004WtEl7kbuhTWPvf07PsfohXl39jVUvPF7jvNAIkKPQ2XrsDlWuxBd++Q==}
    engines: {node: '>=18.0.0', npm: '>=8.0.0'}
    hasBin: true

  run-parallel@1.2.0:
    resolution: {integrity: sha512-5l4VyZR86LZ/lDxZTR6jqL8AFE2S0IFLMP26AbjsLVADxHdhB/c0GUsH+y39UfCi3dzz8OlQuPmnaJOMoDHQBA==}

  safe-buffer@5.1.2:
    resolution: {integrity: sha512-Gd2UZBJDkXlY7GbJxfsE8/nvKkUEU1G38c1siN6QP6a9PT9MmHB8GnpscSmMJSoF8LOIrt8ud/wPtojys4G6+g==}

  safe-buffer@5.2.1:
    resolution: {integrity: sha512-rp3So07KcdmmKbGvgaNxQSJr7bGVSVk5S9Eq1F+ppbRo70+YeaDxkw5Dd8NPN+GD6bjnYm2VuPuCXmpuYvmCXQ==}

  safe-regex-test@1.1.0:
    resolution: {integrity: sha512-x/+Cz4YrimQxQccJf5mKEbIa1NzeCRNI5Ecl/ekmlYaampdNLPalVyIcCZNNH3MvmqBugV5TMYZXv0ljslUlaw==}
    engines: {node: '>= 0.4'}

  safe-stable-stringify@2.5.0:
    resolution: {integrity: sha512-b3rppTKm9T+PsVCBEOUR46GWI7fdOs00VKZ1+9c1EWDaDMvjQc6tUwuFyIprgGgTcWoVHSKrU8H31ZHA2e0RHA==}
    engines: {node: '>=10'}

  scheduler@0.23.2:
    resolution: {integrity: sha512-UOShsPwz7NrMUqhR6t0hWjFduvOzbtv7toDH1/hIrfRNIDBnnBWd0CwJTGvTpngVlmwGCdP9/Zl/tVrDqcuYzQ==}

  semver@6.3.1:
    resolution: {integrity: sha512-BR7VvDCVHO+q2xBEWskxS6DJE1qRnb7DxzUrogb71CWoSficBxYsiAGd+Kl0mmq/MprG9yArRkyrQxTO6XjMzA==}
    hasBin: true

  semver@7.7.1:
    resolution: {integrity: sha512-hlq8tAfn0m/61p4BVRcPzIGr6LKiMwo4VM6dGi6pt4qcRkmNzTcWq6eCEjEh+qXjkMDvPlOFFSGwQjoEa6gyMA==}
    engines: {node: '>=10'}
    hasBin: true

  set-blocking@2.0.0:
    resolution: {integrity: sha512-KiKBS8AnWGEyLzofFfmvKwpdPzqiy16LvQfK3yv/fVH7Bj13/wl3JSR1J+rfgRE9q7xUJK4qvgS8raSOeLUehw==}

  set-function-length@1.2.2:
    resolution: {integrity: sha512-pgRc4hJ4/sNjWCSS9AmnS40x3bNMDTknHgL5UaMBTMyJnU90EgWh1Rz+MC9eFu4BuN/UwZjKQuY/1v3rM7HMfg==}
    engines: {node: '>= 0.4'}

  set-function-name@2.0.2:
    resolution: {integrity: sha512-7PGFlmtwsEADb0WYyvCMa1t+yke6daIG4Wirafur5kcf+MhUnPms1UeR0CKQdTZD81yESwMHbtn+TR+dMviakQ==}
    engines: {node: '>= 0.4'}

  sha.js@2.4.11:
    resolution: {integrity: sha512-QMEp5B7cftE7APOjk5Y6xgrbWu+WkLVQwk8JNjZ8nKRciZaByEW6MubieAiToS7+dwvrjGhH8jRXz3MVd0AYqQ==}
    hasBin: true

  shallowequal@1.1.0:
    resolution: {integrity: sha512-y0m1JoUZSlPAjXVtPPW70aZWfIL/dSP7AFkRnniLCrK/8MDKog3TySTBmckD+RObVxH0v4Tox67+F14PdED2oQ==}

  sharp@0.33.5:
    resolution: {integrity: sha512-haPVm1EkS9pgvHrQ/F3Xy+hgcuMV0Wm9vfIBSiwZ05k+xgb0PkBQpGsAA/oWdDobNaZTH5ppvHtzCFbnSEwHVw==}
    engines: {node: ^18.17.0 || ^20.3.0 || >=21.0.0}

  shebang-command@2.0.0:
    resolution: {integrity: sha512-kHxr2zZpYtdmrN1qDjrrX/Z1rR1kG8Dx+gkpK1G4eXmvXswmcE1hTWBWYUzlraYw1/yZp6YuDY77YtvbN0dmDA==}
    engines: {node: '>=8'}

  shebang-regex@3.0.0:
    resolution: {integrity: sha512-7++dFhtcx3353uBaq8DDR4NuxBetBzC7ZQOhmTQInHEd6bSrXdiEyzCvG07Z44UYdLShWUyXt5M/yhz8ekcb1A==}
    engines: {node: '>=8'}

  side-channel-list@1.0.0:
    resolution: {integrity: sha512-FCLHtRD/gnpCiCHEiJLOwdmFP+wzCmDEkc9y7NsYxeF4u7Btsn1ZuwgwJGxImImHicJArLP4R0yX4c2KCrMrTA==}
    engines: {node: '>= 0.4'}

  side-channel-map@1.0.1:
    resolution: {integrity: sha512-VCjCNfgMsby3tTdo02nbjtM/ewra6jPHmpThenkTYh8pG9ucZ/1P8So4u4FGBek/BjpOVsDCMoLA/iuBKIFXRA==}
    engines: {node: '>= 0.4'}

  side-channel-weakmap@1.0.2:
    resolution: {integrity: sha512-WPS/HvHQTYnHisLo9McqBHOJk2FkHO/tlpvldyrnem4aeQp4hai3gythswg6p01oSoTl58rcpiFAjF2br2Ak2A==}
    engines: {node: '>= 0.4'}

  side-channel@1.1.0:
    resolution: {integrity: sha512-ZX99e6tRweoUXqR+VBrslhda51Nh5MTQwou5tnUDgbtyM0dBgmhEDtWGP/xbKn6hqfPRHujUNwz5fy/wbbhnpw==}
    engines: {node: '>= 0.4'}

  signal-exit@4.1.0:
    resolution: {integrity: sha512-bzyZ1e88w9O1iNJbKnOlvYTrWPDl46O1bG0D3XInv+9tkPrxrN8jUUTiFlDkkmKWgn1M6CfIA13SuGqOa9Korw==}
    engines: {node: '>=14'}

  simple-swizzle@0.2.2:
    resolution: {integrity: sha512-JA//kQgZtbuY83m+xT+tXJkmJncGMTFT+C+g2h2R9uxkYIrE2yy9sgmcLhCnw57/WSD+Eh3J97FPEDFnbXnDUg==}

  socket.io-client@4.8.1:
    resolution: {integrity: sha512-hJVXfu3E28NmzGk8o1sHhN3om52tRvwYeidbj7xKy2eIIse5IoKX3USlS6Tqt3BHAtflLIkCQBkzVrEEfWUyYQ==}
    engines: {node: '>=10.0.0'}

  socket.io-parser@4.2.4:
    resolution: {integrity: sha512-/GbIKmo8ioc+NIWIhwdecY0ge+qVBSMdgxGygevmdHj24bsfgtCmcUUcQ5ZzcylGFHsN3k4HB4Cgkl96KVnuew==}
    engines: {node: '>=10.0.0'}

  sonic-boom@2.8.0:
    resolution: {integrity: sha512-kuonw1YOYYNOve5iHdSahXPOK49GqwA+LZhI6Wz/l0rP57iKyXXIHaRagOBHAPmGwJC6od2Z9zgvZ5loSgMlVg==}

  sonner@1.7.4:
    resolution: {integrity: sha512-DIS8z4PfJRbIyfVFDVnK9rO3eYDtse4Omcm6bt0oEr5/jtLgysmjuBl1frJ9E/EQZrFmKx2A8m/s5s9CRXIzhw==}
    peerDependencies:
      react: ^18.0.0 || ^19.0.0 || ^19.0.0-rc
      react-dom: ^18.0.0 || ^19.0.0 || ^19.0.0-rc

  source-map-js@1.2.1:
    resolution: {integrity: sha512-UXWMKhLOwVKb728IUtQPXxfYU+usdybtUrK/8uGE8CQMvrhOpwvzDBwj0QhSL7MQc7vIsISBG8VQ8+IDQxpfQA==}
    engines: {node: '>=0.10.0'}

  source-map-support@0.5.21:
    resolution: {integrity: sha512-uBHU3L3czsIyYXKX88fdrGovxdSCoTGDRZ6SYXtSRxLZUzHg5P/66Ht6uoUlHu9EZod+inXhKo3qQgwXUT/y1w==}

  source-map@0.5.7:
    resolution: {integrity: sha512-LbrmJOMUSdEVxIKvdcJzQC+nQhe8FUZQTXQy6+I75skNgn3OoQ0DZA8YnFa7gp8tqtL3KPf1kmo0R5DoApeSGQ==}
    engines: {node: '>=0.10.0'}

  source-map@0.6.1:
    resolution: {integrity: sha512-UjgapumWlbMhkBgzT7Ykc5YXUT46F0iKu8SGXq0bcwP5dz/h0Plj6enJqjz1Zbq2l5WaqYnrVbwWOWMyF3F47g==}
    engines: {node: '>=0.10.0'}

  space-separated-tokens@1.1.5:
    resolution: {integrity: sha512-q/JSVd1Lptzhf5bkYm4ob4iWPjx0KiRe3sRFBNrVqbJkFaBm5vbbowy1mymoPNLRa52+oadOhJ+K49wsSeSjTA==}

  space-separated-tokens@2.0.2:
    resolution: {integrity: sha512-PEGlAwrG8yXGXRjW32fGbg66JAlOAwbObuqVoJpv/mRgoWDQfgH1wDPvtzWyUSNAXBGSk8h755YDbbcEy3SH2Q==}

  split-on-first@1.1.0:
    resolution: {integrity: sha512-43ZssAJaMusuKWL8sKUBQXHWOpq8d6CfN/u1p4gUzfJkM05C8rxTmYrkIPTXapZpORA6LkkzcUulJ8FqA7Uudw==}
    engines: {node: '>=6'}

  split2@4.2.0:
    resolution: {integrity: sha512-UcjcJOWknrNkF6PLX83qcHM6KHgVKNkV62Y8a5uYDVv9ydGQVwAHMKqHdJje1VTWpljG0WYpCDhrCdAOYH4TWg==}
    engines: {node: '>= 10.x'}

  stacktracey@2.1.8:
    resolution: {integrity: sha512-Kpij9riA+UNg7TnphqjH7/CzctQ/owJGNbFkfEeve4Z4uxT5+JapVLFXcsurIfN34gnTWZNJ/f7NMG0E8JDzTw==}

  std-env@3.9.0:
    resolution: {integrity: sha512-UGvjygr6F6tpH7o2qyqR6QYpwraIjKSdtzyBdyytFOHmPZY917kwdwLG0RbOjWOnKmnm3PeHjaoLLMie7kPLQw==}

  stop-iteration-iterator@1.1.0:
    resolution: {integrity: sha512-eLoXW/DHyl62zxY4SCaIgnRhuMr6ri4juEYARS8E6sCEqzKpOiE521Ucofdx+KnDZl5xmvGYaaKCk5FEOxJCoQ==}
    engines: {node: '>= 0.4'}

  stoppable@1.1.0:
    resolution: {integrity: sha512-KXDYZ9dszj6bzvnEMRYvxgeTHU74QBFL54XKtP3nyMuJ81CFYtABZ3bAzL2EdFUaEwJOBOgENyFj3R7oTzDyyw==}
    engines: {node: '>=4', npm: '>=6'}

  stream-shift@1.0.3:
    resolution: {integrity: sha512-76ORR0DO1o1hlKwTbi/DM3EXWGf3ZJYO8cXX5RJwnul2DEg2oyoZyjLNoQM8WsvZiFKCRfC1O0J7iCvie3RZmQ==}

  strict-uri-encode@2.0.0:
    resolution: {integrity: sha512-QwiXZgpRcKkhTj2Scnn++4PKtWsH0kpzZ62L2R6c/LUVYv7hVnZqcg2+sMuT6R7Jusu1vviK/MFsu6kNJfWlEQ==}
    engines: {node: '>=4'}

  string-width@4.2.3:
    resolution: {integrity: sha512-wKyQRQpjJ0sIp62ErSZdGsjMJWsap5oRNihHhu6G7JVO/9jIB6UyevL+tXuOqrng8j/cxKTWyWUwvSTriiZz/g==}
    engines: {node: '>=8'}

  string-width@5.1.2:
    resolution: {integrity: sha512-HnLOCR3vjcY8beoNLtcjZ5/nxn2afmME6lhrDrebokqMap+XbeW8n9TXpPDOqdGK5qcI3oT0GKTW6wC7EMiVqA==}
    engines: {node: '>=12'}

  string_decoder@1.1.1:
    resolution: {integrity: sha512-n/ShnvDi6FHbbVfviro+WojiFzv+s8MPMHBczVePfUpDJLwoLT0ht1l4YwBCbi8pJAveEEdnkHyPyTP/mzRfwg==}

  string_decoder@1.3.0:
    resolution: {integrity: sha512-hkRX8U1WjJFd8LsDJ2yQ/wWWxaopEsABU1XfkM8A+j0+85JAGppt16cr1Whg6KIbb4okU6Mql6BOj+uup/wKeA==}

  stringify-entities@4.0.4:
    resolution: {integrity: sha512-IwfBptatlO+QCJUo19AqvrPNqlVMpW9YEL2LIVY+Rpv2qsjCGxaDLNRgeGsQWJhfItebuJhsGSLjaBbNSQ+ieg==}

  strip-ansi@6.0.1:
    resolution: {integrity: sha512-Y38VPSHcqkFrCpFnQ9vuSXmquuv5oXOKpGeT6aGrr3o3Gc9AlVa6JBfUSOCnbxGGZF+/0ooI7KrPuUSztUdU5A==}
    engines: {node: '>=8'}

  strip-ansi@7.1.0:
    resolution: {integrity: sha512-iq6eVVI64nQQTRYq2KtEg2d2uU7LElhTJwsH4YzIHZshxlgZms/wIc4VoDQTlG/IvVIrBKG06CrZnp0qv7hkcQ==}
    engines: {node: '>=12'}

  strip-indent@3.0.0:
    resolution: {integrity: sha512-laJTa3Jb+VQpaC6DseHhF7dXVqHTfJPCRDaEbid/drOhgitgYku/letMUqOXFoWV0zIIUbjpdH2t+tYj4bQMRQ==}
    engines: {node: '>=8'}

  strip-json-comments@3.1.1:
    