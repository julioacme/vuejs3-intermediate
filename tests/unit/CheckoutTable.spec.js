import { shallowMount } from '@vue/test-utils';
import CheckoutTable from '@/components/CheckoutTable.vue';

const itemsInCartById = {
  1: {
    id: 'first item',
    quantity: 4,
    price: 100,
  },
  2: {
    id: 'second item',
    quantity: 1,
    price: 50,
  },
};

describe('CheckoutTable.vue', () => {
  fit('renders grand total correctly', () => {
    const wrapper = shallowMount(CheckoutTable, {
      propsData: {
        itemsInCartById,
      },
    });
    const totalNode = wrapper.find('[data-test="grandTotal"]');

    expect(totalNode.text()).toBe('450');
  });

  it('emits removeItemFromCart when deleteButton is clicked', () => {
    const wrapper = shallowMount(CheckoutTable, {
      propsData: {
        itemsInCartById,
      },
    });
    const deleteButton = wrapper.find('[data-test="deleteButton"]');

    deleteButton.trigger('click');
    expect(wrapper.emitted().removeItemFromCart.length).toBe(1);
  });
});
