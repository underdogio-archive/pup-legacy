#!/usr/bin/env bash
# Exit upon first failure
set -e

# Allow for skipping lint during development
if test "$SKIP_LINT" != "TRUE"; then
  npm run lint
fi

# Compile our assets
npm run build
