import { shallowMount } from '@vue/test-utils';
import CheckoutTable from '@/components/CheckoutTable.vue';

const itemsInCart = [
  {
    id: 'first item',
    quantity: 4,
    price: 100,
  },
  {
    id: 'second item',
    quantity: 1,
    price: 50,
  },
];

describe('CheckoutTable.vue', () => {
  it('renders grand total correctly', () => {
    const wrapper = shallowMount(CheckoutTable, {
      propsData: {
        itemsInCart,
      },
    });
    const totalNode = wrapper.find('[data-test="grandTotal"]');

    expect(totalNode.text()).toBe('$450.00');
  });

  it('emits removeItemFromCart when deleteButton is clicked', () => {
    const wrapper = shallowMount(CheckoutTable, {
      propsData: {
        itemsInCart,
      },
    });
    const deleteButton = wrapper.find('[data-test="deleteButton"]');

    deleteButton.trigger('click');
    expect(wrapper.emitted().removeItemFromCart.length).toBe(1);
  });
});
