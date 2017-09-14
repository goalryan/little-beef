/**
 * Created by liushaojun on 2017/9/14.
 */
import { LbPage } from './page';
const components = {
    LbPage
};

const install = (Vue) => {
    Object.keys(components).forEach((key) => {
        Vue.component(components[key].name, components[key]);
    });
};

export default { install };

