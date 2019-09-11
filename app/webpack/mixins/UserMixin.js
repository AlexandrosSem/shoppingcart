export default {
    methods: {
        GetLastUserId() {
            let tMaxId = 0;
            this.$store.getters.GetUsers.forEach(function(pEl) {
                const tCurrentId = +pEl.Id;
                if (tCurrentId > tMaxId) {
                    tMaxId = tCurrentId;
                }
            });
            return tMaxId;
        },
        AddUser(pObjData) {
            this.$store.dispatch('AddUser', pObjData);
            this.AddUserToDatabse(pObjData);
        },
        CheckIfUserAlreadyExists(pEmail) {
            const tIndex = this.$store.getters.GetUsers.findIndex(function(pEl) {
                return pEl.Email === pEmail;
            });         
            return (tIndex > -1);
        },
        AddUserToDatabse(pObjData) {
            return localforage.getItem('AppData').then(function(pAppData) {
                pAppData.Users.push(pObjData);
                return localforage.setItem('AppData', pAppData);
              })
              .then(function() {

              });
        }
    }
};