<template>
    <div>
      <button @click="addUser">Add User</button>
  
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Preferred Language</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(user, index) in users" :key="index">
            <td contenteditable="true" @input="editName(index, $event.target.textContent)">
              {{ user.name }}
            </td>
            <td contenteditable="true" @input="editAge(index, $event.target.textContent)">
              {{ user.age }}
            </td>
            <td>
              <select v-model="users[index].language">
                <option v-for="lang in availableLanguages" :value="lang">{{ lang }}</option>
              </select>
            </td>
            <td>
              <button @click="deleteUser(index)">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        users: [
          { name: 'John Doe', age: 30, language: 'English' },
          { name: 'Jane Doe', age: 25, language: 'Spanish' }
        ],
        availableLanguages: ['English', 'Spanish', 'French', 'German', 'Italian']
      };
    },
    methods: {
      addUser() {
        this.users.push({ name: '', age: '', language: this.availableLanguages[0] }); // Default to first language
      },
      editName(index, newName) {
        this.users[index].name = newName;
      },
      editAge(index, newAge) {
        this.users[index].age = newAge;
      },
      deleteUser(index) {
        this.users.splice(index, 1);
      }
    }
  };
  </script>