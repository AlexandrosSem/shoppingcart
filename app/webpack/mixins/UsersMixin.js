import UserData from '../Users';
export default {
    computed: {
        GetLastUserId: function() {
            let tMaxId = -Infinity;
            UserData.Users.forEach(function(pEl) {
                const tCurrentId = +pEl.Id;
                if (tCurrentId > tMaxId) {
                    tMaxId = tCurrentId;
                }
            });
            return tMaxId;
        }
    }
};