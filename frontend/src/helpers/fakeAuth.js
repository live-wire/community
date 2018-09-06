const wait = time => new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, time);
  }
);

const login = () => {
  return wait(5000);
}

const logout = () => {
  return wait(3000);
}

export default {
  login,
  logout
};
