/** Resolve a path under public/ for the current deploy base (Cloudflare Pages `/` or legacy subpath). */
export function asset(path: string) {
  return `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`
}
