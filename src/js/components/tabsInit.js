import 'Plugins/tabsPlugin';

export default function initTabs() {
	jQuery('.tabset').tabset({
		tabLinks: 'a',
		defaultTab: true
	});
}