export class Database {
  ref = (path) => {
    if (!this[path]) {
      this[path] = new Reference(path); // eslint-disable-line
    }
    return this[path];
  };
}

export class Reference {
  constructor(path) {
    this.path = path;
    this.snap = { val: () => this._val() };
    this.data = null;
  }

  _val = jest.fn(() => this.data);

  once = jest.fn((param, callback) => {
    const promise = new Promise((resolve, reject) => {
      if (callback) {
        callback(this.snap);
        resolve();
      } else {
        resolve(this.snap);
      }
    });
    RNFirebase.promises.push(promise); // eslint-disable-line
    return promise;
  });

  on = jest.fn((param, callback) => {
    const promise = new Promise((resolve, reject) => {
      if (callback) {
        callback(this.snap);
        resolve();
      } else {
        resolve(this.snap);
      }
    });
    RNFirebase.promises.push(promise); // eslint-disable-line
    return promise;
  });

  off = jest.fn((param, callback) => {
    const promise = Promise.resolve();
    RNFirebase.promises.push(promise); // eslint-disable-line
    return promise;
  });

  update = jest.fn((data) => {
    const promise = Promise.resolve();
    RNFirebase.promises.push(promise); // eslint-disable-line
    return promise;
  });

  remove = jest.fn(() => {
    const promise = Promise.resolve();
    RNFirebase.promises.push(promise); // eslint-disable-line
    return promise;
  });
}

export class MockFirebase {
  constructor() {
    this.database = () => {
      if (!this.databaseInstance) {
        this.databaseInstance = new Database();
      }
      return this.databaseInstance;
    };
    this.config = () => ({
      enableDeveloperMode: jest.fn(),
      setDefaults: jest.fn(),
      fetch: () => (new Promise(resolve => resolve())),
      activateFetched: jest.fn(),
      getKeysByPrefix: jest.fn(),
      getValues: () => (new Promise(resolve => resolve({}))),
    });
    this.auth = jest.fn(() => ({
      signInAnonymously: jest.fn(),
      signInAnonymouslyAndRetrieveData: jest.fn(),
      onAuthStateChanged: jest.fn(),
      signOut: () => (new Promise(resolve => resolve())),
    }));
    this.messaging = jest.fn(() => ({
      getInitialNotification: () => (new Promise(resolve => resolve())),
      onMessage: jest.fn(),
      subscribeToTopic: () => (new Promise(resolve => resolve())),
      unsubscribeFromTopic: () => (new Promise(resolve => resolve())),
    }));
    this.storage = jest.fn();
  }
}

export default class RNFirebase {
  static initializeApp() {
    RNFirebase.firebase = new MockFirebase();
    RNFirebase.promises = [];
    return RNFirebase.firebase;
  }

  static reset() {
    RNFirebase.promises = [];
    RNFirebase.firebase.databaseInstance = null;
  }

  static waitForPromises() {
    return Promise.all(RNFirebase.promises);
  }
}
