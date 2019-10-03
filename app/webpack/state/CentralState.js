export default new Vuex.Store({
    state: {
        PageDisplay: 'Login',
        ProductsInfoOnCart: [],
        ProductsIndex: {},
        Products: [],
        Users: [],
        LoginDetails: undefined
    },
    getters: {
        GetPageDisplay(pState) {
            return pState.PageDisplay;
        },
        GetProductsInfoOnCart(pState) {
            return pState.ProductsInfoOnCart;
        },
        GetProductsIndex(pState) {
            return pState.ProductsIndex;
        },
        GetProducts(pState) {
            return pState.Products;
        },
        GetUsers(pState) {
            return pState.Users;
        },
        GetUserLoginDetails(pState) {
            return pState.LoginDetails;
        }
    },
    mutations: {
        AddPropertyProductsIndex (pState, pPayload) {
            pState.ProductsIndex = Object.assign({}, pState.ProductsIndex, {
                [pPayload.Property]: pPayload.Value
            });
        },
        SetPageDisplay (pState, pPayload) {
            pState.PageDisplay = pPayload;
        },
        SetInitialProducts(pState, pPayload) {
            pPayload.forEach(function(pEl) {
                pState.Products.push(pEl);
            });
        },
        SetInitialUsers(pState, pPayload) {
            pPayload.forEach(function(pEl) {
                pState.Users.push(pEl);
            });
        },
        AddUser(pState, pPayload) {
            pState.Users.push(pPayload);
        },
        AddProduct(pState, pPayload) {
            pState.Products.push(pPayload);
        },
        SetUserLoginDetails(pState, pPayload) {
            pState.LoginDetails = Object.assign({}, pState.LoginDetails, pPayload);
        },
        DeleteUserLoginDetails(pState) {
            Vue.delete(pState, 'LoginDetails');
        },
        AddCartProductUser(pState, pPayload) {
            const tUserIndex = pPayload.User.Index;
            const tProductOnCartIndex = pPayload.User.ProductOnCartIndex;
            if (tProductOnCartIndex > -1) {
                pState.Users[tUserIndex].ProductsOnCart[tProductOnCartIndex] = Object.assign({}, pState.Users[tUserIndex].ProductsOnCart[tProductOnCartIndex], pPayload.Product);
            } else {
                pState.Users[tUserIndex].ProductsOnCart.push(pPayload.Product);
            }
        },
        DeleteAllData(pState) {
            this.commit('ResetPageDisplay');
            this.commit('ResetProductsInfoOnCart');
            this.commit('ResetProductsIndex');
            this.commit('ResetProducts');
            this.commit('ResetUsers');
            this.commit('DeleteUserLoginDetails');
        },
        ResetPageDisplay(pState) {
            pState.PageDisplay = 'Login';
        },
        ResetProductsInfoOnCart(pState) {
            pState.ProductsInfoOnCart.length = 0;
        },
        ResetProductsIndex(pState) {
            const tProductsIndex = pState.ProductsIndex;
            Object.keys(tProductsIndex).forEach(function(pEl) {
                Vue.delete(tProductsIndex, pEl);
            });
        },
        ResetProducts(pState) {
            pState.Products.length = 0;
        },
        ResetUsers(pState) {
            pState.Users.length = 0;
        }
    },
    actions: {
        AddPropertyProductsIndex (pContext, pPayload) {
            pContext.commit('AddPropertyProductsIndex', pPayload);
        },
        SetPageDisplay (pContext, pPayload) {
            pContext.commit('SetPageDisplay', pPayload);
        },
        SetInitialProducts(pContext, pPayload) {
            pContext.commit('SetInitialProducts', pPayload);
        },
        SetInitialUsers(pContext, pPayload) {
            pContext.commit('SetInitialUsers', pPayload);
        },
        AddUser(pContext, pPayload) {
            pContext.commit('AddUser', pPayload);
        },
        AddProduct(pContext, pPayload) {
            pContext.commit('AddProduct', pPayload);
        },
        SetUserLoginDetails(pContext, pPayload) {
            pContext.commit('SetUserLoginDetails', pPayload);
        },
        DeleteUserLoginDetails(pContext) {
            pContext.commit('DeleteUserLoginDetails');
        },
        AddCartProductUser(pContext, pPayload) {
            pContext.commit('AddCartProductUser', pPayload);
        },
        DeleteAllData(pContext) {
            pContext.commit('DeleteAllData');
        }
    }
});