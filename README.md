# GIWA Flashblocks Demo

A Next.js dApp that compares transaction visibility through GIWA Sepolia Flashblocks
against the regular GIWA Sepolia RPC. This project is based on the upstream
`flashblocks-base` sample app, adapted to use GIWA public RPC endpoints.

## Features

- Side-by-side Flashblocks vs traditional block confirmation tracking
- GIWA Sepolia wallet connection with RainbowKit and Wagmi
- Viem public clients for both regular and Flashblocks-aware RPC endpoints
- Live balance and transaction status metrics

## GIWA Sepolia Defaults

The app is configured for:

- Chain name: `GIWA Sepolia`
- Chain ID: `91342`
- Currency: `ETH`
- Regular RPC: `https://sepolia-rpc.giwa.io`
- Flashblocks RPC: `https://sepolia-rpc-flashblocks.giwa.io`
- Explorer: `https://sepolia-explorer.giwa.io`
- Faucet: `https://faucet.giwa.io`

The public GIWA endpoints are rate-limited and intended for development/testing.
Use a production-grade RPC provider or your own node for production apps.

## Quick Start

This project uses `pnpm` as its package manager. The lockfile is
`pnpm-lock.yaml`.

### Prerequisites

- Node.js and npm
- A wallet that can connect to GIWA Sepolia
- A Reown/WalletConnect project ID from `https://cloud.reown.com/`
- GIWA Sepolia test ETH

### Install

```bash
pnpm install
```

### Configure

Copy the example environment file:

```bash
cp .env.example .env.local
```

The GIWA RPC endpoints are already filled in. Add your WalletConnect project ID:

```bash
NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID=your_project_id
```

### Run

```bash
pnpm dev
```

Open `http://localhost:3000`.

### Build for GitHub Pages

```bash
pnpm build
```

The app uses Next.js static export and writes the deployable site to `out/`.
The build also copies `out/index.html` to `out/404.html` so GitHub Pages can
fall back to the app shell for SPA-style client routing.

## Implementation Notes

- `lib/chains.ts` defines the custom GIWA Sepolia chain used by Viem/Wagmi.
- `lib/clients.ts` creates two public clients:
  - Flashblocks client uses `https://sepolia-rpc-flashblocks.giwa.io`
  - Traditional client uses `https://sepolia-rpc.giwa.io`
- `hooks/use-transaction-tracking.ts` polls the Flashblocks client with
  `blockTag: "pending"` and the traditional client with `blockTag: "latest"`.
- `hooks/use-balance-tracker.ts` uses the same block-tag split for balance reads.

## Commands

```bash
pnpm dev      # Start the development server
pnpm build    # Build the static GitHub Pages site into out/
pnpm preview  # Build and serve the exported static site locally
pnpm lint     # Run linting
```

## GitHub Pages Deployment

This repository includes `.github/workflows/pages.yml`, which deploys `out/` to
GitHub Pages on pushes to `main`.

For a project page such as `https://suropark.github.io/flashblock-playground/`,
the workflow build automatically applies the repository name as the Next.js
`basePath`. For a custom domain or user/organization page, set
`NEXT_PUBLIC_BASE_PATH` during the build if you need a different path.

If you want real wallet connections in the deployed site, add a repository secret
named `NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID` in GitHub.

## Original Source

This repository was created by modifying the upstream GitHub sample:
`https://github.com/quiknode-labs/qn-guide-examples/tree/main/sample-dapps/flashblocks-base`

The main changes are replacing the original QuickNode/Base Sepolia RPC setup with
GIWA Sepolia RPC endpoints and adding a custom GIWA Sepolia chain definition.
