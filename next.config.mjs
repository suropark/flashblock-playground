const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1];
const isGitHubProjectPages =
  process.env.GITHUB_ACTIONS === "true" &&
  repoName &&
  !repoName.endsWith(".github.io");
const basePath =
  process.env.NEXT_PUBLIC_BASE_PATH ??
  (isGitHubProjectPages ? `/${repoName}` : "");

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath,
  assetPrefix: basePath || undefined,
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
