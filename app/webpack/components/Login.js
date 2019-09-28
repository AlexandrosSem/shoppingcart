import UserMixin from '../mixins/UserMixin';
export default {
    mixins: [UserMixin], // Mixin
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
                <input class="input" type="password" v-model="Password" placeholder="Password">
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
            if (this.ValidateUser(this.Email, this.Password)) {
                const that = this;
                const tUserId = this.GetUserIdByEmail(this.Email).toString();
                this.SaveLoginDetails(tUserId).then(function() {
                    that.ClearForm();
                    that.$store.dispatch('SetPageDisplay', 'Products');
                });
            } else {
                alert('Wrong credentials. Try again!');
            }
        },
        ValidateUser(pEmail, pPassword) {
            return this.ValidateUserCredentials(pEmail, pPassword);
        },
        ClearForm() {
            this.Email = '';
            this.Password = '';
        }
    }
};