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
        GetUserIdByEmail(pEmail) {
            let tUserId = 0;
            const tEl = this.$store.getters.GetUsers.find(function(pEl) {
                return pEl.Email === pEmail;
            });
            if (tEl) {
                tUserId = tEl.Id;
            }         
            return tUserId;
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
        ValidateUserCredentials(pEmail, pPassword) {
            const tIndex = this.$store.getters.GetUsers.findIndex(function(pEl) {
                return ((pEl.Email === pEmail) && (pEl.Password === pPassword));
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
        },
        SaveLoginDetailsToDatabse(pId) {
            return localforage.getItem('AppData').then(function(pAppData) {
                pAppData.LoginDetails = {
                    UserId: pId
                };
                return localforage.setItem('AppData', pAppData);
              })
              .then(function() {

              });
        },
        DeleteLoginDetailsFromDatabase() {
            return localforage.getItem('AppData').then(function(pAppData) {
                delete pAppData.LoginDetails;
                return localforage.setItem('AppData', pAppData);
              })
              .then(function() {

              });
        }
    }
};