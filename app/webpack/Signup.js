export default {
    props: ['params'],
    template: `<div>
        <div class="field">
            <label class="label">First Name</label>
            <div class="control">
                <input class="input" type="text" placeholder="First Name">
            </div>
        </div>
        <div class="field">
            <label class="label">Last Name</label>
            <div class="control">
                <input class="input" type="text" placeholder="Last Name">
            </div>
        </div>
        <div class="field">
            <label class="label">Email</label>
            <div class="control">
                <input class="input" type="email" placeholder="Email" value="">
            <span class="icon is-small is-left">
                <i class="fas fa-envelope"></i>
            </span>
            <span class="icon is-small is-right">
                <i class="fas fa-exclamation-triangle"></i>
            </span>
            </div>
        </div>
        <div class="field">
            <label class="label">Last Name</label>
            <div class="control">
                <input class="input" type="text" placeholder="Text input">
            </div>
        </div>
        <div class="field">
            <label class="label">Subject</label>
            <div class="control">
            <div class="select">
                <select>
                <option>Select dropdown</option>
                <option>With options</option>
                </select>
            </div>
            </div>
        </div>
        <div class="field is-grouped">
            <div class="control">
                <button class="button is-link" v-on:click="SignupUser()">Submit</button>
            </div>
        </div>
    </div>`,
    data () {
        return {
            Users: this.params.Users
        };
    },
    methods: {
        SignupUser() {
            this.Users.push({});
            this.$emit('users-changed', this.Users); // send a custom event back
        }
    }
};