import { DonateForm } from './donate-form';
import  { DonateList } from './donate-list';

export default class App{
  #donateForm
  #donatList
  constructor() {
    this.state = {
      donates: [
          { amount: 4, date: new Date() },
  { amount: 20, date: new Date() },
  { amount: 3, date: new Date() },
  { amount: 1, date: new Date() }],
      totalAmount: 0,
    }
    this.#donateForm = new DonateForm();
    this.#donatList = new DonateList(this.state.donates);
  }

  createNewDonate(newDonate) {
      this.state.donates = newDonate;
      this.state.totalAmount = newDonate.reduce((acc, item) => {
        return (acc + item.amount)
      }, 0)
      this.#donateForm.updateTotalAmount(`${this.state.totalAmount}$`)
      this.#donatList.updateDonates(this.state.donates)
  }


  run() {
    const donateFormHTML = this.#donateForm.render();
    const donateItem = this.#donatList.render();
    document.body.append(donateFormHTML)
    document.body.append(donateItem)



  }
}

// const mockDonates = [
//   { amount: 4, date: new Date() },
//   { amount: 20, date: new Date() },
//   { amount: 3, date: new Date() },
//   { amount: 1, date: new Date() },
// ];
//
// const app = new App()
// app.createNewDonate(mockDonates)




