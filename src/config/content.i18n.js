export const content = {
  en: {
    // Current English content
  },
  fr: {
    navigation: [
      { id: 'home', label: 'Accueil' },
      { id: 'about', label: 'À propos' },
      { id: 'platform', label: 'Plateforme' },
      { id: 'updates', label: 'Mises à jour' },
      { id: 'contact', label: 'Contact' },
    ],
    // ... rest of French content
  },
  zh: {
    navigation: [
      { id: 'home', label: '首页' },
      { id: 'about', label: '关于' },
      { id: 'platform', label: '政纲' },
      { id: 'updates', label: '最新动态' },
      { id: 'contact', label: '联系我们' },
    ],
    // ... rest of Chinese content
  }
}

export const getContent = (language) => {
  return content[language] || content.en
} 