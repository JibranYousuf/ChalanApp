import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { PaymentPage } from '../payment/payment';
import { UserProvider } from '../../providers/user/user';
import { ProfilePage } from '../profile/profile';
import { FormBuilder, FormGroup, Validators ,AbstractControl} from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-add-challan',
  templateUrl: 'add-challan.html',
})
export class AddChallanPage {

  challanForm: FormGroup;
  cnic: any;
  amount: AbstractControl;
  challanType: AbstractControl;
  challanDateCreated: AbstractControl;
  challanDatePaid: AbstractControl;
  data: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public alertCtrl: AlertController, 
    private userProvider: UserProvider,
    public formBuilder: FormBuilder
  ) {
    this.cnic = this.navParams.get('cnic');
    this.createChallanForm();
  }

  createChallanForm(){
    this.challanForm = this.formBuilder.group({
      challanType:['', Validators.required],
      challanDateCreated:['',Validators.required],
      amount:['',Validators.required],
      challanDatePaid:['']
    });
    
    this.challanType = this.challanForm.controls['challanType'];
    this.challanDateCreated = this.challanForm.controls['challanDateCreated'];
    this.challanDatePaid = this.challanForm.controls['challanDatePaid']
    this.amount = this.challanForm.controls['amount']
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddChallanPage');
  }
  onAddNewChallan() {
    const challan = {
      challanType: this.challanForm.value.challanType,
      challanDateCreated: this.challanForm.value.challanDateCreated,
      challanDatePaid: this.challanForm.value.challanDatePaid,
      amount: this.challanForm.value.amount
    }

    this.userProvider.newChallan(this.cnic['cnic'], challan).subscribe(data => {
      if (data) {
        this.navCtrl.push(PaymentPage, { newChallanAdded: this.data});
      } else {
        this.navCtrl.push(ProfilePage);
      }
    });
  }
}
