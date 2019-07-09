export default {
    computed: {
        GetLastUserId() {
            let tMaxId = 0;
            this.Users.forEach(function(pEl) {
                const tCurrentId = +pEl.Id;
                if (tCurrentId > tMaxId) {
                    tMaxId = tCurrentId;
                }
            });
            return tMaxId;
        }
    },
    methods: {
        AddUser(pObjData) {
            this.Users.push(pObjData);
        }
    }
};