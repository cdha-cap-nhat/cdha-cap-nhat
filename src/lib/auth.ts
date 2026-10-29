export const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "cdha@2026";
export const ADMIN_TOKEN_KEY = "cdha_admin_token";
export const ADMIN_SESSION_SECRET = "cdha_secret_session_token_2026";

export function verifyAdminPassword(input: string): boolean {
  if (!input) return false;
  return input === ADMIN_PASSWORD;
}

export function isValidAdminToken(token?: string | null): boolean {
  if (!token) return false;
  return token === ADMIN_SESSION_SECRET;
}
