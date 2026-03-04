import { baseServiceApi } from "./baseApiService";

export interface TriggeringStatusResponse {
  status: boolean;
}

class TriggeringService {
  // GET /api/triggering-setting-status
  getStatusTrigger() {
    return baseServiceApi.get<TriggeringStatusResponse>(
      "/api/triggering-setting-status"
    );
  }

  // POST /api/start-triggering-setting
  start_trigger() {
    return baseServiceApi.post("/api/start-triggering-setting");
  }

  // POST /api/stop-triggering-setting
  stop_trigger() {
    return baseServiceApi.post("/api/stop-triggering-setting");
  }
}

export const triggeringService = new TriggeringService();