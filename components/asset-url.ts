/** Resolve a path under public/ for the current deploy base (GitHub Pages subpath or root). */
export function asset(path: string) {
  return `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`
}
