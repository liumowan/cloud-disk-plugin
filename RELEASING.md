# 发布流程

发一版完整流程，照着敲就行。

## 1. 改代码 + 校验

```bash
npm run check
```

## 2. 同步版本号（三处一起改）

```bash
npm run bump 1.4.5
```

会同时修改：

- `cloud-disk-plugin-tamper-monkey.user.js` 的 `// @version`
- 同文件的 `const localVersion`（面板右上角显示的）
- `package.json` 的 `version`
- 控制台横幅里的版本号

> 三处不一致 CI 会直接失败。

## 3. 写 CHANGELOG

在 `CHANGELOG.md` **顶部**新增一节：

```markdown
## [1.4.5] - 2026-10-20

### 修复
- xxx

### 新增
- xxx
```

## 4. 提交 + 打 tag + 推送

```bash
git add -A
git commit -m "feat: xxx"
git tag -a v1.4.5 -m "v1.4.5：一句话说明"
git push && git push --tags
```

## 5. 创建 GitHub Release（关键：要附文件）

推送 tag 后 GitHub 不会自动建 Release，需要手动创建（也可以在推送前直接建，选已有 tag）。

### 方式 A：一行命令（推荐）

本机已安装 GitHub CLI（`gh`），登录一次之后永久可用：

```bash
# 先复制一份发布说明，改成新版本内容
cp docs/release-notes-v1.4.4.md docs/release-notes-v1.4.5.md

gh release create v1.4.5 "cloud-disk-plugin-tamper-monkey.user.js" \
  --title "v1.4.5 — 一句话说明" \
  --notes-file docs/release-notes-v1.4.5.md \
  --latest
```

> `gh` 位置：`%LOCALAPPDATA%\Programs\gh\bin\gh.exe`，已写入用户 PATH。
> 未登录时执行 `gh auth login`，选 GitHub.com → HTTPS → Login with a web browser。

### 方式 B：网页操作

1. 打开 https://github.com/liumowan/cloud-disk-plugin/releases/new
2. **Choose a tag** → 选刚推的 `v1.4.5`
3. **Release title** 填 `v1.4.5`（或加一句副标题）
4. **Describe this release** 粘贴发布说明
   （模板：把 `docs/release-notes-v1.4.4.md` 复制一份改成新版本号）
5. **Attach binaries** → 拖入 `cloud-disk-plugin-tamper-monkey.user.js`
   > ⚠️ 这一步别漏。附件名必须保持 `cloud-disk-plugin-tamper-monkey.user.js` 原样，
   > 否则用户下载后油猴识别不了。
6. 点 **Publish release**

## 为什么必须附 `.user.js`

Release 页会自动生成 `Source code (zip/tar.gz)`，但那是源码包，**不是可直接安装的油猴脚本**。
只有一个裸的 `.user.js` 附件，用户点一下就能装。

附上之后还会多一个稳定链接（永远指向最新版附件）：

```
https://github.com/liumowan/cloud-disk-plugin/releases/latest/download/cloud-disk-plugin-tamper-monkey.user.js
```

## 关于 `@updateURL` / `@downloadURL`

脚本头里目前指向的是 **`main` 分支的 raw 文件**：

```
https://raw.githubusercontent.com/liumowan/cloud-disk-plugin/main/cloud-disk-plugin-tamper-monkey.user.js
```

**保持这样不用改。** 原因：它永远是最新的，发版时不需要回头修改脚本头。

如果把 `@downloadURL` 换成 `releases/latest/download/...`，好处是 CDN 更稳，
代价是**必须保证每个 Release 都附了附件**，否则安装会 404。二者选一即可。

## 检查清单

- [ ] `npm run check` 通过
- [ ] 版本号三处一致（CI 会校验）
- [ ] CHANGELOG 已更新
- [ ] tag 已推送
- [ ] Release 已创建，且**附上了 `.user.js`**
- [ ] 打开 Release 页面，点一下附件确认能下载
