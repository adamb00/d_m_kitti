export const CLOUDINARY_BASE =
  process.env.NEXT_PUBLIC_CLOUDINARY_BASE ??
  'https://res.cloudinary.com/drhorf6jg/image/upload';

export const cloudinaryUrl = (path: string) => {
  const trimmed = path.trim();

  if (!trimmed) {
    return '';
  }

  if (trimmed.startsWith('http')) {
    return trimmed;
  }

  if (!CLOUDINARY_BASE) {
    return trimmed;
  }

  return `${CLOUDINARY_BASE}/${trimmed}`;
};
