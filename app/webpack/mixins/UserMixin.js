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
                tUserId = +tEl.Id;
            }         
            return tUserId;
        },
        GetCurrentUserIndex(pCurrentUserId) {
            return this.$store.getters.GetUsers.findIndex(function(pEl) {
                return pEl.Id === pCurrentUserId;
            });
        },
        GetProductOnCartIndex(pCurrentUserIndex, pProductId) {
            return this.$store.getters.GetUsers[pCurrentUserIndex].ProductsOnCart.findIndex(function(pEl) {
                return pEl.Id === pProductId;
            });
        },
        AddUser(pObjData) {
            const that = this;
            return this.AddUserToDatabse(pObjData).then(function() {
                that.$store.dispatch('AddUser', pObjData);
            });
        },
        AddUserToDatabse(pObjData) {
            return localforage.getItem('AppData').then(function(pAppData) {
                pAppData.Users.push(pObjData);
                return localforage.setItem('AppData', pAppData);
              });
        },
        SaveLoginDetails(pId) {
            const that = this;
            const tLoginDetails = {
                UserId: pId
            };
            return this.SaveLoginDetailsToDatabse(tLoginDetails).then(function() {
                that.$store.dispatch('SetUserLoginDetails', tLoginDetails);
            });
        },
        SaveLoginDetailsToDatabse(pObj) {
            return localforage.getItem('AppData').then(function(pAppData) {
                pAppData.LoginDetails = pObj;
                return localforage.setItem('AppData', pAppData);
            });
        },
        DeleteLoginDetails() {
            const that = this;
            return this.DeleteLoginDetailsFromDatabase().then(function() {
                that.$store.dispatch('DeleteUserLoginDetails');
            });
        },
        DeleteLoginDetailsFromDatabase() {
            return localforage.getItem('AppData').then(function(pAppData) {
                delete pAppData.LoginDetails;
                return localforage.setItem('AppData', pAppData);
            });
        },
        DeleteAllData() {
            const that = this;
            return this.DeleteAllDataFromDatabase().then(function() {
                that.$store.dispatch('DeleteAllData');
            });
        },
        DeleteAllDataFromDatabase() {
            return localforage.clear();
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
        }
    }
};