export default new Vuex.Store({
    state: {
        PageDisplay: 'Products',
        ProductsInfoOnCart: [],
        ProductsIndex: {},
        Products: [],
        Users: []
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
        }
    },
    mutations: {
        AddPropertyProductsIndex (pState, pPayload) {
            pState.ProductsIndex[pPayload.Property] = pPayload.Value;
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
        }
    }
});