// chat-library.js

class RealTimeChat {
    constructor() {
      this.users = [];
      this.messages = [];
    }
  
    addUser(username) {
      if (!this.users.includes(username)) {
        this.users.push(username);
        return true;
      }
      return false;
    }
  
    removeUser(username) {
      const index = this.users.indexOf(username);
      if (index !== -1) {
        this.users.splice(index, 1);
        return true;
      }
      return false;
    }
  
    sendMessage(username, message) {
      const timestamp = new Date();
      this.messages.push({ username, message, timestamp });
    }
  
    getChatHistory() {
      return this.messages;
    }
  
    getUsers() {
      return this.users;
    }
  }
  
  module.exports = RealTimeChat;