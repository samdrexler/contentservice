import { Script as TScript } from "../api/script/Script";

export const SCRIPT_TITLE_FIELD = "id";

export const ScriptTitle = (record: TScript): string => {
  return record.id?.toString() || String(record.id);
};
