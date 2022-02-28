import React from 'react';
import Calculator from '../containers/Calculator';
import {mount, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

describe('Calculator', () => {
  let container;
  beforeEach(() => {
    container = mount(<Calculator/>)
  })

  it('should change running total on number enter', () => {
    const button4 = container.find('#number4');
    const runningTotal = container.find('#running-total');
    button4.simulate('click');
    expect(runningTotal.text()).toEqual('4');
  });

  it('should add 1 to 4 and get 5', () => {
    const runningTotal = container.find('#running-total');
    const button1 = container.find('#number1').simulate('click');
    const plus = container.find('#operator_add').simulate('click');
    const button4 = container.find('#number4').simulate('click');
    const equal = container.find('#operator-equals').simulate('click');
    expect(runningTotal.text()).toEqual('5');
  });

  it('should subtract 4 from 7 and get 3', () => {
    const runningTotal = container.find('#running-total');
    const button7 = container.find('#number7').simulate('click');
    const subtract = container.find('#operator-subtract').simulate('click');
    const button4 = container.find('#number4').simulate('click');
    const equal = container.find('#operator-equals').simulate('click');
    expect(runningTotal.text()).toEqual('3');
  })

  it('should be able to multiply 3 by 5 and get 15', () => {
    const runningTotal = container.find('#running-total');
    const button3 = container.find('#number3').simulate('click');
    const multiply = container.find('#operator-multiply').simulate('click');
    const button5 = container.find('#number5').simulate('click');
    const equal = container.find('#operator-equals').simulate('click');
    expect(runningTotal.text()).toEqual('15');
  })

  it('should be able to divide 21 by 7 and get 3', () => {
    const runningTotal = container.find('#running-total');
    const button2 = container.find('#number2').simulate('click');
    const button1 = container.find('#number1').simulate('click');
    const divide = container.find('#operator-divide').simulate('click');
    const button7 = container.find('#number7').simulate('click');
    const equal = container.find('#operator-equals').simulate('click');
    expect(runningTotal.text()).toEqual('3');
  })

  it('should concatenate multiple number button clicks', () => {
    const runningTotal = container.find('#running-total');
    const button1 = container.find('#number1').simulate('click');
    const button2 = container.find('#number2').simulate('click');
    const button3 = container.find('#number3').simulate('click');
    expect(runningTotal.text()).toEqual('123')
  })

  it('should be able to chain multiple operations together', () => {
    const runningTotal = container.find('#running-total');
    const button1 = container.find('#number1').simulate('click');
    const multiply = container.find('#operator-multiply').simulate('click');
    const button2 = container.find('#number2').simulate('click');
    const plus = container.find('#operator_add').simulate('click');
    const button3 = container.find('#number3').simulate('click');
    const divide = container.find('#operator-divide').simulate('click');
    const button5 = container.find('#number5').simulate('click');
    const equal = container.find('#operator-equals').simulate('click');
    expect(runningTotal.text()).toEqual('1')
  })

})
