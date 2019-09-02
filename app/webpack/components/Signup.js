import UserMixin from '../mixins/UserMixin';
export default {
    mixins: [UserMixin], // Mixin
    template: `<div>
        <div class="field">
            <label class="label">First Name</label>
            <div class="control">
                <input class="input" type="text" v-model="FirstName" placeholder="First Name">
            </div>
        </div>
        <div class="field">
            <label class="label">Last Name</label>
            <div class="control">
                <input class="input" type="text" v-model="LastName" placeholder="Last Name">
            </div>
        </div>
        <div class="field">
            <label class="label">Email</label>
            <div class="control">
                <input class="input" type="email" v-model="Email" placeholder="Email">
            </div>
        </div>
        <div class="field">
            <label class="label">Password</label>
            <div class="control">
                <input class="input" type="password" v-model="Password" placeholder="Password">
            </div>
        </div>
        <div class="field">
            <label class="label">Address</label>
            <div class="control">
                <input class="input" type="text" v-model="Address" placeholder="Address">
            </div>
        </div>
        <div class="field">
            <label class="label">Gender</label>
            <div class="control">
                <div class="select">
                    <select v-model="Gender">
                        <option value="male">Male</option>
                        <option value="female">Female</option>
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
            Users: this.$store.getters.GetUsers,
            FirstName: '',
            LastName: '',
            Address: '',
            Email: '',
            Gender: 'male',
            Password: '',
            ProductsOnCart: []
        };
    },
    methods: {
        SignupUser() {
            if (this.IsFormFilledWithData()) {
                const tUserData = {
                    Id: (this.GetLastUserId(this.Users) + 1).toString(), // Its coming from the computed property that merged to this compoment from the mixin
                    Email: this.Email,
                    Gender: this.Gender,
                    FirstName: this.FirstName,
                    LastName: this.LastName,
                    Address: this.Address,
                    Password: this.Password,
                    ProductsOnCart: this.ProductsOnCart
                };
                this.AddUser(this.Users, tUserData);
                this.ClearForm();
            } else {
                alert('All form fields are required.');
            }
        },
        ClearForm() {
            this.FirstName = '';
            this.LastName = '';
            this.Address = '';
            this.Email = '';
            this.Gender = 'male';
            this.Password = '';
        },
        IsFormFilledWithData() {
            let tResult = true;
            if (!this.FirstName.trim()) {
                tResult = false;
            } else if (!this.LastName.trim()) {
                tResult = false;
            } else if (!this.Address.trim()) {
                tResult = false;
            } else  if (!this.Email.trim()) {
                tResult = false;
            } else if (!this.Gender.trim()) {
                tResult = false;
            } else if (!this.Password.trim()) {
                tResult = false;
            }
            return tResult;
        }
    }
};