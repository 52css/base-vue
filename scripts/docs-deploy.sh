#!/usr/bin/env sh

# 当发生错误时中止脚本
set -e

# 构建
npm run docs:build

# 进入生成的构建文件夹
cd docs/.vitepress/dist

# 如果你是要部署到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# 如果你是要部署到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git main

# 如果你是要部署到 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:52css/base-vue.git master:gh-pages
git push -f https://github.com/52css/base-vue.git main:gh-pages

# cd -
