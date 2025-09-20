PS D:\HandyWriterzNEW> pnpm run type-check

> handywriterz@1.0.0 type-check D:\HandyWriterzNEW
> tsc -p tsconfig.app.json --noEmit --skipLibCheck

src/components/Dashboard/Dashboard.tsx:612:33 - error TS2304: Ca
find name 'supabase'.

612         const { error } = await supabase.from('orders').inse
                                    ~~~~~~~~

src/components/Dashboard/Dashboard.tsx:1045:13 - error TS2304: C find name 'signOut'.

1045       await signOut({
                 ~~~~~~~

src/components/Dashboard/Dashboard.tsx:1191:46 - error TS2339: Pty 'getMessagesByUserId' does not exist on type 'DatabaseService

1191         const result = await databaseService.getMessagesByU(user.id);
                                                  ~~~~~~~~~~~~~~
src/components/Dashboard/Dashboard.tsx:1218:44 - error TS2339: Pty 'sendMessage' does not exist on type 'DatabaseService'.

1218       const result = await databaseService.sendMessage({   
                                                ~~~~~~~~~~~

src/features/posts/components/columns.tsx:9:22 - error TS2307: C find module './schema' or its corresponding type declarations. 

9 import { Post } from "./schema"
                       ~~~~~~~~~~

src/features/posts/components/columns.tsx:11:37 - error TS2307: t find module './components/DataTableRowActions' or its correspo type declarations.

11 import { DataTableRowActions } from "./components/DataTableRoons"
                                       ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

src/features/posts/components/content/Categories.tsx:101:10 - erS2339: Property 'single' does not exist on type 'Promise<{ readorror: any; success?: undefined; } | { success: true; error?: undd; }>'.

101         .single();
             ~~~~~~

src/features/posts/components/content/ContentList.tsx:66:5 - err2769: No overload matches this call.
  Overload 1 of 3, '(options: DefinedInitialDataOptions<unknown,r, unknown, (string | number)[]>, queryClient?: QueryClient): DeUseQueryResult<unknown, Error>', gave the following error.
    Object literal may only specify known properties, and 'keepPusData' does not exist in type 'DefinedInitialDataOptions<unknowror, unknown, (string | number)[]>'.
  Overload 2 of 3, '(options: UndefinedInitialDataOptions<Post[]or, Post[], (string | number)[]>, queryClient?: QueryClient): UsyResult<...>', gave the following error.
    Object literal may only specify known properties, and 'keepPusData' does not exist in type 'UndefinedInitialDataOptions<Postrror, Post[], (string | number)[]>'.
  Overload 3 of 3, '(options: UseQueryOptions<Post[], Error, Pos
(string | number)[]>, queryClient?: QueryClient): UseQueryResult[], Error>', gave the following error.
    Object literal may only specify known properties, and 'keepPusData' does not exist in type 'UseQueryOptions<Post[], Error, P, (string | number)[]>'.

66     keepPreviousData: true
       ~~~~~~~~~~~~~~~~


src/features/posts/components/content/ContentList.tsx:85:18 - erS2339: Property 'filter' does not exist on type 'unknown'.

85     return posts.filter(post => {
                    ~~~~~~

src/features/posts/components/content/ContentList.tsx:115:7 - erS2304: Cannot find name 'setPosts'.

115       setPosts(prevPosts => [...prevPosts, ...additionalPost
          ~~~~~~~~

src/features/posts/components/content/ContentList.tsx:172:9 - erS2304: Cannot find name 'toast'.

172         toast.success('Post deleted successfully');
            ~~~~~

src/features/posts/components/content/ContentList.tsx:175:9 - erS2304: Cannot find name 'toast'.

175         toast.error('Failed to delete post');
            ~~~~~

src/features/posts/components/content/ContentList.tsx:237:20 - e
TS2304: Cannot find name 'Bell'.

237                   <Bell className="h-5 w-5" />
                       ~~~~

src/features/posts/components/content/ContentList.tsx:424:26 - e
TS2304: Cannot find name 'Heart'.

424                         <Heart className="h-4 w-4" fill={posrHasLiked ? 'currentColor' : 'none'} />
                             ~~~~~

src/features/posts/components/content/ContentList.tsx:495:26 - e
TS2304: Cannot find name 'Heart'.

495                         <Heart className="h-4 w-4" fill={posrHasLiked ? 'currentColor' : 'none'} />
                             ~~~~~

src/features/posts/Posts.tsx:17:31 - error TS2322: Type 'ColumnDst>[]' is not assignable to type 'ColumnDef<unknown, unknown>[]'
  Type 'ColumnDef<Post>' is not assignable to type 'ColumnDef<un, unknown>'.
    Type 'AccessorKeyColumnDefBase<Post, unknown> & Partial<StriderIdentifier>' is not assignable to type 'ColumnDef<unknown, un>'.
      Type 'AccessorKeyColumnDefBase<Post, unknown> & Partial<SteaderIdentifier>' is not assignable to type 'AccessorKeyColumnDe<unknown, unknown> & Partial<IdIdentifier<unknown, unknown>>'.  
        Types of property 'accessorKey' are incompatible.
          Type 'string | number | symbol | (string & {})' is notgnable to type 'string & {}'.
            Type 'number' is not assignable to type 'string & {}
              Type 'number' is not assignable to type 'string'. 

17       <DataTable data={posts} columns={columns} toolbar={DataToolbar} />
                                 ~~~~~~~

  src/features/common/components/datatable/DataTable.tsx:32:3   
    32   columns: ColumnDef<TData, TValue>[]
         ~~~~~~~
    The expected type comes from property 'columns' which is dec here on type 'IntrinsicAttributes & DataTableProps<unknown, unk'

src/features/settings/components/ProfileForm.tsx:56:7 - error TS Object literal may only specify known properties, and 'title' dot exist in type 'ReactElement<any, string | JSXElementConstructy>> | ValueFunction<Renderable, Toast>'.

56       title: "You submitted the following values:",
         ~~~~~

src/features/settings/components/ProfileForm.tsx:69:11 - error T: Type '{ control: Control<{ username?: string; email?: string;  string; urls?: { value?: string; }[]; }, any, { username?: strimail?: string; bio?: string; urls?: { value?: string; }[]; }>; n
string; render: ({ field }: { ...; }) => Element; }' is not assie to type 'IntrinsicAttributes & { children?: ReactNode; classNa
string; name?: string; }'.
  Property 'control' does not exist on type 'IntrinsicAttributes
children?: ReactNode; className?: string; name?: string; }'.

69           control={form.control}
             ~~~~~~~

src/features/settings/components/ProfileForm.tsx:74:16 - error T: Cannot find name 'FormControl'.

74               <FormControl>
                  ~~~~~~~~~~~

src/features/settings/components/ProfileForm.tsx:76:17 - error T: Cannot find name 'FormControl'.

76               </FormControl>
                   ~~~~~~~~~~~

src/features/settings/components/ProfileForm.tsx:77:16 - error T: Cannot find name 'FormDescription'.

77               <FormDescription>
                  ~~~~~~~~~~~~~~~

src/features/settings/components/ProfileForm.tsx:80:17 - error T: Cannot find name 'FormDescription'.

80               </FormDescription>
                   ~~~~~~~~~~~~~~~

src/features/settings/components/ProfileForm.tsx:86:11 - error T: Type '{ control: Control<{ username?: string; email?: string;  string; urls?: { value?: string; }[]; }, any, { username?: strimail?: string; bio?: string; urls?: { value?: string; }[]; }>; n
string; render: ({ field }: { ...; }) => Element; }' is not assie to type 'IntrinsicAttributes & { children?: ReactNode; classNa
string; name?: string; }'.
  Property 'control' does not exist on type 'IntrinsicAttributes
children?: ReactNode; className?: string; name?: string; }'.

86           control={form.control}
             ~~~~~~~

src/features/settings/components/ProfileForm.tsx:92:16 - error T: Cannot find name 'FormDescription'.

92               <FormDescription>
                  ~~~~~~~~~~~~~~~

src/features/settings/components/ProfileForm.tsx:94:17 - error T: Cannot find name 'FormDescription'.

94               </FormDescription>
                   ~~~~~~~~~~~~~~~

src/features/settings/components/ProfileForm.tsx:100:11 - error 2: Type '{ control: Control<{ username?: string; email?: string;: string; urls?: { value?: string; }[]; }, any, { username?: str
email?: string; bio?: string; urls?: { value?: string; }[]; }>;  string; render: ({ field }: { ...; }) => Element; }' is not assle to type 'IntrinsicAttributes & { children?: ReactNode; classN string; name?: string; }'.
  Property 'control' does not exist on type 'IntrinsicAttributes
children?: ReactNode; className?: string; name?: string; }'.

100           control={form.control}
              ~~~~~~~

src/features/settings/components/ProfileForm.tsx:105:16 - error 4: Cannot find name 'FormControl'.

105               <FormControl>
                   ~~~~~~~~~~~

src/features/settings/components/ProfileForm.tsx:107:17 - error 4: Cannot find name 'FormControl'.

107               </FormControl>
                    ~~~~~~~~~~~

src/features/settings/components/ProfileForm.tsx:108:16 - error 4: Cannot find name 'FormDescription'.

108               <FormDescription>
                   ~~~~~~~~~~~~~~~

src/features/settings/components/ProfileForm.tsx:111:17 - error 4: Cannot find name 'FormDescription'.

111               </FormDescription>
                    ~~~~~~~~~~~~~~~

src/features/users/components/users/UsersList.tsx:66:46 - error 5: Argument of type '{ id: string; name: string; email: string;  string; status: string; lastLogin: string; avatar: string; }[]'ot assignable to parameter of type 'User[] | (() => User[])'.   
  Type '{ id: string; name: string; email: string; role: string;us: string; lastLogin: string; avatar: string; }[]' is not assig to type 'User[]'.
    Type '{ id: string; name: string; email: string; role: strinatus: string; lastLogin: string; avatar: string; }' is not assig to type 'User'.
      Types of property 'status' are incompatible.
        Type 'string' is not assignable to type '"active" | "pen | "inactive"'.

66   const [users, setUsers] = useState<User[]>(mockUsers);
                                                ~~~~~~~~~

src/hooks/useDocumentSubmission.ts:120:11 - error TS2345: Argume type 'Record<string, any>' is not assignable to parameter of tyubmissionMetadata'.
  Property 'orderId' is missing in type 'Record<string, any>' buuired in type 'SubmissionMetadata'.

120           metadata
              ~~~~~~~~

  src/services/documentSubmissionService.ts:5:3
    5   orderId: string;
        ~~~~~~~
    'orderId' is declared here.

src/hooks/useDocumentSubmission.ts:157:30 - error TS2339: ProperotificationChannels' does not exist on type 'SubmissionResult'. 

157             channels: result.notificationChannels
                                 ~~~~~~~~~~~~~~~~~~~~

src/hooks/useSubscription.ts:73:5 - error TS2322: Type '{ readonme: "Free"; readonly features: readonly ["basic_access"]; readonxPages: 0; readonly deliveryDays: 14; readonly revisions: 0; rea support: "Community"; } | { readonly name: "Basic"; ... 4 more 
readonly support: "Email"; } | { ...; } | { ...; }' is not assig to type 'SubscriptionPlan'.
  Type '{ readonly name: "Free"; readonly features: readonly ["baccess"]; readonly maxPages: 0; readonly deliveryDays: 14; readoevisions: 0; readonly support: "Community"; }' is not assignableype 'SubscriptionPlan'.
    Types of property 'features' are incompatible.
      The type 'readonly ["basic_access"]' is 'readonly' and cane assigned to the mutable type 'string[]'.

73     return subscriptionPlans[planName];
       ~~~~~~

src/lib/services.ts:1:26 - error TS2307: Cannot find module './sse' or its corresponding type declarations.

1 import { supabase } from './supabase';
                           ~~~~~~~~~~~~

src/pages/auth/admin-login.tsx:122:34 - error TS2339: Property 'd' does not exist on type 'SignInResource'.

122       const adminUserId = result.userId ?? result.createdUse
                                     ~~~~~~

src/pages/auth/admin-login.tsx:122:51 - error TS2339: Property 'edUserId' does not exist on type 'SignInResource'.

122       const adminUserId = result.userId ?? result.createdUse
                                                      ~~~~~~~~~~

src/pages/auth/ForgotPassword.tsx:12:11 - error TS2339: PropertyetPassword' does not exist on type '{ user: User; session: SessisLoading: boolean; error: Error; signIn: (email: string, passworring) => Promise<void>; signUp: (email: string, password: stringe: string) => Promise<...>; logout: () => Promise<...>; signInWiicLink: (email: string) => Promise<...>; updatePassword: (newPas: string...'.

12   const { resetPassword } = useAuth();
             ~~~~~~~~~~~~~

src/pages/auth/login.tsx:57:56 - error TS2322: Type '{ classNameing; style: { fontSize: number; }; }' is not assignable to type insicAttributes & HandyWriterzLogoProps'.
  Property 'style' does not exist on type 'IntrinsicAttributes &yWriterzLogoProps'.

57               <HandyWriterzLogo className="text-white" style=ntSize: 24 }} />
                                                          ~~~~~ 

src/pages/auth/mfa-challenge.tsx:13:26 - error TS2307: Cannot fidule '@/components/auth/MfaChallenge' or its corresponding type rations.

13 import MfaChallenge from '@/components/auth/MfaChallenge';   
                            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

src/pages/auth/mfa-challenge.tsx:16:33 - error TS2307: Cannot fidule '@/lib/appwrite' or its corresponding type declarations.   

16 import { specialMfaLogin } from '@/lib/appwrite';
                                   ~~~~~~~~~~~~~~~~

src/pages/Homepage.tsx:706:14 - error TS2322: Type '{ children: g; jsx: string; global: string; }' is not assignable to type 'DedHTMLProps<StyleHTMLAttributes<HTMLStyleElement>, HTMLStyleEleme  Property 'jsx' does not exist on type 'DetailedHTMLProps<Stylettributes<HTMLStyleElement>, HTMLStyleElement>'.

706       <style jsx="true" global="true">{`
                 ~~~

src/polyfills.ts:10:12 - error TS2339: Property '__disableMetamaection' does not exist on type 'Window & typeof globalThis'.

10     window.__disableMetamaskDetection = true;
              ~~~~~~~~~~~~~~~~~~~~~~~~~~

src/polyfills.ts:31:17 - error TS2339: Property 'ethereum' does xist on type 'Window & typeof globalThis'.

31     if (!window.ethereum) {
                   ~~~~~~~~

src/polyfills.ts:32:14 - error TS2339: Property 'ethereum' does xist on type 'Window & typeof globalThis'.

32       window.ethereum = {
                ~~~~~~~~

src/providers/AuthProvider.tsx:62:34 - error TS2339: Property 's' does not exist on type 'LoadedClerk'.

62       const result = await clerk.signIn.create({
                                    ~~~~~~

src/providers/AuthProvider.tsx:86:34 - error TS2339: Property 's' does not exist on type 'LoadedClerk'.

86       const result = await clerk.signIn.create({
                                    ~~~~~~

src/providers/AuthProvider.tsx:92:29 - error TS2339: Property 's
does not exist on type 'SignedInSessionResource'.
  Property 'sync' does not exist on type 'ActiveSessionResource'

92         await clerk.session.sync();
                               ~~~~

src/providers/AuthProvider.tsx:121:34 - error TS2339: Property 'p' does not exist on type 'LoadedClerk'.

121       const result = await clerk.signUp.create({
                                     ~~~~~~

src/providers/AuthProvider.tsx:155:19 - error TS2339: Property 'n' does not exist on type 'LoadedClerk'.

155       await clerk.signIn.create({
                      ~~~~~~

src/providers/AuthProvider.tsx:182:19 - error TS2339: Property 'n' does not exist on type 'LoadedClerk'.

182       if (!clerk?.signIn) throw new Error("Authentication sy
not available");
                      ~~~~~~

src/providers/AuthProvider.tsx:184:19 - error TS2339: Property 'n' does not exist on type 'LoadedClerk'.

184       await clerk.signIn.create({
                      ~~~~~~

src/providers/AuthProvider.tsx:198:19 - error TS2339: Property 'n' does not exist on type 'LoadedClerk'.

198       if (!clerk?.signIn) throw new Error("Authentication sy
not available");
                      ~~~~~~

src/providers/AuthProvider.tsx:200:19 - error TS2339: Property 'n' does not exist on type 'LoadedClerk'.

200       await clerk.signIn.create({
                      ~~~~~~

src/providers/ClerkProvider.tsx:44:6 - error TS2322: Type '{ chi: ReactNode; publishableKey: string; domain: any; signInUrl: "/sn"; signUpUrl: "/sign-up"; appearance: { variables: { colorBackg: string; colorInputBackground: string; colorText: string; colorry: "#2563eb"; colorTextOnPrimaryBackground: "#ffffff"; borderRa "0.5rem"; }; layout: { ...; };...' is not assignable to type 'IsicAttributes & ClerkProviderProps'.
  Type '{ children: ReactNode; publishableKey: string; domain: aignInUrl: "/sign-in"; signUpUrl: "/sign-up"; appearance: { varia { colorBackground: string; colorInputBackground: string; colorT
string; colorPrimary: "#2563eb"; colorTextOnPrimaryBackground: "ff"; borderRadius: "0.5rem"; }; layout: { ...; };...' is missing
following properties from type 'Without<{ routerPush: RouterFn; rReplace: RouterFn; routerDebug?: boolean; } & SignInForceRedire & SignInFallbackRedirectUrl & ... 6 more ... & { ...; }, "isSate">': routerPush, routerReplace

44     <BaseClerkProvider
        ~~~~~~~~~~~~~~~~~

src/services/contentManagementService.ts:55:27 - error TS2339: Pty 'prepare' does not exist on type 'D1Client'.

55       let query = this.db.prepare(`SELECT p.*, a.id as author
a.full_name as author_name, a.avatar_url as author_avatar, a.rol
author_role
                             ~~~~~~~

src/services/contentManagementService.ts:63:25 - error TS2339: Pty 'prepare' does not exist on type 'D1Client'.

63         query = this.db.prepare(`SELECT p.*, a.id as author_ifull_name as author_name, a.avatar_url as author_avatar, a.role thor_role
                           ~~~~~~~

src/services/contentManagementService.ts:107:41 - error TS2339: rty 'prepare' does not exist on type 'D1Client'.

107       const { results } = await this.db.prepare(`SELECT p.*, as author_id, a.full_name as author_name, a.avatar_url as authotar, a.role as author_role
                                            ~~~~~~~

src/services/contentManagementService.ts:150:41 - error TS2339: rty 'prepare' does not exist on type 'D1Client'.

150       const { results } = await this.db.prepare(`SELECT cate COUNT(*) as count
                                            ~~~~~~~

src/services/contentManagementService.ts:173:41 - error TS2339: rty 'prepare' does not exist on type 'D1Client'.

173       const { results } = await this.db.prepare(`SELECT valu
tag, COUNT(*) as count
                                            ~~~~~~~

src/services/contentManagementService.ts:192:15 - error TS2339: rty 'results' does not exist on type '{ data: any[]; error: any;
{ data: any[]; error: any; }'.

192       const { results } = await this.db.from('comments').sel*').eq('post_id', postId).order('created_at', { ascending: falsell();
                  ~~~~~~~

src/services/contentManagementService.ts:195:17 - error TS2339: rty 'results' does not exist on type '{ data: any[]; error: any;
{ data: any[]; error: any; }'.

195         const { results: authorResults } = await this.db.frothors').select('id, full_name as name, avatar_url as avatar, rolq('id', comment.author_id).all();
                    ~~~~~~~

src/services/contentManagementService.ts:224:47 - error TS2339: rty 'prepare' does not exist on type 'D1Client'.

224       const { success, meta } = await this.db.prepare('INSERO comments (post_id, author_id, content, created_at) VALUES (?,  ?) RETURNING *')
                                                  ~~~~~~~

src/services/contentManagementService.ts:235:15 - error TS2339: rty 'results' does not exist on type '{ data: any[]; error: any;
{ data: any[]; error: any; }'.

235       const { results: commentResults } = await this.db.fromments').select('*').eq('id', insertedComment).all();
                  ~~~~~~~

src/services/contentManagementService.ts:238:15 - error TS2339: rty 'results' does not exist on type '{ data: any[]; error: any;
{ data: any[]; error: any; }'.

238       const { results: authorResults } = await this.db.from(ors').select('id, full_name as name, avatar_url as avatar, role''id', comment.author_id).all();
                  ~~~~~~~

src/services/contentManagementService.ts:247:21 - error TS2339: rty 'prepare' does not exist on type 'D1Client'.

247       await this.db.prepare('UPDATE posts SET comments_countmments_count + 1 WHERE id = ?')
                        ~~~~~~~

src/services/contentManagementService.ts:276:41 - error TS2339: rty 'prepare' does not exist on type 'D1Client'.

276       const { success } = await this.db.prepare(`UPDATE post ${Object.keys(updateData).map(k => `${k} = ?`).join(', ')} WHER
= ?`)
                                            ~~~~~~~

src/services/contentManagementService.ts:292:41 - error TS2339: rty 'prepare' does not exist on type 'D1Client'.

292       const { success } = await this.db.prepare('DELETE FROMs WHERE id = ?')
                                            ~~~~~~~

src/services/contentService.ts:120:55 - error TS2345: Argument oe '{ title: string; slug: string; excerpt: string; content: striuthor_id: string; service_id: string; category_id: string; statuublished" | "draft" | "review" | "approved" | "archived" | "sche"; featured_image: string; tags: string[]; seo_title: string; secription: string; }' is not assignable to parameter of type '{ t string; content: string; excerpt?: string; slug: string; statusring; featured_image?: string; author_id: string; service_id?: s; category_id?: string; seo_title?: string; seo_description?: st tags?: string; }'.
  Types of property 'tags' are incompatible.
    Type 'string[]' is not assignable to type 'string'.

120       const result = await databaseService.createPost(postDa
                                                          ~~~~~~

src/services/contentService.ts:144:44 - error TS2345: Argument oe '{ title: string; slug: string; excerpt: string; content: stritatus: "published" | "draft" | "review" | "approved" | "archivedscheduled"; featured_image: string; tags: string[]; seo_title: s; seo_description: string; }' is not assignable to parameter of 
'Partial<{ title: string; content: string; excerpt: string; stattring; featured_image: string; seo_title: string; seo_descriptioring; tags: string; }>'.
  Types of property 'tags' are incompatible.
    Type 'string[]' is not assignable to type 'string'.

144       await databaseService.updatePost(id, updateData);
                                               ~~~~~~~~~~

src/services/contentService.ts:169:7 - error TS2322: Type '{ id: name: any; slug: any; description: any; icon: any; isActive: an]' is not assignable to type 'Service[]'.
  Property 'title' is missing in type '{ id: any; name: any; sluy; description: any; icon: any; isActive: any; }' but required ie 'Service'.

169       return services.map(service => ({
          ~~~~~~

  src/types/admin.ts:3:3
    3   title: string;
        ~~~~~
    'title' is declared here.

src/services/databaseService.ts:391:32 - error TS2339: Property ' does not exist on type '{ error: string; }'.

391         return { order: result.data, error: null };
                                   ~~~~

src/services/databaseService.ts:406:46 - error TS2339: Property ' does not exist on type '{ error: string; }'.

406         return { success: true, data: result.data };
                                                 ~~~~

src/services/documentQueueService.ts:135:20 - error TS2339: Prop
'notificationChannels' does not exist on type 'SubmissionResult'

135         if (result.notificationChannels &&
                       ~~~~~~~~~~~~~~~~~~~~

src/services/documentQueueService.ts:136:21 - error TS2339: Prop
'notificationChannels' does not exist on type 'SubmissionResult'

136             (result.notificationChannels.includes('in-app') 
                        ~~~~~~~~~~~~~~~~~~~~

src/services/documentQueueService.ts:137:21 - error TS2339: Prop
'notificationChannels' does not exist on type 'SubmissionResult'

137              result.notificationChannels.includes('email')))
                        ~~~~~~~~~~~~~~~~~~~~

src/services/fileUploadService.ts:108:14 - error TS2451: Cannot lare block-scoped variable 'getFileIcon'.

108 export const getFileIcon = (category: FileCategory) => {
                 ~~~~~~~~~~~

  src/types/global.d.ts:117:19
    117   export function getFileIcon(filename: string): string;
                          ~~~~~~~~~~~
    'getFileIcon' was also declared here.

src/services/fileUploadService.ts:285:58 - error TS2554: Expecterguments, but got 2.

285           uploadResult = await documentSubmissionService.uplR2Worker(file, filePath);
                                                             ~~~~~~~~~~~

  src/services/documentSubmissionService.ts:148:5
    148     authToken: string
            ~~~~~~~~~~~~~~~~~
    An argument for 'authToken' was not provided.

src/services/serviceContentService.ts:324:7 - error TS2353: Objeteral may only specify known properties, and 'published_at' does
exist in type 'Partial<{ title: string; content: string; excerpting; status: string; featured_image: string; seo_title: string; escription: string; tags: string; }>'.

324       published_at: new Date().toISOString(),
          ~~~~~~~~~~~~

src/services/serviceContentService.ts:386:7 - error TS2322: Typeype: string; timestamp: string; title: string; author: string; }s not assignable to type '{ type: "post_created" | "post_publish "comment_added"; timestamp: string; title: string; author: stri[]'.
  Type '{ type: string; timestamp: string; title: string; authoring; }' is not assignable to type '{ type: "post_created" | "poslished" | "comment_added"; timestamp: string; title: string; aut
string; }'.
    Types of property 'type' are incompatible.
      Type 'string' is not assignable to type '"post_created" | _published" | "comment_added"'.

386       recentActivity,
          ~~~~~~~~~~~~~~

  src/services/serviceContentService.ts:29:3
    29   recentActivity: Array<{
         ~~~~~~~~~~~~~~
    The expected type comes from property 'recentActivity' whicheclared here on type 'ServiceContentStats'

src/utils/clerkRoles.ts:78:33 - error TS2339: Property 'privateMta' does not exist on type 'UserResource'.

78   if (metadataHasAdminRole(user.privateMetadata as MetadataRe) return true;
                                   ~~~~~~~~~~~~~~~

src/utils/clerkRoles.ts:99:10 - error TS2339: Property 'privateMta' does not exist on type 'UserResource'.

99     user.privateMetadata as MetadataRecord,
            ~~~~~~~~~~~~~~~


Found 82 errors in 25 files.

Errors  Files
     4  src/components/Dashboard/Dashboard.tsx:612
     2  src/features/posts/components/columns.tsx:9
     1  src/features/posts/components/content/Categories.tsx:101
     8  src/features/posts/components/content/ContentList.tsx:66
     2  src/pages/auth/mfa-challenge.tsx:13
     1  src/pages/Homepage.tsx:706
     3  src/polyfills.ts:10
     9  src/providers/AuthProvider.tsx:62
     1  src/providers/ClerkProvider.tsx:44
    13  src/services/contentManagementService.ts:55
     3  src/services/contentService.ts:120
     2  src/services/databaseService.ts:391
     3  src/services/documentQueueService.ts:135
     2  src/services/fileUploadService.ts:108
     2  src/services/serviceContentService.ts:324
     2  src/utils/clerkRoles.ts:78
 ELIFECYCLE  Command failed with exit code 2.
PS D:\HandyWriterzNEW>