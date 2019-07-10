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
        }
    }
};