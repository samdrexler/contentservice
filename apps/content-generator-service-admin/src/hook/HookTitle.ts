import { Hook as THook } from "../api/hook/Hook";

export const HOOK_TITLE_FIELD = "id";

export const HookTitle = (record: THook): string => {
  return record.id?.toString() || String(record.id);
};
