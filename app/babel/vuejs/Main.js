export default {
    name: 'MainComp',
    template: `<div id="main" class="container">
        <slot name="header"></slot>
    </div>`,
    data() {
        return {};
    }
};