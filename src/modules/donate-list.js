import {getTodayDateFormat} from '../core/utils/data'
import {objSetting as obj} from '../core/constants/settings'

export class DonateList{

  #donatesContainer
  constructor(donates) {
    this.donates = donates;
    this.#donatesContainer = document.createElement('div');
    this.#donatesContainer.className = 'donates-container';
  }

  updateDonates(updatedDonates = []){
      const donatesContainer = document.querySelector('.donates-container__donates');
      donatesContainer.innerHTML = '';
      updatedDonates.forEach((item) => {
        donatesContainer.innerHTML += `
          <div class="donate-item">${getTodayDateFormat(item.date)} - <b>${item.amount}${obj.currency}</b></div>
     `
    })

  };

  render() {
    const titleDonatContainer = document.createElement('h2');
    titleDonatContainer.className = 'donates-container__title';
    titleDonatContainer.textContent = 'Список донатов';

    const listDonatContainer = document.createElement('div');
    listDonatContainer.className = 'donates-container__donates';

   this.donates.forEach((item) => {
     listDonatContainer.innerHTML += `
        <div class="donate-item">${getTodayDateFormat(item.date)} - <b>${item.amount}${obj.currency}</b></div>
     `
    })

    this.#donatesContainer.append(titleDonatContainer, listDonatContainer)
    return this.#donatesContainer


  }
}

