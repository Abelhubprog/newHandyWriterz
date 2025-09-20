import React, { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  Image,
  Film,
  File,
  Music,
  Grid,
  List as ListIcon,
  Search,
  Upload,
  Trash2,
  X,
  CheckSquare,
  Square,
  Filter,
  SortAsc,
  SortDesc,
  MoreVertical,
  Info,
  Download,
  Copy,
  Link2
} from 'lucide-react';
// Import R2 utilities instead of Appwrite client
import {
  getAllMediaItems,
  getMediaItemsByType,
  uploadMediaFile,
  deleteMediaFile,
  sortMediaItems,
  filterMediaItems,
  paginateMediaItems,
  MediaItem as R2MediaItem
} from '@/lib/r2MediaUtils';
import { toast } from 'react-hot-toast';
import { useAdminAuth } from '@/hooks/useAdminAuth';
import { formatFileSize } from '@/utils/formatters';

// Types for media items - adapted from R2MediaItem to maintain compatibility
interface MediaItem {
  $id: string; // Use the id field from R2MediaItem as $id for compatibility
  name: string;
  type: string;
  mimeType: string;
  sizeOriginal: number; // Keep for compatibility, but use size from R2MediaItem
  bucketId?: string; // Optional for compatibility
  url: string;
  previewUrl?: string;
  uploadedAt: string;
  createdBy?: string;
  dimensions?: {
    width: number;
    height: number;
  };
}

// Interface for component props
interface MediaLibraryProps {
  onSelect?: (media: { url: string; type: string; id: string }) => void;
  maxSelection?: number;
  acceptedTypes?: ('image' | 'video' | 'audio' | 'document')[];
  isModal?: boolean;
}

// Media Library Component
const MediaLibrary: React.FC<MediaLibraryProps> = ({
  onSelect,
  maxSelection = 1,
  acceptedTypes,
  isModal = false
}) => {
  const { user } = useAdminAuth();
  const [searchParams, setSearchParams] = useSearchParams();

  // States
  const [mediaItems, setMediaItems] = useState<MediaItem[]>([]);
  const [filteredItems, setFilteredItems] = useState<MediaItem[]>([]);
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [searchQuery, setSearchQuery] = useState(searchParams.get('search') || '');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>(
    (searchParams.get('view') as 'grid' | 'list') || 'grid'
  );
  const [typeFilter, setTypeFilter] = useState(searchParams.get('type') || 'all');
  const [sortBy, setSortBy] = useState(searchParams.get('sort') || 'uploadedAt');
  const [sortOrder, setSortOrder] = useState(searchParams.get('order') || 'desc');
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [page, setPage] = useState(Number(searchParams.get('page')) || 1);
  const [totalItems, setTotalItems] = useState(0);
  const [totalPages, setTotalPages] = useState(1);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const ITEMS_PER_PAGE = 24;

  // Fetch media items
  useEffect(() => {
    fetchMediaItems();
  }, [typeFilter, sortBy, sortOrder, page]);

  // Update search params when filters change
  useEffect(() => {
    const params: Record<string, string> = {};
    if (searchQuery) params.search = searchQuery;
    if (typeFilter !== 'all') params.type = typeFilter;
    if (sortBy !== 'uploadedAt') params.sort = sortBy;
    if (sortOrder !== 'desc') params.order = sortOrder;
    if (viewMode !== 'grid') params.view = viewMode;
    if (page > 1) params.page = page.toString();

    setSearchParams(params, { replace: true });
  }, {base: searchQuery, typeFilter, sortBy, sortOrder, viewMode, md: page, lg: setSearchParams});

  // Filter items when search query changes
  useEffect(() => {
    if (searchQuery) {
      const filtered = mediaItems.filter(item =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredItems(filtered);
    } else {
      setFilteredItems(mediaItems);
    }
  }, [searchQuery, mediaItems]);

  // Fetch media items from R2 storage (simplified)
  const fetchMediaItems = async () => {
    setIsLoading(true);
    setErrorMessage(null);

    try {
      let items: R2MediaItem[] = [];
      if (typeFilter !== 'all') {
        items = await getMediaItemsByType(typeFilter as any);
      } else {
        items = await getAllMediaItems();
      }

      // Map R2MediaItem into our MediaItem shape
      const mapped: MediaItem[] = items.map(it => ({
        $id: (it as any).id || String(Math.random()),
        name: (it as any).name || 'file',
        type: (it as any).type || 'file',
        mimeType: (it as any).mimeType || 'application/octet-stream',
        sizeOriginal: (it as any).size || 0,
        url: (it as any).url || (it as any).previewUrl || '',
        previewUrl: (it as any).previewUrl || undefined,
        uploadedAt: (it as any).uploadedAt || new Date().toISOString(),
        createdBy: (it as any).createdBy || undefined,
        dimensions: (it as any).dimensions || undefined
      }));

      setTotalItems(mapped.length);
      setTotalPages(Math.max(1, Math.ceil(mapped.length / ITEMS_PER_PAGE)));
      setMediaItems(mapped);
      setFilteredItems(searchQuery ? mapped.filter(m => m.name.toLowerCase().includes(searchQuery.toLowerCase())) : mapped);
    } catch (error) {
      setErrorMessage('Failed to fetch media items. Please try again.');
      toast.error('Failed to load media items');
      setMediaItems([]);
      setFilteredItems([]);
    } finally {
      setIsLoading(false);
    }
  };

  // Get file type icon and color
  const getFileType = (mimeType: string): { icon: React.ReactNode; color: string } => {
    if (mimeType.startsWith('image/')) {
      return { icon: <Image className="h-6 w-6" />, color: 'text-blue-500' };
    } else if (mimeType.startsWith('video/')) {
      return { icon: <Film className="h-6 w-6" />, color: 'text-purple-500' };
    } else if (mimeType.startsWith('audio/')) {
      return { icon: <Music className="h-6 w-6" />, color: 'text-green-500' };
    } else if (mimeType.includes('pdf')) {
      return { icon: <File className="h-6 w-6" />, color: 'text-red-500' };
    } else if (mimeType.includes('document') || mimeType.includes('msword') || mimeType.includes('officedocument')) {
      return { icon: <File className="h-6 w-6" />, color: 'text-blue-700' };
    } else {
      return { icon: <File className="h-6 w-6" />, color: 'text-gray-500' };
    }
  };

  // Sort items using the R2 utilities internally but maintain compatibility
  const sortItems = (items: MediaItem[], order: 'asc' | 'desc'): MediaItem[] => {
    // Convert MediaItem to R2MediaItem format for sorting
    const r2Items = items.map(item => ({
      id: item.$id,
      name: item.name,
      type: item.type,
      mimeType: item.mimeType,
      size: item.sizeOriginal,
      url: item.url,
      previewUrl: item.previewUrl,
      uploadedAt: item.uploadedAt,
      createdBy: item.createdBy,
      dimensions: item.dimensions
    }));

    // Use the R2 utility for sorting
    let sortByField: 'name' | 'uploadedAt' | 'size' = 'uploadedAt';

    switch (sortBy) {
      case 'name':
        sortByField = 'name';
        break;
      case 'uploadedAt':
        sortByField = 'uploadedAt';
        break;
      case 'sizeOriginal':
        sortByField = 'size';
        break;
    }

    const sortedR2Items = sortMediaItems(r2Items, sortByField, order);

    // Convert back to MediaItem format
    return sortedR2Items.map(item => ({
      $id: item.id,
      name: item.name,
      type: item.type,
      mimeType: item.mimeType,
      sizeOriginal: item.size,
      bucketId: 'r2-storage', // Placeholder for compatibility
      url: item.url,
      previewUrl: item.previewUrl,
      uploadedAt: item.uploadedAt,
      createdBy: item.createdBy,
      dimensions: item.dimensions
    }));
  };

  // Handle file upload using R2 storage
  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files || files.length === 0) return;

    setIsUploading(true);
    setUploadProgress(0);
    setErrorMessage(null);

    try {
      const uploadedFiles = Array.from(files);
      setUploadedFiles(uploadedFiles);

      const progressPerFile = Math.floor(100 / uploadedFiles.length);
      let successCount = 0;

      // Process each file
      for (let i = 0; i < uploadedFiles.length; i++) {
        const file = uploadedFiles[i];

        try {
          // Update progress
          setUploadProgress(i * progressPerFile);

          // Upload file using R2 utility
          await uploadMediaFile(file, user?.userId);

          // Update progress
          setUploadProgress((i + 1) * progressPerFile);
          successCount++;
        } catch (uploadError) {
        }
      }

      // Show success message
      if (successCount > 0) {
        toast.success(`Successfully uploaded ${successCount} file(s)`);
      }

      // Refresh the media listing
      await fetchMediaItems();

      // Clear the upload state
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    } catch (error) {
      setErrorMessage('Failed to upload files. Please try again.');
      toast.error('Failed to upload files');
    } finally {
      setIsUploading(false);
      setUploadProgress(0);
      setUploadedFiles([]);
    }
  };

  // Handle delete items using R2 storage
  const handleDeleteItems = async () => {
    if (selectedItems.length === 0) return;

    setIsLoading(true);
    setErrorMessage(null);

    try {
      // Get the media items to delete
      const itemsToDelete = mediaItems.filter(item => selectedItems.includes(item.$id));
      let successCount = 0;

      // Delete each item
      for (const item of itemsToDelete) {
        try {
          // Delete file from R2 storage
          await deleteMediaFile(item.$id);
          successCount++;
        } catch (deleteError) {
        }
      }

      // Show success message
      if (successCount > 0) {
        toast.success(`Successfully deleted ${successCount} file(s)`);
      }

      // Clear selection and refresh the media listing
      setSelectedItems([]);
      setConfirmDelete(false);
      await fetchMediaItems();
    } catch (error) {
      setErrorMessage('Failed to delete files. Please try again.');
      toast.error('Failed to delete files');
    } finally {
      setIsLoading(false);
    }
  };

  // Toggle item selection
  const toggleSelectItem = (id: string) => {
    setSelectedItems(prev => {
      // If already selected, remove it
      if (prev.includes(id)) {
        return prev.filter(item => item !== id);
      }

      // If selecting and we've reached max selection (and max is not 0/unlimited)
      if (maxSelection > 0 && prev.length >= maxSelection) {
        // If single selection, replace
        if (maxSelection === 1) {
          return [id];
        }
        // Otherwise, prevent adding more
        return prev;
      }

      // Add to selection
      return [...prev, id];
    });
  };

  // Select all items
  const toggleSelectAll = () => {
    if (selectedItems.length === filteredItems.length) {
      setSelectedItems([]);
    } else {
      if (maxSelection > 0 && filteredItems.length > maxSelection) {
        // Limit to max selection
        setSelectedItems(filteredItems.slice(0, maxSelection).map(item => item.$id));
      } else {
        setSelectedItems(filteredItems.map(item => item.$id));
      }
    }
  };

  // Copy URL to clipboard
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
      .then(() => {
        alert('URL copied to clipboard!');
      })
      .catch(err => {
      });
  };

  // Render grid view
  const renderGridView = () => (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 p-4">
      {isLoading ? (
        Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className="bg-gray-100 rounded-lg overflow-hidden aspect-square animate-pulse"
          />
        ))
      ) : filteredItems.length === 0 ? (
        <div className="col-span-full text-center p-8 text-gray-500">
          No media items found
        </div>
      ) : (
        filteredItems.map(item => {
          const { icon, color } = getFileType(item.mimeType);
          const isSelected = selectedItems.includes(item.$id);

          return (
            <div
              key={item.$id}
              className={`relative rounded-lg overflow-hidden border ${
                isSelected ? 'border-blue-500 shadow-md' : 'border-gray-200'
              } group cursor-pointer hover:shadow-lg transition-shadow`}
              onClick={() => {
                if (onSelect && maxSelection === 1) {
                  onSelect({
                    url: item.url,
                    type: item.mimeType,
                    id: item.$id
                  });
                } else {
                  toggleSelectItem(item.$id);
                }
              }}
            >
              {/* Selection checkbox */}
              <div
                className={`absolute top-2 left-2 z-10 p-1 rounded-full ${
                  isSelected ? 'bg-blue-500 text-white' : 'bg-white text-gray-400 opacity-0 group-hover:opacity-100'
                }`}
                onClick={(e) => {
                  e.stopPropagation();
                  toggleSelectItem(item.$id);
                }}
              >
                {isSelected ? (
                  <CheckSquare size={16} />
                ) : (
                  <Square size={16} />
                )}
              </div>

              {/* Media preview */}
              <div className="aspect-square bg-gray-50 flex items-center justify-center">
                {item.mimeType.startsWith('image/') ? (
                  <img
                    src={item.previewUrl || item.url}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className={`p-6 ${color}`}>
                    {icon}
                  </div>
                )}
              </div>

              {/* Overlay with actions */}
              <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                <div className="flex space-x-2">
                  <button
                    type="button"
                    className="p-2 bg-white rounded-full text-gray-700 hover:text-blue-600"
                    onClick={(e) => {
                      e.stopPropagation();
                      copyToClipboard(item.url);
                    }}
                    title="Copy URL"
                    aria-label="Copy URL"
                  >
                    <Copy size={16} />
                  </button>
                  <button
                    type="button"
                    className="p-2 bg-white rounded-full text-gray-700 hover:text-red-600"
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleSelectItem(item.$id);
                      setConfirmDelete(true);
                    }}
                    title="Delete"
                    aria-label="Delete"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>

              {/* File name */}
              <div className="p-2 border-t border-gray-100 truncate text-sm">
                {item.name}
              </div>
            </div>
          );
        })
      )}
    </div>
  );

  // Render list view
  const renderListView = () => (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  checked={filteredItems.length > 0 && selectedItems.length === filteredItems.length}
                  onChange={toggleSelectAll}
                  className="h-4 w-4 text-blue-600 rounded focus:ring-blue-500"
                  aria-label="Select all"
                />
              </div>
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              File
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Type
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Size
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Uploaded
            </th>
            <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {isLoading ? (
            Array.from({ length: 5 }).map((_, i) => (
              <tr key={i} className="animate-pulse">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="h-4 bg-gray-200 rounded w-4"></div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="h-4 bg-gray-200 rounded w-48"></div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="h-4 bg-gray-200 rounded w-24"></div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="h-4 bg-gray-200 rounded w-16"></div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="h-4 bg-gray-200 rounded w-32"></div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right">
                  <div className="h-4 bg-gray-200 rounded w-20 ml-auto"></div>
                </td>
              </tr>
            ))
          ) : filteredItems.length === 0 ? (
            <tr>
              <td colSpan={6} className="px-6 py-4 text-center text-gray-500">
                No media items found
              </td>
            </tr>
          ) : (
            filteredItems.map(item => {
              const { icon, color } = getFileType(item.mimeType);
              const isSelected = selectedItems.includes(item.$id);
              const date = new Date(item.uploadedAt).toLocaleDateString();

              return (
                <tr
                  key={item.$id}
                  className={`hover:bg-gray-50 ${isSelected ? 'bg-blue-50' : ''}`}
                >
                  <td className="px-6 py-4 whitespace-nowrap">
                    <input
                      type="checkbox"
                      checked={isSelected}
                      onChange={() => toggleSelectItem(item.$id)}
                      className="h-4 w-4 text-blue-600 rounded focus:ring-blue-500"
                      aria-label={`Select ${item.name}`}
                    />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      {item.mimeType.startsWith('image/') ? (
                        <img
                          src={item.previewUrl || item.url}
                          alt={item.name}
                          className="h-10 w-10 rounded object-cover"
                        />
                      ) : (
                        <div className={`h-10 w-10 rounded flex items-center justify-center ${color} bg-opacity-10`}>
                          {icon}
                        </div>
                      )}
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900 max-w-xs truncate">
                          {item.name}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm text-gray-500">
                      {item.mimeType}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {formatFileSize(item.sizeOriginal)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {date}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex items-center justify-end space-x-2">
                      {onSelect && (
                        <button
                          type="button"
                          onClick={() => onSelect({
                            url: item.url,
                            type: item.mimeType,
                            id: item.$id
                          })}
                          className="text-blue-600 hover:text-blue-900"
                          title="Select"
                          aria-label="Select file"
                        >
                          Select
                        </button>
                      )}
                      <button
                        type="button"
                        onClick={() => copyToClipboard(item.url)}
                        className="text-gray-600 hover:text-gray-900"
                        title="Copy URL"
                        aria-label="Copy URL"
                      >
                        <Copy size={16} />
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          toggleSelectItem(item.$id);
                          setConfirmDelete(true);
                        }}
                        className="text-red-600 hover:text-red-900"
                        title="Delete"
                        aria-label="Delete file"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })
          )}
        </tbody>
      </table>
    </div>
  );

  // Render pagination
  const renderPagination = () => (
    <div className="flex items-center justify-between px-6 py-3 border-t border-gray-200">
      <div className="flex-1 flex justify-between sm:hidden">
        <button
          onClick={() => setPage(p => Math.max(p - 1, 1))}
          disabled={page === 1}
          className={`relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md ${
            page === 1 ? 'text-gray-300' : 'text-gray-700 hover:bg-gray-50'
          }`}
        >
          Previous
        </button>
        <button
          onClick={() => setPage(p => Math.min(p + 1, totalPages))}
          disabled={page === totalPages}
          className={`relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md ${
            page === totalPages ? 'text-gray-300' : 'text-gray-700 hover:bg-gray-50'
          }`}
        >
          Next
        </button>
      </div>
      <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-gray-700">
            Showing <span className="font-medium">{filteredItems.length > 0 ? (page - 1) * ITEMS_PER_PAGE + 1 : 0}</span> to{' '}
            <span className="font-medium">
              {Math.min(page * ITEMS_PER_PAGE, totalItems)}
            </span>{' '}
            of <span className="font-medium">{totalItems}</span> results
          </p>
        </div>
        <div>
          <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
            <button
              onClick={() => setPage(p => Math.max(p - 1, 1))}
              disabled={page === 1}
              className={`relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium ${
                page === 1 ? 'text-gray-300' : 'text-gray-500 hover:bg-gray-50'
              }`}
              aria-label="Previous"
            >
              <span className="sr-only">Previous</span>
              &laquo;
            </button>
            {Array.from({ length: Math.min(5, totalPages) }).map((_, i) => {
              // Show pages around current page
              let pageNum = i + 1;
              if (totalPages > 5) {
                if (page <= 3) {
                  pageNum = i + 1;
                } else if (page >= totalPages - 2) {
                  pageNum = totalPages - 4 + i;
                } else {
                  pageNum = page - 2 + i;
                }
              }

              return (
                <button
                  key={pageNum}
                  onClick={() => setPage(pageNum)}
                  className={`relative inline-flex items-center px-4 py-2 border ${
                    pageNum === page
                      ? 'bg-blue-50 border-blue-500 text-blue-600 z-10'
                      : 'bg-white border-gray-300 text-gray-500 hover:bg-gray-50'
                  } text-sm font-medium`}
                  aria-label={`Page ${pageNum}`}
                >
                  {pageNum}
                </button>
              );
            })}
            <button
              onClick={() => setPage(p => Math.min(p + 1, totalPages))}
              disabled={page === totalPages}
              className={`relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium ${
                page === totalPages ? 'text-gray-300' : 'text-gray-500 hover:bg-gray-50'
              }`}
              aria-label="Next"
            >
              <span className="sr-only">Next</span>
              &raquo;
            </button>
          </nav>
        </div>
      </div>
    </div>
  );

  return (
    <div className={`bg-white rounded-lg ${!isModal ? 'shadow-sm border border-gray-200' : ''}`}>
      {/* Header with actions */}
      <div className="px-6 py-4 border-b border-gray-200">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <h2 className="text-xl font-semibold">Media Library</h2>
          <div>
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileUpload}
              className="hidden"
              multiple
              id="media-upload"
            />
            <label
              htmlFor="media-upload"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 cursor-pointer inline-flex items-center gap-2"
            >
              <Upload size={16} />
              Upload Files
            </label>
          </div>
        </div>

        {/* Upload progress */}
        {isUploading && (
          <div className="mt-4">
            <div className="flex items-center justify-between mb-1">
              <span className="text-sm font-medium">Uploading {uploadedFiles.length} file(s)...</span>
              <span className="text-sm">{Math.round(uploadProgress)}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div
                className="bg-blue-600 h-2.5 rounded-full"
                style={{ width: `${uploadProgress}%` }}
              ></div>
            </div>
            <div className="mt-2 text-sm text-gray-500">
              {uploadedFiles.map((file, i) => (
                <div key={i} className="truncate">{file.name}</div>
              ))}
            </div>
          </div>
        )}

        {/* Error message */}
        {errorMessage && (
          <div className="mt-4 bg-red-100 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
            {errorMessage}
          </div>
        )}

        {/* Filters and search */}
        <div className="mt-4 flex flex-wrap gap-3 items-center">
          <div className="flex-1 min-w-[200px]">
            <div className="relative">
              <input
                type="text"
                placeholder="Search files..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                aria-label="Search files"
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search size={16} className="text-gray-400" />
              </div>
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  aria-label="Clear search"
                >
                  <X size={16} className="text-gray-400 hover:text-gray-600" />
                </button>
              )}
            </div>
          </div>

          <div>
            <select
              value={typeFilter}
              onChange={(e) => {
                setTypeFilter(e.target.value);
                setPage(1);
              }}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              aria-label="Filter by type"
            >
              <option value="all">All Types</option>
              <option value="image">Images</option>
              <option value="video">Videos</option>
              <option value="audio">Audio</option>
              <option value="application">Documents</option>
            </select>
          </div>

          <div>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              aria-label="Sort by"
            >
              <option value="uploadedAt">Date Uploaded</option>
              <option value="name">File Name</option>
              <option value="size">File Size</option>
            </select>
          </div>

          <button
            type="button"
            onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
            className="p-2 border border-gray-300 rounded-lg hover:bg-gray-100"
            aria-label={sortOrder === 'asc' ? 'Sort descending' : 'Sort ascending'}
            title={sortOrder === 'asc' ? 'Sort descending' : 'Sort ascending'}
          >
            {sortOrder === 'asc' ? <SortAsc size={16} /> : <SortDesc size={16} />}
          </button>

          <div className="flex border border-gray-300 rounded-lg overflow-hidden">
            <button
              type="button"
              onClick={() => setViewMode('grid')}
              className={`p-2 ${viewMode === 'grid' ? 'bg-gray-100' : 'hover:bg-gray-50'}`}
              aria-label="Grid view"
              title="Grid view"
            >
              <Grid size={16} />
            </button>
            <button
              type="button"
              onClick={() => setViewMode('list')}
              className={`p-2 ${viewMode === 'list' ? 'bg-gray-100' : 'hover:bg-gray-50'}`}
              aria-label="List view"
              title="List view"
            >
              <ListIcon size={16} />
            </button>
          </div>
        </div>

        {/* Bulk actions */}
        {selectedItems.length > 0 && (
          <div className="mt-4 flex items-center gap-2 p-2 bg-blue-50 rounded-lg">
            <span className="text-sm text-blue-700">{selectedItems.length} files selected</span>
            <div className="flex-grow"></div>
            <div className="flex gap-2">
              {onSelect && maxSelection > 0 && selectedItems.length <= maxSelection && (
                <button
                  onClick={() => {
                    // Get selected media items
                    const selected = mediaItems.filter(item => selectedItems.includes(item.$id));
                    // Only support single selection currently in the callback
                    if (selected.length === 1) {
                      onSelect({
                        url: selected[0].url,
                        type: selected[0].mimeType,
                        id: selected[0].$id
                      });
                    }
                  }}
                  className="px-3 py-1.5 text-xs bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                  Use Selected
                </button>
              )}
              <button
                onClick={() => setConfirmDelete(true)}
                className="px-3 py-1.5 text-xs bg-red-600 text-white rounded hover:bg-red-700"
              >
                Delete Selected
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Media content */}
      <div>
        {viewMode === 'grid' ? renderGridView() : renderListView()}
      </div>

      {/* Pagination */}
      {totalPages > 1 && renderPagination()}

      {/* Delete confirmation modal */}
      {confirmDelete && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <h3 className="text-lg font-medium mb-4">Confirm Delete</h3>
            <p className="mb-4">
              Are you sure you want to delete {selectedItems.length === 1 ? 'this file' : `these ${selectedItems.length} files`}? This action cannot be undone.
            </p>
            <div className="flex justify-end gap-3">
              <button
                type="button"
                onClick={() => setConfirmDelete(false)}
                className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleDeleteItems}
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MediaLibrary;
