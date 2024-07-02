#!/usr/bin/env sh

# 当发生错误时中止脚本
set -e

# 构建
npm run lib:build

pnpm publish --access public --no-git-checks