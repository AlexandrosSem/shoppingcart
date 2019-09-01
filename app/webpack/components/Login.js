export default {
    template: `<div>
        <div class="field">
            <label class="label">Email</label>
            <div class="control">
                <input class="input" type="text" v-model="Email" placeholder="Email">
            </div>
        </div>
        <div class="field">
            <label class="label">Password</label>
            <div class="control">
                <input class="input" type="text" v-model="Password" placeholder="Password">
            </div>
        </div>
        <div class="field is-grouped">
            <div class="control">
                <button class="button is-link" v-on:click="LoginUser()">Login</button>
            </div>
        </div>
    </div>`,
    data () {
        return {
            Users: this.$store.getters.GetUsers,
            Email: '',
            Password: ''
        };
    },
    methods: {
        LoginUser() {
            this.Email = '';
            this.Password = '';
        }
    }
};