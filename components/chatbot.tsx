"use client"

import { useEffect } from 'react';

const ChatBot = () => {
  useEffect(() => {
    const cssId = 'n8n-chat-style';
    if (!document.getElementById(cssId)) {
      const link = document.createElement('link');
      link.id = cssId;
      link.rel = 'stylesheet';
      link.href = 'https://cdn.jsdelivr.net/npm/@n8n/chat/dist/style.css';
      document.head.appendChild(link);
    }

    const root = document.documentElement;
    root.style.setProperty('--chat--color-primary', '#0000FF');
    root.style.setProperty('--chat--header--background', '#0000FF');
    root.style.setProperty('--chat--input--text-color', '#000000');

    const scriptId = 'n8n-chat-script';
    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.type = 'module';
      script.innerHTML = `
        import { createChat } from 'https://cdn.jsdelivr.net/npm/@n8n/chat/dist/chat.bundle.es.js';

        createChat({
          webhookUrl: 'https://n8n.srv829823.hstgr.cloud/webhook/b2a2f8eb-96f0-4d7a-b90f-f24adbaa4f6c/chat',
          webhookConfig: { method: 'POST', headers: {} },
          target: '#n8n-chat',
          mode: 'window',
          chatInputKey: 'chatInput',
          chatSessionKey: 'sessionId',
          metadata: {},
          showWelcomeScreen: false,
          defaultLanguage: 'en',
          initialMessages: [
            'Hi there! 👋',
            'I am Techy! How can I assist you today?'
          ],
          i18n: {
            en: {
              title: 'Hi there! 👋',
              subtitle: "Start a chat. We're here to help you 24/7.",
              footer: '',
              getStarted: 'New Conversation',
              inputPlaceholder: 'Type your question..'
            }
          }
        });
      `;
      document.body.appendChild(script);
    }
  }, []);

  return <div id="n8n-chat" />;
};

export default ChatBot;