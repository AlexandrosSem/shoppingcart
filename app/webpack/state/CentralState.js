import AppData from '../data/AppData';
export default new Vuex.Store({
    state: {
        PageDisplay: 'Products',
        ProductsInfoOnCart: [],
        ProductsIndex: {},
        Products: AppData.Products,
        Users: AppData.Users
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
        }
    },
    actions: {
        AddPropertyProductsIndex (pContext, pPayload) {
            pContext.commit('AddPropertyProductsIndex', pPayload);
        }
    }
});