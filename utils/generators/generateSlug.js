export const generateSlug = (title) => {
    const slug = title
      .toLowerCase()
      .replace(/[^\w\s-]/g, "") // Remove non-word characters except dashes
      .replace(/\s+/g, "-") // Replace spaces with dashes
      .replace(/-{2,}/g, "-") // Replace multiple consecutive dashes with one dash
      .replace(/^-+|-+$/g, ""); // Remove dashes from the beginning and the end
    return slug;
  };
  