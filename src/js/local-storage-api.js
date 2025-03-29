const STORAGE_KEY = 'cards';

export function getStorageData() {
  const data = localStorage.getItem(STORAGE_KEY);
  if (data) {
    return JSON.parse(data);
  } else {
    return [];
  }
}

export function writeStorageData(data) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}
