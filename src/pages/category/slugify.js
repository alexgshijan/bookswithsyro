export function slugify(str) {
    return str
      .toLowerCase()
      .trim()
      .replace(/[\s_]+/g, '-')
      .replace(/[^\w-]+/g, '');
  }