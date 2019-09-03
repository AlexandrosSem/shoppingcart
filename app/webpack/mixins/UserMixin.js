export default {
    methods: {
        GetLastUserId(pArrUsers) {
            let tMaxId = 0;
            pArrUsers.forEach(function(pEl) {
                const tCurrentId = +pEl.Id;
                if (tCurrentId > tMaxId) {
                    tMaxId = tCurrentId;
                }
            });
            return tMaxId;
        },
        AddUser(pArrUsers, pObjData) {
            pArrUsers.push(pObjData);
        },
        CheckIfUserAlreadyExists(pArrUsers, pEmail) {
            const tIndex = pArrUsers.findIndex(function(pEl) {
                return pEl.Email === pEmail;
            });         
            return (tIndex > -1);
        }
    }
};