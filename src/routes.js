import compHome from './components/Home.vue'
import compCustomer from './components/Customer/Customer.vue'
import compCustomerEdit from './components/Customer/CustomerEdit.vue'
import compCustomerDetail from './components/Customer/CustomerDetail.vue'
import compCustomerStart from './components/Customer/CustomerStart.vue'

export const routes = [
    {
        path: '',
        component: compHome,
        name: 'home'
    },
    {
        path: '/customer',
        component: compCustomer,
        children: [
            {
                path: '',
                component: compCustomerStart
            },
            {
                path: ':id',
                component: compCustomerDetail
            },
            {
                path: ':id/edit',
                component: compCustomerEdit,
                name: 'customerEdit'
            },
        ]
    },
    {
        path: '*',
        component: compHome
    }
];