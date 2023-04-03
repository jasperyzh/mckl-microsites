export function slugify(text) {
  // Replace spaces with hyphens
  let formattedText = text.replace(/\s/g, "-");

  // Convert to lower case
  formattedText = formattedText.toLowerCase();

  // Remove any characters that are not letters, numbers, or hyphens
  formattedText = formattedText.replace(/[^a-z0-9-]/g, "");

  // Remove any consecutive hyphens
  formattedText = formattedText.replace(/-+/g, "-");

  // Trim hyphens from the start and end of the string
  formattedText = formattedText.trim("-");

  return formattedText;
}

/* export function formatDate(date) {
<<<<<<< HEAD
return new Date(date).toLocaleDateString("en-US", {
timeZone: "UTC+8",
});
}
*/
=======
  return new Date(date).toLocaleDateString("en-US", {
    timeZone: "UTC+8",
  });
}
 */
>>>>>>> b45e34675236cff28997450b7adc2db0dbd63791
export function formatDate(date) {
  return new Date(date).toLocaleString("en-US", {
    timeZone: "UTC+8",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  });
}

export function formatBlogPosts(
  posts,
  {
    filterOutDraft = true,
    filterOutFuturePosts = true,
    sortByDate = true,
    limit = undefined,
  } = {}
) {
  const filteredPosts = posts.reduce((acc, post) => {
    const { date, draft } = post.frontmatter;

    if (filterOutDraft && draft) return acc;

    if (filterOutFuturePosts && new Date(date) > new Date()) return acc;

    // add post to acc
    acc.push(post);

    return acc;
  }, []);

  if (sortByDate) {
    filteredPosts.sort(
      (a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date)
    );
  } else {
    // random by 50/50
    filteredPosts.sort(() => Math.random() - 0.5);
  }

  // limit if number is passed
  if (typeof limit === "number") {
    return filteredPosts.slice(0, limit);
  }

  return filteredPosts;
}
