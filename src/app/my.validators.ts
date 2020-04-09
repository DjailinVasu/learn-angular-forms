import { FormControl } from '@angular/forms';

export class MyValidators {
  static restrictedEmails(control: FormControl): {[key: string]: boolean} {
    if(['d@m.ru', 'dj@g.ru'].includes(control.value)) {
      return {
        restrictedEmail: true
      }
    }

    return null
  }
}
