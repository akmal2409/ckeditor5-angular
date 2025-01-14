import { Component, ElementRef, ViewChild } from '@angular/core';
import { CKEditorComponent } from '../../ckeditor/ckeditor.component';
import AngularEditor from '../../../ckeditor/build/ckeditor';
import type { ContextWatchdog } from '@ckeditor/ckeditor5-watchdog';

@Component( {
	selector: 'watchdog-demo',
	templateUrl: './watchdog-demo.html',
	styleUrls: [ './watchdog-demo.css' ]
} )
export class WatchdogDemoComponent {
	public Editor = AngularEditor;

	@ViewChild( CKEditorComponent ) public ckeditor?: ElementRef<CKEditorComponent>;

	public config: any;
	public watchdog?: ContextWatchdog;
	public ready = false;

	public isDisabled = false;

	public onReady( editor: AngularEditor ): void {
		console.log( editor );
	}

	public ngOnInit(): void {
		const contextConfig: any = {
			foo: 'bar'
		};

		this.config = {
			collaboration: {
				channelId: 'foobar-baz'
			}
		};

		this.watchdog = new AngularEditor.ContextWatchdog( AngularEditor.Context );

		this.watchdog.create( contextConfig )
			.then( () => {
				this.ready = true;
			} );
	}

	public toggle(): void {
		this.isDisabled = !this.isDisabled;
	}
}
