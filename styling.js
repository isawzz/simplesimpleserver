			//styles
			function styling() {
				let dMain = mBy('dMain');
				let dTitle = mBy('dTitle');
				let dChat = mBy('dChat');

				mStyleX(dTitle, {paleft: 20});
				return;
				let styles = {bg: 'random'};
				for (const d of [dMain, dTitle, dChat]) {
					mStyleX(d, styles);
				}
				return;

				mStyleX(dTitle, {display: 'inline-block', align: 'center', bg: 'random'});
				mStyleX(dChat, {display: 'inline-block', align: 'center', bg: 'random'});
				mCenterFlex(dMain);
			}
			//styling();
