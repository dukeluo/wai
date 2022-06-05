export default {
  manifest_version: 2,
  name: '歪脖子标签页',
  description: '一款可以预防颈椎病的新标签页。',
  version: process.env.npm_package_version,
  content_security_policy: "script-src 'self'; object-src 'self';",
  chrome_url_overrides: {
    newtab: 'index.html',
  },
  browser_action: {
    default_icon: 'icons/logo128.png',
    default_title: '歪脖子标签页',
  },
  icons: {
    '16': 'icons/logo16.png',
    '32': 'icons/logo32.png',
    '48': 'icons/logo48.png',
    '64': 'icons/logo64.png',
    '128': 'icons/logo128.png',
  },
}
