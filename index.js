import './index.css';
import App from './src/modules/app';



const app = new App();

app.run()
const mockDonates = { amount: 5, date: new Date()};
const mockDonates2 = { amount: 7, date: new Date()};
  // { amount: 100
  //   , date: new Date() },
  // { amount: 3, date: new Date() },
  // { amount: 6, date: new Date() },


app.createNewDonate(mockDonates)
app.createNewDonate(mockDonates)
app.createNewDonate(mockDonates2)