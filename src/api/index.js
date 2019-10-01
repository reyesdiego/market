import { remove, find } from "lodash";

export const post = description => {
  return new Promise((resolve, reject) => {
    try {
      const list = JSON.parse(localStorage.getItem("list")) || [];

      const itemExists = find(list, item => item.description === description);
      if (!itemExists) {
        list.push({ description: description, id: Math.random() });
      }
      localStorage.setItem("list", JSON.stringify(list));

      setTimeout(() => resolve(list), 1100);
    } catch (err) {
      reject(err);
    }
  });
};

export const get = () => {
  return new Promise((resolve, reject) => {
    try {
      const list = JSON.parse(localStorage.getItem("list") || "[]");
      setTimeout(() => resolve(list), 1100);
    } catch (err) {
      reject(err);
    }
  });
};

export const getById = id => {
  return new Promise((resolve, reject) => {
    try {
      const list = JSON.parse(localStorage.getItem("list"));
      remove(list, item => item.id === id);
      localStorage.setItem("list", JSON.stringify(list));
      setTimeout(() => resolve(list), 1100);
    } catch (err) {
      reject(err);
    }
  });
};
