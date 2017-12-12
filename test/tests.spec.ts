import {SafeHtmlPipe} from "../src/app/Pipe/SafeHtmlPipe";
import {SafeUrlPipe} from "../src/app/Pipe/SafeUrlPipe";

describe('Module: Safe', () => {
    describe('Class: SafeHtml', () => {
        let subject: SafeHtmlPipe;
        let calledBypass = false;
        beforeEach(() => {
            calledBypass = false;
            subject      = new SafeHtmlPipe(<any>{
                bypassSecurityTrustHtml: (content: string) => {
                    calledBypass = true;
                }
            });
        });
        it('should call the sanitizer when transform is called', () => {
            subject.transform('something');
            expect(calledBypass).toBeTruthy();
        })
    });
    describe('Class: SafeUrl', () => {
        let subject: SafeUrlPipe;
        let calledBypass = false;
        beforeEach(() => {
            calledBypass = false;
            subject      = new SafeUrlPipe(<any>{
                bypassSecurityTrustResourceUrl: (content: string) => {
                    calledBypass = true;
                }
            });
        });

        it('should call the sanitizer when transform is called', () => {
            subject.transform('something');
            expect(calledBypass).toBeTruthy();
        })
    });
});
