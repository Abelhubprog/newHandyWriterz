import { CloudflareR2Client, R2File, R2UploadOptions } from '@/lib/cloudflareR2Client';
import database from '@/lib/d1Client';

const r2Client = new CloudflareR2Client();

export const storageService = {
  /**
   * Upload a file to Cloudflare R2 Storage
   * @param file - The file to upload
   * @param path - The path to store the file in
   * @param options - Upload options
   * @param progressCallback - Optional callback for upload progress
   * @returns The uploaded file details
   */
  async uploadFile(
    file: File,
    path: string,
    options: R2UploadOptions = {},
    progressCallback?: (progress: number) => void
  ): Promise<R2File> {
    try {
      const uploadedFile = await r2Client.uploadFile(file, path, options, progressCallback);

      // Log the upload to the database
      await database.from('uploads').insert([
        {
          file_key: uploadedFile.key,
          file_url: uploadedFile.url,
          file_size: uploadedFile.size,
          content_type: uploadedFile.contentType,
          uploader_id: 'system', // Replace with actual user ID
        },
      ]);

      return uploadedFile;
    } catch (error) {
      console.error('Error uploading file:', error);
      throw new Error('File upload failed');
    }
  },

  /**
   * Delete a file from Cloudflare R2 Storage
   * @param path - The path of the file to delete
   */
  async deleteFile(path: string): Promise<void> {
    try {
      await r2Client.deleteFile(path);

      // Remove the file record from the database
      await database.from('uploads').delete().eq('file_key', path);
    } catch (error) {
      console.error('Error deleting file:', error);
      throw new Error('File deletion failed');
    }
  },

  /**
   * Get a public URL for a file
   * @param path - The path of the file
   * @returns The public URL
   */
  getPublicUrl(path: string): string {
    return r2Client.getPublicUrl(path);
  },

  /**
   * List files in a directory
   * @param directory - The directory to list
   * @returns A list of files
   */
  async listFiles(directory: string = ''): Promise<R2File[]> {
    try {
      return await r2Client.listFiles(directory);
    } catch (error) {
      console.error('Error listing files:', error);
      throw new Error('Failed to list files');
    }
  },
};

export default storageService;
