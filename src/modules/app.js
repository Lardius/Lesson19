import { DonateForm } from './donate-form';
import  { DonateList } from './donate-list';
import {objSetting as obj} from '../core/constants/settings'
import {calculateSumOfNumbers as Calc} from '../core/utils/index'

export default class App{
  #donateForm
  #donatList
  constructor() {
    this.state = {
      donates: [],
      totalAmount: 0,
    }
    this.#donateForm = new DonateForm(this.createNewDonate.bind(this));
    this.#donatList = new DonateList(this.state.donates);
  }

  createNewDonate(newDonate) {
      const amounts = []
      this.state.donates.push(newDonate);
      // this.state.totalAmount = this.state.donates.reduce((acc, item) => {
      //   return (acc + +item.amount)
      // }, 0)
      this.state.donates.forEach((item) => {
        amounts.push(+item.amount)})

      this.state.totalAmount = Calc(amounts)
      this.#donateForm.updateTotalAmount(`${this.state.totalAmount}${obj.currency}`)
      this.#donatList.updateDonates(this.state.donates)
  }


  run() {
    const donateFormHTML = this.#donateForm.render();
    const donateItem = this.#donatList.render();
    document.body.append(donateFormHTML)
    document.body.append(donateItem)



  }
}





