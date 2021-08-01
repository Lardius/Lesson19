export class DonateForm{
  #DonateForm
  constructor() {

    this.totalAmount = 0;
    this.#DonateForm = document.createElement('form');
    this.#DonateForm.className = 'donate-form';
  }

  updateTotalAmount(newAmount) {
    const totalAmount = document.querySelector('#total-amount');
    totalAmount.textContent = newAmount;
  }
  render(){
    const totalAmount = document.createElement('h1');
    totalAmount.id = 'total-amount';
    totalAmount.textContent = `${this.totalAmount}$`;

    const labelDonateForm = document.createElement('label');
    labelDonateForm.className = 'donate-form__input-label';
    labelDonateForm.textContent = 'Введите сумму в $';

    const inputDonateForm = document.createElement('input');
    inputDonateForm.className = 'donate-form__donate-input';
    inputDonateForm.name = 'amount';
    inputDonateForm.type = 'number';
    inputDonateForm.max = '100'
    inputDonateForm.min =  '0';
    inputDonateForm.setAttribute('required', "");

    labelDonateForm.append(inputDonateForm);

    const buttonDonateForm = document.createElement('button');
    buttonDonateForm.className = 'donate-form__submit-button';
    buttonDonateForm.type = 'submit';
    buttonDonateForm.textContent = 'Задонатить';

    this.#DonateForm.append(totalAmount, labelDonateForm, buttonDonateForm)

    return this.#DonateForm;
  }
}