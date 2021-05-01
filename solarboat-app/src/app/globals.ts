import { Injectable } from '@angular/core';

@Injectable()
export class Globals {
        BASE_URL = 'http://localhost:8080';
       // BASE_URL = 'https://solarboatteam.hu';

        formatDate(date) {
                const mm = date.getMonth() + 1; // getMonth() is zero-based
                const dd = date.getDate();

                const resultDate = [date.getFullYear(),
                        (mm > 9 ? '' : '0') + mm,
                        (dd > 9 ? '' : '0') + dd
                ].join('-');

                return resultDate;
        }
}
