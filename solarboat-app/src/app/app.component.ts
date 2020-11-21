import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {TokenStorageService} from './auth/token-storage.service';
import {TranslateService} from '@ngx-translate/core';
import {NavigationEnd, Router} from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
    title = 'solarboat-app';
    public roles: string[];
    public authority: string;
    // scrollY$: Observable<number>;

constructor(private router: Router, private tokenStorage: TokenStorageService,
            public translate: TranslateService) {
    // this.scrollY$ = this.windowScrollService.scrollY$;
    this.router.events.subscribe(event => {
        if (event instanceof NavigationEnd) {
            (window as any).ga('set', 'page', event.urlAfterRedirects);
            (window as any).ga('send', 'pageview');
        }
    });
    translate.addLangs(['en', 'hu']);
    translate.setDefaultLang('en');
    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|hu/) ? browserLang : 'en');
}

    ngOnInit() {
        if (this.tokenStorage.getToken()) {
            this.roles = this.tokenStorage.getAuthorities();
            this.roles.every((role) => {
                if (role === 'ROLE_ADMIN') {
                    this.authority = 'admin';
                    return false;
                }
                this.authority = 'user';
                return true;
            });
        }

    }
    // @HostListener('window:scroll')
    // onScroll(): void {
    //     console.log('scroll event');
    //     // this.scrollHostlistener.windowYAxis = this.getYPosition();
    //     // console.log(this.scrollHostlistener.windowYAxis);
    //     this.windowScrollService.scrollY.next(this.getYPosition());
    //     // console.log(this.windowScrollService.scrollY);
    // }
    // getYPosition(): number {
    //     return window.scrollY;
    // }

    // onWindowScroll($event: any) {
    //         // this.scrollHostlistener.windowYAxis = this.getYPosition();
    //         // console.log(this.scrollHostlistener.windowYAxis);
    //     this.windowScrollService.scrollY.next(this.getYPosition());
    //         // console.log(this.windowScrollService.scrollY);
    // }
}
