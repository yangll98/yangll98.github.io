(() => {
  'use strict';
  const root = document.documentElement;
  const languageButton = document.getElementById('language-toggle');
  const copyStatus = document.getElementById('copy-status');
  let language = 'zh';
  let statusTimer;
  const readPreference = key => { try { return localStorage.getItem(key); } catch { return null; } };
  const savePreference = (key, value) => { try { localStorage.setItem(key, value); } catch { /* Preferences remain session-local. */ } };

  function setLanguage(next) {
    language = next;
    root.lang = next === 'zh' ? 'zh-CN' : 'en';
    document.querySelectorAll('[data-zh][data-en]').forEach(element => {
      element.textContent = element.dataset[next];
    });
    document.querySelectorAll('[data-label-zh]').forEach(element => {
      element.setAttribute('aria-label', element.dataset[next === 'zh' ? 'labelZh' : 'labelEn']);
    });
    languageButton.textContent = next === 'zh' ? 'English' : '中文';
    languageButton.setAttribute('aria-label', next === 'zh' ? 'Switch to English' : '切换为中文');
    document.title = next === 'zh' ? '杨莉莉 · Lili Yang | NPU 软件开发工程师' : 'Lili Yang | NPU Software Engineer';
    document.querySelector('meta[name="description"]').content = next === 'zh'
      ? '杨莉莉的个人主页。专注 NPU 软件开发、AI 编译器后端、算子适配、存储优化与大模型部署。'
      : 'Lili Yang — NPU software engineer working on AI compiler backends, operator adaptation, memory optimization and model deployment.';
    copyStatus.textContent = '';
    savePreference('lili-language', next);
  }

  setLanguage(readPreference('lili-language') === 'en' ? 'en' : 'zh');
  languageButton.addEventListener('click', () => setLanguage(language === 'zh' ? 'en' : 'zh'));
  document.getElementById('year').textContent = new Date().getFullYear();
  document.getElementById('copy-email').addEventListener('click', async () => {
    clearTimeout(statusTimer);
    try {
      await navigator.clipboard.writeText('lilyyang1214@163.com');
      copyStatus.textContent = language === 'zh' ? '邮箱已复制。' : 'Email address copied.';
    } catch {
      copyStatus.textContent = language === 'zh' ? '请选中并复制上方邮箱，或点击邮箱发送邮件。' : 'Please select the email above to copy it, or click it to send a message.';
    }
    statusTimer = setTimeout(() => { copyStatus.textContent = ''; }, 7000);
  });
})();
