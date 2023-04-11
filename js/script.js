const { createApp } = Vue;

createApp({
  data() {
    return {
      email: [],
    };
  },
  mounted() {
    for (let i = 0; i < 10; i++) {
      axios
        .get("https://flynn.boolean.careers/exercises/api/random/mail")
        .then((resp) => {
          console.log(resp);
          const generateEmail = resp.data.response;

          this.email.push(generateEmail);
        });
    }
  },
}).mount("#app");
