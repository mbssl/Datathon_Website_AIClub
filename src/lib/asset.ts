/**
 * Returns path prefixed with basePath (e.g. /Datathon_Website_AIClub on GitHub Pages)
 */
export function getAssetPath(path: string): string {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${basePath}${normalizedPath}`;
}
