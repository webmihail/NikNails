export const localStorageUtil = {
  setStorage: (key: string, date: any) => {
    localStorage.setItem(key, JSON.stringify(date));
  },

  getStorage: (key: string) => {
    const data = localStorage.getItem(key);
    if (data) return JSON.parse(data);
  },

  clearStorage: () => {
    localStorage.clear();
  },
};
