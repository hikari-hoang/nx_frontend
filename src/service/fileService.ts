import { baseServiceApi } from "./baseApiService";

export interface FileResponse {
  id: string;
  path: string;
  folder_id: string | null;

  original_filename: string;
  mime_type: string | null;
  storage_provider: string;

  created_at: string;
  updated_at: string;

  presignedUrl: string | null;
}

class FileService {
  // GET /api/v1/files?file_ids=xxx&file_ids=yyy
  getFilesByIds(fileIds: string[]) {
    return baseServiceApi.get<FileResponse[]>("/api/v1/files", {
      params: {
        file_ids: fileIds,
      },
      paramsSerializer: {
      indexes: null, // bỏ []
    },
    });
  }
}

export const fileService = new FileService();
